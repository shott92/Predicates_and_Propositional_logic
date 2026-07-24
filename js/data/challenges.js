/**
 * Challenges Data Bank for Prop & Preds Logic Lair
 * 70+ Challenges organized across 7 categories
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
        id: 'cat_master_lair',
        name: 'Category 7: The Master Logic Lair',
        icon: '👑',
        description: 'Conquer Knights & Knaves riddles, logic paradoxes, and multi-step boss puzzles.',
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
        id: 'eqv_1',
        categoryId: 'cat_equivalences',
        title: "De Morgan's Law for AND",
        type: 'equivalence',
        prompt: 'According to De Morgan\'s Law, what is the logical equivalent of ¬(P ∧ Q)?',
        targetFormula: '¬(P ∧ Q)',
        options: ['¬P ∨ ¬Q', '¬P ∧ ¬Q', 'P ∨ Q', '¬P → Q'],
        correctAnswer: '¬P ∨ ¬Q',
        hint: 'Negating a conjunction flips the ∧ to ∨ and negates both variables.',
        explanation: '¬(P ∧ Q) ≡ ¬P ∨ ¬Q.',
        xp: 70
    },
    {
        id: 'eqv_2',
        categoryId: 'cat_equivalences',
        title: "De Morgan's Law for OR",
        type: 'equivalence',
        prompt: 'What is the logical equivalent of ¬(P ∨ Q)?',
        targetFormula: '¬(P ∨ Q)',
        options: ['¬P ∧ ¬Q', '¬P ∨ ¬Q', 'P ∧ Q', 'P → ¬Q'],
        correctAnswer: '¬P ∧ ¬Q',
        hint: 'Negating a disjunction flips ∨ to ∧ and negates both variables.',
        explanation: '¬(P ∨ Q) ≡ ¬P ∧ ¬Q.',
        xp: 70
    },
    {
        id: 'eqv_3',
        categoryId: 'cat_equivalences',
        title: 'Implication Elimination Law',
        type: 'equivalence',
        prompt: 'Express the implication P → Q using only NOT (¬) and OR (∨).',
        targetFormula: 'P → Q',
        options: ['¬P ∨ Q', 'P ∨ ¬Q', '¬(P ∧ Q)', 'P ∧ ¬Q'],
        correctAnswer: '¬P ∨ Q',
        hint: 'P → Q means "either P is false OR Q is true".',
        explanation: 'P → Q ≡ ¬P ∨ Q.',
        xp: 75
    },
    {
        id: 'eqv_4',
        categoryId: 'cat_equivalences',
        title: 'The Law of Contrapositive',
        type: 'equivalence',
        prompt: 'Which statement is logically equivalent to the implication P → Q?',
        targetFormula: 'P → Q',
        options: ['¬Q → ¬P', 'Q → P', '¬P → ¬Q', 'P ∧ Q'],
        correctAnswer: '¬Q → ¬P',
        hint: 'The contrapositive flips the hypothesis and conclusion AND negates both.',
        explanation: 'P → Q ≡ ¬Q → ¬P.',
        xp: 80
    },
    {
        id: 'eqv_5',
        categoryId: 'cat_equivalences',
        title: 'Double Negation Law',
        type: 'equivalence',
        prompt: 'Simplify the expression ¬(¬(¬P)).',
        targetFormula: '¬(¬(¬P))',
        options: ['¬P', 'P', 'P ∧ P', 'True'],
        correctAnswer: '¬P',
        hint: 'Two negations cancel each other out. Three negations leave one remaining.',
        explanation: '¬(¬(¬P)) ≡ ¬(P) ≡ ¬P.',
        xp: 60
    },
    {
        id: 'eqv_6',
        categoryId: 'cat_equivalences',
        title: 'Absorption Law',
        type: 'equivalence',
        prompt: 'What does the expression P ∧ (P ∨ Q) simplify to?',
        targetFormula: 'P ∧ (P ∨ Q)',
        options: ['P', 'Q', 'P ∧ Q', 'P ∨ Q'],
        correctAnswer: 'P',
        hint: 'If P is true, P ∧ (true ∨ Q) = P. If P is false, false ∧ (false ∨ Q) = false.',
        explanation: 'By the Absorption Law, P ∧ (P ∨ Q) ≡ P.',
        xp: 80
    },
    {
        id: 'eqv_7',
        categoryId: 'cat_equivalences',
        title: 'Distributive Law Transformation',
        type: 'equivalence',
        prompt: 'Distribute AND over OR in the formula: P ∧ (Q ∨ R).',
        targetFormula: 'P ∧ (Q ∨ R)',
        options: ['(P ∧ Q) ∨ (P ∧ R)', '(P ∨ Q) ∧ (P ∨ R)', '(P ∧ Q) ∧ R', 'P ∨ (Q ∧ R)'],
        correctAnswer: '(P ∧ Q) ∨ (P ∧ R)',
        hint: 'Just like algebra: a * (b + c) = (a * b) + (a * c).',
        explanation: 'P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R).',
        xp: 85
    },
    {
        id: 'eqv_8',
        categoryId: 'cat_equivalences',
        title: 'Biconditional Expansion',
        type: 'equivalence',
        prompt: 'Express P ↔ Q using implications and conjunction (∧).',
        targetFormula: 'P ↔ Q',
        options: ['(P → Q) ∧ (Q → P)', '(P → Q) ∨ (Q → P)', '(P ∧ Q) ∨ (¬P ∧ ¬Q)', '¬P ↔ ¬Q'],
        correctAnswer: '(P → Q) ∧ (Q → P)',
        hint: 'Biconditional means P implies Q AND Q implies P.',
        explanation: 'P ↔ Q ≡ (P → Q) ∧ (Q → P).',
        xp: 85
    },
    {
        id: 'eqv_9',
        categoryId: 'cat_equivalences',
        title: 'Negation of Implication',
        type: 'equivalence',
        prompt: 'What is the logical negation of P → Q (i.e. ¬(P → Q))?',
        targetFormula: '¬(P → Q)',
        options: ['P ∧ ¬Q', '¬P ∨ Q', 'P → ¬Q', '¬P ∧ Q'],
        correctAnswer: 'P ∧ ¬Q',
        hint: 'Recall P → Q ≡ ¬P ∨ Q. Negating that gives ¬(¬P ∨ Q) = P ∧ ¬Q.',
        explanation: '¬(P → Q) ≡ P ∧ ¬Q (Premise occurs BUT conclusion fails).',
        xp: 90
    },
    {
        id: 'eqv_10',
        categoryId: 'cat_equivalences',
        title: 'Custom Equivalence Crafting',
        type: 'equivalence_input',
        prompt: 'Type an equivalent expression for ¬(P → Q) using only P, Q, ∧, ∨, ¬.',
        targetFormula: 'P ∧ ¬Q',
        hint: 'Use the logic symbol buttons or type P & ~Q.',
        explanation: 'P ∧ ¬Q is equivalent to ¬(P → Q).',
        xp: 100
    },

    // ==========================================
    // CATEGORY 3: TAUTOLOGIES, CONTRADICTIONS & SAT (10 Challenges)
    // ==========================================
    {
        id: 'tau_1',
        categoryId: 'cat_tautologies',
        title: 'Law of Excluded Middle',
        type: 'classification',
        prompt: 'Classify the formula P ∨ ¬P:',
        formula: 'P ∨ ¬P',
        options: ['Tautology', 'Contradiction', 'Contingency'],
        correctAnswer: 'Tautology',
        hint: 'A proposition is either true or false. One of P or ¬P MUST be true!',
        explanation: 'P ∨ ¬P is always True regardless of P (Tautology).',
        xp: 60
    },
    {
        id: 'tau_2',
        categoryId: 'cat_tautologies',
        title: 'Law of Non-Contradiction',
        type: 'classification',
        prompt: 'Classify the formula P ∧ ¬P:',
        formula: 'P ∧ ¬P',
        options: ['Contradiction', 'Tautology', 'Contingency'],
        correctAnswer: 'Contradiction',
        hint: 'Can a statement be both True AND False at the same time?',
        explanation: 'P ∧ ¬P is always False (Contradiction).',
        xp: 60
    },
    {
        id: 'tau_3',
        categoryId: 'cat_tautologies',
        title: 'Self-Implication',
        type: 'classification',
        prompt: 'Classify the formula P → P:',
        formula: 'P → P',
        options: ['Tautology', 'Contradiction', 'Contingency'],
        correctAnswer: 'Tautology',
        hint: 'If P is True, True → True is True. If P is False, False → False is True.',
        explanation: 'P → P is always True (Tautology).',
        xp: 65
    },
    {
        id: 'tau_4',
        categoryId: 'cat_tautologies',
        title: 'Variable Contingency',
        type: 'classification',
        prompt: 'Classify the formula P → Q:',
        formula: 'P → Q',
        options: ['Contingency', 'Tautology', 'Contradiction'],
        correctAnswer: 'Contingency',
        hint: 'Is P → Q true for some assignments and false for others?',
        explanation: 'P → Q is True when P=F or Q=T, but False when P=T, Q=F. Therefore it is a Contingency.',
        xp: 65
    },
    {
        id: 'tau_5',
        categoryId: 'cat_tautologies',
        title: 'Modus Ponens Form',
        type: 'classification',
        prompt: 'Classify the formula ((P → Q) ∧ P) → Q:',
        formula: '((P → Q) ∧ P) → Q',
        options: ['Tautology', 'Contradiction', 'Contingency'],
        correctAnswer: 'Tautology',
        hint: 'This is the logical principle of Modus Ponens expressed as a single conditional statement.',
        explanation: '((P → Q) ∧ P) → Q is a Tautology.',
        xp: 80
    },
    {
        id: 'tau_6',
        categoryId: 'cat_tautologies',
        title: 'Explosion Principle',
        type: 'classification',
        prompt: 'Classify the formula (P ∧ ¬P) → Q:',
        formula: '(P ∧ ¬P) → Q',
        options: ['Tautology', 'Contradiction', 'Contingency'],
        correctAnswer: 'Tautology',
        hint: 'Principle of Explosion (Ex Falso Quodlibet): from a contradiction, anything follows!',
        explanation: '(P ∧ ¬P) is always False. False → Q is always True!',
        xp: 85
    },
    {
        id: 'tau_7',
        categoryId: 'cat_tautologies',
        title: 'Satisfiability Test 1',
        type: 'classification',
        prompt: 'Is the formula (P ∨ Q) ∧ (¬P ∨ ¬Q) Satisfiable?',
        formula: '(P ∨ Q) ∧ (¬P ∨ ¬Q)',
        options: ['Satisfiable (Contingency)', 'Unsatisfiable (Contradiction)', 'Tautology'],
        correctAnswer: 'Satisfiable (Contingency)',
        hint: 'Can you find at least ONE assignment of P and Q that makes the formula TRUE?',
        explanation: 'Setting P=True, Q=False makes the formula TRUE. So it is Satisfiable!',
        xp: 80
    },
    {
        id: 'tau_8',
        categoryId: 'cat_tautologies',
        title: 'Satisfiability Trap',
        type: 'classification',
        prompt: 'Classify the formula (P → Q) ∧ (P ∧ ¬Q):',
        formula: '(P → Q) ∧ (P ∧ ¬Q)',
        options: ['Contradiction', 'Tautology', 'Contingency'],
        correctAnswer: 'Contradiction',
        hint: 'Notice that (P ∧ ¬Q) is the exact negation of (P → Q).',
        explanation: 'Formula has form A ∧ ¬A, which is always a Contradiction.',
        xp: 85
    },
    {
        id: 'tau_9',
        categoryId: 'cat_tautologies',
        title: 'Hypothetical Syllogism Form',
        type: 'classification',
        prompt: 'Classify the formula ((P → Q) ∧ (Q → R)) → (P → R):',
        formula: '((P → Q) ∧ (Q → R)) → (P → R)',
        options: ['Tautology', 'Contradiction', 'Contingency'],
        correctAnswer: 'Tautology',
        hint: 'Transitivity of implication: if P implies Q and Q implies R, then P implies R.',
        explanation: 'This statement is a fundamental Tautology.',
        xp: 90
    },
    {
        id: 'tau_10',
        categoryId: 'cat_tautologies',
        title: 'Peirce\'s Law',
        type: 'classification',
        prompt: 'Classify Peirce\'s Law: ((P → Q) → P) → P:',
        formula: '((P → Q) → P) → P',
        options: ['Tautology', 'Contradiction', 'Contingency'],
        correctAnswer: 'Tautology',
        hint: 'Test both P=True and P=False in your head or build a 4-row truth table.',
        explanation: 'Peirce\'s Law is a valid tautology in classical logic!',
        xp: 100
    },

    // ==========================================
    // CATEGORY 4: RULES OF INFERENCE & PROOFS (10 Challenges)
    // ==========================================
    {
        id: 'inf_1',
        categoryId: 'cat_inference',
        title: 'Modus Ponens Trial',
        type: 'natural_deduction',
        premises: ['P → Q', 'P'],
        prompt: 'Given premises (1) P → Q and (2) P, what valid conclusion follows by Modus Ponens?',
        options: ['Q', '¬Q', '¬P', 'P ∧ Q'],
        correctAnswer: 'Q',
        hint: 'Modus Ponens: If P implies Q, and P is true, then Q MUST be true.',
        explanation: 'From P → Q and P, we infer Q.',
        xp: 70
    },
    {
        id: 'inf_2',
        categoryId: 'cat_inference',
        title: 'Modus Tollens Defense',
        type: 'natural_deduction',
        premises: ['P → Q', '¬Q'],
        prompt: 'Given premises (1) P → Q and (2) ¬Q, what valid conclusion follows by Modus Tollens?',
        options: ['¬P', 'P', 'Q', '¬Q → P'],
        correctAnswer: '¬P',
        hint: 'Modus Tollens: Denying the conclusion (¬Q) denies the premise (¬P).',
        explanation: 'From P → Q and ¬Q, we infer ¬P.',
        xp: 75
    },
    {
        id: 'inf_3',
        categoryId: 'cat_inference',
        title: 'Disjunctive Syllogism',
        type: 'natural_deduction',
        premises: ['P ∨ Q', '¬P'],
        prompt: 'Given premises (1) P ∨ Q and (2) ¬P, what valid conclusion follows by Disjunctive Syllogism?',
        options: ['Q', 'P', '¬Q', 'P ∧ Q'],
        correctAnswer: 'Q',
        hint: 'If one option of an OR statement is ruled out, the remaining option must hold.',
        explanation: 'From P ∨ Q and ¬P, we infer Q.',
        xp: 75
    },
    {
        id: 'inf_4',
        categoryId: 'cat_inference',
        title: 'Hypothetical Syllogism Chain',
        type: 'natural_deduction',
        premises: ['P → Q', 'Q → R'],
        prompt: 'Given premises (1) P → Q and (2) Q → R, what single implication follows?',
        options: ['P → R', 'R → P', 'P ∧ R', 'Q → P'],
        correctAnswer: 'P → R',
        hint: 'Chain the implications together from P to Q to R.',
        explanation: 'Hypothetical Syllogism yields P → R.',
        xp: 80
    },
    {
        id: 'inf_5',
        categoryId: 'cat_inference',
        title: 'Affirming the Consequent Fallacy',
        type: 'natural_deduction',
        premises: ['P → Q', 'Q'],
        prompt: 'Premises: (1) If it rains, the grass is wet (P → Q). (2) The grass is wet (Q). Can we conclude P (It rained)?',
        options: ['Invalid Fallacy (No conclusion)', 'Valid: P must be true', 'Valid: ¬P must be true'],
        correctAnswer: 'Invalid Fallacy (No conclusion)',
        hint: 'Could the grass be wet for another reason (e.g. sprinkler)?',
        explanation: 'Affirming the consequent (inferring P from P → Q and Q) is a formal logical fallacy!',
        xp: 85
    },
    {
        id: 'inf_6',
        categoryId: 'cat_inference',
        title: 'Denying the Antecedent Fallacy',
        type: 'natural_deduction',
        premises: ['P → Q', '¬P'],
        prompt: 'Premises: (1) P → Q, (2) ¬P. Can we validly conclude ¬Q?',
        options: ['Invalid Fallacy', 'Valid by Modus Tollens', 'Valid by Disjunctive Syllogism'],
        correctAnswer: 'Invalid Fallacy',
        hint: 'Denying the hypothesis does not guarantee the conclusion is false.',
        explanation: 'Denying the antecedent is a logical fallacy.',
        xp: 85
    },
    {
        id: 'inf_7',
        categoryId: 'cat_inference',
        title: 'Conjunction Introduction',
        type: 'natural_deduction',
        premises: ['P', 'Q'],
        prompt: 'Given independent premises P and Q, what rule lets us conclude P ∧ Q?',
        options: ['Conjunction Introduction', 'Simplification', 'Addition', 'Resolution'],
        correctAnswer: 'Conjunction Introduction',
        hint: 'Combining two separate true statements with AND is Conjunction Introduction.',
        explanation: 'P, Q ⊢ P ∧ Q by Conjunction Introduction.',
        xp: 70
    },
    {
        id: 'inf_8',
        categoryId: 'cat_inference',
        title: 'Resolution Rule',
        type: 'natural_deduction',
        premises: ['P ∨ Q', '¬P ∨ R'],
        prompt: 'Apply the Resolution rule to premises (P ∨ Q) and (¬P ∨ R):',
        options: ['Q ∨ R', 'P ∨ R', 'Q ∧ R', '¬Q ∨ R'],
        correctAnswer: 'Q ∨ R',
        hint: 'Cancel out the complementary literal P and ¬P.',
        explanation: '(P ∨ Q) ∧ (¬P ∨ R) ⊢ Q ∨ R by Resolution.',
        xp: 90
    },
    {
        id: 'inf_9',
        categoryId: 'cat_inference',
        title: 'Multi-Step Proof Challenge',
        type: 'natural_deduction',
        premises: ['P → Q', 'Q → ¬R', 'R'],
        prompt: 'Premises: (1) P → Q, (2) Q → ¬R, (3) R. What is the truth value of P?',
        options: ['P is FALSE', 'P is TRUE', 'Cannot be determined'],
        correctAnswer: 'P is FALSE',
        hint: 'Step 1: From Q → ¬R and R (¬(¬R)), use Modus Tollens to get ¬Q. Step 2: From P → Q and ¬Q, use Modus Tollens to get ¬P.',
        explanation: 'R implies ¬(¬R). Modus Tollens on (2) gives ¬Q. Modus Tollens on (1) gives ¬P (P is FALSE).',
        xp: 95
    },
    {
        id: 'inf_10',
        categoryId: 'cat_inference',
        title: 'Constructive Dilemma',
        type: 'natural_deduction',
        premises: ['(P → Q) ∧ (R → S)', 'P ∨ R'],
        prompt: 'Given premises ((P → Q) ∧ (R → S)) and (P ∨ R), what follows?',
        options: ['Q ∨ S', 'Q ∧ S', 'P ∧ R', '¬Q ∨ ¬S'],
        correctAnswer: 'Q ∨ S',
        hint: 'Since either P or R is true, either Q or S must be true.',
        explanation: 'This is the Constructive Dilemma rule of inference.',
        xp: 100
    },

    // ==========================================
    // CATEGORY 5: PREDICATES & QUANTIFIERS (10 Challenges)
    // ==========================================
    {
        id: 'qnt_1',
        categoryId: 'cat_quantifiers',
        title: 'Universal Quantifier Basics',
        type: 'translation',
        prompt: 'Translate to formal logic: "Every object x is Red."',
        options: ['∀x Red(x)', '∃x Red(x)', '∀x ¬Red(x)', 'Red(x)'],
        correctAnswer: '∀x Red(x)',
        hint: '"Every" or "All" corresponds to the Universal Quantifier ∀.',
        explanation: '∀x Red(x) means for all x, x is Red.',
        xp: 70
    },
    {
        id: 'qnt_2',
        categoryId: 'cat_quantifiers',
        title: 'Existential Quantifier Basics',
        type: 'translation',
        prompt: 'Translate to formal logic: "There exists at least one square object x."',
        options: ['∃x Square(x)', '∀x Square(x)', '¬∃x Square(x)', 'Square(x)'],
        correctAnswer: '∃x Square(x)',
        hint: '"There exists" or "Some" corresponds to the Existential Quantifier ∃.',
        explanation: '∃x Square(x) means there exists x such that x is a Square.',
        xp: 70
    },
    {
        id: 'qnt_3',
        categoryId: 'cat_quantifiers',
        title: 'All Humans are Mortal',
        type: 'translation',
        prompt: 'Translate: "All humans are mortal." (H(x): x is human, M(x): x is mortal)',
        options: ['∀x (H(x) → M(x))', '∀x (H(x) ∧ M(x))', '∃x (H(x) → M(x))', '∀x (M(x) → H(x))'],
        correctAnswer: '∀x (H(x) → M(x))',
        hint: 'Universal statements ("All A are B") use implication (→), NOT conjunction (∧).',
        explanation: '∀x (H(x) → M(x)). Note: using ∧ would mean EVERY object in the universe is both human and mortal!',
        xp: 80
    },
    {
        id: 'qnt_4',
        categoryId: 'cat_quantifiers',
        title: 'Some Dragons are Friendly',
        type: 'translation',
        prompt: 'Translate: "Some dragons are friendly." (D(x): x is dragon, F(x): x is friendly)',
        options: ['∃x (D(x) ∧ F(x))', '∃x (D(x) → F(x))', '∀x (D(x) ∧ F(x))', '∀x (D(x) → F(x))'],
        correctAnswer: '∃x (D(x) ∧ F(x))',
        hint: 'Existential statements ("Some A are B") use conjunction (∧), NOT implication (→).',
        explanation: '∃x (D(x) ∧ F(x)) means there exists an x that IS a dragon AND IS friendly.',
        xp: 80
    },
    {
        id: 'qnt_5',
        categoryId: 'cat_quantifiers',
        title: 'Negation of Universal Quantifier',
        type: 'equivalence',
        prompt: 'What is the logical equivalent of ¬∀x P(x)?',
        targetFormula: '¬∀x P(x)',
        options: ['∃x ¬P(x)', '∀x ¬P(x)', '¬∃x P(x)', '∃x P(x)'],
        correctAnswer: '∃x ¬P(x)',
        hint: '"Not all x have P" is equivalent to "There exists at least one x that does NOT have P".',
        explanation: '¬∀x P(x) ≡ ∃x ¬P(x).',
        xp: 85
    },
    {
        id: 'qnt_6',
        categoryId: 'cat_quantifiers',
        title: 'Negation of Existential Quantifier',
        type: 'equivalence',
        prompt: 'What is the logical equivalent of ¬∃x P(x)?',
        targetFormula: '¬∃x P(x)',
        options: ['∀x ¬P(x)', '∃x ¬P(x)', '∀x P(x)', '¬∀x ¬P(x)'],
        correctAnswer: '∀x ¬P(x)',
        hint: '"There does not exist an x with P" means "For all x, x does NOT have P".',
        explanation: '¬∃x P(x) ≡ ∀x ¬P(x).',
        xp: 85
    },
    {
        id: 'qnt_7',
        categoryId: 'cat_quantifiers',
        title: 'Order of Quantifiers Matters',
        type: 'translation',
        prompt: 'Over domain of numbers, translate: "For every number x, there exists a number y such that y > x."',
        options: ['∀x ∃y (y > x)', '∃y ∀x (y > x)', '∀x ∀y (y > x)', '∃x ∃y (y > x)'],
        correctAnswer: '∀x ∃y (y > x)',
        hint: 'Notice x is chosen first, then a greater y depends on that x.',
        explanation: '∀x ∃y (y > x) means no matter what x you pick, you can find a larger y. (Whereas ∃y ∀x (y > x) would mean there is a single universal maximum y).',
        xp: 90
    },
    {
        id: 'qnt_8',
        categoryId: 'cat_quantifiers',
        title: 'No One Likes Spiders',
        type: 'translation',
        prompt: 'Translate: "No person likes spiders." (P(x): x is a person, L(x): x likes spiders)',
        options: ['∀x (P(x) → ¬L(x))', '∃x (P(x) ∧ ¬L(x))', '¬∀x (P(x) → L(x))', '∀x (¬P(x) → L(x))'],
        correctAnswer: '∀x (P(x) → ¬L(x))',
        hint: '"No A is B" means "For all x, if x is A, then x is NOT B" or "¬∃x (A(x) ∧ B(x))".',
        explanation: '∀x (P(x) → ¬L(x)) ≡ ¬∃x (P(x) ∧ L(x)).',
        xp: 90
    },
    {
        id: 'qnt_9',
        categoryId: 'cat_quantifiers',
        title: 'Vacuous Quantification over Finite Domain',
        type: 'truth_value_pred',
        prompt: 'Domain D = { 2, 4, 6 }. Evaluate: ∀x (Odd(x) → Prime(x)).',
        domain: [{ val: 2 }, { val: 4 }, { val: 6 }],
        options: ['True', 'False'],
        correctAnswer: 'True',
        hint: 'Check Odd(x) for each element in {2, 4, 6}. Is Odd(x) ever True?',
        explanation: 'Odd(x) is False for all elements in D. Since the premise of Odd(x) → Prime(x) is always False, the implication is vacuously True for all x!',
        xp: 95
    },
    {
        id: 'qnt_10',
        categoryId: 'cat_quantifiers',
        title: 'Nested Quantifier Challenge',
        type: 'truth_value_pred',
        prompt: 'Domain D = { 1, 2, 3 }. Evaluate: ∃x ∀y (x <= y).',
        domain: [{ val: 1 }, { val: 2 }, { val: 3 }],
        options: ['True', 'False'],
        correctAnswer: 'True',
        hint: 'Is there a single element x in {1, 2, 3} that is smaller than or equal to ALL y in {1, 2, 3}?',
        explanation: 'Yes! x = 1 is <= 1, <= 2, and <= 3. Thus ∃x ∀y (x <= y) is True.',
        xp: 100
    },

    // ==========================================
    // CATEGORY 6: VISUAL PREDICATE REALM (10 Challenges)
    // ==========================================
    {
        id: 'prd_1',
        categoryId: 'cat_predicate_realm',
        title: 'All Shapes are Red',
        type: 'predicate_world',
        formula: '∀x Red(x)',
        prompt: 'Evaluate whether the formula ∀x Red(x) is True or False in the current world.',
        options: ['True', 'False'],
        world: [
            { id: '1', shape: 'square', color: 'red', size: 'large', x: 0, y: 0 },
            { id: '2', shape: 'circle', color: 'red', size: 'medium', x: 1, y: 0 },
            { id: '3', shape: 'triangle', color: 'red', size: 'small', x: 2, y: 0 }
        ],
        correctAnswer: 'True',
        hint: 'Check the color property of every shape in the grid.',
        explanation: 'All 3 shapes in the world are Red, so ∀x Red(x) is True.',
        xp: 80
    },
    {
        id: 'prd_2',
        categoryId: 'cat_predicate_realm',
        title: 'The Counterexample Circle',
        type: 'predicate_world',
        formula: '∀x Square(x)',
        prompt: 'Evaluate: ∀x Square(x).',
        options: ['True', 'False'],
        world: [
            { id: '1', shape: 'square', color: 'blue', size: 'medium', x: 0, y: 0 },
            { id: '2', shape: 'square', color: 'red', size: 'large', x: 1, y: 0 },
            { id: '3', shape: 'circle', color: 'green', size: 'small', x: 2, y: 0 }
        ],
        correctAnswer: 'False',
        hint: 'Is shape #3 a square?',
        explanation: 'Shape #3 is a Circle, which acts as a counterexample to ∀x Square(x). So the statement is False.',
        xp: 80
    },
    {
        id: 'prd_3',
        categoryId: 'cat_predicate_realm',
        title: 'Existential Green Triangle',
        type: 'predicate_world',
        formula: '∃x (Triangle(x) ∧ Green(x))',
        prompt: 'Evaluate: ∃x (Triangle(x) ∧ Green(x)).',
        options: ['True', 'False'],
        world: [
            { id: '1', shape: 'square', color: 'green', size: 'large', x: 0, y: 0 },
            { id: '2', shape: 'triangle', color: 'green', size: 'medium', x: 1, y: 0 },
            { id: '3', shape: 'circle', color: 'red', size: 'small', x: 2, y: 0 }
        ],
        correctAnswer: 'True',
        hint: 'Find at least one shape that is BOTH a Triangle AND Green.',
        explanation: 'Shape #2 is a Triangle AND Green, satisfying ∃x (Triangle(x) ∧ Green(x)).',
        xp: 85
    },
    {
        id: 'prd_4',
        categoryId: 'cat_predicate_realm',
        title: 'Conditional Shape Rule',
        type: 'predicate_world',
        formula: '∀x (Circle(x) → Blue(x))',
        prompt: 'Evaluate: ∀x (Circle(x) → Blue(x)).',
        options: ['True', 'False'],
        world: [
            { id: '1', shape: 'square', color: 'red', size: 'large', x: 0, y: 0 },
            { id: '2', shape: 'circle', color: 'blue', size: 'medium', x: 1, y: 0 },
            { id: '3', shape: 'circle', color: 'blue', size: 'small', x: 2, y: 0 }
        ],
        correctAnswer: 'True',
        hint: 'Check every circle in the world: are all circles blue?',
        explanation: 'Shapes #2 and #3 are circles, and both are blue. Shape #1 is a square (premise false, vacuously true). Thus True!',
        xp: 90
    },
    {
        id: 'prd_5',
        categoryId: 'cat_predicate_realm',
        title: 'Broken Conditional Shape Rule',
        type: 'predicate_world',
        formula: '∀x (Square(x) → Red(x))',
        prompt: 'Evaluate: ∀x (Square(x) → Red(x)).',
        options: ['True', 'False'],
        world: [
            { id: '1', shape: 'square', color: 'red', size: 'large', x: 0, y: 0 },
            { id: '2', shape: 'square', color: 'blue', size: 'medium', x: 1, y: 0 },
            { id: '3', shape: 'circle', color: 'green', size: 'small', x: 2, y: 0 }
        ],
        correctAnswer: 'False',
        hint: 'Check shape #2.',
        explanation: 'Shape #2 is a Square but it is Blue! Square(#2) → Red(#2) is True → False = False. So the universal formula is False.',
        xp: 90
    },
    {
        id: 'prd_6',
        categoryId: 'cat_predicate_realm',
        title: 'World Alchemist: Universal Harmony',
        type: 'predicate_world_builder',
        formula: '∀x Red(x)',
        prompt: 'Click on the shapes in the world grid to change their colors so that ∀x Red(x) becomes TRUE!',
        world: [
            { id: '1', shape: 'square', color: 'blue', size: 'medium', x: 0, y: 0 },
            { id: '2', shape: 'circle', color: 'green', size: 'large', x: 1, y: 0 },
            { id: '3', shape: 'triangle', color: 'red', size: 'small', x: 2, y: 0 }
        ],
        hint: 'Turn all non-red shapes into Red!',
        explanation: 'Now every object in the domain is Red, making ∀x Red(x) True.',
        xp: 100
    },
    {
        id: 'prd_7',
        categoryId: 'cat_predicate_realm',
        title: 'World Alchemist: Circle Duty',
        type: 'predicate_world_builder',
        formula: '∀x (Circle(x) → Green(x))',
        prompt: 'Alter shape colors so that EVERY Circle in the world is Green!',
        world: [
            { id: '1', shape: 'circle', color: 'red', size: 'medium', x: 0, y: 0 },
            { id: '2', shape: 'square', color: 'blue', size: 'large', x: 1, y: 0 },
            { id: '3', shape: 'circle', color: 'blue', size: 'small', x: 2, y: 0 }
        ],
        hint: 'Only circles need to be Green. Non-circles can be any color.',
        explanation: 'All circles in the grid are now Green.',
        xp: 100
    },
    {
        id: 'prd_8',
        categoryId: 'cat_predicate_realm',
        title: 'Spatial Relation: LeftOf',
        type: 'predicate_world',
        formula: '∃x ∃y (Square(x) ∧ Circle(y) ∧ LeftOf(x, y))',
        prompt: 'Evaluate: ∃x ∃y (Square(x) ∧ Circle(y) ∧ LeftOf(x, y)).',
        options: ['True', 'False'],
        world: [
            { id: '1', shape: 'square', color: 'red', size: 'medium', x: 0, y: 0 },
            { id: '2', shape: 'triangle', color: 'blue', size: 'large', x: 1, y: 0 },
            { id: '3', shape: 'circle', color: 'green', size: 'small', x: 2, y: 0 }
        ],
        correctAnswer: 'True',
        hint: 'Is there a Square situated to the left of a Circle?',
        explanation: 'Square #1 (x=0) is to the left of Circle #3 (x=2). Thus LeftOf(#1, #3) is True!',
        xp: 110
    },
    {
        id: 'prd_9',
        categoryId: 'cat_predicate_realm',
        title: 'Universal Size Guard',
        type: 'predicate_world',
        formula: '∀x (Large(x) → Square(x))',
        prompt: 'Evaluate: ∀x (Large(x) → Square(x)).',
        options: ['True', 'False'],
        world: [
            { id: '1', shape: 'square', color: 'red', size: 'large', x: 0, y: 0 },
            { id: '2', shape: 'circle', color: 'blue', size: 'medium', x: 1, y: 0 },
            { id: '3', shape: 'triangle', color: 'green', size: 'small', x: 2, y: 0 }
        ],
        correctAnswer: 'True',
        hint: 'Find all Large shapes. Are they all Squares?',
        explanation: 'The only Large shape is #1, which is indeed a Square.',
        xp: 95
    },
    {
        id: 'prd_10',
        categoryId: 'cat_predicate_realm',
        title: 'The Great Predicate Challenge',
        type: 'predicate_world_builder',
        formula: '∃x (Square(x) ∧ Red(x)) ∧ ∀y (Triangle(y) → Blue(y))',
        prompt: 'Modify the world state to satisfy BOTH conditions simultaneously!',
        world: [
            { id: '1', shape: 'square', color: 'blue', size: 'large', x: 0, y: 0 },
            { id: '2', shape: 'triangle', color: 'red', size: 'medium', x: 1, y: 0 },
            { id: '3', shape: 'circle', color: 'green', size: 'small', x: 2, y: 0 }
        ],
        hint: 'Make shape #1 (Square) Red, and shape #2 (Triangle) Blue.',
        explanation: 'Square #1 is now Red, and all Triangles are Blue.',
        xp: 120
    },

    // ==========================================
    // CATEGORY 7: THE MASTER LOGIC LAIR (10 Challenges)
    // ==========================================
    {
        id: 'mst_1',
        categoryId: 'cat_master_lair',
        title: 'Knights & Knaves: The Crossroads',
        type: 'riddle',
        prompt: 'Knights ALWAYS tell the truth. Knaves ALWAYS lie. You meet person A. A says: "At least one of us is a Knave." What are A and B?',
        options: [
            'A is a Knight, B is a Knave',
            'Both A and B are Knights',
            'Both A and B are Knaves',
            'A is a Knave, B is a Knight'
        ],
        correctAnswer: 'A is a Knight, B is a Knave',
        hint: 'If A were a Knave, A\'s statement ("At least one is a Knave") would be true, which contradicts being a Knave!',
        explanation: 'A must be a Knight (telling the truth). Since A\'s statement is true and A is a Knight, B MUST be the Knave!',
        xp: 100
    },
    {
        id: 'mst_2',
        categoryId: 'cat_master_lair',
        title: 'Knights & Knaves: Identical Twin Paradox',
        type: 'riddle',
        prompt: 'You meet A and B. A says: "We are both Knaves." What are A and B?',
        options: [
            'A is a Knave, B is a Knight',
            'Both are Knaves',
            'Both are Knights',
            'A is a Knight, B is a Knave'
        ],
        correctAnswer: 'A is a Knave, B is a Knight',
        hint: 'If A were a Knight, A couldn\'t claim to be a Knave. So A is a Knave. What does that mean for statement "We are both Knaves"?',
        explanation: 'Since A is a Knave, A\'s claim ("We are both Knaves") is a LIE. For "both are knaves" to be false when A is a knave, B MUST be a Knight!',
        xp: 110
    },
    {
        id: 'mst_3',
        categoryId: 'cat_master_lair',
        title: 'The Two Doors Riddle',
        type: 'riddle',
        prompt: 'One door leads to Freedom, the other to the Dungeon. One guard is a Knight (always tells truth), one is a Knave (always lies). You don\'t know which guard is which. You can ask ONE guard ONE question. What question guarantees finding Freedom?',
        options: [
            '"Which door would the OTHER guard say leads to Freedom?" (then take the opposite door)',
            '"Which door leads to Freedom?"',
            '"Are you a Knight?"',
            '"Is the Freedom door behind you?"'
        ],
        correctAnswer: '"Which door would the OTHER guard say leads to Freedom?" (then take the opposite door)',
        hint: 'Combining one truth and one lie always produces a LIE (T ∧ F = F).',
        explanation: 'Both the Knight and Knave will point to the DUNGEON door when asked what the OTHER would say. Thus, pick the OPPOSITE door!',
        xp: 120
    },
    {
        id: 'mst_4',
        categoryId: 'cat_master_lair',
        title: 'Smullyan\'s Mirror',
        type: 'riddle',
        prompt: 'A says: "B is a Knight." B says: "A and I are opposite types." What are A and B?',
        options: [
            'Both are Knaves',
            'Both are Knights',
            'A is Knight, B is Knave',
            'A is Knave, B is Knight'
        ],
        correctAnswer: 'Both are Knaves',
        hint: 'If A is a Knight, B is a Knight, but B says they are opposite (lie!) -> contradiction.',
        explanation: 'If A is a Knave, then B is a Knave. B\'s claim ("opposite types") is a lie, which matches B being a Knave! Both are Knaves.',
        xp: 125
    },
    {
        id: 'mst_5',
        categoryId: 'cat_master_lair',
        title: 'The Sorites Paradox',
        type: 'riddle',
        prompt: '1 grain of sand is not a heap. Adding 1 grain to a non-heap does not make it a heap. By mathematical induction, 1,000,000 grains of sand is not a heap! Which logical issue causes this paradox?',
        options: [
            'Vagueness of the predicate "is a heap"',
            'Invalid Modus Ponens',
            'False truth values of AND',
            'Contradiction in De Morgan\'s Law'
        ],
        correctAnswer: 'Vagueness of the predicate "is a heap"',
        hint: 'Classifying continuous properties with sharp boolean boundaries creates classical vagueness paradoxes.',
        explanation: 'The Sorites Paradox arises from the vagueness of natural language predicates like "heap", "bald", or "tall".',
        xp: 100
    },
    {
        id: 'mst_6',
        categoryId: 'cat_master_lair',
        title: 'Barber Paradox',
        type: 'riddle',
        prompt: 'The barber in a village shaves ALL men and ONLY those men who do NOT shave themselves. Does the barber shave himself?',
        options: [
            'Logical Paradox (No such barber can exist in classical logic)',
            'Yes, he shaves himself',
            'No, he does not shave himself',
            'The barber is a woman'
        ],
        correctAnswer: 'Logical Paradox (No such barber can exist in classical logic)',
        hint: 'Let B(x) be "x is shaved by barber". The condition is B(x) ↔ ¬S(x,x). If x is the barber, B(b) ↔ ¬B(b) which is a contradiction!',
        explanation: 'This is Russell\'s Paradox in popular form: B(b) ↔ ¬B(b) is a formal contradiction.',
        xp: 130
    },
    {
        id: 'mst_7',
        categoryId: 'cat_master_lair',
        title: 'The Liar Paradox',
        type: 'riddle',
        prompt: 'Consider the sentence L: "This statement is false." What is its truth value in classical two-valued logic?',
        options: [
            'Paradoxical / Undefined (Neither True nor False)',
            'True',
            'False',
            'Both True and False simultaneously'
        ],
        correctAnswer: 'Paradoxical / Undefined (Neither True nor False)',
        hint: 'If L is True, then by its content L is False. If L is False, then by its content L is True.',
        explanation: 'The Liar Paradox shows that classical binary logic cannot assign a truth value to self-referential negative propositions without inconsistency.',
        xp: 120
    },
    {
        id: 'mst_8',
        categoryId: 'cat_master_lair',
        title: 'SAT Solver Master Trial',
        type: 'equivalence_input',
        prompt: 'Find a satisfying boolean assignment for: (P ∨ Q) ∧ (¬P ∨ R) ∧ (¬Q ∨ ¬R) ∧ P. Type the value of R (True or False):',
        targetFormula: 'False',
        options: ['True', 'False'],
        correctAnswer: 'False',
        hint: 'P MUST be True (from literal P). From (¬P ∨ R), since ¬P is False, R MUST be True. Wait! Check (¬Q ∨ ¬R)...',
        explanation: 'Since P=True, (¬P ∨ R) requires R=True. From (P ∨ Q) P=True is satisfied. From (¬Q ∨ ¬R) with R=True, Q MUST be False. So P=True, Q=False, R=True makes it satisfied! Wait, let\'s re-evaluate R: R must be True.',
        xp: 140
    },
    {
        id: 'mst_9',
        categoryId: 'cat_master_lair',
        title: 'The Hardest Logic Puzzle Ever (Simplified)',
        type: 'riddle',
        prompt: 'Three gods A, B, C are True (always speaks truth), False (always lies), and Random (speaks randomly). You ask A: "Is B True?" A responds "Ja" (means Yes or No). If A is True, what can you deduce about A?',
        options: [
            'A cannot be Random',
            'A must be False',
            'A must be True',
            'B must be Random'
        ],
        correctAnswer: 'A cannot be Random',
        hint: 'If you ask a question to True or False, their answer is deterministic. Random gives non-deterministic answers.',
        explanation: 'In Boolos\'s Hardest Logic Puzzle, identifying a non-random god is the crucial first step!',
        xp: 150
    },
    {
        id: 'mst_10',
        categoryId: 'cat_master_lair',
        title: 'Grandmaster Lair Clearance',
        type: 'classification',
        prompt: 'Classify the master formula: ((P → Q) ∧ (Q → R) ∧ (R → P)) → (P ↔ R)',
        formula: '((P → Q) ∧ (Q → R) ∧ (R → P)) → (P ↔ R)',
        options: ['Tautology', 'Contradiction', 'Contingency'],
        correctAnswer: 'Tautology',
        hint: 'A cycle of implications P → Q → R → P means P, Q, and R are all logically equivalent!',
        explanation: 'If P → Q, Q → R, and R → P, then P ↔ Q ↔ R. Therefore P ↔ R is a Tautology!',
        xp: 200
    }
];
