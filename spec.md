# Technical Specification - Discrete Math & Logic Realm

## Architecture Overview

**Discrete Math & Logic Realm** is a zero-dependency, modern single-page eLearning web application designed around hyper-optimised pedagogical principles and gamification mechanics. Built using standard HTML5, CSS custom properties, and ES6 JavaScript, the app operates 100% offline and can be executed either as a modular ES6 project or as a single portable HTML distribution file (`index.html` / `PropNPredsLogicLair.html`).

---

## Pedagogical & Learning Architecture

The application implements proven cognitive science and educational psychology frameworks to maximize comprehension, retention, and self-efficacy:

1. **Scaffolding & Faded Guidance (Zone of Proximal Development)**:
   - **Phase 1: Educational Priming (Levels 1–3 per category)**: High instructional support (`learningInfo`), formal definitions, visual models, intuitive analogies, and guided worked examples.
   - **Phase 2: Guided Application (Levels 4–7 per category)**: Reduced scaffolding, targeted hints, and structured multiple-choice/input prompts.
   - **Phase 3: Autonomous Mastery (Levels 8–10 per category)**: Faded assistance requiring independent mathematical derivation, proof validation, or paradox resolution.

2. **Cognitive Load Theory (Micro-Chunking)**:
   - Topics are split into 10-level progressive realms. Concepts advance sequentially (e.g., Set Definitions $\to$ Subsets $\to$ Power Sets $\to$ Set Operations $\to$ De Morgan's Laws for Sets).

3. **Dual Coding Theory & Visual Representations**:
   - Symbolic notation ($\land, \lor, \forall, \exists, \subseteq, \cup, \cap, \to$) is coupled with visual representations:
     - Venn Diagrams for Set Operations.
     - Arrow Mapping Diagrams for Functions & Injections/Surjections.
     - Interactive Blocks World Grids for Predicate Logic.
     - Truth Table Generators for Boolean Logic.

4. **Retrieval Practice & Spaced Reinforcement**:
   - Concepts from earlier logic realms (e.g., Boolean connectives) are explicitly linked to set operations (e.g., $\cap \equiv \land$, $\cup \equiv \lor$) and function conditions.

---

## Gamification Framework

Rooted in **Self-Determination Theory (SDT)** to foster Autonomy, Competence, and Engagement:

1. **Progression & Mastery Loops**:
   - 10 Categorized Curriculum Realms containing 100 structured challenges.
   - Dynamic XP calculation based on challenge difficulty and assistance level used.
   - Real-time category progress bars and completion percentages.

2. **Feedback & Micro-Interactions**:
   - Web Audio API synthesized sound effects for actions, successes, and errors.
   - Actionable hint system and full step-by-step mathematical explanations.
   - Daily streak tracking and unlockable achievement badges.

3. **Interactive Exploration (Sandboxes)**:
   - Truth Table Generator.
   - Logical Equivalence Checker.
   - Predicate World Builder.
   - Interactive Set Theory & Venn Diagram Visualizer.
   - Interactive Function Mapping Inspector (Testing Injective, Surjective, and Bijective properties).

---

## System Modules

1. **`js/engine/logic-parser.js` (`LogicParser`)**:
   - Tokenizes and parses propositional logic expressions, predicate expressions, and set membership conditions into Abstract Syntax Trees (AST).
   - Infix logic operators: `¬` (NOT), `∧` (AND), `∨` (OR), `→` (IMPLIES), `↔` (IFF), `⊕` (XOR).
   - Quantifiers: `∀` (FORALL), `∃` (EXISTS).

2. **`js/engine/evaluator.js` (`Evaluator`)**:
   - `evaluatePropositional(ast, assignment)`: Evaluates propositional ASTs under boolean assignments.
   - `generateTruthTable(input)`: Generates complete $2^n$ truth tables.
   - `classifyFormula(input)`: Classifies formulas as `Tautology`, `Contradiction`, or `Contingency`.
   - `areEquivalent(ast1, ast2)`: Verifies logical equivalence between formulas.
   - `evaluatePredicate(ast, domain, predicates)`: Evaluates quantified expressions over finite domain objects.
   - `evaluateSetOperation(op, setA, setB)`: Evaluates set operations ($\cup, \cap, \setminus, \triangle$).
   - `checkFunctionProperties(domain, codomain, mapping)`: Determines if a mapping is Injective (1-to-1), Surjective (Onto), or Bijective.

3. **`js/data/challenges.js` (`CATEGORIES`, `CHALLENGES`)**:
   - 100 structured challenges organized across 10 curriculum realms:
     1. `cat_foundations`: Propositional Foundations (Connectives & Truth Tables)
     2. `cat_equivalences`: Equivalence & Transformation Laws
     3. `cat_tautologies`: Tautologies, Contradictions & SAT
     4. `cat_inference`: Rules of Inference & Deduction Proofs
     5. `cat_quantifiers`: Predicates & First-Order Logic Quantifiers
     6. `cat_predicate_realm`: Visual Predicate Grid Worlds
     7. `cat_set_theory`: Set Theory Foundations, Power Sets & Operations
     8. `cat_functions`: Functions, Injections, Surjections & Bijections
     9. `cat_cardinality`: Cardinality, Countability & Cantor's Infinities
     10. `cat_master_realm`: Master Realm: Paradoxes, Knights & Set Antinomies

4. **`js/ui/`**:
   - `keyboard.js`: On-screen virtual mathematical logic symbol keyboard.
   - `grid-world.js`: SVG visual domain object renderer for predicate models.
   - `sound.js`: Web Audio API sound generator.
   - `sandbox.js`: Interactive multi-tool sandbox (Truth Tables, Equivalence, Predicate Worlds, Set Visualizer, Function Inspector).

5. **`js/app.js` (`LogicLairApp`)**:
   - Core application controller, state machine, campaign map renderer, workspace view manager, scaffolding renderer, and `localStorage` persistence engine.

---

## Data Schema & Persistence

State is persisted in `localStorage` under key `discrete_math_realm_user_state`:

```json
{
  "xp": 1250,
  "streak": 5,
  "completedChallenges": ["fnd_1", "fnd_2", "set_1", "fn_1"],
  "muted": false
}
```
