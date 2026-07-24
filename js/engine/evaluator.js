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
     * Generate complete truth table for an AST or formula string
     */
    static generateTruthTable(input) {
        const ast = typeof input === 'string' ? LogicParser.parse(input) : input;
        const variables = LogicParser.getVariables(ast);
        const rows = [];
        const numRows = Math.pow(2, variables.length);

        for (let i = 0; i < numRows; i++) {
            const assignment = {};
            // Generate binary truth assignments (reverse order so T appears before F)
            for (let j = 0; j < variables.length; j++) {
                const bit = (i >> (variables.length - 1 - j)) & 1;
                assignment[variables[j]] = bit === 0; // 0 -> True, 1 -> False (Standard truth table convention)
            }

            const result = this.evaluatePropositional(ast, assignment);
            rows.push({
                assignment,
                result
            });
        }

        return {
            variables,
            rows
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
     * Evaluate a First-Order Predicate Logic AST over a finite domain of objects
     * @param {Object} ast - Parsed AST
     * @param {Array<Object>} domain - List of domain items e.g., [{id: 'A', shape: 'square', color: 'red'}, ...]
     * @param {Object} predicates - Map of predicate functions e.g., { Red: (obj) => obj.color === 'red' }
     * @param {Object} varEnv - Current variable assignments mapping bound variable names to domain items
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
                // Must hold for ALL elements in domain
                return domain.every(item => {
                    const newEnv = { ...varEnv, [ast.variable]: item };
                    return this.evaluatePredicate(ast.body, domain, predicates, newEnv);
                });

            case 'Exists':
                // Must hold for AT LEAST ONE element in domain
                return domain.some(item => {
                    const newEnv = { ...varEnv, [ast.variable]: item };
                    return this.evaluatePredicate(ast.body, domain, predicates, newEnv);
                });

            case 'Variable':
                // Boolean constant or bound boolean variable
                if (ast.name === 'True' || ast.name === 'T') return true;
                if (ast.name === 'False' || ast.name === 'F') return false;
                if (typeof varEnv[ast.name] === 'boolean') return varEnv[ast.name];
                throw new Error(`Variable ${ast.name} evaluated in predicate context without predicate wrapper.`);

            default:
                throw new Error(`Invalid AST node type for predicate logic: ${ast.type}`);
        }
    }
}
