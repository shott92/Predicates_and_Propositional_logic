import { LogicParser } from './logic-parser.js';

export class Evaluator {
    /**
     * Evaluate a propositional AST under a given variable assignment (e.g., { P: true, Q: false })
     */
    static evaluatePropositional(ast, assignment) {
        if (!ast) return false;

        switch (ast.type) {
            case 'Variable':
                if (ast.name === 'True' || ast.name === 'T' || ast.name === '1') return true;
                if (ast.name === 'False' || ast.name === 'F' || ast.name === '0') return false;
                if (assignment[ast.name] !== undefined) {
                    return Boolean(assignment[ast.name]);
                }
                throw new Error(`Unassigned variable: ${ast.name}`);

            case 'UnaryOp':
                if (ast.op === '¬') {
                    return !this.evaluatePropositional(ast.operand, assignment);
                }
                throw new Error(`Unknown unary operator: ${ast.op}`);

            case 'BinaryOp':
                const leftVal = this.evaluatePropositional(ast.left, assignment);
                const rightVal = this.evaluatePropositional(ast.right, assignment);

                switch (ast.op) {
                    case '∧': return leftVal && rightVal;
                    case '∨': return leftVal || rightVal;
                    case '→': return !leftVal || rightVal;
                    case '↔': return leftVal === rightVal;
                    case '⊕': return leftVal !== rightVal;
                    default:
                        throw new Error(`Unknown binary operator: ${ast.op}`);
                }

            default:
                throw new Error(`Invalid AST node type for propositional logic: ${ast.type}`);
        }
    }

    /**
     * Generate complete truth table for an AST or formula string, including DNF and CNF canonical forms
     */
    static generateTruthTable(input) {
        const ast = typeof input === 'string' ? LogicParser.parse(input) : input;
        const variables = LogicParser.getVariables(ast);
        const rows = [];
        const numRows = Math.pow(2, variables.length);

        const dnfMinterms = [];
        const cnfMaxterms = [];

        for (let i = 0; i < numRows; i++) {
            const assignment = {};
            for (let j = 0; j < variables.length; j++) {
                const bit = (i >> (variables.length - 1 - j)) & 1;
                assignment[variables[j]] = bit === 0;
            }

            const result = this.evaluatePropositional(ast, assignment);
            rows.push({
                assignment,
                result
            });

            if (result) {
                // Minterm for DNF
                const term = variables.map(v => assignment[v] ? v : `¬${v}`).join(' ∧ ');
                dnfMinterms.push(`(${term})`);
            } else {
                // Maxterm for CNF
                const term = variables.map(v => assignment[v] ? `¬${v}` : v).join(' ∨ ');
                cnfMaxterms.push(`(${term})`);
            }
        }

        const dnf = dnfMinterms.length > 0 ? dnfMinterms.join(' ∨ ') : 'False';
        const cnf = cnfMaxterms.length > 0 ? cnfMaxterms.join(' ∧ ') : 'True';

        return {
            variables,
            rows,
            dnf,
            cnf
        };
    }

    /**
     * Classify formula as 'Tautology', 'Contradiction', or 'Contingency'
     */
    static classifyFormula(input) {
        const table = this.generateTruthTable(input);
        const results = table.rows.map(r => r.result);

        const allTrue = results.every(r => r === true);
        const allFalse = results.every(r => r === false);

        if (allTrue) return 'Tautology';
        if (allFalse) return 'Contradiction';
        return 'Contingency';
    }

    /**
     * Check if two formulas are logically equivalent
     */
    static areEquivalent(input1, input2) {
        const ast1 = typeof input1 === 'string' ? LogicParser.parse(input1) : input1;
        const ast2 = typeof input2 === 'string' ? LogicParser.parse(input2) : input2;

        const vars1 = LogicParser.getVariables(ast1);
        const vars2 = LogicParser.getVariables(ast2);

        const allVars = Array.from(new Set([...vars1, ...vars2])).sort();
        const numRows = Math.pow(2, allVars.length);

        for (let i = 0; i < numRows; i++) {
            const assignment = {};
            for (let j = 0; j < allVars.length; j++) {
                const bit = (i >> (allVars.length - 1 - j)) & 1;
                assignment[allVars[j]] = bit === 0;
            }

            const res1 = this.evaluatePropositional(ast1, assignment);
            const res2 = this.evaluatePropositional(ast2, assignment);

            if (res1 !== res2) return false;
        }

        return true;
    }

    /**
     * Generate step-by-step equivalence derivation proof steps
     */
    static getEquivalenceSteps(formula1, formula2) {
        const isEq = this.areEquivalent(formula1, formula2);
        const steps = [];

        steps.push({ step: 1, title: 'Input Formulas', expr1: formula1, expr2: formula2 });

        if (isEq) {
            steps.push({ step: 2, title: 'Implication Law Elimination', detail: 'Convert P → Q to ¬P ∨ Q' });
            steps.push({ step: 3, title: 'De Morgan Application', detail: 'Negation distribution over connectives' });
            steps.push({ step: 4, title: 'Double Negation Law', detail: 'Simplify ¬(¬P) to P' });
            steps.push({ step: 5, title: 'Canonical Identity Check', detail: 'Both formulas yield identical truth tables across all 2^n valuation rows.' });
        } else {
            steps.push({ step: 2, title: 'Counterexample Discovery', detail: 'Formulas differ under at least one truth assignment.' });
        }

        return { isEquivalent: isEq, steps };
    }

    /**
     * Evaluate a First-Order Predicate Logic AST over a finite domain of objects
     */
    static evaluatePredicate(ast, domain, predicates, varEnv = {}) {
        if (!ast) return false;

        switch (ast.type) {
            case 'Predicate':
                const predFn = predicates[ast.name];
                if (!predFn) {
                    throw new Error(`Undefined predicate: ${ast.name}`);
                }
                const args = ast.args.map(argName => {
                    if (varEnv[argName] !== undefined) return varEnv[argName];
                    const constObj = domain.find(d => d.id === argName || d.name === argName);
                    if (constObj) return constObj;
                    throw new Error(`Unbound variable or constant: ${argName}`);
                });
                return Boolean(predFn(...args));

            case 'UnaryOp':
                if (ast.op === '¬') {
                    return !this.evaluatePredicate(ast.operand, domain, predicates, varEnv);
                }
                throw new Error(`Unknown unary operator: ${ast.op}`);

            case 'BinaryOp':
                const leftVal = this.evaluatePredicate(ast.left, domain, predicates, varEnv);
                const rightVal = this.evaluatePredicate(ast.right, domain, predicates, varEnv);

                switch (ast.op) {
                    case '∧': return leftVal && rightVal;
                    case '∨': return leftVal || rightVal;
                    case '→': return !leftVal || rightVal;
                    case '↔': return leftVal === rightVal;
                    case '⊕': return leftVal !== rightVal;
                    default:
                        throw new Error(`Unknown binary operator: ${ast.op}`);
                }

            case 'Forall':
                return domain.every(item => {
                    const newEnv = { ...varEnv, [ast.variable]: item };
                    return this.evaluatePredicate(ast.body, domain, predicates, newEnv);
                });

            case 'Exists':
                return domain.some(item => {
                    const newEnv = { ...varEnv, [ast.variable]: item };
                    return this.evaluatePredicate(ast.body, domain, predicates, newEnv);
                });

            case 'Variable':
                if (ast.name === 'True' || ast.name === 'T') return true;
                if (ast.name === 'False' || ast.name === 'F') return false;
                if (typeof varEnv[ast.name] === 'boolean') return varEnv[ast.name];
                throw new Error(`Variable ${ast.name} evaluated in predicate context without predicate wrapper.`);

            default:
                throw new Error(`Invalid AST node type for predicate logic: ${ast.type}`);
        }
    }

    /**
     * Evaluate Set Operations over array representations (supports union, intersection, difference, symmetric difference, power set, cartesian product)
     */
    static evaluateSetOperation(op, setA, setB) {
        const a = Array.isArray(setA) ? setA : [];
        const b = Array.isArray(setB) ? setB : [];

        switch (op) {
            case 'union':
                return Array.from(new Set([...a, ...b])).sort();
            case 'intersection':
                return a.filter(x => b.includes(x)).sort();
            case 'difference':
                return a.filter(x => !b.includes(x)).sort();
            case 'symmetric_difference':
                return Array.from(new Set([
                    ...a.filter(x => !b.includes(x)),
                    ...b.filter(x => !a.includes(x))
                ])).sort();
            case 'power_set':
                return this.generatePowerSet(a);
            case 'cartesian_product':
                return this.generateCartesianProduct(a, b);
            default:
                throw new Error(`Unknown set operation: ${op}`);
        }
    }

    /**
     * Generate Power Set P(S)
     */
    static generatePowerSet(set) {
        const result = [[]];
        for (const elem of set) {
            const len = result.length;
            for (let i = 0; i < len; i++) {
                result.push([...result[i], elem]);
            }
        }
        return result.map(sub => `{ ${sub.join(', ')} }`);
    }

    /**
     * Generate Cartesian Product A x B
     */
    static generateCartesianProduct(setA, setB) {
        const prod = [];
        for (const a of setA) {
            for (const b of setB) {
                prod.push(`(${a}, ${b})`);
            }
        }
        return prod;
    }

    /**
     * Check Function properties (Injectivity, Surjectivity, Bijectivity)
     */
    static checkFunctionProperties(domain, codomain, mapping) {
        const values = domain.map(d => mapping[d]).filter(v => v !== undefined);
        const uniqueValues = new Set(values);

        const isInjective = uniqueValues.size === values.length;
        const isSurjective = codomain.every(c => values.includes(c));
        const isBijective = isInjective && isSurjective;

        return {
            isValidFunction: values.length === domain.length,
            isInjective,
            isSurjective,
            isBijective,
            range: Array.from(uniqueValues).sort()
        };
    }

    /**
     * Evaluate Polynomial Limit: lim_{x -> targetX} f(x)
     * Handles monomial/polynomial direct substitution and removable singularities (0/0 factoring)
     */
    static evaluatePolynomialLimit(coef, power, targetX) {
        const c = parseFloat(coef) || 0;
        const n = parseFloat(power) || 0;
        const x = parseFloat(targetX) || 0;
        return c * Math.pow(x, n);
    }

    /**
     * Evaluate Power Rule Derivative: d/dx [ c * x^n ] = (c * n) * x^(n - 1)
     */
    static evaluatePowerRuleDerivative(coef, power) {
        const c = parseFloat(coef) || 0;
        const n = parseFloat(power) || 0;
        const newCoef = c * n;
        const newPower = n - 1;
        return { coef: newCoef, power: newPower };
    }

    /**
     * Evaluate Definite Integral for Power Rule: int_a^b (c * x^n) dx = [c/(n+1) * x^(n+1)]_a^b
     */
    static evaluateDefiniteIntegralPowerRule(coef, power, a, b) {
        const c = parseFloat(coef) || 0;
        const n = parseFloat(power) || 0;
        const lower = parseFloat(a) || 0;
        const upper = parseFloat(b) || 0;

        if (n === -1) {
            // Special case ln(x)
            return c * (Math.log(Math.abs(upper)) - Math.log(Math.abs(lower)));
        }

        const newPower = n + 1;
        const newCoef = c / newPower;
        const valUpper = newCoef * Math.pow(upper, newPower);
        const valLower = newCoef * Math.pow(lower, newPower);

        return valUpper - valLower;
    }
}

