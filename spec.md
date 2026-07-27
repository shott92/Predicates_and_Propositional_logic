# Technical Specification - OmniMath Realm

## Architecture Overview

**OmniMath Realm** is a zero-dependency, modern single-page eLearning web application designed around hyper-optimised pedagogical principles, gamification mechanics, and a dynamic **Realm Biome Environment Progression Visual Engine**. Built using standard HTML5, CSS custom properties, and ES6 JavaScript, the app operates 100% offline and can be executed either as a modular ES6 project or as a single portable HTML distribution file (`index.html` / `PropNPredsLogicLair.html`).

---

## Pedagogical & Learning Architecture

1. **Scaffolding & Faded Guidance (Zone of Proximal Development)**:
   - **Phase 1: Educational Priming (Levels 1–3 per category)**: High instructional support (`learningInfo`), formal definitions, visual models, intuitive analogies, and guided worked examples.
   - **Phase 2: Guided Application (Levels 4–7 per category)**: Reduced scaffolding, targeted hints, and structured multiple-choice/input prompts.
   - **Phase 3: Autonomous Mastery (Levels 8–10 per category)**: Faded assistance requiring independent mathematical derivation, proof validation, or calculus evaluation.

2. **Cognitive Load Theory (Micro-Chunking)**:
   - Topics advance sequentially across 13 distinct realms spanning Logic, Set Theory, Mappings, Infinities, and Calculus (Limits $\to$ Derivatives $\to$ Integrals).

3. **Dual Coding Theory & Visual Representations**:
   - Symbolic notation ($\land, \lor, \forall, \exists, \subseteq, \cup, \cap, \lim_{x \to a}, \frac{d}{dx}, \int$) is coupled with visual representations:
     - Venn Diagrams for Set Operations.
     - Arrow Mapping Diagrams for Functions & Injections/Surjections.
     - Interactive Blocks World Grids for Predicate Logic.
     - Truth Table Generators for Boolean Logic.
     - Tangent Line & Area Under Curve Approximators for Calculus.

---

## Realm Biome Environment Progression Engine

The visual theme dynamically transforms based on the active mathematical domain:

Each category represents a distinct **Realm Biome** with a unique visual identity:
1. `cat_foundations`: **Cyber Synth Gates** (Glowing Cyan `#06b6d4`)
2. `cat_equivalences`: **Equivalence Citadel** (Electric Sapphire `#3b82f6`)
3. `cat_tautologies`: **Void Sanctum** (Mystic Violet `#8b5cf6`)
4. `cat_inference`: **Deduction Archives** (Crimson Rose `#ec4899`)
5. `cat_quantifiers`: **Universal Observatory** (Emerald Astral `#10b981`)
6. `cat_predicate_realm`: **Vector Grid Matrix** (Amber Gold `#f59e0b`)
7. `cat_set_theory`: **Venn Crystal Caverns** (Deep Sea Azure `#0284c7`)
8. `cat_functions`: **Quantum Nexus** (Amethyst Purple `#a855f7`)
9. `cat_cardinality`: **Continuum Abyss** (Teal Aurora `#14b8a6`)
10. `cat_master_realm`: **Paradox Spire** (Flame Crimson `#ef4444`)
11. `cat_limits`: **Infinitesimal Frontier** (Solar Amber `#f59e0b`)
12. `cat_derivatives`: **Flux Kinetics Core** (Electric Lime `#84cc16`)
13. `cat_integrals`: **Continuum Accumulator** (Ultramarine Indigo `#6366f1`)

When a user selects or advances through a realm, the environment engine dynamically injects CSS custom properties (`--category-color`, radial background gradients, ambient lighting) and renders a custom **Environment Biome Banner**.

---

## System Modules

1. **`js/engine/logic-parser.js` (`LogicParser`)**:
   - Tokenizes and parses propositional logic expressions, predicate expressions, and set membership conditions into Abstract Syntax Trees (AST).

2. **`js/engine/evaluator.js` (`Evaluator`)**:
   - `evaluatePropositional(ast, assignment)`: Evaluates propositional ASTs.
   - `generateTruthTable(input)`: Generates complete $2^n$ truth tables.
   - `classifyFormula(input)`: Classifies formulas as `Tautology`, `Contradiction`, or `Contingency`.
   - `areEquivalent(ast1, ast2)`: Verifies logical equivalence between formulas.
   - `evaluatePredicate(ast, domain, predicates)`: Evaluates quantified expressions over finite domain objects.
   - `evaluateSetOperation(op, setA, setB)`: Evaluates set operations ($\cup, \cap, \setminus, \triangle$).
   - `checkFunctionProperties(domain, codomain, mapping)`: Determines Injectivity, Surjectivity, and Bijectivity.
   - `evaluatePolynomialLimit(polyStr, targetX)`: Evaluates polynomial limits $\lim_{x \to a} f(x)$.
   - `evaluatePowerRuleDerivative(termStr)`: Evaluates derivative $\frac{d}{dx}[c x^n] = c \cdot n x^{n-1}$.
   - `evaluateDefiniteIntegralPowerRule(polyStr, a, b)`: Calculates definite integral $\int_a^b f(x) dx$.

3. **`js/data/challenges.js` (`CATEGORIES`, `CHALLENGES`)**:
   - 130 structured challenges organized across 13 curriculum realms (10 levels per realm).

4. **`js/ui/`**:
   - `keyboard.js`: On-screen virtual mathematical logic symbol keyboard.
   - `grid-world.js`: SVG visual domain object renderer.
   - `sound.js`: Web Audio API sound generator.
   - `sandbox.js`: Interactive multi-tool sandbox (Truth Tables, Equivalence, Predicates, Set Visualizer, Function Inspector, Calculus Visualizer).

5. **`js/app.js` (`LogicLairApp`)**:
   - Application controller, state machine, campaign renderer, workspace view manager, Realm Biome Environment Engine, and `localStorage` persistence under key `omnimath_realm_user_state`.

---

## Data Schema & Persistence

State is persisted in `localStorage` under key `omnimath_realm_user_state`:

```json
{
  "xp": 2450,
  "streak": 7,
  "completedChallenges": ["fnd_1", "lim_1", "der_1"],
  "muted": false
}
```
