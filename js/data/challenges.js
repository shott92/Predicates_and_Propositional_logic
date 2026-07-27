/**
 * Challenges Data Bank for Discrete Math & Logic Realm
 * 100 Challenges organized across 10 categories with Scaffolding & Faded Guidance
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
        learningInfo: '<strong>De Morgan\'s First Law</strong> states that the negation of a conjunction is logically equivalent to the disjunction of the negations: <code>¬(P ∧ Q) ≡ ¬P ∨ ¬Q</code>. Think of it as "distributing" the negation while flipping ∧ to ∨.',
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
        learningInfo: 'An implication <code>P → Q</code> can be rewritten entirely using disjunction and negation: <code>¬P ∨ Q</code>. "Either P is false, or Q is true."',
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
        explanation: 'The contrapositive of P → Q is ¬Q → ¬P, and it always retains the exact same truth table.',
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
        explanation: '¬(P → Q) ≡ ¬(¬P ∨ Q) ≡ P ∧ ¬Q. (The premise P is true, but conclusion Q fails!).',
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
        learningInfo: 'A <strong>Tautology</strong> is a statement that is True under EVERY possible assignment of truth values. A <strong>Contradiction</strong> is False under every assignment. A <strong>Contingency</strong> can be True or False depending on the variables.',
        prompt: 'Classify the formula P ∨ ¬P.',
        options: ['Tautology', 'Contradiction', 'Contingency'],
        correctAnswer: 'Tautology',
        hint: 'Construct a truth table. Is it always true regardless of P?',
        explanation: 'Whether P is True or False, P ∨ ¬P is always True (Law of Excluded Middle).',
        xp: 60
    },
    {
        id: 'taut_2',
        categoryId: 'cat_tautologies',
        title: 'Self Contradiction',
        type: 'multiple_choice',
        learningInfo: 'A formula is a <strong>Contradiction</strong> if it is impossible to satisfy. For instance, something cannot be both true and not true at the exact same time.',
        prompt: 'Classify the formula P ∧ ¬P.',
        options: ['Tautology', 'Contradiction', 'Contingency'],
        correctAnswer: 'Contradiction',
        hint: 'Can P be both True and False simultaneously?',
        explanation: 'P ∧ ¬P is always False regardless of P.',
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
        explanation: 'P ∧ Q is True when P=T, Q=T, but False when P=F. Thus it is a Contingency.',
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
        hint: 'A formula is satisfiable if there exists AT LEAST ONE truth assignment that makes it True.',
        explanation: 'Setting P = True and Q = False makes (True ∨ False) ∧ (False ∨ True) = True ∧ True = True.',
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
        explanation: 'This asserts premise P, implication P → Q, and negates the conclusion Q. It is a contradiction.',
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
        explanation: 'Peirce\'s Law is a valid tautology in classical logic despite only using implications.',
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
        explanation: 'With P=F, Q=T, R=T: (F ∨ T) ∧ (F ∨ T) ∧ T = T ∧ T ∧ T = True.',
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
        explanation: 'Every assignment falsifies at least one of the 4 clauses, rendering it a Contradiction.',
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
        learningInfo: '<strong>Modus Ponens</strong> is the fundamental rule of deduction: If <code>P → Q</code> is true, and premise <code>P</code> is true, then <code>Q</code> MUST be true.',
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
        learningInfo: '<strong>Modus Tollens</strong> states: If <code>P → Q</code> is true, but <code>Q</code> is False (¬Q), then premise <code>P</code> MUST be False (¬P).',
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
        prompt: 'Apply the Resolution Rule to resolve the complementary literals P and ¬P.',
        options: ['Q ∨ R', 'Q ∧ R', 'P ∨ R', '¬Q ∨ ¬R'],
        correctAnswer: 'Q ∨ R',
        hint: 'Resolution resolves (P ∨ Q) and (¬P ∨ R) into the resolvent (Q ∨ R).',
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
        hint: 'Since P is true and ¬P ∨ Q (which is P → Q) holds, Q is true. Since Q is true and ¬Q ∨ R holds, R is true!',
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
        explanation: 'We assume ¬S, and if this leads to a contradiction (e.g. R ∧ ¬R), then ¬S must be false, so S is true.',
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
        hint: 'Trace: ¬C and B → C yield ¬B. ¬B and A → B yield ¬A. ¬A and A ∨ D yield D!',
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
        learningInfo: '<strong>Universal Quantifier (∀ / "for all")</strong> asserts that a predicate property <em>P(x)</em> holds true for EVERY element <em>x</em> in the domain of discourse. If even a single counterexample exists where <em>P(x)</em> is False, the statement <code>∀x P(x)</code> is False.',
        prompt: 'Translating "Every integer x is greater than zero":',
        options: ['∀x (Integer(x) → GreaterThanZero(x))', '∃x (Integer(x) ∧ GreaterThanZero(x))', '∀x (Integer(x) ∧ GreaterThanZero(x))', '∃x (Integer(x) → GreaterThanZero(x))'],
        correctAnswer: '∀x (Integer(x) → GreaterThanZero(x))',
        hint: 'Universal statements ("Every...") are standardly written with implications →.',
        explanation: '∀x (Integer(x) → GreaterThanZero(x)) correctly asserts that IF x is an integer, THEN x > 0.',
        xp: 60
    },
    {
        id: 'qnt_2',
        categoryId: 'cat_quantifiers',
        title: 'Existential Quantifier Basics',
        type: 'multiple_choice',
        learningInfo: '<strong>Existential Quantifier (∃ / "there exists")</strong> asserts that AT LEAST ONE element <em>x</em> in the domain satisfies the predicate property <em>P(x)</em>.',
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
        learningInfo: 'To negate a universal quantifier <code>¬(∀x P(x))</code>, flip the quantifier to <code>∃x</code> and negate the predicate: <code>∃x ¬P(x)</code>. "Not everyone is happy" means "There exists someone who is not happy."',
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
        explanation: '¬(∃x P(x)) ≡ ∀x ¬P(x). ("There does not exist a P" = "For all x, not P").',
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
        explanation: 'For any x, choosing y = -x gives x + y = 0 (True). But no single constant y satisfies x + y = 0 for ALL x.',
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
        prompt: 'If the domain of discourse D is the EMPTY SET ∅, what is the truth value of ∀x P(x)?',
        options: ['True (Vacuously)', 'False', 'Undefined'],
        correctAnswer: 'True (Vacuously)',
        hint: 'Can you find a counterexample in an empty domain?',
        explanation: 'Since there are no elements in ∅ to disprove P(x), universal claims over an empty domain are vacuously TRUE.',
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
        hint: 'Identify the universal condition on n and the existential search for p and q.',
        explanation: '∀n ((Even(n) ∧ n > 2) → ∃p ∃q (Prime(p) ∧ Prime(q) ∧ n = p + q)) perfectly models Goldbach\'s Conjecture.',
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
        learningInfo: 'In the <strong>Visual Predicate Realm</strong>, domain objects are visual shapes in a grid. Predicates like <code>Red(x)</code>, <code>Square(x)</code>, and <code>Circle(x)</code> evaluate against the properties of the objects present.',
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
        prompt: 'Evaluate: Are ALL shapes in this domain blue circles?',
        formula: '∀x (Circle(x) → Blue(x))',
        world: [
            { id: 1, type: 'circle', color: 'blue', x: 0, y: 0 },
            { id: 2, type: 'circle', color: 'blue', x: 1, y: 0 },
            { id: 3, type: 'square', color: 'red', x: 2, y: 0 }
        ],
        options: ['True', 'False'],
        correctAnswer: 'True',
        hint: 'Check each circle in the world: Is it blue? (Note: squares don\'t violate Circle(x) → Blue(x) because premise Circle(x) is false!).',
        explanation: 'All circles (Objects 1 and 2) are blue. The square is vacuously true.',
        xp: 65
    },
    {
        id: 'pred_3',
        categoryId: 'cat_predicate_realm',
        title: 'Strict Universal World',
        type: 'predicate_world',
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
        hint: 'Click on an object in the grid to change its shape to Triangle and color to Green.',
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
        explanation: 'The circle is blue and the red shape is a square, so there is no red circle. Expression is True.',
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
        hint: 'Obj 1 is Square (T). Obj 2 is Blue (T). Obj 3 is both Square and Blue (T).',
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
        learningInfo: 'A <strong>Set</strong> is an unordered collection of distinct objects, called <em>elements</em>. We write <code>x ∈ A</code> to state that <em>x</em> belongs to set <em>A</em>, and <code>x ∉ A</code> if it does not. The <strong>Empty Set (∅ or {})</strong> contains zero elements.',
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
        learningInfo: 'Set <em>A</em> is a <strong>Subset</strong> of <em>B</em> (written <code>A ⊆ B</code>) if EVERY element of <em>A</em> is also in <em>B</em>. If <code>A ⊆ B</code> and <code>A ≠ B</code>, then <em>A</em> is a <strong>Proper Subset</strong> (written <code>A ⊂ B</code>). The empty set ∅ is a subset of EVERY set!',
        prompt: 'Given A = {1, 2} and B = {1, 2, 3}, which relation holds?',
        options: ['A ⊆ B and A ⊂ B', 'B ⊆ A', 'A = B', 'A ∉ B'],
        correctAnswer: 'A ⊆ B and A ⊂ B',
        hint: 'Check if every element of A is inside B, and if B contains extra elements.',
        explanation: 'All elements of A (1 and 2) are in B, and B has 3, so A is both a subset (⊆) and proper subset (⊂) of B.',
        xp: 65
    },
    {
        id: 'set_3',
        categoryId: 'cat_set_theory',
        title: 'The Power Set 𝒫(S)',
        type: 'multiple_choice',
        learningInfo: 'The <strong>Power Set 𝒫(S)</strong> is the set of ALL subsets of <em>S</em> (including ∅ and <em>S</em> itself). If set <em>S</em> has <em>n</em> elements, its power set 𝒫(S) has <strong>2ⁿ</strong> elements.',
        prompt: 'How many elements are in the power set 𝒫(S) of S = {a, b, c}?',
        options: ['8', '3', '6', '9'],
        correctAnswer: '8',
        hint: 'S has n = 3 elements. Calculate 2³.',
        explanation: '|S| = 3, so |𝒫(S)| = 2³ = 8 subsets: {∅, {a}, {b}, {c}, {a,b}, {a,c}, {b,c}, {a,b,c}}.',
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
        explanation: 'A ∪ B = {1, 2, 3, 4, 5}. (Duplicates like 3 are listed once).',
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
        prompt: 'Calculate A \\ B (relative complement) for A = {1, 2, 3, 4} and B = {3, 4, 5}.',
        options: ['{1, 2}', '{5}', '{3, 4}', '{1, 2, 5}'],
        correctAnswer: '{1, 2}',
        hint: 'A \\ B keeps elements in A after removing anything that is also in B.',
        explanation: 'Removing 3 and 4 from A leaving {1, 2}.',
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
        hint: 'A Δ B = (A ∪ B) \\ (A ∩ B). Elements in either A or B, but NOT both (Set XOR!).',
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
        explanation: 'A × B contains all 2 × 2 = 4 ordered pairs: {(x,1), (x,2), (y,1), (y,2)}.',
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
        explanation: 'A ∩ (B \\ C) represents elements in A and B that are not in C, which is (A ∩ B) \\ C.',
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
        learningInfo: 'A <strong>Function</strong> <code>f: X → Y</code> maps every element in <strong>Domain X</strong> to EXACTLY ONE element in <strong>Codomain Y</strong>. The subset of Y actually hit by the mapping is called the <strong>Range (or Image)</strong>.',
        prompt: 'Let f: {1, 2, 3} → {A, B, C} be f(1)=A, f(2)=B, f(3)=B. What is the Range of f?',
        options: ['{A, B}', '{A, B, C}', '{1, 2, 3}', '{A}'],
        correctAnswer: '{A, B}',
        hint: 'Range is the set of values in the codomain that actually get mapped to.',
        explanation: 'Outputs are A and B. Codomain is {A, B, C}, but Range is {A, B}.',
        xp: 60
    },
    {
        id: 'fn_2',
        categoryId: 'cat_functions',
        title: 'Injective Functions (One-to-One)',
        type: 'multiple_choice',
        learningInfo: 'A function <code>f: X → Y</code> is <strong>Injective (One-to-One)</strong> if distinct inputs map to distinct outputs: <code>f(a) = f(b) ⇒ a = b</code>. No two elements in X map to the same element in Y.',
        prompt: 'Is f: {1, 2, 3} → {a, b, c, d} given by f(1)=a, f(2)=c, f(3)=d Injective?',
        options: ['Yes, Injective', 'No, Not Injective'],
        correctAnswer: 'Yes, Injective',
        hint: 'Does any element in the codomain get mapped to more than once?',
        explanation: 'Outputs are a, c, d (all unique). No two inputs share an output, so f is Injective.',
        xp: 65
    },
    {
        id: 'fn_3',
        categoryId: 'cat_functions',
        title: 'Injective Failure Test',
        type: 'multiple_choice',
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
        learningInfo: 'A function <code>f: X → Y</code> is <strong>Surjective (Onto)</strong> if EVERY element in Codomain Y is mapped to by at least one element in Domain X. In other words, <strong>Range = Codomain</strong>.',
        prompt: 'Let f: {1, 2, 3, 4} → {A, B} with f(1)=A, f(2)=A, f(3)=B, f(4)=B. Is f Surjective?',
        options: ['Yes, Surjective', 'No, Not Surjective'],
        correctAnswer: 'Yes, Surjective',
        hint: 'Does every element of Codomain {A, B} get hit by at least one input?',
        explanation: 'Both A and B are mapped to by inputs. Range {A, B} = Codomain {A, B}, so f is Surjective.',
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
        explanation: 'For any y ∈ ℝ, choosing x = (y - 1)/2 gives f(x) = y. Thus every y is covered, so f is Surjective.',
        xp: 75
    },
    {
        id: 'fn_6',
        categoryId: 'cat_functions',
        title: 'Bijective Functions & Inverses',
        type: 'multiple_choice',
        learningInfo: 'A function is <strong>Bijective (One-to-One Correspondence)</strong> if it is BOTH <strong>Injective AND Surjective</strong>. A function has a valid <strong>Inverse function f⁻¹</strong> if and only if it is Bijective!',
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
        explanation: 'f(4) = 4 + 3 = 7. Then g(7) = 2(7) = 14.',
        xp: 75
    },
    {
        id: 'fn_8',
        categoryId: 'cat_functions',
        title: 'Pigeonhole Principle Application',
        type: 'multiple_choice',
        learningInfo: '<strong>Pigeonhole Principle</strong>: If <em>n</em> items (pigeons) are put into <em>m</em> containers (pigeonholes) and <em>n > m</em>, then at least one container must contain more than one item! This means no function <code>f: X → Y</code> can be Injective if <code>|X| > |Y|</code>.',
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
        explanation: 'f is Injective (3n1 = 3n2 ⇒ n1=n2). But not Surjective because non-multiples of 3 (like 1, 2) have no integer pre-image.',
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
        learningInfo: '<strong>Cardinality |A|</strong> measures the number of elements in set <em>A</em>. The <strong>Principle of Inclusion-Exclusion</strong> for two finite sets states: <code>|A ∪ B| = |A| + |B| - |A ∩ B|</code>.',
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
        learningInfo: 'A set is <strong>Countably Infinite</strong> (cardinality <strong>ℵ₀ / Aleph-Null</strong>) if its elements can be put into 1-to-1 correspondence with the Natural Numbers ℕ = {1, 2, 3, ...}.',
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
        learningInfo: '<strong>Hilbert\'s Hotel</strong> has countably infinitely many rooms (Room 1, 2, 3...), all occupied. When a new guest arrives, the manager moves guest in Room <em>n</em> to Room <em>n + 1</em>, freeing Room 1!',
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
        learningInfo: '<strong>Cantor\'s Diagonal Argument</strong> proves that the Real Numbers ℝ in interval (0, 1) CANNOT be listed in a sequence. By altering the <em>k-th</em> digit of the <em>k-th</em> number, Cantor constructed a new real number missing from ANY proposed list!',
        prompt: 'What does Cantor\'s Diagonal Argument prove about the real numbers ℝ?',
        options: ['ℝ is UNCOUNTABLY Infinite (|ℝ| > ℵ₀)', 'ℝ is Countable', 'ℝ is finite', 'ℝ = ℚ'],
        correctAnswer: 'ℝ is UNCOUNTABLY Infinite (|ℝ| > ℵ₀)',
        hint: 'It proves no list of real numbers can ever be complete.',
        explanation: 'Cantor proved real numbers cannot be mapped 1-to-1 with ℕ. |ℝ| = c = 2^ℵ₀ (Uncountable).',
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
        explanation: 'Cantor\'s Theorem proves no set A can be mapped surjectively onto its power set 𝒫(A), so |A| < |𝒫(A)|.',
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
        explanation: 'Continuum Hypothesis states 2^ℵ₀ = ℵ₁. There is no infinite set size strictly between ℕ and ℝ.',
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
        hint: 'Repeatedly taking power sets 𝒫(𝒫(𝒫(ℕ))) generates larger and larger infinities endlessly!',
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
        learningInfo: 'In <strong>Knights & Knaves</strong> puzzles (created by Raymond Smullyan), <strong>Knights</strong> ALWAYS tell the truth, while <strong>Knaves</strong> ALWAYS lie. Analyze their statements logically to deduce their identity.',
        prompt: 'Person A says: "At least one of us is a Knave." What are A and B?',
        options: ['A is a Knight, B is a Knave', 'A is a Knave, B is a Knight', 'Both are Knights', 'Both are Knaves'],
        correctAnswer: 'A is a Knight, B is a Knave',
        hint: 'If A were a Knave, his statement would be false, meaning BOTH are Knights (a contradiction!). So A MUST be a Knight.',
        explanation: 'A is a Knight (tells truth). So his statement is true: at least one is a Knave. Since A is a Knight, B must be the Knave!',
        xp: 80
    },
    {
        id: 'mst_2',
        categoryId: 'cat_master_realm',
        title: 'The Liar Paradox',
        type: 'multiple_choice',
        prompt: 'Consider the sentence L: "This sentence is False." What is its logical status?',
        options: ['Paradox (Neither True nor False)', 'True', 'False', 'Tautology'],
        correctAnswer: 'Paradox (Neither True nor False)',
        hint: 'If L is True, then by its content L is False. If L is False, then its claim holds, so L is True!',
        explanation: 'The Liar sentence creates a self-referential contradiction, demonstrating limits of classical truth assignments.',
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
        explanation: 'Russell\'s Paradox showed that Naive Set Theory is inconsistent, leading to Axiomatic ZFC Set Theory.',
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
        explanation: 'Natural language predicates like "heap" or "tall" lack precise boundary cutoffs in classical logic.',
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
        hint: 'If A were Knight, B would be Knight. But then B\'s claim (opposites) would be false, contradicting B being Knight!',
        explanation: 'If A is Knave, A\'s statement is false ⇒ B is Knave. B\'s statement ("opposites") is False, which matches B being a Knave!',
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
        explanation: 'Cantor\'s Paradox proves that the "Set of All Sets" cannot exist in consistent set theory.',
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
        hint: 'Test prize locations: If prize is behind Blue, Red is False ("Green"), Blue is False ("NOT Blue" is false), Green is True ("Red is lying"). Exactly 1 sign is True!',
        explanation: 'If prize is behind Blue: Red sign is False. Blue sign ("NOT Blue") is False. Green sign ("Red is lying") is True. Exactly 1 sign is True! Thus prize is behind Blue.',
        xp: 150
    }
];
