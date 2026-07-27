/**
 * Challenges Data Bank for OmniMath Realm
 * 130 Challenges organized across 13 categories with Scaffolding & Faded Guidance
 */

export const CATEGORIES = [
    {
        id: 'cat_foundations',
        name: 'Category 1: Propositional Foundations',
        icon: '⚡',
        description: 'Master logical connectives (AND, OR, NOT, IMPLIES, IFF, XOR) and truth values.',
        color: '#06b6d4'
    },
    {
        id: 'cat_equivalences',
        name: 'Category 2: Equivalence & Laws',
        icon: '⚖️',
        description: "Transform logic expressions using De Morgan's Laws, Contrapositives, and Distributivity.",
        color: '#3b82f6'
    },
    {
        id: 'cat_tautologies',
        name: 'Category 3: Tautologies, Contradictions & SAT',
        icon: '🔮',
        description: 'Identify absolute truths, contradictions, and satisfiability of boolean formulas.',
        color: '#8b5cf6'
    },
    {
        id: 'cat_inference',
        name: 'Category 4: Rules of Inference & Proofs',
        icon: '📜',
        description: 'Apply Modus Ponens, Modus Tollens, and Syllogisms to derive sound conclusions.',
        color: '#ec4899'
    },
    {
        id: 'cat_quantifiers',
        name: 'Category 5: Predicates & Quantifiers',
        icon: '🌐',
        description: 'Translate natural language to First-Order Logic using ∀ (for all) and ∃ (there exists).',
        color: '#10b981'
    },
    {
        id: 'cat_predicate_realm',
        name: 'Category 6: Visual Predicate Realm',
        icon: '🧱',
        description: 'Evaluate and manipulate visual grid worlds to satisfy quantified predicate expressions.',
        color: '#f59e0b'
    },
    {
        id: 'cat_set_theory',
        name: 'Category 7: Set Theory Foundations & Operations',
        icon: '📐',
        description: 'Explore sets, membership (∈), power sets (𝒫(S)), union (∪), intersection (∩), and differences.',
        color: '#0284c7'
    },
    {
        id: 'cat_functions',
        name: 'Category 8: Functions, Injections & Surjections',
        icon: '🔄',
        description: 'Analyze domain mapping, Injective (one-to-one), Surjective (onto), and Bijective functions.',
        color: '#a855f7'
    },
    {
        id: 'cat_cardinality',
        name: 'Category 9: Cardinality & Infinite Sets',
        icon: '♾️',
        description: "Master set sizes (|A|), countability (ℵ₀), Hilbert's Hotel, and Cantor's Diagonal Argument.",
        color: '#14b8a6'
    },
    {
        id: 'cat_master_realm',
        name: 'Category 10: Master Realm: Paradoxes & Antinomies',
        icon: '👑',
        description: "Conquer Knights & Knaves riddles, Russell's Paradox, and Cantor's Theorem.",
        color: '#ef4444'
    },
    {
        id: 'cat_limits',
        name: 'Category 11: Limits & Continuity',
        icon: '🌌',
        description: 'Master lim_{x → a} f(x), left/right limits, indeterminate 0/0 forms, and Squeeze Theorem.',
        color: '#f59e0b'
    },
    {
        id: 'cat_derivatives',
        name: 'Category 12: Differential Calculus & Derivatives',
        icon: '📈',
        description: 'Calculate instantaneous rates of change using Power, Product, Quotient, and Chain Rules.',
        color: '#84cc16'
    },
    {
        id: 'cat_integrals',
        name: 'Category 13: Integral Calculus & Anti-derivatives',
        icon: '∫',
        description: 'Evaluate anti-derivatives, definite integrals, Fundamental Theorem of Calculus, and u-substitution.',
        color: '#6366f1'
    }
];

export const CHALLENGES = [
    // ==========================================
    // CATEGORY 1: PROPOSITIONAL FOUNDATIONS (10 Challenges)
    // ==========================================
    {
        id: 'fnd_1',
        categoryId: 'cat_foundations',
        title: 'The Negation Gate',
        type: 'truth_value',
        learningInfo: '<strong>Negation (¬)</strong> is a unary operator that flips a statement to its exact opposite truth value. If a proposition <em>P</em> is True, its negation <em>¬P</em> is False. Conversely, if <em>P</em> is False, <em>¬P</em> is True.',
        prompt: 'Given that proposition P is FALSE, what is the truth value of ¬P?',
        formula: '¬P',
        assignment: { P: false },
        options: ['True', 'False'],
        correctAnswer: 'True',
        hint: 'The negation operator ¬ flips True to False, and False to True.',
        explanation: '¬(False) = True.',
        xp: 50
    },
    {
        id: 'fnd_2',
        categoryId: 'cat_foundations',
        title: 'Conjunction Connection',
        type: 'truth_value',
        learningInfo: '<strong>Conjunction (∧ / AND)</strong> requires BOTH component propositions to be True simultaneously. If even one proposition is False, the entire conjunction becomes False.',
        prompt: 'Given P = TRUE and Q = FALSE, calculate the truth value of P ∧ Q.',
        formula: 'P ∧ Q',
        assignment: { P: true, Q: false },
        options: ['True', 'False'],
        correctAnswer: 'False',
        hint: 'A conjunction (∧) is only TRUE when BOTH P and Q are TRUE.',
        explanation: 'True ∧ False = False.',
        xp: 50
    },
    {
        id: 'fnd_3',
        categoryId: 'cat_foundations',
        title: 'Disjunction Domain',
        type: 'truth_value',
        learningInfo: '<strong>Inclusive Disjunction (∨ / OR)</strong> is True if AT LEAST ONE component proposition is True. It is only False when BOTH components are False.',
        prompt: 'Given P = FALSE and Q = TRUE, calculate the truth value of P ∨ Q.',
        formula: 'P ∨ Q',
        assignment: { P: false, Q: true },
        options: ['True', 'False'],
        correctAnswer: 'True',
        hint: 'A disjunction (∨) is TRUE if AT LEAST ONE component is TRUE.',
        explanation: 'False ∨ True = True.',
        xp: 50
    },
    {
        id: 'fnd_4',
        categoryId: 'cat_foundations',
        title: 'The Conditional Trap',
        type: 'truth_value',
        prompt: 'Given P = FALSE and Q = FALSE, what is the truth value of P → Q?',
        formula: 'P → Q',
        assignment: { P: false, Q: false },
        options: ['True', 'False'],
        correctAnswer: 'True',
        hint: 'An implication P → Q is vacuously TRUE whenever the premise P is FALSE!',
        explanation: 'False → False is TRUE (vacuous truth).',
        xp: 60
    },
    {
        id: 'fnd_5',
        categoryId: 'cat_foundations',
        title: 'Broken Promise',
        type: 'truth_value',
        prompt: 'Given P = TRUE and Q = FALSE, what is the truth value of P → Q?',
        formula: 'P → Q',
        assignment: { P: true, Q: false },
        options: ['True', 'False'],
        correctAnswer: 'False',
        hint: 'P → Q is ONLY false when a True premise leads to a False conclusion.',
        explanation: 'True → False is FALSE.',
        xp: 60
    },
    {
        id: 'fnd_6',
        categoryId: 'cat_foundations',
        title: 'Biconditional Balance',
        type: 'truth_value',
        prompt: 'Given P = FALSE and Q = FALSE, calculate P ↔ Q.',
        formula: 'P ↔ Q',
        assignment: { P: false, Q: false },
        options: ['True', 'False'],
        correctAnswer: 'True',
        hint: 'A biconditional P ↔ Q is TRUE when both P and Q have the EXACT SAME truth value.',
        explanation: 'False ↔ False is TRUE because both sides match.',
        xp: 60
    },
    {
        id: 'fnd_7',
        categoryId: 'cat_foundations',
        title: 'Exclusive Or Mystery',
        type: 'truth_value',
        prompt: 'Given P = TRUE and Q = TRUE, calculate P ⊕ Q.',
        formula: 'P ⊕ Q',
        assignment: { P: true, Q: true },
        options: ['True', 'False'],
        correctAnswer: 'False',
        hint: 'XOR (⊕) is TRUE when ONE or the OTHER is true, but NOT BOTH.',
        explanation: 'True ⊕ True = False.',
        xp: 60
    },
    {
        id: 'fnd_8',
        categoryId: 'cat_foundations',
        title: 'Compound Evaluation',
        type: 'truth_value',
        prompt: 'Given P = TRUE, Q = FALSE, R = TRUE, calculate (P ∧ Q) ∨ ¬R.',
        formula: '(P ∧ Q) ∨ ¬R',
        assignment: { P: true, Q: false, R: true },
        options: ['True', 'False'],
        correctAnswer: 'False',
        hint: 'First compute (True ∧ False), then compute ¬True, then combine with ∨.',
        explanation: '(True ∧ False) = False. ¬True = False. False ∨ False = False.',
        xp: 70
    },
    {
        id: 'fnd_9',
        categoryId: 'cat_foundations',
        title: 'Nested Implication',
        type: 'truth_value',
        prompt: 'Given P = TRUE, Q = FALSE, R = FALSE, calculate P → (Q → R).',
        formula: 'P → (Q → R)',
        assignment: { P: true, Q: false, R: false },
        options: ['True', 'False'],
        correctAnswer: 'True',
        hint: 'Evaluate the inner implication (Q → R) first.',
        explanation: 'Q → R is False → False = True. Then P → True is True → True = True.',
        xp: 75
    },
    {
        id: 'fnd_10',
        categoryId: 'cat_foundations',
        title: 'Complex Expression Trial',
        type: 'truth_value',
        prompt: 'Given P = FALSE, Q = TRUE, R = TRUE, calculate ¬(P ∨ Q) ↔ (¬P ∧ ¬Q).',
        formula: '¬(P ∨ Q) ↔ (¬P ∧ ¬Q)',
        assignment: { P: false, Q: true, R: true },
        options: ['True', 'False'],
        correctAnswer: 'True',
        hint: 'This evaluates De Morgan\'s Law. Both sides will always yield the same result!',
        explanation: 'Left side: ¬(False ∨ True) = ¬True = False. Right side: ¬False ∧ ¬True = True ∧ False = False. False ↔ False = True.',
        xp: 80
    },

    // ==========================================
    // CATEGORY 2: EQUIVALENCE & LAWS (10 Challenges)
    // ==========================================
    {
        id: 'eq_1',
        categoryId: 'cat_equivalences',
        title: 'De Morgan Conjunction',
        type: 'equivalence_input',
        learningInfo: '<strong>De Morgan\'s First Law</strong> states that the negation of a conjunction is logically equivalent to the disjunction of the negations: <code>¬(P ∧ Q) ≡ ¬P ∨ ¬Q</code>.',
        prompt: 'Type an equivalent expression for ¬(P ∧ Q) using De Morgan\'s Law.',
        targetFormula: '¬P ∨ ¬Q',
        hint: 'Distribute the negation ¬ to P and Q, and flip ∧ to ∨.',
        explanation: '¬(P ∧ Q) is logically equivalent to ¬P ∨ ¬Q.',
        xp: 60
    },
    {
        id: 'eq_2',
        categoryId: 'cat_equivalences',
        title: 'De Morgan Disjunction',
        type: 'equivalence_input',
        learningInfo: '<strong>De Morgan\'s Second Law</strong> states that the negation of a disjunction is logically equivalent to the conjunction of the negations: <code>¬(P ∨ Q) ≡ ¬P ∧ ¬Q</code>.',
        prompt: 'Type an equivalent expression for ¬(P ∨ Q) using De Morgan\'s Law.',
        targetFormula: '¬P ∧ ¬Q',
        hint: 'Distribute the negation ¬ to P and Q, and flip ∨ to ∧.',
        explanation: '¬(P ∨ Q) is logically equivalent to ¬P ∧ ¬Q.',
        xp: 60
    },
    {
        id: 'eq_3',
        categoryId: 'cat_equivalences',
        title: 'Implication Elimination',
        type: 'equivalence_input',
        learningInfo: 'An implication <code>P → Q</code> can be rewritten entirely using disjunction and negation: <code>¬P ∨ Q</code>.',
        prompt: 'Express P → Q without using the implication symbol →.',
        targetFormula: '¬P ∨ Q',
        hint: 'Implication P → Q is equivalent to ¬P ∨ Q.',
        explanation: 'P → Q ≡ ¬P ∨ Q.',
        xp: 65
    },
    {
        id: 'eq_4',
        categoryId: 'cat_equivalences',
        title: 'The Contrapositive Shield',
        type: 'multiple_choice',
        prompt: 'Which statement is logically equivalent to the contrapositive of P → Q?',
        options: ['Q → P', '¬Q → ¬P', '¬P → ¬Q', '¬P ∨ ¬Q'],
        correctAnswer: '¬Q → ¬P',
        hint: 'The contrapositive flips the premise and conclusion and negates both.',
        explanation: 'The contrapositive of P → Q is ¬Q → ¬P.',
        xp: 70
    },
    {
        id: 'eq_5',
        categoryId: 'cat_equivalences',
        title: 'Double Negation Rule',
        type: 'equivalence_input',
        prompt: 'Simplify ¬(¬P) to its most basic form.',
        targetFormula: 'P',
        hint: 'Two negations cancel each other out!',
        explanation: '¬(¬P) ≡ P.',
        xp: 50
    },
    {
        id: 'eq_6',
        categoryId: 'cat_equivalences',
        title: 'Distributive Law over AND',
        type: 'equivalence_input',
        prompt: 'Apply the distributive law to expand P ∧ (Q ∨ R).',
        targetFormula: '(P ∧ Q) ∨ (P ∧ R)',
        hint: 'Distribute P ∧ into both terms inside the parentheses.',
        explanation: 'P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R).',
        xp: 75
    },
    {
        id: 'eq_7',
        categoryId: 'cat_equivalences',
        title: 'Distributive Law over OR',
        type: 'equivalence_input',
        prompt: 'Apply the distributive law to expand P ∨ (Q ∧ R).',
        targetFormula: '(P ∨ Q) ∧ (P ∨ R)',
        hint: 'Distribute P ∨ into both terms inside the parentheses.',
        explanation: 'P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R).',
        xp: 75
    },
    {
        id: 'eq_8',
        categoryId: 'cat_equivalences',
        title: 'Negated Implication',
        type: 'equivalence_input',
        prompt: 'What is the logical negation of P → Q? (Express using ∧ and ¬)',
        targetFormula: 'P ∧ ¬Q',
        hint: '¬(P → Q) ≡ ¬(¬P ∨ Q). Use De Morgan\'s Law.',
        explanation: '¬(P → Q) ≡ P ∧ ¬Q.',
        xp: 80
    },
    {
        id: 'eq_9',
        categoryId: 'cat_equivalences',
        title: 'Biconditional Expansion',
        type: 'equivalence_input',
        prompt: 'Express P ↔ Q as a conjunction of two implications.',
        targetFormula: '(P → Q) ∧ (Q → P)',
        hint: 'A biconditional means P implies Q AND Q implies P.',
        explanation: 'P ↔ Q ≡ (P → Q) ∧ (Q → P).',
        xp: 85
    },
    {
        id: 'eq_10',
        categoryId: 'cat_equivalences',
        title: 'XOR Transformation',
        type: 'multiple_choice',
        prompt: 'Which of the following is equivalent to P ⊕ Q?',
        options: ['(P ∨ Q) ∧ ¬(P ∧ Q)', 'P ∧ Q', '(P → Q) ∧ (Q → P)', '¬P ∧ ¬Q'],
        correctAnswer: '(P ∨ Q) ∧ ¬(P ∧ Q)',
        hint: 'XOR means (P or Q) AND NOT (both P and Q).',
        explanation: 'P ⊕ Q is equivalent to (P ∨ Q) ∧ ¬(P ∧ Q).',
        xp: 90
    },

    // ==========================================
    // CATEGORY 3: TAUTOLOGIES, CONTRADICTIONS & SAT (10 Challenges)
    // ==========================================
    {
        id: 'taut_1',
        categoryId: 'cat_tautologies',
        title: 'Law of Excluded Middle',
        type: 'multiple_choice',
        learningInfo: 'A <strong>Tautology</strong> is a statement that is True under EVERY possible assignment of truth values. A <strong>Contradiction</strong> is False under every assignment.',
        prompt: 'Classify the formula P ∨ ¬P.',
        options: ['Tautology', 'Contradiction', 'Contingency'],
        correctAnswer: 'Tautology',
        hint: 'Construct a truth table. Is it always true regardless of P?',
        explanation: 'Whether P is True or False, P ∨ ¬P is always True.',
        xp: 60
    },
    {
        id: 'taut_2',
        categoryId: 'cat_tautologies',
        title: 'Self Contradiction',
        type: 'multiple_choice',
        learningInfo: 'A formula is a <strong>Contradiction</strong> if it is impossible to satisfy.',
        prompt: 'Classify the formula P ∧ ¬P.',
        options: ['Tautology', 'Contradiction', 'Contingency'],
        correctAnswer: 'Contradiction',
        hint: 'Can P be both True and False simultaneously?',
        explanation: 'P ∧ ¬P is always False.',
        xp: 60
    },
    {
        id: 'taut_3',
        categoryId: 'cat_tautologies',
        title: 'Conditional Self-Truth',
        type: 'multiple_choice',
        learningInfo: 'A conditional formula <code>P → P</code> is always vacuously or directly true regardless of whether P is True or False.',
        prompt: 'Classify the formula P → P.',
        options: ['Tautology', 'Contradiction', 'Contingency'],
        correctAnswer: 'Tautology',
        hint: 'Check P = True (True → True) and P = False (False → False).',
        explanation: 'P → P is always True.',
        xp: 65
    },
    {
        id: 'taut_4',
        categoryId: 'cat_tautologies',
        title: 'Conjunction Contingency',
        type: 'multiple_choice',
        prompt: 'Classify the formula P ∧ Q.',
        options: ['Tautology', 'Contradiction', 'Contingency'],
        correctAnswer: 'Contingency',
        hint: 'Is P ∧ Q true for all rows? False for all rows? Or depends on assignment?',
        explanation: 'P ∧ Q is True when P=T, Q=T, but False when P=F. Contingency.',
        xp: 65
    },
    {
        id: 'taut_5',
        categoryId: 'cat_tautologies',
        title: 'Satisfiability Test (SAT)',
        type: 'multiple_choice',
        prompt: 'Is the formula (P ∨ Q) ∧ (¬P ∨ ¬Q) satisfiable?',
        options: ['Yes, Satisfiable', 'No, Unsatisfiable'],
        correctAnswer: 'Yes, Satisfiable',
        hint: 'A formula is satisfiable if there exists AT LEAST ONE truth assignment making it True.',
        explanation: 'P = True, Q = False makes (True ∨ False) ∧ (False ∨ True) = True.',
        xp: 70
    },
    {
        id: 'taut_6',
        categoryId: 'cat_tautologies',
        title: 'Absurdity Paradox',
        type: 'multiple_choice',
        prompt: 'Classify the formula (P → Q) ∧ P ∧ ¬Q.',
        options: ['Tautology', 'Contradiction', 'Contingency'],
        correctAnswer: 'Contradiction',
        hint: 'If P is True and P → Q is True, then Q MUST be True. But ¬Q says Q is False!',
        explanation: 'Asserts premise P, implication P → Q, and negates conclusion Q. Contradiction.',
        xp: 75
    },
    {
        id: 'taut_7',
        categoryId: 'cat_tautologies',
        title: 'Modus Ponens Tautology',
        type: 'multiple_choice',
        prompt: 'Classify the formula ((P → Q) ∧ P) → Q.',
        options: ['Tautology', 'Contradiction', 'Contingency'],
        correctAnswer: 'Tautology',
        hint: 'This expresses the rule of Modus Ponens as a single implication.',
        explanation: '((P → Q) ∧ P) → Q is a foundational logical tautology.',
        xp: 80
    },
    {
        id: 'taut_8',
        categoryId: 'cat_tautologies',
        title: 'Peirce\'s Law',
        type: 'multiple_choice',
        prompt: 'Classify the formula ((P → Q) → P) → P.',
        options: ['Tautology', 'Contradiction', 'Contingency'],
        correctAnswer: 'Tautology',
        hint: 'Known as Peirce\'s Law in classical logic.',
        explanation: 'Peirce\'s Law is a valid tautology.',
        xp: 85
    },
    {
        id: 'taut_9',
        categoryId: 'cat_tautologies',
        title: '3-Variable SAT Probe',
        type: 'multiple_choice',
        prompt: 'Find a satisfying truth assignment for (P ∨ Q) ∧ (¬Q ∨ R) ∧ ¬P.',
        options: ['P=F, Q=T, R=T', 'P=T, Q=F, R=F', 'P=T, Q=T, R=F', 'No assignment exists'],
        correctAnswer: 'P=F, Q=T, R=T',
        hint: 'Since ¬P is True, P MUST be False. If P is False, P ∨ Q requires Q to be True.',
        explanation: 'With P=F, Q=T, R=T: (F ∨ T) ∧ (F ∨ T) ∧ T = True.',
        xp: 90
    },
    {
        id: 'taut_10',
        categoryId: 'cat_tautologies',
        title: 'Unsatisfiable 3-CNF',
        type: 'multiple_choice',
        prompt: 'Is (P ∨ Q) ∧ (P ∨ ¬Q) ∧ (¬P ∨ Q) ∧ (¬P ∨ ¬Q) satisfiable?',
        options: ['Yes, Satisfiable', 'No, Unsatisfiable'],
        correctAnswer: 'No, Unsatisfiable',
        hint: 'Test all 4 assignments of (P, Q): (T,T), (T,F), (F,T), (F,F).',
        explanation: 'Every assignment falsifies at least one of the 4 clauses.',
        xp: 100
    },

    // ==========================================
    // CATEGORY 4: RULES OF INFERENCE & PROOFS (10 Challenges)
    // ==========================================
    {
        id: 'inf_1',
        categoryId: 'cat_inference',
        title: 'Modus Ponens (Affirming the Antecedent)',
        type: 'multiple_choice',
        learningInfo: '<strong>Modus Ponens</strong>: If <code>P → Q</code> is true, and premise <code>P</code> is true, then <code>Q</code> MUST be true.',
        premises: ['P → Q', 'P'],
        prompt: 'From the given premises, what valid conclusion can be deduced?',
        options: ['Q', '¬Q', 'P ∧ Q', 'No conclusion'],
        correctAnswer: 'Q',
        hint: 'If P implies Q, and P occurs, then Q follows.',
        explanation: 'By Modus Ponens, premise P → Q and P yield Q.',
        xp: 60
    },
    {
        id: 'inf_2',
        categoryId: 'cat_inference',
        title: 'Modus Tollens (Denying the Consequent)',
        type: 'multiple_choice',
        learningInfo: '<strong>Modus Tollens</strong>: If <code>P → Q</code> is true, but <code>Q</code> is False (¬Q), then premise <code>P</code> MUST be False (¬P).',
        premises: ['P → Q', '¬Q'],
        prompt: 'From the given premises, what valid conclusion can be derived?',
        options: ['P', '¬P', 'Q → P', 'No conclusion'],
        correctAnswer: '¬P',
        hint: 'If P would cause Q, but Q did NOT happen, then P could not have happened.',
        explanation: 'By Modus Tollens, P → Q and ¬Q yield ¬P.',
        xp: 65
    },
    {
        id: 'inf_3',
        categoryId: 'cat_inference',
        title: 'Hypothetical Syllogism',
        type: 'multiple_choice',
        learningInfo: '<strong>Hypothetical Syllogism</strong> is the transitivity law of logic: If P implies Q, and Q implies R, then P directly implies R: <code>(P → Q) ∧ (Q → R) ⇒ P → R</code>.',
        premises: ['P → Q', 'Q → R'],
        prompt: 'Chain the implications: What conclusion follows from P → Q and Q → R?',
        options: ['P → R', 'R → P', 'P ∧ R', '¬P → ¬R'],
        correctAnswer: 'P → R',
        hint: 'Implication is transitive!',
        explanation: 'By Hypothetical Syllogism, P → Q and Q → R imply P → R.',
        xp: 70
    },
    {
        id: 'inf_4',
        categoryId: 'cat_inference',
        title: 'Disjunctive Syllogism',
        type: 'multiple_choice',
        premises: ['P ∨ Q', '¬P'],
        prompt: 'Given that either P or Q is true, and P is false, what MUST be true?',
        options: ['Q', '¬Q', 'P ∧ Q', 'P → Q'],
        correctAnswer: 'Q',
        hint: 'Eliminate the false option from the disjunction.',
        explanation: 'By Disjunctive Syllogism, if P ∨ Q is true and P is false, Q must be true.',
        xp: 70
    },
    {
        id: 'inf_5',
        categoryId: 'cat_inference',
        title: 'Resolution Principle',
        type: 'multiple_choice',
        premises: ['P ∨ Q', '¬P ∨ R'],
        prompt: 'Apply the Resolution Rule to resolve complementary literals P and ¬P.',
        options: ['Q ∨ R', 'Q ∧ R', 'P ∨ R', '¬Q ∨ ¬R'],
        correctAnswer: 'Q ∨ R',
        hint: 'Resolution resolves (P ∨ Q) and (¬P ∨ R) into (Q ∨ R).',
        explanation: 'Combining P ∨ Q and ¬P ∨ R yields Q ∨ R.',
        xp: 75
    },
    {
        id: 'inf_6',
        categoryId: 'cat_inference',
        title: 'Fallacy of Affirming the Consequent',
        type: 'multiple_choice',
        premises: ['P → Q', 'Q'],
        prompt: 'Can we validly conclude P from P → Q and Q?',
        options: ['Valid: P follows', 'Invalid: Fallacy of Affirming Consequent', 'Valid: ¬P follows', 'Valid: P ↔ Q'],
        correctAnswer: 'Invalid: Fallacy of Affirming Consequent',
        hint: 'Just because Q happened does not mean P was the only reason Q happened!',
        explanation: 'Affirming the consequent Q to deduce P is a logical fallacy.',
        xp: 75
    },
    {
        id: 'inf_7',
        categoryId: 'cat_inference',
        title: 'Constructive Dilemma',
        type: 'multiple_choice',
        premises: ['(P → Q) ∧ (R → S)', 'P ∨ R'],
        prompt: 'What conclusion follows from these combined premises?',
        options: ['Q ∨ S', 'Q ∧ S', 'P ∧ R', '¬Q ∨ ¬S'],
        correctAnswer: 'Q ∨ S',
        hint: 'Since either P or R holds, either Q or S must hold.',
        explanation: 'By Constructive Dilemma, (P → Q) ∧ (R → S) and P ∨ R yield Q ∨ S.',
        xp: 80
    },
    {
        id: 'inf_8',
        categoryId: 'cat_inference',
        title: 'Deduction Proof Step 1',
        type: 'multiple_choice',
        premises: ['¬P ∨ Q', '¬Q ∨ R', 'P'],
        prompt: 'Deduce the final conclusion step-by-step from all premises.',
        options: ['R', '¬R', 'Q ∧ ¬R', '¬P'],
        correctAnswer: 'R',
        hint: 'P and ¬P ∨ Q yield Q. Q and ¬Q ∨ R yield R!',
        explanation: 'Step 1: P and ¬P ∨ Q yield Q. Step 2: Q and ¬Q ∨ R yield R.',
        xp: 85
    },
    {
        id: 'inf_9',
        categoryId: 'cat_inference',
        title: 'Proof by Contradiction Technique',
        type: 'multiple_choice',
        prompt: 'To prove a formula S using Proof by Contradiction, what assumption do we make?',
        options: ['Assume ¬S and derive a contradiction (False)', 'Assume S and show it is true', 'Assume ¬S and show S is false', 'Assume S=False and ¬S=False'],
        correctAnswer: 'Assume ¬S and derive a contradiction (False)',
        hint: 'Proof by contradiction assumes the negation of the target statement.',
        explanation: 'Assume ¬S, and if this leads to a contradiction, ¬S is false so S is true.',
        xp: 90
    },
    {
        id: 'inf_10',
        categoryId: 'cat_inference',
        title: 'Multi-Premise Master Inference',
        type: 'multiple_choice',
        premises: ['A → B', 'B → C', '¬C', 'A ∨ D'],
        prompt: 'Determine what MUST be true from the 4 premises combined.',
        options: ['D', 'A', 'B', '¬D'],
        correctAnswer: 'D',
        hint: 'Trace: ¬C & B → C ⇒ ¬B. ¬B & A → B ⇒ ¬A. ¬A & A ∨ D ⇒ D!',
        explanation: '1. ¬C & B → C ⇒ ¬B. 2. ¬B & A → B ⇒ ¬A. 3. ¬A & A ∨ D ⇒ D.',
        xp: 100
    },

    // ==========================================
    // CATEGORY 5: PREDICATES & QUANTIFIERS (10 Challenges)
    // ==========================================
    {
        id: 'qnt_1',
        categoryId: 'cat_quantifiers',
        title: 'Universal Quantifier Basics',
        type: 'multiple_choice',
        learningInfo: '<strong>Universal Quantifier (∀ / "for all")</strong> asserts that a predicate property <em>P(x)</em> holds true for EVERY element <em>x</em> in the domain.',
        prompt: 'Translating "Every integer x is greater than zero":',
        options: ['∀x (Integer(x) → GreaterThanZero(x))', '∃x (Integer(x) ∧ GreaterThanZero(x))', '∀x (Integer(x) ∧ GreaterThanZero(x))', '∃x (Integer(x) → GreaterThanZero(x))'],
        correctAnswer: '∀x (Integer(x) → GreaterThanZero(x))',
        hint: 'Universal statements ("Every...") are standardly written with implications →.',
        explanation: '∀x (Integer(x) → GreaterThanZero(x)) correctly asserts IF x is integer, THEN x > 0.',
        xp: 60
    },
    {
        id: 'qnt_2',
        categoryId: 'cat_quantifiers',
        title: 'Existential Quantifier Basics',
        type: 'multiple_choice',
        learningInfo: '<strong>Existential Quantifier (∃ / "there exists")</strong> asserts that AT LEAST ONE element <em>x</em> in the domain satisfies predicate <em>P(x)</em>.',
        prompt: 'Translating "Some prime numbers are even":',
        options: ['∃x (Prime(x) ∧ Even(x))', '∀x (Prime(x) → Even(x))', '∃x (Prime(x) → Even(x))', '∀x (Prime(x) ∧ Even(x))'],
        correctAnswer: '∃x (Prime(x) ∧ Even(x))',
        hint: 'Existential statements ("Some...") are standardly written with conjunctions ∧.',
        explanation: '∃x (Prime(x) ∧ Even(x)) states there exists at least one x that is BOTH prime and even.',
        xp: 60
    },
    {
        id: 'qnt_3',
        categoryId: 'cat_quantifiers',
        title: 'Quantifier Negation: Universal',
        type: 'equivalence_input',
        learningInfo: 'To negate a universal quantifier <code>¬(∀x P(x))</code>, flip the quantifier to <code>∃x</code> and negate the predicate: <code>∃x ¬P(x)</code>.',
        prompt: 'Rewrite ¬(∀x P(x)) using quantifier negation rules.',
        targetFormula: '∃x ¬P(x)',
        hint: 'Flip ∀ to ∃ and move the negation ¬ inside.',
        explanation: '¬(∀x P(x)) ≡ ∃x ¬P(x).',
        xp: 65
    },
    {
        id: 'qnt_4',
        categoryId: 'cat_quantifiers',
        title: 'Quantifier Negation: Existential',
        type: 'equivalence_input',
        prompt: 'Rewrite ¬(∃x P(x)) using quantifier negation rules.',
        targetFormula: '∀x ¬P(x)',
        hint: 'Flip ∃ to ∀ and move the negation ¬ inside.',
        explanation: '¬(∃x P(x)) ≡ ∀x ¬P(x).',
        xp: 65
    },
    {
        id: 'qnt_5',
        categoryId: 'cat_quantifiers',
        title: 'Domain Evaluation',
        type: 'multiple_choice',
        prompt: 'Over domain D = {2, 4, 6, 8}, evaluate the truth value of ∀x Even(x).',
        options: ['True', 'False'],
        correctAnswer: 'True',
        hint: 'Check if 2, 4, 6, and 8 are all even numbers.',
        explanation: 'Since 2, 4, 6, 8 are all even, ∀x Even(x) is True.',
        xp: 60
    },
    {
        id: 'qnt_6',
        categoryId: 'cat_quantifiers',
        title: 'Existential Counterexample',
        type: 'multiple_choice',
        prompt: 'Over domain D = {1, 3, 5, 7}, evaluate the truth value of ∃x Even(x).',
        options: ['True', 'False'],
        correctAnswer: 'False',
        hint: 'Is there any even number in {1, 3, 5, 7}?',
        explanation: 'None of {1, 3, 5, 7} are even, so ∃x Even(x) is False.',
        xp: 65
    },
    {
        id: 'qnt_7',
        categoryId: 'cat_quantifiers',
        title: 'Nested Quantifiers Order',
        type: 'multiple_choice',
        prompt: 'Over integers ℝ, compare ∀x ∃y (x + y = 0) vs ∃y ∀x (x + y = 0).',
        options: ['∀x ∃y is True, but ∃y ∀x is False', 'Both are True', 'Both are False', '∃y ∀x is True, but ∀x ∃y is False'],
        correctAnswer: '∀x ∃y is True, but ∃y ∀x is False',
        hint: 'In ∀x ∃y, y can depend on x (y = -x). In ∃y ∀x, a single y must work for ALL x.',
        explanation: 'For any x, choosing y = -x gives x + y = 0 (True). But no single constant y works for ALL x.',
        xp: 80
    },
    {
        id: 'qnt_8',
        categoryId: 'cat_quantifiers',
        title: 'Negating Nested Quantifiers',
        type: 'equivalence_input',
        prompt: 'Negate the formula ∀x ∃y (P(x, y)).',
        targetFormula: '∃x ∀y ¬P(x, y)',
        hint: 'Flip ∀x to ∃x, ∃y to ∀y, and negate P(x, y).',
        explanation: '¬(∀x ∃y P(x, y)) ≡ ∃x ∀y ¬P(x, y).',
        xp: 85
    },
    {
        id: 'qnt_9',
        categoryId: 'cat_quantifiers',
        title: 'Vacuous Truth over Empty Domain',
        type: 'multiple_choice',
        prompt: 'If domain D is the EMPTY SET ∅, what is the truth value of ∀x P(x)?',
        options: ['True (Vacuously)', 'False', 'Undefined'],
        correctAnswer: 'True (Vacuously)',
        hint: 'Can you find a counterexample in an empty domain?',
        explanation: 'No elements exist in ∅ to disprove P(x), so universal claims over ∅ are vacuously TRUE.',
        xp: 90
    },
    {
        id: 'qnt_10',
        categoryId: 'cat_quantifiers',
        title: 'Goldbach\'s Conjecture Logic Representation',
        type: 'multiple_choice',
        prompt: 'Select the FOL formula for "Every even integer n > 2 is the sum of two primes p and q":',
        options: [
            '∀n ((Even(n) ∧ n > 2) → ∃p ∃q (Prime(p) ∧ Prime(q) ∧ n = p + q))',
            '∃n ((Even(n) ∧ n > 2) ∧ ∀p ∀q (Prime(p) ∧ Prime(q) → n = p + q))',
            '∀n ∃p ∃q (Even(n) → n = p + q)',
            '∀n (Even(n) ∧ n = p + q)'
        ],
        correctAnswer: '∀n ((Even(n) ∧ n > 2) → ∃p ∃q (Prime(p) ∧ Prime(q) ∧ n = p + q))',
        hint: 'Identify universal condition on n and existential search for p and q.',
        explanation: '∀n ((Even(n) ∧ n > 2) → ∃p ∃q (Prime(p) ∧ Prime(q) ∧ n = p + q)) models Goldbach\'s Conjecture.',
        xp: 100
    },

    // ==========================================
    // CATEGORY 6: VISUAL PREDICATE REALM (10 Challenges)
    // ==========================================
    {
        id: 'pred_1',
        categoryId: 'cat_predicate_realm',
        title: 'Red Shapes Search',
        type: 'predicate_world',
        learningInfo: 'In the <strong>Visual Predicate Realm</strong>, domain objects are visual shapes in a grid. Predicates like <code>Red(x)</code>, <code>Square(x)</code>, and <code>Circle(x)</code> evaluate against shape properties.',
        prompt: 'Evaluate the predicate expression over the current world:',
        formula: '∃x (Red(x) ∧ Square(x))',
        world: [
            { id: 1, type: 'square', color: 'red', x: 0, y: 0 },
            { id: 2, type: 'circle', color: 'blue', x: 1, y: 0 }
        ],
        options: ['True', 'False'],
        correctAnswer: 'True',
        hint: 'Is there at least one shape that is BOTH red AND a square?',
        explanation: 'Object 1 is a Red Square, making ∃x (Red(x) ∧ Square(x)) TRUE.',
        xp: 60
    },
    {
        id: 'pred_2',
        categoryId: 'cat_predicate_realm',
        title: 'All Circles Check',
        type: 'predicate_world',
        learningInfo: 'When evaluating universal statements <code>∀x (Circle(x) → Blue(x))</code>, non-circle objects do not falsify the claim because the premise <code>Circle(x)</code> is False for them.',
        prompt: 'Evaluate: Are ALL shapes in this domain blue circles?',
        formula: '∀x (Circle(x) → Blue(x))',
        world: [
            { id: 1, type: 'circle', color: 'blue', x: 0, y: 0 },
            { id: 2, type: 'circle', color: 'blue', x: 1, y: 0 },
            { id: 3, type: 'square', color: 'red', x: 2, y: 0 }
        ],
        options: ['True', 'False'],
        correctAnswer: 'True',
        hint: 'Check each circle in the world: Is it blue?',
        explanation: 'All circles are blue. The square is vacuously true.',
        xp: 65
    },
    {
        id: 'pred_3',
        categoryId: 'cat_predicate_realm',
        title: 'Strict Universal World',
        type: 'predicate_world',
        learningInfo: 'A universal claim <code>∀x Red(x)</code> fails if even a single non-red domain object is found.',
        prompt: 'Evaluate the expression:',
        formula: '∀x Red(x)',
        world: [
            { id: 1, type: 'circle', color: 'red', x: 0, y: 0 },
            { id: 2, type: 'square', color: 'blue', x: 1, y: 0 }
        ],
        options: ['True', 'False'],
        correctAnswer: 'False',
        hint: 'Is EVERY single object in the world red?',
        explanation: 'Object 2 is blue, so ∀x Red(x) is False.',
        xp: 65
    },
    {
        id: 'pred_4',
        categoryId: 'cat_predicate_realm',
        title: 'World Builder: Create a Green Triangle',
        type: 'predicate_world_builder',
        prompt: 'Alter the grid objects so that ∃x (Green(x) ∧ Triangle(x)) becomes TRUE.',
        formula: '∃x (Green(x) ∧ Triangle(x))',
        world: [
            { id: 1, type: 'square', color: 'red', x: 0, y: 0 },
            { id: 2, type: 'circle', color: 'blue', x: 1, y: 0 }
        ],
        hint: 'Click an object in the grid to change its shape to Triangle and color to Green.',
        explanation: 'Adding or editing a green triangle satisfies the existential query.',
        xp: 75
    },
    {
        id: 'pred_5',
        categoryId: 'cat_predicate_realm',
        title: 'No Red Circles',
        type: 'predicate_world',
        prompt: 'Evaluate the expression:',
        formula: '¬∃x (Circle(x) ∧ Red(x))',
        world: [
            { id: 1, type: 'circle', color: 'blue', x: 0, y: 0 },
            { id: 2, type: 'square', color: 'red', x: 1, y: 0 }
        ],
        options: ['True', 'False'],
        correctAnswer: 'True',
        hint: 'Are there zero red circles in the world?',
        explanation: 'The circle is blue and the red shape is a square. Expression is True.',
        xp: 70
    },
    {
        id: 'pred_6',
        categoryId: 'cat_predicate_realm',
        title: 'World Builder: Pure Red Domain',
        type: 'predicate_world_builder',
        prompt: 'Modify all shapes in the world so that ∀x Red(x) evaluates to TRUE.',
        formula: '∀x Red(x)',
        world: [
            { id: 1, type: 'circle', color: 'red', x: 0, y: 0 },
            { id: 2, type: 'square', color: 'blue', x: 1, y: 0 }
        ],
        hint: 'Click Object 2 to change its color to Red.',
        explanation: 'When all objects are Red, ∀x Red(x) holds.',
        xp: 75
    },
    {
        id: 'pred_7',
        categoryId: 'cat_predicate_realm',
        title: 'Disjunctive Property World',
        type: 'predicate_world',
        prompt: 'Evaluate:',
        formula: '∀x (Square(x) ∨ Blue(x))',
        world: [
            { id: 1, type: 'square', color: 'red', x: 0, y: 0 },
            { id: 2, type: 'circle', color: 'blue', x: 1, y: 0 },
            { id: 3, type: 'square', color: 'blue', x: 2, y: 0 }
        ],
        options: ['True', 'False'],
        correctAnswer: 'True',
        hint: 'Obj 1 is Square. Obj 2 is Blue. Obj 3 is both.',
        explanation: 'Every object is either a square or blue (or both). True.',
        xp: 80
    },
    {
        id: 'pred_8',
        categoryId: 'cat_predicate_realm',
        title: 'World Builder: Diversity Condition',
        type: 'predicate_world_builder',
        prompt: 'Adjust world so ∃x Red(x) ∧ ∃y Blue(x) ∧ ∃z Green(x) holds.',
        formula: '∃x Red(x) ∧ ∃y Blue(y) ∧ ∃z Green(z)',
        world: [
            { id: 1, type: 'circle', color: 'red', x: 0, y: 0 },
            { id: 2, type: 'square', color: 'blue', x: 1, y: 0 }
        ],
        hint: 'Change or add an object so that red, blue, and green objects all exist.',
        explanation: 'Having red, blue, and green shapes satisfies the triple existential condition.',
        xp: 85
    },
    {
        id: 'pred_9',
        categoryId: 'cat_predicate_realm',
        title: 'Complex World Evaluation',
        type: 'predicate_world',
        prompt: 'Evaluate: ∀x (Circle(x) → ¬Red(x)) ∧ ∃y (Square(y) ∧ Red(y))',
        formula: '∀x (Circle(x) → ¬Red(x)) ∧ ∃y (Square(y) ∧ Red(y))',
        world: [
            { id: 1, type: 'circle', color: 'blue', x: 0, y: 0 },
            { id: 2, type: 'square', color: 'red', x: 1, y: 0 }
        ],
        options: ['True', 'False'],
        correctAnswer: 'True',
        hint: 'Part 1: No circles are red (True). Part 2: At least one square is red (True).',
        explanation: 'Both conjuncts hold, making the entire expression True.',
        xp: 90
    },
    {
        id: 'pred_10',
        categoryId: 'cat_predicate_realm',
        title: 'Master World Builder Challenge',
        type: 'predicate_world_builder',
        prompt: 'Make the formula TRUE: ∀x (Red(x) → Square(x)) ∧ ∀y (Square(y) → Red(y))',
        formula: '∀x (Red(x) → Square(x)) ∧ ∀y (Square(y) → Red(y))',
        world: [
            { id: 1, type: 'circle', color: 'red', x: 0, y: 0 },
            { id: 2, type: 'square', color: 'blue', x: 1, y: 0 }
        ],
        hint: 'This requires Red(x) ↔ Square(x): Every red shape must be a square, and every square must be red!',
        explanation: 'Ensure all red objects are squares and all squares are red.',
        xp: 100
    },

    // ==========================================
    // CATEGORY 7: SET THEORY FOUNDATIONS & OPERATIONS (10 Challenges)
    // ==========================================
    {
        id: 'set_1',
        categoryId: 'cat_set_theory',
        title: 'What is a Set? (Membership ∈)',
        type: 'multiple_choice',
        learningInfo: 'A <strong>Set</strong> is an unordered collection of distinct objects, called <em>elements</em>. We write <code>x ∈ A</code> to state that <em>x</em> belongs to set <em>A</em>.',
        prompt: 'Given set A = {2, 4, 6, 8}, which statement is correct?',
        options: ['4 ∈ A and 5 ∉ A', '5 ∈ A', '4 ∉ A', 'A ∈ 4'],
        correctAnswer: '4 ∈ A and 5 ∉ A',
        hint: 'Look for elements listed inside the curly braces of set A.',
        explanation: '4 is in {2, 4, 6, 8}, so 4 ∈ A. 5 is not listed, so 5 ∉ A.',
        xp: 60
    },
    {
        id: 'set_2',
        categoryId: 'cat_set_theory',
        title: 'Subsets & Proper Subsets',
        type: 'multiple_choice',
        learningInfo: 'Set <em>A</em> is a <strong>Subset</strong> of <em>B</em> (written <code>A ⊆ B</code>) if EVERY element of <em>A</em> is also in <em>B</em>. If <code>A ⊆ B</code> and <code>A ≠ B</code>, then <em>A</em> is a <strong>Proper Subset</strong> (written <code>A ⊂ B</code>).',
        prompt: 'Given A = {1, 2} and B = {1, 2, 3}, which relation holds?',
        options: ['A ⊆ B and A ⊂ B', 'B ⊆ A', 'A = B', 'A ∉ B'],
        correctAnswer: 'A ⊆ B and A ⊂ B',
        hint: 'Check if every element of A is inside B, and if B contains extra elements.',
        explanation: 'All elements of A are in B, and B has 3, so A ⊆ B and A ⊂ B.',
        xp: 65
    },
    {
        id: 'set_3',
        categoryId: 'cat_set_theory',
        title: 'The Power Set 𝒫(S)',
        type: 'multiple_choice',
        learningInfo: 'The <strong>Power Set 𝒫(S)</strong> is the set of ALL subsets of <em>S</em>. If set <em>S</em> has <em>n</em> elements, its power set 𝒫(S) has <strong>2ⁿ</strong> elements.',
        prompt: 'How many elements are in the power set 𝒫(S) of S = {a, b, c}?',
        options: ['8', '3', '6', '9'],
        correctAnswer: '8',
        hint: 'S has n = 3 elements. Calculate 2³.',
        explanation: '|S| = 3, so |𝒫(S)| = 2³ = 8 subsets.',
        xp: 70
    },
    {
        id: 'set_4',
        categoryId: 'cat_set_theory',
        title: 'Set Union (∪)',
        type: 'multiple_choice',
        prompt: 'Calculate A ∪ B for A = {1, 2, 3} and B = {3, 4, 5}.',
        options: ['{1, 2, 3, 4, 5}', '{3}', '{1, 2, 4, 5}', '{1, 2, 3, 3, 4, 5}'],
        correctAnswer: '{1, 2, 3, 4, 5}',
        hint: 'Union (∪) combines ALL elements from both sets without duplicates.',
        explanation: 'A ∪ B = {1, 2, 3, 4, 5}.',
        xp: 65
    },
    {
        id: 'set_5',
        categoryId: 'cat_set_theory',
        title: 'Set Intersection (∩)',
        type: 'multiple_choice',
        prompt: 'Calculate A ∩ B for A = {1, 2, 3, 4} and B = {3, 4, 5, 6}.',
        options: ['{3, 4}', '{1, 2, 3, 4, 5, 6}', '{1, 2, 5, 6}', '∅'],
        correctAnswer: '{3, 4}',
        hint: 'Intersection (∩) takes ONLY elements shared by BOTH sets.',
        explanation: '3 and 4 are in both A and B, so A ∩ B = {3, 4}.',
        xp: 65
    },
    {
        id: 'set_6',
        categoryId: 'cat_set_theory',
        title: 'Set Difference (A \\ B)',
        type: 'multiple_choice',
        prompt: 'Calculate A \\ B for A = {1, 2, 3, 4} and B = {3, 4, 5}.',
        options: ['{1, 2}', '{5}', '{3, 4}', '{1, 2, 5}'],
        correctAnswer: '{1, 2}',
        hint: 'A \\ B keeps elements in A after removing anything in B.',
        explanation: 'Removing 3 and 4 from A leaves {1, 2}.',
        xp: 70
    },
    {
        id: 'set_7',
        categoryId: 'cat_set_theory',
        title: 'Symmetric Difference (A Δ B)',
        type: 'multiple_choice',
        prompt: 'Calculate A Δ B for A = {1, 2, 3} and B = {2, 3, 4}.',
        options: ['{1, 4}', '{2, 3}', '{1, 2, 3, 4}', '∅'],
        correctAnswer: '{1, 4}',
        hint: 'A Δ B = (A ∪ B) \\ (A ∩ B). Elements in A or B, but NOT both.',
        explanation: 'Elements in A or B but not both are 1 and 4. A Δ B = {1, 4}.',
        xp: 75
    },
    {
        id: 'set_8',
        categoryId: 'cat_set_theory',
        title: 'Cartesian Product (A × B)',
        type: 'multiple_choice',
        prompt: 'Find Cartesian Product A × B for A = {x, y} and B = {1, 2}.',
        options: [
            '{(x,1), (x,2), (y,1), (y,2)}',
            '{(x,y), (1,2)}',
            '{x, y, 1, 2}',
            '{(1,x), (2,y)}'
        ],
        correctAnswer: '{(x,1), (x,2), (y,1), (y,2)}',
        hint: 'Cartesian product is the set of all ordered pairs (a, b) where a ∈ A and b ∈ B.',
        explanation: 'A × B contains all 2 × 2 = 4 ordered pairs.',
        xp: 80
    },
    {
        id: 'set_9',
        categoryId: 'cat_set_theory',
        title: 'De Morgan\'s Law for Sets',
        type: 'multiple_choice',
        prompt: 'What is the set complement of (A ∪ B) under universal set U?',
        options: ['Ā ∩ B̄', 'Ā ∪ B̄', 'A \\ B', 'A ∩ B'],
        correctAnswer: 'Ā ∩ B̄',
        hint: 'De Morgan\'s Set Law: The complement of a union is the intersection of complements!',
        explanation: '(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ.',
        xp: 85
    },
    {
        id: 'set_10',
        categoryId: 'cat_set_theory',
        title: 'Advanced Set Equivalence Proof',
        type: 'multiple_choice',
        prompt: 'Which expression is equivalent to A ∩ (B \\ C)?',
        options: ['(A ∩ B) \\ C', '(A ∪ B) \\ C', '(A \\ C) ∪ B', 'A ∩ B ∩ C'],
        correctAnswer: '(A ∩ B) \\ C',
        hint: 'B \\ C = B ∩ Cᶜ. So A ∩ (B ∩ Cᶜ) = (A ∩ B) ∩ Cᶜ = (A ∩ B) \\ C.',
        explanation: 'A ∩ (B \\ C) represents elements in A and B that are not in C.',
        xp: 90
    },

    // ==========================================
    // CATEGORY 8: FUNCTIONS, INJECTIONS & SURJECTIONS (10 Challenges)
    // ==========================================
    {
        id: 'fn_1',
        categoryId: 'cat_functions',
        title: 'Function Definition: Domain & Codomain',
        type: 'multiple_choice',
        learningInfo: 'A <strong>Function</strong> <code>f: X → Y</code> maps every element in <strong>Domain X</strong> to EXACTLY ONE element in <strong>Codomain Y</strong>.',
        prompt: 'Let f: {1, 2, 3} → {A, B, C} be f(1)=A, f(2)=B, f(3)=B. What is the Range of f?',
        options: ['{A, B}', '{A, B, C}', '{1, 2, 3}', '{A}'],
        correctAnswer: '{A, B}',
        hint: 'Range is the set of values in the codomain that actually get mapped to.',
        explanation: 'Outputs are A and B. Range is {A, B}.',
        xp: 60
    },
    {
        id: 'fn_2',
        categoryId: 'cat_functions',
        title: 'Injective Functions (One-to-One)',
        type: 'multiple_choice',
        learningInfo: 'A function <code>f: X → Y</code> is <strong>Injective (One-to-One)</strong> if distinct inputs map to distinct outputs: <code>f(a) = f(b) ⇒ a = b</code>.',
        prompt: 'Is f: {1, 2, 3} → {a, b, c, d} given by f(1)=a, f(2)=c, f(3)=d Injective?',
        options: ['Yes, Injective', 'No, Not Injective'],
        correctAnswer: 'Yes, Injective',
        hint: 'Does any element in the codomain get mapped to more than once?',
        explanation: 'Outputs are a, c, d (all unique). f is Injective.',
        xp: 65
    },
    {
        id: 'fn_3',
        categoryId: 'cat_functions',
        title: 'Injective Failure Test',
        type: 'multiple_choice',
        learningInfo: 'A function fails injectivity if two distinct inputs map to the exact same output value.',
        prompt: 'Is f: ℝ → ℝ defined by f(x) = x² Injective over real numbers?',
        options: ['No, because f(2) = f(-2) = 4', 'Yes, because every real number squares to a real number', 'Yes, it passes horizontal line test', 'Undefined'],
        correctAnswer: 'No, because f(2) = f(-2) = 4',
        hint: 'Can two different input numbers give the same squared result?',
        explanation: 'f(2) = 4 and f(-2) = 4. Since 2 ≠ -2, f is NOT Injective.',
        xp: 70
    },
    {
        id: 'fn_4',
        categoryId: 'cat_functions',
        title: 'Surjective Functions (Onto)',
        type: 'multiple_choice',
        learningInfo: 'A function <code>f: X → Y</code> is <strong>Surjective (Onto)</strong> if EVERY element in Codomain Y is mapped to by at least one element in Domain X.',
        prompt: 'Let f: {1, 2, 3, 4} → {A, B} with f(1)=A, f(2)=A, f(3)=B, f(4)=B. Is f Surjective?',
        options: ['Yes, Surjective', 'No, Not Surjective'],
        correctAnswer: 'Yes, Surjective',
        hint: 'Does every element of Codomain {A, B} get hit by at least one input?',
        explanation: 'Range {A, B} = Codomain {A, B}, so f is Surjective.',
        xp: 70
    },
    {
        id: 'fn_5',
        categoryId: 'cat_functions',
        title: 'Surjective Real Function Test',
        type: 'multiple_choice',
        prompt: 'Is f: ℝ → ℝ defined by f(x) = 2x + 1 Surjective over real numbers?',
        options: ['Yes, Surjective', 'No, Not Surjective'],
        correctAnswer: 'Yes, Surjective',
        hint: 'For any target real number y, can we solve y = 2x + 1 for x?',
        explanation: 'Choosing x = (y - 1)/2 gives f(x) = y. Every y is covered, so f is Surjective.',
        xp: 75
    },
    {
        id: 'fn_6',
        categoryId: 'cat_functions',
        title: 'Bijective Functions & Inverses',
        type: 'multiple_choice',
        prompt: 'Which property is required for a function f: X → Y to have an inverse f⁻¹?',
        options: ['It must be Bijective', 'It must be Injective only', 'It must be Surjective only', 'Domain must equal Codomain'],
        correctAnswer: 'It must be Bijective',
        hint: 'An inverse requires a perfect 1-to-1 matching in both directions.',
        explanation: 'Only Bijective functions have well-defined inverse functions.',
        xp: 80
    },
    {
        id: 'fn_7',
        categoryId: 'cat_functions',
        title: 'Function Composition (g ∘ f)',
        type: 'multiple_choice',
        prompt: 'Let f(x) = x + 3 and g(x) = 2x. Calculate (g ∘ f)(4).',
        options: ['14', '11', '10', '24'],
        correctAnswer: '14',
        hint: '(g ∘ f)(x) means g(f(x)). First evaluate f(4), then plug result into g.',
        explanation: 'f(4) = 7. Then g(7) = 2(7) = 14.',
        xp: 75
    },
    {
        id: 'fn_8',
        categoryId: 'cat_functions',
        title: 'Pigeonhole Principle Application',
        type: 'multiple_choice',
        prompt: 'If 10 pigeons fly into 9 pigeonholes, what can we deduce about function f: Pigeons → Holes?',
        options: ['f cannot be Injective', 'f cannot be Surjective', 'f is Bijective', 'f is constant'],
        correctAnswer: 'f cannot be Injective',
        hint: '|Domain| = 10 > |Codomain| = 9. Must at least two pigeons share a hole?',
        explanation: 'By Pigeonhole Principle, at least two pigeons share a hole, so f fails injectivity.',
        xp: 80
    },
    {
        id: 'fn_9',
        categoryId: 'cat_functions',
        title: 'Composition Preserving Injectivity',
        type: 'multiple_choice',
        prompt: 'If f: A → B and g: B → C are both Injective, what can be said about (g ∘ f): A → C?',
        options: ['(g ∘ f) is guaranteed to be Injective', '(g ∘ f) is Surjective', '(g ∘ f) is constant', 'No conclusion possible'],
        correctAnswer: '(g ∘ f) is guaranteed to be Injective',
        hint: 'If g(f(x1)) = g(f(x2)), since g is injective, f(x1) = f(x2). Since f is injective, x1 = x2!',
        explanation: 'The composition of two injective functions is always injective.',
        xp: 85
    },
    {
        id: 'fn_10',
        categoryId: 'cat_functions',
        title: 'Function Realm Master Challenge',
        type: 'multiple_choice',
        prompt: 'Let f: ℤ → ℤ be f(n) = 3n. Classify f over integers:',
        options: [
            'Injective, but NOT Surjective',
            'Surjective, but NOT Injective',
            'Bijective',
            'Neither Injective nor Surjective'
        ],
        correctAnswer: 'Injective, but NOT Surjective',
        hint: 'Check injectivity: 3n1 = 3n2 ⇒ n1 = n2. Check surjectivity: Can we output y = 1 over integers?',
        explanation: 'f is Injective (3n1 = 3n2 ⇒ n1=n2). But not Surjective because 1 has no integer pre-image.',
        xp: 100
    },

    // ==========================================
    // CATEGORY 9: CARDINALITY & INFINITE SETS (10 Challenges)
    // ==========================================
    {
        id: 'card_1',
        categoryId: 'cat_cardinality',
        title: 'Finite Cardinality & Inclusion-Exclusion',
        type: 'multiple_choice',
        learningInfo: '<strong>Cardinality |A|</strong> measures the number of elements in set <em>A</em>. The <strong>Principle of Inclusion-Exclusion</strong> states: <code>|A ∪ B| = |A| + |B| - |A ∩ B|</code>.',
        prompt: 'If |A| = 10, |B| = 15, and |A ∩ B| = 4, what is |A ∪ B|?',
        options: ['21', '25', '29', '19'],
        correctAnswer: '21',
        hint: 'Apply |A ∪ B| = 10 + 15 - 4.',
        explanation: '10 + 15 - 4 = 21.',
        xp: 60
    },
    {
        id: 'card_2',
        categoryId: 'cat_cardinality',
        title: 'Equinumerous Sets via Bijection',
        type: 'multiple_choice',
        learningInfo: 'Two sets <em>A</em> and <em>B</em> have the EXACT SAME cardinality (written <code>|A| = |B|</code>) if and only if there exists a <strong>Bijective function f: A → B</strong> between them!',
        prompt: 'How do mathematicians prove two infinite sets have the exact same size?',
        options: [
            'By constructing a Bijective mapping between them',
            'By counting elements one by one',
            'By checking if one set is a subset of the other',
            'Infinite sets cannot be compared'
        ],
        correctAnswer: 'By constructing a Bijective mapping between them',
        hint: 'Georg Cantor defined equal cardinality via 1-to-1 correspondences.',
        explanation: '|A| = |B| iff there exists a bijection f: A → B.',
        xp: 65
    },
    {
        id: 'card_3',
        categoryId: 'cat_cardinality',
        title: 'Countably Infinite Sets (ℵ₀)',
        type: 'multiple_choice',
        learningInfo: 'A set is <strong>Countably Infinite</strong> (cardinality <strong>ℵ₀</strong>) if its elements can be put into 1-to-1 correspondence with Natural Numbers ℕ.',
        prompt: 'What is the cardinality of the set of all EVEN natural numbers E = {2, 4, 6, 8, ...}?',
        options: ['ℵ₀ (Same size as all natural numbers ℕ!)', 'Half of ℵ₀', 'Finite', 'Uncountable'],
        correctAnswer: 'ℵ₀ (Same size as all natural numbers ℕ!)',
        hint: 'Consider the bijection f(n) = 2n between ℕ and E.',
        explanation: 'f(n) = 2n is a bijection from ℕ to E, proving |E| = |ℕ| = ℵ₀!',
        xp: 70
    },
    {
        id: 'card_4',
        categoryId: 'cat_cardinality',
        title: 'Hilbert\'s Grand Hotel Paradox',
        type: 'multiple_choice',
        prompt: 'Can Hilbert\'s fully occupied infinite hotel accommodate 1 new guest?',
        options: ['Yes, by moving guest n to room n+1', 'No, all rooms are full', 'Only if someone checks out', 'Undefined'],
        correctAnswer: 'Yes, by moving guest n to room n+1',
        hint: 'Infinity + 1 = Infinity (ℵ₀ + 1 = ℵ₀).',
        explanation: 'Shifting every guest n → n+1 frees room 1 for the new guest. ℵ₀ + 1 = ℵ₀.',
        xp: 75
    },
    {
        id: 'card_5',
        categoryId: 'cat_cardinality',
        title: 'Countability of Integers ℤ',
        type: 'multiple_choice',
        prompt: 'Is the set of ALL integers ℤ = {..., -2, -1, 0, 1, 2, ...} Countable?',
        options: ['Yes, ℤ is Countably Infinite (ℵ₀)', 'No, ℤ is Uncountable', 'ℤ is finite', 'Depends on zero'],
        correctAnswer: 'Yes, ℤ is Countably Infinite (ℵ₀)',
        hint: 'Interleave positive and negative numbers: 0 → 1, 1 → 2, -1 → 3, 2 → 4, -2 → 5...',
        explanation: 'Interleaving 0, 1, -1, 2, -2... constructs a bijection with ℕ, so |ℤ| = ℵ₀.',
        xp: 80
    },
    {
        id: 'card_6',
        categoryId: 'cat_cardinality',
        title: 'Countability of Rational Numbers ℚ',
        type: 'multiple_choice',
        prompt: 'Are rational numbers ℚ (fractions p/q) Countable or Uncountable?',
        options: ['Countably Infinite (ℵ₀)', 'Uncountably Infinite', 'Finite', 'Undefined'],
        correctAnswer: 'Countably Infinite (ℵ₀)',
        hint: 'Cantor arranged fractions in a 2D grid and enumerated them along diagonals!',
        explanation: 'Cantor\'s zig-zag diagonal enumeration proves |ℚ| = ℵ₀.',
        xp: 85
    },
    {
        id: 'card_7',
        categoryId: 'cat_cardinality',
        title: 'Cantor\'s Diagonal Argument',
        type: 'multiple_choice',
        prompt: 'What does Cantor\'s Diagonal Argument prove about the real numbers ℝ?',
        options: ['ℝ is UNCOUNTABLY Infinite (|ℝ| > ℵ₀)', 'ℝ is Countable', 'ℝ is finite', 'ℝ = ℚ'],
        correctAnswer: 'ℝ is UNCOUNTABLY Infinite (|ℝ| > ℵ₀)',
        hint: 'It proves no list of real numbers can ever be complete.',
        explanation: 'Cantor proved real numbers cannot be mapped 1-to-1 with ℕ. |ℝ| = 2^ℵ₀.',
        xp: 90
    },
    {
        id: 'card_8',
        categoryId: 'cat_cardinality',
        title: 'Cantor\'s Theorem (|A| < |𝒫(A)|)',
        type: 'multiple_choice',
        prompt: 'Cantor\'s Theorem states that for ANY set A (finite or infinite):',
        options: ['|A| < |𝒫(A)| (The power set is strictly larger!)', '|A| = |𝒫(A)|', '|A| > |𝒫(A)|', '|𝒫(A)| = 2|A|'],
        correctAnswer: '|A| < |𝒫(A)| (The power set is strictly larger!)',
        hint: 'Can any set be put in bijection with its power set?',
        explanation: 'Cantor\'s Theorem proves no set A can be mapped surjectively onto its power set 𝒫(A).',
        xp: 95
    },
    {
        id: 'card_9',
        categoryId: 'cat_cardinality',
        title: 'The Continuum Hypothesis',
        type: 'multiple_choice',
        prompt: 'The Continuum Hypothesis posits that there is NO set with cardinality strictly between:',
        options: ['ℵ₀ (Integers) and 2^ℵ₀ (Reals)', '0 and 1', 'Finite and ℵ₀', 'ℵ₁ and ℵ₂'],
        correctAnswer: 'ℵ₀ (Integers) and 2^ℵ₀ (Reals)',
        hint: 'Formulated by Cantor in 1878; proven independent of ZFC set theory by Gödel & Cohen.',
        explanation: 'Continuum Hypothesis states 2^ℵ₀ = ℵ₁. There is no infinite set size between ℕ and ℝ.',
        xp: 95
    },
    {
        id: 'card_10',
        categoryId: 'cat_cardinality',
        title: 'Infinite Hierarchy of Infinities',
        type: 'multiple_choice',
        prompt: 'Because |A| < |𝒫(A)| holds for all sets, what exists in mathematics?',
        options: [
            'An infinitely ascending tower of strictly larger infinities: ℵ₀ < 2^ℵ₀ < 2^(2^ℵ₀)...',
            'Only two sizes of infinity',
            'A largest possible infinite set',
            'All infinities are equal'
        ],
        correctAnswer: 'An infinitely ascending tower of strictly larger infinities: ℵ₀ < 2^ℵ₀ < 2^(2^ℵ₀)...',
        hint: 'Repeatedly taking power sets 𝒫(𝒫(𝒫(ℕ))) generates larger infinities endlessly!',
        explanation: 'Iterating power sets creates an endless sequence of strictly larger cardinal infinities.',
        xp: 100
    },

    // ==========================================
    // CATEGORY 10: MASTER REALM: PARADOXES & ANTINOMIES (10 Challenges)
    // ==========================================
    {
        id: 'mst_1',
        categoryId: 'cat_master_realm',
        title: 'Knights & Knaves: The Gatekeeper',
        type: 'multiple_choice',
        learningInfo: 'In <strong>Knights & Knaves</strong> puzzles, <strong>Knights</strong> ALWAYS tell the truth, while <strong>Knaves</strong> ALWAYS lie.',
        prompt: 'Person A says: "At least one of us is a Knave." What are A and B?',
        options: ['A is a Knight, B is a Knave', 'A is a Knave, B is a Knight', 'Both are Knights', 'Both are Knaves'],
        correctAnswer: 'A is a Knight, B is a Knave',
        hint: 'If A were a Knave, his statement would be false, meaning BOTH are Knights (contradiction!).',
        explanation: 'A is a Knight (tells truth). Statement is true: at least one is a Knave. B must be the Knave!',
        xp: 80
    },
    {
        id: 'mst_2',
        categoryId: 'cat_master_realm',
        title: 'The Liar Paradox',
        type: 'multiple_choice',
        learningInfo: 'Self-referential sentences like "This statement is false" create logical paradoxes because neither True nor False can be consistently assigned to them.',
        prompt: 'Consider the sentence L: "This sentence is False." What is its logical status?',
        options: ['Paradox (Neither True nor False)', 'True', 'False', 'Tautology'],
        correctAnswer: 'Paradox (Neither True nor False)',
        hint: 'If L is True, then by its content L is False. If L is False, then its claim holds, so L is True!',
        explanation: 'The Liar sentence creates a self-referential contradiction.',
        xp: 80
    },
    {
        id: 'mst_3',
        categoryId: 'cat_master_realm',
        title: 'Russell\'s Paradox (R = {x | x ∉ x})',
        type: 'multiple_choice',
        learningInfo: '<strong>Russell\'s Paradox</strong>: Let <em>R</em> be the set of all sets that do NOT contain themselves. Is <code>R ∈ R</code>?',
        prompt: 'If R = {x | x ∉ x}, does R contain itself (R ∈ R)?',
        options: ['R ∈ R ⇔ R ∉ R (Paradox!)', 'Yes, R ∈ R', 'No, R ∉ R', 'R is empty'],
        correctAnswer: 'R ∈ R ⇔ R ∉ R (Paradox!)',
        hint: 'If R ∈ R, then by definition R ∉ R. If R ∉ R, then R satisfies membership so R ∈ R!',
        explanation: 'Russell\'s Paradox showed that Naive Set Theory is inconsistent.',
        xp: 90
    },
    {
        id: 'mst_4',
        categoryId: 'cat_master_realm',
        title: 'The Barber Paradox',
        type: 'multiple_choice',
        prompt: 'A barber in a town shaves all men who do NOT shave themselves. Who shaves the barber?',
        options: ['It is a logical contradiction (No such barber can exist)', 'The barber shaves himself', 'The mayor shaves the barber', 'The barber is bald'],
        correctAnswer: 'It is a logical contradiction (No such barber can exist)',
        hint: 'The Barber Paradox is an informal natural language framing of Russell\'s Paradox.',
        explanation: 'If he shaves himself, he shouldn\'t. If he doesn\'t shave himself, he must. Contradiction!',
        xp: 85
    },
    {
        id: 'mst_5',
        categoryId: 'cat_master_realm',
        title: 'The Sorites Paradox (Heap of Sand)',
        type: 'multiple_choice',
        prompt: 'Removing 1 grain of sand from a heap leaves a heap. 1,000,000 grains = heap. By induction, 1 grain = heap. What causes this paradox?',
        options: ['Vagueness of the predicate "Heap"', 'Mathematical induction is invalid', '1 grain is a heap', 'Sand cannot be counted'],
        correctAnswer: 'Vagueness of the predicate "Heap"',
        hint: 'The Sorites paradox highlights boundary issues in vague natural language predicates.',
        explanation: 'Natural language predicates like "heap" lack precise boundary cutoffs in classical logic.',
        xp: 85
    },
    {
        id: 'mst_6',
        categoryId: 'cat_master_realm',
        title: 'Knights & Knaves: Identical Twins',
        type: 'multiple_choice',
        prompt: 'A says: "B is a Knight." B says: "A and I are opposite types." What are A and B?',
        options: ['Both are Knaves', 'Both are Knights', 'A is Knight, B is Knave', 'A is Knave, B is Knight'],
        correctAnswer: 'Both are Knaves',
        hint: 'If A were Knight, B would be Knight. But B\'s claim (opposites) would be false!',
        explanation: 'If A is Knave, A\'s statement is false ⇒ B is Knave. B\'s statement ("opposites") is False.',
        xp: 90
    },
    {
        id: 'mst_7',
        categoryId: 'cat_master_realm',
        title: 'Cantor\'s Paradox (Set of All Sets)',
        type: 'multiple_choice',
        prompt: 'If a "Set of All Sets" U existed, its power set 𝒫(U) would be a subset of U, implying |𝒫(U)| ≤ |U|. Why is this a paradox?',
        options: [
            'It contradicts Cantor\'s Theorem (|U| < |𝒫(U)|)',
            'U cannot have a power set',
            'U would be empty',
            '|U| is negative'
        ],
        correctAnswer: 'It contradicts Cantor\'s Theorem (|U| < |𝒫(U)|)',
        hint: 'Cantor\'s Theorem dictates that ANY power set is strictly larger than its base set!',
        explanation: 'Cantor\'s Paradox proves that the "Set of All Sets" cannot exist.',
        xp: 95
    },
    {
        id: 'mst_8',
        categoryId: 'cat_master_realm',
        title: 'The Halting Problem Analogy',
        type: 'multiple_choice',
        prompt: 'Alan Turing proved that no general algorithm can decide whether an arbitrary program halts. What logic proof technique did Turing use?',
        options: ['Diagonalization / Self-Reference Paradox', 'Direct Proof', 'Proof by Example', 'Truth Table Enumeration'],
        correctAnswer: 'Diagonalization / Self-Reference Paradox',
        hint: 'Turing created a program H_opposite(P) that does the opposite of what decision program H predicts!',
        explanation: 'Turing used self-referential diagonalization identical to Cantor\'s and Russell\'s paradoxes.',
        xp: 95
    },
    {
        id: 'mst_9',
        categoryId: 'cat_master_realm',
        title: 'Gödel\'s First Incompleteness Theorem',
        type: 'multiple_choice',
        prompt: 'Gödel\'s Incompleteness Theorem demonstrates that any consistent mathematical system capable of arithmetic:',
        options: [
            'Contains true statements that CANNOT be proven within the system',
            'Is completely solvable by computer',
            'Has no prime numbers',
            'Is inherently contradictory'
        ],
        correctAnswer: 'Contains true statements that CANNOT be proven within the system',
        hint: 'Gödel constructed a self-referential statement: "This formula cannot be proven in system T."',
        explanation: 'Gödel showed formal axiomatic systems cannot be both complete and consistent.',
        xp: 100
    },
    {
        id: 'mst_10',
        categoryId: 'cat_master_realm',
        title: 'The Grandmaster Logic Trial',
        type: 'multiple_choice',
        prompt: 'You stand before 3 doors: Red, Blue, Green. Exactly 1 door holds the prize. Door Red says: "The prize is behind Green." Door Blue says: "The prize is NOT behind Blue." Door Green says: "Red is lying." If AT MOST ONE sign is true, where is the prize?',
        options: ['Behind Blue Door', 'Behind Red Door', 'Behind Green Door', 'No prize exists'],
        correctAnswer: 'Behind Blue Door',
        hint: 'Test prize locations: If prize is behind Blue, Red is False, Blue is False ("NOT Blue" false), Green is True. Exactly 1 sign True!',
        explanation: 'If prize is behind Blue: Red is False. Blue is False. Green is True. Exactly 1 sign is True! Prize is behind Blue.',
        xp: 150
    },

    // ==========================================
    // CATEGORY 11: LIMITS & CONTINUITY (10 Challenges)
    // ==========================================
    {
        id: 'lim_1',
        categoryId: 'cat_limits',
        title: 'What is a Limit? (Direct Substitution)',
        type: 'multiple_choice',
        learningInfo: 'The <strong>Limit</strong> <code>lim_{x → a} f(x) = L</code> describes the value that a function <em>f(x)</em> approaches as <em>x</em> gets arbitrarily close to <em>a</em>. For well-behaved continuous functions, evaluate by direct substitution!',
        prompt: 'Evaluate lim_{x → 3} (2x + 4) using direct substitution.',
        options: ['10', '6', '8', '12'],
        correctAnswer: '10',
        hint: 'Plug x = 3 directly into 2x + 4.',
        explanation: '2(3) + 4 = 6 + 4 = 10.',
        xp: 60
    },
    {
        id: 'lim_2',
        categoryId: 'cat_limits',
        title: 'Indeterminate Form (0/0) Factorization',
        type: 'multiple_choice',
        learningInfo: 'When direct substitution yields <code>0/0</code> (an indeterminate form), simplify the expression algebraically by factoring before taking the limit.',
        prompt: 'Evaluate lim_{x → 2} (x² - 4)/(x - 2).',
        options: ['4', '0', '2', 'Undefined'],
        correctAnswer: '4',
        hint: 'Factor x² - 4 into (x - 2)(x + 2) and cancel the (x - 2) term.',
        explanation: '(x - 2)(x + 2) / (x - 2) = x + 2. As x → 2, limit = 2 + 2 = 4.',
        xp: 65
    },
    {
        id: 'lim_3',
        categoryId: 'cat_limits',
        title: 'One-Sided Limits Agreement',
        type: 'multiple_choice',
        learningInfo: 'A two-sided limit <code>lim_{x → a} f(x)</code> exists IF AND ONLY IF left-hand limit <code>lim_{x → a⁻}</code> and right-hand limit <code>lim_{x → a⁺}</code> are equal!',
        prompt: 'If lim_{x → 1⁻} f(x) = 5 and lim_{x → 1⁺} f(x) = 5, what is lim_{x → 1} f(x)?',
        options: ['5', '0', '1', 'Does not exist'],
        correctAnswer: '5',
        hint: 'Since both one-sided limits match, the overall limit equals that shared value.',
        explanation: 'Left and right limits match at 5, so the two-sided limit is 5.',
        xp: 65
    },
    {
        id: 'lim_4',
        categoryId: 'cat_limits',
        title: 'Jump Discontinuity Check',
        type: 'multiple_choice',
        prompt: 'If lim_{x → 2⁻} f(x) = 3 and lim_{x → 2⁺} f(x) = 7, what is the status of lim_{x → 2} f(x)?',
        options: ['Does Not Exist (DNE due to Jump Discontinuity)', '5', '3', '7'],
        correctAnswer: 'Does Not Exist (DNE due to Jump Discontinuity)',
        hint: 'Do the left-hand and right-hand limits match?',
        explanation: '3 ≠ 7. Because left and right limits differ, the overall two-sided limit Does Not Exist.',
        xp: 70
    },
    {
        id: 'lim_5',
        categoryId: 'cat_limits',
        title: 'Limits at Infinity (Equal Degrees)',
        type: 'multiple_choice',
        prompt: 'Evaluate lim_{x → ∞} (3x² + 5x)/(2x² - 1).',
        options: ['3/2', '∞', '0', '5/2'],
        correctAnswer: '3/2',
        hint: 'When numerator and denominator have equal degrees, limit is ratio of leading coefficients.',
        explanation: 'Ratio of leading coefficients 3/2.',
        xp: 75
    },
    {
        id: 'lim_6',
        categoryId: 'cat_limits',
        title: 'Limits at Infinity (Higher Degree Denominator)',
        type: 'multiple_choice',
        prompt: 'Evaluate lim_{x → ∞} (4x + 7)/(x² + 3).',
        options: ['0', '4', '∞', '7/3'],
        correctAnswer: '0',
        hint: 'Compare degrees: Numerator degree 1 vs Denominator degree 2.',
        explanation: 'Degree of denominator > numerator, so limit as x → ∞ is 0.',
        xp: 75
    },
    {
        id: 'lim_7',
        categoryId: 'cat_limits',
        title: 'The Squeeze (Sandwich) Theorem',
        type: 'multiple_choice',
        prompt: 'If g(x) ≤ f(x) ≤ h(x) for all x, and lim_{x → a} g(x) = L and lim_{x → a} h(x) = L, what is lim_{x → a} f(x)?',
        options: ['L', '0', 'L/2', 'Undefined'],
        correctAnswer: 'L',
        hint: 'f(x) is squeezed between g(x) and h(x).',
        explanation: 'By Squeeze Theorem, f(x) is forced to have limit L.',
        xp: 80
    },
    {
        id: 'lim_8',
        categoryId: 'cat_limits',
        title: 'Definition of Continuity',
        type: 'multiple_choice',
        prompt: 'A function f(x) is continuous at x = a if and only if:',
        options: ['f(a) is defined, lim_{x → a} f(x) exists, AND lim_{x → a} f(x) = f(a)', 'f(a) > 0', 'f(x) has a derivative at x = a', 'lim_{x → a} f(x) = 0'],
        correctAnswer: 'f(a) is defined, lim_{x → a} f(x) exists, AND lim_{x → a} f(x) = f(a)',
        hint: 'Continuity requires defined value, existing limit, and agreement between the two.',
        explanation: 'Continuity requires: 1. f(a) defined, 2. lim exists, 3. lim_{x → a} f(x) = f(a).',
        xp: 85
    },
    {
        id: 'lim_9',
        categoryId: 'cat_limits',
        title: 'Fundamental Trigonometric Limit',
        type: 'multiple_choice',
        prompt: 'Evaluate lim_{x → 0} (sin x)/x in radians.',
        options: ['1', '0', 'π', 'Undefined'],
        correctAnswer: '1',
        hint: 'Fundamental trigonometric limit evaluated at zero.',
        explanation: 'lim_{x → 0} (sin x)/x = 1.',
        xp: 85
    },
    {
        id: 'lim_10',
        categoryId: 'cat_limits',
        title: 'Limits Realm Master Challenge',
        type: 'multiple_choice',
        prompt: 'Evaluate lim_{x → 0} (1 - cos x)/x².',
        options: ['1/2', '1', '0', '2'],
        correctAnswer: '1/2',
        hint: 'Use Taylor series 1 - cos x ≈ x²/2 or L\'Hôpital\'s Rule twice.',
        explanation: 'lim_{x → 0} (1 - cos x)/x² = 1/2.',
        xp: 100
    },

    // ==========================================
    // CATEGORY 12: DIFFERENTIAL CALCULUS & DERIVATIVES (10 Challenges)
    // ==========================================
    {
        id: 'der_1',
        categoryId: 'cat_derivatives',
        title: 'The Derivative Concept & Power Rule',
        type: 'multiple_choice',
        learningInfo: 'The <strong>Derivative f\'(x)</strong> measures instantaneous rate of change. The <strong>Power Rule</strong> states: <code>d/dx [xⁿ] = n · xⁿ⁻¹</code>.',
        prompt: 'Find the derivative of f(x) = x³.',
        options: ['3x²', 'x²', '3x³', '3x'],
        correctAnswer: '3x²',
        hint: 'Multiply by power 3, subtract 1 from exponent.',
        explanation: 'd/dx [x³] = 3x².',
        xp: 60
    },
    {
        id: 'der_2',
        categoryId: 'cat_derivatives',
        title: 'Constant Multiple & Sum Rules',
        type: 'multiple_choice',
        learningInfo: 'Derivatives are linear: <code>d/dx [c · f(x)] = c · f\'(x)</code> and derivative of any constant number is ZERO.',
        prompt: 'Find the derivative of f(x) = 4x⁵ - 3x² + 7.',
        options: ['20x⁴ - 6x', '20x⁵ - 6x + 7', '4x⁴ - 3x', '20x⁴ - 6x + 7'],
        correctAnswer: '20x⁴ - 6x',
        hint: 'd/dx[4x⁵] = 20x⁴. d/dx[-3x²] = -6x. d/dx[7] = 0.',
        explanation: 'Derivative is 20x⁴ - 6x.',
        xp: 65
    },
    {
        id: 'der_3',
        categoryId: 'cat_derivatives',
        title: 'Product Rule',
        type: 'multiple_choice',
        learningInfo: '<strong>Product Rule</strong>: <code>d/dx [u · v] = u\'v + uv\'</code>.',
        prompt: 'Using Product Rule, find d/dx [x² · sin(x)].',
        options: ['2x · sin(x) + x² · cos(x)', '2x · cos(x)', '2x · sin(x)', 'x² · cos(x)'],
        correctAnswer: '2x · sin(x) + x² · cos(x)',
        hint: 'u = x², u\' = 2x. v = sin x, v\' = cos x.',
        explanation: '2x sin(x) + x² cos(x).',
        xp: 75
    },
    {
        id: 'der_4',
        categoryId: 'cat_derivatives',
        title: 'Quotient Rule Formula',
        type: 'multiple_choice',
        prompt: 'What is the Quotient Rule formula for d/dx [u/v]?',
        options: ['(u\'v - uv\') / v²', '(u\'v + uv\') / v²', '(u\' - v\') / v²', 'u\' / v\''],
        correctAnswer: '(u\'v - uv\') / v²',
        hint: 'Quotient rule: (u\'v - uv\') / v².',
        explanation: '(u\'v - uv\') / v².',
        xp: 70
    },
    {
        id: 'der_5',
        categoryId: 'cat_derivatives',
        title: 'Chain Rule for Composite Functions',
        type: 'multiple_choice',
        prompt: 'Find d/dx [(3x + 1)⁵] using the Chain Rule.',
        options: ['15(3x + 1)⁴', '5(3x + 1)⁴', '15x⁴', '3(3x + 1)⁴'],
        correctAnswer: '15(3x + 1)⁴',
        hint: 'Outer derivative 5(3x + 1)⁴ multiplied by inner derivative 3.',
        explanation: '5(3x + 1)⁴ · 3 = 15(3x + 1)⁴.',
        xp: 75
    },
    {
        id: 'der_6',
        categoryId: 'cat_derivatives',
        title: 'Derivative of Natural Exponential e^x',
        type: 'multiple_choice',
        prompt: 'Find the derivative of f(x) = e^(2x).',
        options: ['2e^(2x)', 'e^(2x)', '2xe^(2x)', 'e^x'],
        correctAnswer: '2e^(2x)',
        hint: 'd/dx [e^(u)] = e^u · u\'. Inner derivative of 2x is 2.',
        explanation: '2e^(2x).',
        xp: 75
    },
    {
        id: 'der_7',
        categoryId: 'cat_derivatives',
        title: 'Derivative of Natural Logarithm ln(x)',
        type: 'multiple_choice',
        prompt: 'Find d/dx [ln(x)] for x > 0.',
        options: ['1/x', '1/x²', 'e^x', 'x'],
        correctAnswer: '1/x',
        hint: 'Derivative of natural logarithm.',
        explanation: 'd/dx [ln x] = 1/x.',
        xp: 70
    },
    {
        id: 'der_8',
        categoryId: 'cat_derivatives',
        title: 'Tangent Line Slope',
        type: 'multiple_choice',
        prompt: 'Find the slope of the tangent line to f(x) = x² at x = 3.',
        options: ['6', '9', '3', '12'],
        correctAnswer: '6',
        hint: 'f\'(x) = 2x. Evaluate at x = 3.',
        explanation: 'f\'(3) = 2(3) = 6.',
        xp: 80
    },
    {
        id: 'der_9',
        categoryId: 'cat_derivatives',
        title: 'Critical Points & Extrema',
        type: 'multiple_choice',
        prompt: 'Where are the critical points of f(x) = x³ - 3x?',
        options: ['x = 1 and x = -1', 'x = 0', 'x = 3 and x = -3', 'No critical points'],
        correctAnswer: 'x = 1 and x = -1',
        hint: 'Set f\'(x) = 3x² - 3 = 0.',
        explanation: '3(x² - 1) = 0 ⇒ x = ±1.',
        xp: 85
    },
    {
        id: 'der_10',
        categoryId: 'cat_derivatives',
        title: 'Differential Calculus Master Challenge',
        type: 'multiple_choice',
        prompt: 'If position is s(t) = t³ - 6t² + 9t, at what time t > 0 is velocity v(t) equal to 0?',
        options: ['t = 1 and t = 3', 't = 2 and t = 4', 't = 0 and t = 3', 't = 3 only'],
        correctAnswer: 't = 1 and t = 3',
        hint: 'v(t) = s\'(t) = 3t² - 12t + 9 = 0.',
        explanation: '3(t - 1)(t - 3) = 0 ⇒ t = 1 and t = 3.',
        xp: 100
    },

    // ==========================================
    // CATEGORY 13: INTEGRAL CALCULUS & ANTI-DERIVATIVES (10 Challenges)
    // ==========================================
    {
        id: 'int_1',
        categoryId: 'cat_integrals',
        title: 'Anti-derivatives & Power Rule for Integration',
        type: 'multiple_choice',
        learningInfo: '<strong>Integration</strong> reverses differentiation. Power Rule for Integrals: <code>∫ xⁿ dx = (xⁿ⁺¹)/(n + 1) + C</code>.',
        prompt: 'Find the indefinite integral ∫ x⁴ dx.',
        options: ['(x⁵)/5 + C', '4x³ + C', '(x⁵) + C', '5x⁵ + C'],
        correctAnswer: '(x⁵)/5 + C',
        hint: 'Add 1 to exponent 4 to get 5, divide by 5.',
        explanation: '∫ x⁴ dx = (x⁵)/5 + C.',
        xp: 60
    },
    {
        id: 'int_2',
        categoryId: 'cat_integrals',
        title: 'Constant Multiple & Sum Integration Rules',
        type: 'multiple_choice',
        learningInfo: 'Integrals split across sums: <code>∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx</code>.',
        prompt: 'Evaluate ∫ (6x² + 2x) dx.',
        options: ['2x³ + x² + C', '6x³ + 2x² + C', '12x + 2 + C', '3x³ + x² + C'],
        correctAnswer: '2x³ + x² + C',
        hint: '∫ 6x² dx = 2x³. ∫ 2x dx = x².',
        explanation: '2x³ + x² + C.',
        xp: 65
    },
    {
        id: 'int_3',
        categoryId: 'cat_integrals',
        title: 'Fundamental Theorem of Calculus (Definite Integral)',
        type: 'multiple_choice',
        learningInfo: 'The <strong>Fundamental Theorem of Calculus</strong> evaluates net area: <code>∫ₐᵇ f(x) dx = F(b) - F(a)</code>.',
        prompt: 'Calculate the definite integral ∫₀³ 2x dx.',
        options: ['9', '6', '18', '3'],
        correctAnswer: '9',
        hint: 'Anti-derivative F(x) = x². Compute F(3) - F(0).',
        explanation: '3² - 0² = 9.',
        xp: 70
    },
    {
        id: 'int_4',
        categoryId: 'cat_integrals',
        title: 'Area Under Curve',
        type: 'multiple_choice',
        prompt: 'Calculate the area under the curve f(x) = 3x² from x = 1 to x = 2.',
        options: ['7', '8', '3', '12'],
        correctAnswer: '7',
        hint: 'F(x) = x³. Compute F(2) - F(1).',
        explanation: '2³ - 1³ = 8 - 1 = 7.',
        xp: 75
    },
    {
        id: 'int_5',
        categoryId: 'cat_integrals',
        title: 'Integration by Substitution (u-substitution)',
        type: 'multiple_choice',
        prompt: 'Evaluate ∫ 2x e^(x²) dx using u-substitution.',
        options: ['e^(x²) + C', '2e^(x²) + C', 'x² e^(x²) + C', '(e^(x²))/2 + C'],
        correctAnswer: 'e^(x²) + C',
        hint: 'Let u = x², du = 2x dx. Integral becomes ∫ e^u du.',
        explanation: 'e^(x²) + C.',
        xp: 80
    },
    {
        id: 'int_6',
        categoryId: 'cat_integrals',
        title: 'Integral of 1/x',
        type: 'multiple_choice',
        prompt: 'What is ∫ (1/x) dx for x > 0?',
        options: ['ln(x) + C', '-1/x² + C', 'e^x + C', 'x + C'],
        correctAnswer: 'ln(x) + C',
        hint: 'Reverse of d/dx [ln x].',
        explanation: '∫ (1/x) dx = ln(x) + C.',
        xp: 70
    },
    {
        id: 'int_7',
        categoryId: 'cat_integrals',
        title: 'Integration by Parts Formula',
        type: 'multiple_choice',
        prompt: 'Select the Integration by Parts formula:',
        options: ['∫ u dv = uv - ∫ v du', '∫ u dv = u\' v\'', '∫ u dv = uv + ∫ v du', '∫ u dv = u/v'],
        correctAnswer: '∫ u dv = uv - ∫ v du',
        hint: 'Derived from product rule: ∫ u dv = uv - ∫ v du.',
        explanation: '∫ u dv = uv - ∫ v du.',
        xp: 80
    },
    {
        id: 'int_8',
        categoryId: 'cat_integrals',
        title: 'Area Between Two Curves',
        type: 'multiple_choice',
        prompt: 'The area between top curve f(x) and bottom curve g(x) from x = a to x = b is:',
        options: ['∫ₐᵇ [f(x) - g(x)] dx', '∫ₐᵇ [f(x) + g(x)] dx', '∫ₐᵇ [f(x) · g(x)] dx', 'f(b) - g(a)'],
        correctAnswer: '∫ₐᵇ [f(x) - g(x)] dx',
        hint: 'Integrate top curve minus bottom curve.',
        explanation: '∫ₐᵇ [f(x) - g(x)] dx.',
        xp: 85
    },
    {
        id: 'int_9',
        categoryId: 'cat_integrals',
        title: 'Exponential Growth Differential Equation',
        type: 'multiple_choice',
        prompt: 'Solve dy/dx = 2y with initial condition y(0) = 5.',
        options: ['y = 5e^(2x)', 'y = 2e^(5x)', 'y = 5x + 2', 'y = 25e^x'],
        correctAnswer: 'y = 5e^(2x)',
        hint: 'dy/y = 2 dx ⇒ ln y = 2x + C ⇒ y = C e^(2x).',
        explanation: 'y = 5e^(2x).',
        xp: 90
    },
    {
        id: 'int_10',
        categoryId: 'cat_integrals',
        title: 'Integral Calculus Master Challenge',
        type: 'multiple_choice',
        prompt: 'Evaluate the definite integral ∫₀ᵖⁱ sin(x) dx.',
        options: ['2', '0', '1', 'π'],
        correctAnswer: '2',
        hint: 'Anti-derivative is -cos(x). Evaluate [-cos(π)] - [-cos(0)].',
        explanation: '-(-1) - (-1) = 1 + 1 = 2.',
        xp: 100
    }
];
