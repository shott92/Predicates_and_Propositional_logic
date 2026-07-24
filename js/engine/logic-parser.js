/**
 * LogicParser - Tokenizer and AST Parser for Propositional and Predicate Logic formulas.
 */

export class LogicParser {
    static TOKEN_TYPES = {
        VARIABLE: 'VARIABLE',
        PREDICATE: 'PREDICATE',
        CONSTANT: 'CONSTANT',
        NOT: 'NOT',
        AND: 'AND',
        OR: 'OR',
        IMPLIES: 'IMPLIES',
        IFF: 'IFF',
        XOR: 'XOR',
        FORALL: 'FORALL',
        EXISTS: 'EXISTS',
        LPAREN: 'LPAREN',
        RPAREN: 'RPAREN',
        COMMA: 'COMMA',
        DOT: 'DOT'
    };

    /**
     * Tokenize raw input string into token stream
     */
    static tokenize(input) {
        const tokens = [];
        let i = 0;
        const s = input.trim();

        while (i < s.length) {
            const char = s[i];

            if (/\s/.test(char)) {
                i++;
                continue;
            }

            // Quantifiers: ∀, \A, forall / ∃, \E, exists
            if (char === '∀' || s.substr(i, 7).toLowerCase() === 'forall ') {
                tokens.push({ type: this.TOKEN_TYPES.FORALL, value: '∀' });
                i += (char === '∀' ? 1 : 7);
                continue;
            }
            if (s.substr(i, 2) === '\\A') {
                tokens.push({ type: this.TOKEN_TYPES.FORALL, value: '∀' });
                i += 2;
                continue;
            }

            if (char === '∃' || s.substr(i, 7).toLowerCase() === 'exists ') {
                tokens.push({ type: this.TOKEN_TYPES.EXISTS, value: '∃' });
                i += (char === '∃' ? 1 : 7);
                continue;
            }
            if (s.substr(i, 2) === '\\E') {
                tokens.push({ type: this.TOKEN_TYPES.EXISTS, value: '∃' });
                i += 2;
                continue;
            }

            // Connectives
            if (char === '¬' || char === '~' || char === '!') {
                tokens.push({ type: this.TOKEN_TYPES.NOT, value: '¬' });
                i++;
                continue;
            }
            if (s.substr(i, 3).toLowerCase() === 'not') {
                tokens.push({ type: this.TOKEN_TYPES.NOT, value: '¬' });
                i += 3;
                continue;
            }

            if (char === '↔' || s.substr(i, 3) === '<->' || s.substr(i, 3) === '<=>') {
                tokens.push({ type: this.TOKEN_TYPES.IFF, value: '↔' });
                i += (char === '↔' ? 1 : 3);
                continue;
            }
            if (s.substr(i, 3).toLowerCase() === 'iff') {
                tokens.push({ type: this.TOKEN_TYPES.IFF, value: '↔' });
                i += 3;
                continue;
            }

            if (char === '→' || s.substr(i, 2) === '->' || s.substr(i, 2) === '=>') {
                tokens.push({ type: this.TOKEN_TYPES.IMPLIES, value: '→' });
                i += (char === '→' ? 1 : 2);
                continue;
            }
            if (s.substr(i, 7).toLowerCase() === 'implies') {
                tokens.push({ type: this.TOKEN_TYPES.IMPLIES, value: '→' });
                i += 7;
                continue;
            }

            if (char === '∧' || s.substr(i, 2) === '/\\' || char === '&') {
                tokens.push({ type: this.TOKEN_TYPES.AND, value: '∧' });
                i += (char === '∧' || char === '&' ? 1 : 2);
                continue;
            }
            if (s.substr(i, 3).toLowerCase() === 'and') {
                tokens.push({ type: this.TOKEN_TYPES.AND, value: '∧' });
                i += 3;
                continue;
            }

            if (char === '∨' || s.substr(i, 2) === '\\/' || char === '|') {
                tokens.push({ type: this.TOKEN_TYPES.OR, value: '∨' });
                i += (char === '∨' || char === '|' ? 1 : 2);
                continue;
            }
            if (s.substr(i, 2).toLowerCase() === 'or') {
                tokens.push({ type: this.TOKEN_TYPES.OR, value: '∨' });
                i += 2;
                continue;
            }

            if (char === '⊕') {
                tokens.push({ type: this.TOKEN_TYPES.XOR, value: '⊕' });
                i++;
                continue;
            }
            if (s.substr(i, 3).toLowerCase() === 'xor') {
                tokens.push({ type: this.TOKEN_TYPES.XOR, value: '⊕' });
                i += 3;
                continue;
            }

            if (char === '(') {
                tokens.push({ type: this.TOKEN_TYPES.LPAREN, value: '(' });
                i++;
                continue;
            }

            if (char === ')') {
                tokens.push({ type: this.TOKEN_TYPES.RPAREN, value: ')' });
                i++;
                continue;
            }

            if (char === ',') {
                tokens.push({ type: this.TOKEN_TYPES.COMMA, value: ',' });
                i++;
                continue;
            }

            if (char === '.') {
                tokens.push({ type: this.TOKEN_TYPES.DOT, value: '.' });
                i++;
                continue;
            }

            // Identifiers: Predicates or Variables (e.g. Red(x), P, Q, x, y, z)
            if (/[a-zA-Z_]/.test(char)) {
                let name = '';
                while (i < s.length && /[a-zA-Z0-9_]/.test(s[i])) {
                    name += s[i];
                    i++;
                }
                tokens.push({ type: this.TOKEN_TYPES.VARIABLE, value: name });
                continue;
            }

            throw new Error(`Unexpected character '${char}' at index ${i}`);
        }

        return tokens;
    }

    /**
     * Parse tokens into AST
     */
    static parse(input) {
        const tokens = typeof input === 'string' ? this.tokenize(input) : input;
        let current = 0;

        function peek() {
            return tokens[current];
        }

        function consume(type) {
            const token = tokens[current];
            if (!token || (type && token.type !== type)) {
                throw new Error(`Expected token ${type} but got ${token ? token.type : 'EOF'}`);
            }
            current++;
            return token;
        }

        function parseQuantifier() {
            const token = peek();
            if (token && (token.type === LogicParser.TOKEN_TYPES.FORALL || token.type === LogicParser.TOKEN_TYPES.EXISTS)) {
                const qType = consume().type;
                const varToken = consume(LogicParser.TOKEN_TYPES.VARIABLE);
                
                // Optional dot
                if (peek() && peek().type === LogicParser.TOKEN_TYPES.DOT) {
                    consume(LogicParser.TOKEN_TYPES.DOT);
                }

                const body = parseExpression();
                return {
                    type: qType === LogicParser.TOKEN_TYPES.FORALL ? 'Forall' : 'Exists',
                    variable: varToken.value,
                    body: body
                };
            }
            return parseIff();
        }

        function parseIff() {
            let left = parseImplies();
            while (peek() && peek().type === LogicParser.TOKEN_TYPES.IFF) {
                const op = consume().value;
                const right = parseImplies();
                left = { type: 'BinaryOp', op: '↔', left, right };
            }
            return left;
        }

        function parseImplies() {
            let left = parseOr();
            if (peek() && peek().type === LogicParser.TOKEN_TYPES.IMPLIES) {
                const op = consume().value;
                const right = parseImplies(); // Right associative P -> Q -> R = P -> (Q -> R)
                left = { type: 'BinaryOp', op: '→', left, right };
            }
            return left;
        }

        function parseOr() {
            let left = parseAnd();
            while (peek() && (peek().type === LogicParser.TOKEN_TYPES.OR || peek().type === LogicParser.TOKEN_TYPES.XOR)) {
                const op = consume().value;
                const right = parseAnd();
                left = { type: 'BinaryOp', op, left, right };
            }
            return left;
        }

        function parseAnd() {
            let left = parseNot();
            while (peek() && peek().type === LogicParser.TOKEN_TYPES.AND) {
                const op = consume().value;
                const right = parseNot();
                left = { type: 'BinaryOp', op: '∧', left, right };
            }
            return left;
        }

        function parseNot() {
            if (peek() && peek().type === LogicParser.TOKEN_TYPES.NOT) {
                consume();
                const operand = parseNot();
                return { type: 'UnaryOp', op: '¬', operand };
            }
            return parsePrimary();
        }

        function parsePrimary() {
            const token = peek();
            if (!token) {
                throw new Error('Unexpected end of formula');
            }

            if (token.type === LogicParser.TOKEN_TYPES.LPAREN) {
                consume(LogicParser.TOKEN_TYPES.LPAREN);
                const expr = parseExpression();
                consume(LogicParser.TOKEN_TYPES.RPAREN);
                return expr;
            }

            if (token.type === LogicParser.TOKEN_TYPES.VARIABLE) {
                const varToken = consume();
                // Check if it's a predicate call like Red(x) or LeftOf(x, y)
                if (peek() && peek().type === LogicParser.TOKEN_TYPES.LPAREN) {
                    consume(LogicParser.TOKEN_TYPES.LPAREN);
                    const args = [];
                    if (peek().type !== LogicParser.TOKEN_TYPES.RPAREN) {
                        args.push(consume(LogicParser.TOKEN_TYPES.VARIABLE).value);
                        while (peek() && peek().type === LogicParser.TOKEN_TYPES.COMMA) {
                            consume(LogicParser.TOKEN_TYPES.COMMA);
                            args.push(consume(LogicParser.TOKEN_TYPES.VARIABLE).value);
                        }
                    }
                    consume(LogicParser.TOKEN_TYPES.RPAREN);
                    return { type: 'Predicate', name: varToken.value, args };
                }
                // Proposition variable like P, Q, R or constant
                return { type: 'Variable', name: varToken.value };
            }

            throw new Error(`Unexpected token: ${token.value}`);
        }

        function parseExpression() {
            return parseQuantifier();
        }

        const ast = parseExpression();
        if (current < tokens.length) {
            throw new Error(`Unexpected extra tokens starting at '${tokens[current].value}'`);
        }
        return ast;
    }

    /**
     * Extract all unique proposition variable names from an AST (e.g. P, Q, R)
     */
    static getVariables(ast) {
        const vars = new Set();

        function traverse(node) {
            if (!node) return;
            if (node.type === 'Variable') {
                vars.add(node.name);
            } else if (node.type === 'UnaryOp') {
                traverse(node.operand);
            } else if (node.type === 'BinaryOp') {
                traverse(node.left);
                traverse(node.right);
            } else if (node.type === 'Predicate') {
                // If it's a predicate, we don't treat its parameters as simple boolean vars
            } else if (node.type === 'Forall' || node.type === 'Exists') {
                traverse(node.body);
            }
        }

        traverse(ast);
        return Array.from(vars).sort();
    }
}
