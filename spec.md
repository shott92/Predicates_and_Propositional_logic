# Technical Specification - Prop & Preds Logic Lair

## Architecture Overview

Prop & Preds Logic Lair is a zero-dependency modern single-page web application written in standard HTML5, CSS custom properties, and ES6 JavaScript modules.

### Modules

1. **`js/engine/logic-parser.js` (`LogicParser`)**:
   - Tokenizes and parses propositional logic expressions and first-order predicate expressions into Abstract Syntax Trees (AST).
   - Infix operators: `¬` (NOT), `∧` (AND), `∨` (OR), `→` (IMPLIES), `↔` (IFF), `⊕` (XOR).
   - Quantifiers: `∀` (FORALL), `∃` (EXISTS).

2. **`js/engine/evaluator.js` (`Evaluator`)**:
   - `evaluatePropositional(ast, assignment)`: Evaluates propositional AST given boolean variable assignments.
   - `generateTruthTable(input)`: Generates complete $2^n$ truth table.
   - `classifyFormula(input)`: Classifies formulas as `Tautology`, `Contradiction`, or `Contingency`.
   - `areEquivalent(ast1, ast2)`: Checks logical equivalence between two formulas over all variable assignments.
   - `evaluatePredicate(ast, domain, predicates)`: Evaluates quantified expressions over finite domain objects.

3. **`js/data/challenges.js` (`CHALLENGES`)**:
   - 70 structured challenges categorized into 7 realms:
     - `cat_foundations`: Connectives & truth tables
     - `cat_equivalences`: Transformational laws
     - `cat_tautologies`: Classification & SAT
     - `cat_inference`: Rules of inference
     - `cat_quantifiers`: Predicates & quantifiers
     - `cat_predicate_realm`: Visual domain object grid worlds
     - `cat_master_lair`: Knights & Knaves riddles & paradoxes

4. **`js/ui/`**:
   - `keyboard.js`: On-screen virtual logic symbol keyboard.
   - `grid-world.js`: SVG visual domain object renderer.
   - `sound.js`: Synthesized Web Audio API sound effects.
   - `sandbox.js`: Interactive truth table and equivalence sandbox views.

5. **`js/app.js` (`LogicLairApp`)**:
   - Main controller, view state machine, progress manager, and `localStorage` persistence.
