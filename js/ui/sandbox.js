import { LogicParser } from '../engine/logic-parser.js';
import { Evaluator } from '../engine/evaluator.js';
import { LogicKeyboard } from './keyboard.js';
import { GridWorld } from './grid-world.js';

export class SandboxView {
    static init(containerEl) {
        if (!containerEl) return;

        containerEl.innerHTML = `
            <div class="sandbox-header">
                <h2>🧪 Interactive OmniMath Sandbox</h2>
                <p>Build, test, and analyze Propositional Logic, Predicates, Sets, Mappings, and Calculus!</p>
            </div>

            <div class="sandbox-tabs">
                <button class="sandbox-tab-btn active" data-tab="truth-table-tool">Truth Table Generator</button>
                <button class="sandbox-tab-btn" data-tab="equivalence-tool">Equivalence Checker</button>
                <button class="sandbox-tab-btn" data-tab="predicate-tool">Predicate World Sandbox</button>
                <button class="sandbox-tab-btn" data-tab="set-tool">Set Theory Visualizer</button>
                <button class="sandbox-tab-btn" data-tab="function-tool">Function Mapping Inspector</button>
                <button class="sandbox-tab-btn" data-tab="calculus-tool">Calculus & Rates Visualizer</button>
            </div>

            <!-- TRUTH TABLE TOOL -->
            <div class="sandbox-panel active" id="truth-table-tool">
                <div class="input-card">
                    <label>Enter Formula (Propositional Logic):</label>
                    <div class="input-with-keyboard">
                        <input type="text" id="tt-formula-input" placeholder="e.g. (P → Q) ∧ ¬Q" value="(P → Q) ∧ ¬Q">
                        <div id="tt-keyboard"></div>
                    </div>
                    <button class="btn btn-primary" id="btn-generate-tt">Generate Truth Table</button>
                </div>

                <div id="tt-results" class="results-card hidden">
                    <div class="analysis-badge" id="tt-classification"></div>
                    <div class="table-responsive" id="tt-table-container"></div>
                </div>
            </div>

            <!-- EQUIVALENCE TOOL -->
            <div class="sandbox-panel" id="equivalence-tool">
                <div class="input-card">
                    <label>Formula 1:</label>
                    <input type="text" id="eq-formula-1" placeholder="e.g. ¬(P ∧ Q)" value="¬(P ∧ Q)">
                    
                    <label style="margin-top: 1rem;">Formula 2:</label>
                    <input type="text" id="eq-formula-2" placeholder="e.g. ¬P ∨ ¬Q" value="¬P ∨ ¬Q">

                    <div id="eq-keyboard"></div>

                    <button class="btn btn-primary" id="btn-check-eq">Check Logical Equivalence</button>
                </div>

                <div id="eq-results" class="results-card hidden">
                    <div id="eq-status-box"></div>
                </div>
            </div>

            <!-- PREDICATE WORLD TOOL -->
            <div class="sandbox-panel" id="predicate-tool">
                <div class="input-card">
                    <label>Enter Predicate Formula (e.g. ∀x (Square(x) → Red(x))):</label>
                    <input type="text" id="pred-formula-input" value="∀x (Square(x) → Red(x))">
                    <div id="pred-keyboard"></div>
                    <button class="btn btn-primary" id="btn-eval-pred">Evaluate Over World</button>
                </div>

                <div class="sandbox-world-layout">
                    <div class="world-section">
                        <h3>Interactive Domain Objects (Click shape to change color)</h3>
                        <div id="sandbox-world-container"></div>
                    </div>

                    <div class="world-results-section">
                        <h3>Evaluation Result</h3>
                        <div id="pred-eval-box" class="results-card">Click Evaluate button above</div>
                    </div>
                </div>
            </div>

            <!-- SET THEORY VISUALIZER TOOL -->
            <div class="sandbox-panel" id="set-tool">
                <div class="input-card">
                    <label>Set A (comma-separated elements):</label>
                    <input type="text" id="set-input-a" placeholder="e.g. 1, 2, 3, 4" value="1, 2, 3, 4">

                    <label style="margin-top: 0.75rem;">Set B (comma-separated elements):</label>
                    <input type="text" id="set-input-b" placeholder="e.g. 3, 4, 5, 6" value="3, 4, 5, 6">

                    <label style="margin-top: 0.75rem;">Select Operation:</label>
                    <select id="set-op-select" class="form-select">
                        <option value="union">Union (A ∪ B)</option>
                        <option value="intersection">Intersection (A ∩ B)</option>
                        <option value="difference">Difference (A \\ B)</option>
                        <option value="symmetric_difference">Symmetric Difference (A Δ B)</option>
                    </select>

                    <button class="btn btn-primary" id="btn-eval-set" style="margin-top: 1rem;">Compute Set Operation</button>
                </div>

                <div id="set-results" class="results-card hidden">
                    <div id="set-status-box"></div>
                </div>
            </div>

            <!-- FUNCTION MAPPING INSPECTOR TOOL -->
            <div class="sandbox-panel" id="function-tool">
                <div class="input-card">
                    <label>Domain X (comma-separated):</label>
                    <input type="text" id="fn-domain-input" placeholder="e.g. 1, 2, 3" value="1, 2, 3">

                    <label style="margin-top: 0.75rem;">Codomain Y (comma-separated):</label>
                    <input type="text" id="fn-codomain-input" placeholder="e.g. A, B, C, D" value="A, B, C, D">

                    <label style="margin-top: 0.75rem;">Mapping f: X → Y (format: 1->A, 2->B, 3->C):</label>
                    <input type="text" id="fn-mapping-input" placeholder="e.g. 1->A, 2->B, 3->C" value="1->A, 2->B, 3->C">

                    <button class="btn btn-primary" id="btn-eval-fn" style="margin-top: 1rem;">Analyze Function Properties</button>
                </div>

                <div id="fn-results" class="results-card hidden">
                    <div id="fn-status-box"></div>
                </div>
            </div>

            <!-- CALCULUS & RATES VISUALIZER TOOL -->
            <div class="sandbox-panel" id="calculus-tool">
                <div class="input-card">
                    <label>Polynomial Term <code>c · xⁿ</code> (Enter Coefficient c and Exponent n):</label>
                    <div style="display: flex; gap: 1rem; margin-top: 0.5rem; flex-wrap: wrap;">
                        <div style="flex: 1; min-width: 120px;">
                            <label style="font-size: 0.85rem;">Coefficient (c):</label>
                            <input type="number" id="calc-coef" value="3" step="any">
                        </div>
                        <div style="flex: 1; min-width: 120px;">
                            <label style="font-size: 0.85rem;">Exponent (n):</label>
                            <input type="number" id="calc-power" value="2" step="any">
                        </div>
                    </div>

                    <label style="margin-top: 1rem;">Select Calculus Analysis:</label>
                    <select id="calc-mode-select" class="form-select">
                        <option value="derivative">Power Rule Derivative: d/dx [c · xⁿ]</option>
                        <option value="limit">Limit at Point: lim_{x → a} (c · xⁿ)</option>
                        <option value="integral">Definite Integral Area: ∫ₐᵇ (c · xⁿ) dx</option>
                    </select>

                    <div id="calc-extra-params" style="margin-top: 1rem;">
                        <div id="calc-param-point">
                            <label style="font-size: 0.85rem;">Target Point (a):</label>
                            <input type="number" id="calc-target-x" value="4" step="any">
                        </div>
                        <div id="calc-param-bounds" class="hidden" style="display: flex; gap: 1rem;">
                            <div style="flex: 1;">
                                <label style="font-size: 0.85rem;">Lower Bound (a):</label>
                                <input type="number" id="calc-bound-a" value="0" step="any">
                            </div>
                            <div style="flex: 1;">
                                <label style="font-size: 0.85rem;">Upper Bound (b):</label>
                                <input type="number" id="calc-bound-b" value="3" step="any">
                            </div>
                        </div>
                    </div>

                    <button class="btn btn-primary" id="btn-eval-calc" style="margin-top: 1rem;">Compute Calculus Result</button>
                </div>

                <div id="calc-results" class="results-card hidden">
                    <div id="calc-status-box"></div>
                </div>
            </div>
        `;

        this.bindEvents(containerEl);
    }

    static bindEvents(containerEl) {
        // Tab switching
        const tabBtns = containerEl.querySelectorAll('.sandbox-tab-btn');
        const panels = containerEl.querySelectorAll('.sandbox-panel');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));

                btn.classList.add('active');
                const targetId = btn.getAttribute('data-tab');
                containerEl.querySelector(`#${targetId}`).classList.add('active');
            });
        });

        // Keyboards
        LogicKeyboard.attach(containerEl.querySelector('#tt-keyboard'), containerEl.querySelector('#tt-formula-input'));
        LogicKeyboard.attach(containerEl.querySelector('#eq-keyboard'), containerEl.querySelector('#eq-formula-1'));
        LogicKeyboard.attach(containerEl.querySelector('#pred-keyboard'), containerEl.querySelector('#pred-formula-input'));

        // Truth Table Generator
        const ttBtn = containerEl.querySelector('#btn-generate-tt');
        ttBtn.addEventListener('click', () => this.runTruthTable(containerEl));

        // Equivalence Checker
        const eqBtn = containerEl.querySelector('#btn-check-eq');
        eqBtn.addEventListener('click', () => this.runEquivalence(containerEl));

        // Predicate Sandbox
        const predWorldData = [
            { id: '1', shape: 'square', color: 'red', size: 'large', x: 0, y: 0 },
            { id: '2', shape: 'circle', color: 'blue', size: 'medium', x: 1, y: 0 },
            { id: '3', shape: 'triangle', color: 'green', size: 'small', x: 2, y: 0 }
        ];

        const worldContainer = containerEl.querySelector('#sandbox-world-container');
        GridWorld.render(worldContainer, predWorldData, true, () => {
            this.runPredicateEval(containerEl, predWorldData);
        });

        const predBtn = containerEl.querySelector('#btn-eval-pred');
        predBtn.addEventListener('click', () => this.runPredicateEval(containerEl, predWorldData));

        // Set Theory Visualizer
        const setBtn = containerEl.querySelector('#btn-eval-set');
        setBtn.addEventListener('click', () => this.runSetEval(containerEl));

        // Function Mapping Inspector
        const fnBtn = containerEl.querySelector('#btn-eval-fn');
        fnBtn.addEventListener('click', () => this.runFunctionEval(containerEl));

        // Calculus Visualizer Mode Switch
        const calcModeSelect = containerEl.querySelector('#calc-mode-select');
        const paramPoint = containerEl.querySelector('#calc-param-point');
        const paramBounds = containerEl.querySelector('#calc-param-bounds');

        if (calcModeSelect) {
            calcModeSelect.addEventListener('change', () => {
                const mode = calcModeSelect.value;
                if (mode === 'integral') {
                    paramPoint.classList.add('hidden');
                    paramBounds.classList.remove('hidden');
                } else if (mode === 'limit') {
                    paramPoint.classList.remove('hidden');
                    paramBounds.classList.add('hidden');
                } else {
                    paramPoint.classList.add('hidden');
                    paramBounds.classList.add('hidden');
                }
            });
        }

        // Calculus Visualizer Compute
        const calcBtn = containerEl.querySelector('#btn-eval-calc');
        if (calcBtn) {
            calcBtn.addEventListener('click', () => this.runCalculusEval(containerEl));
        }
    }

    static escapeHTML(str) {
        if (typeof str !== 'string') return '';
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    static runTruthTable(containerEl) {
        const inputVal = containerEl.querySelector('#tt-formula-input').value.trim();
        const resultsCard = containerEl.querySelector('#tt-results');
        const classBadge = containerEl.querySelector('#tt-classification');
        const tableContainer = containerEl.querySelector('#tt-table-container');

        try {
            const table = Evaluator.generateTruthTable(inputVal);
            const classification = Evaluator.classifyFormula(inputVal);

            resultsCard.classList.remove('hidden');
            classBadge.textContent = `Formula Classification: ${classification.toUpperCase()}`;
            classBadge.className = `analysis-badge badge-${classification.toLowerCase()}`;

            let html = '<table class="truth-table"><thead><tr>';
            table.variables.forEach(v => {
                html += `<th>${this.escapeHTML(v)}</th>`;
            });
            html += `<th class="result-header">${this.escapeHTML(inputVal)}</th></tr></thead><tbody>`;

            table.rows.forEach(r => {
                html += '<tr>';
                table.variables.forEach(v => {
                    const val = r.assignment[v];
                    html += `<td class="${val ? 'val-true' : 'val-false'}">${val ? 'T' : 'F'}</td>`;
                });
                html += `<td class="result-cell ${r.result ? 'val-true' : 'val-false'}">${r.result ? 'T' : 'F'}</td></tr>`;
            });

            html += '</tbody></table>';
            tableContainer.innerHTML = html;
        } catch (err) {
            resultsCard.classList.remove('hidden');
            classBadge.textContent = 'Syntax Error';
            classBadge.className = 'analysis-badge badge-contradiction';
            tableContainer.innerHTML = `<p class="error-msg">⚠️ ${this.escapeHTML(err.message)}</p>`;
        }
    }

    static runEquivalence(containerEl) {
        const f1 = containerEl.querySelector('#eq-formula-1').value.trim();
        const f2 = containerEl.querySelector('#eq-formula-2').value.trim();
        const resultsCard = containerEl.querySelector('#eq-results');
        const statusBox = containerEl.querySelector('#eq-status-box');

        try {
            const isEq = Evaluator.areEquivalent(f1, f2);
            resultsCard.classList.remove('hidden');

            const safeF1 = this.escapeHTML(f1);
            const safeF2 = this.escapeHTML(f2);

            if (isEq) {
                statusBox.className = 'status-box status-success';
                statusBox.innerHTML = `
                    <h3>✅ LOGICALLY EQUIVALENT</h3>
                    <p>The formulas <strong>${safeF1}</strong> and <strong>${safeF2}</strong> produce identical truth tables for all variable assignments.</p>
                `;
            } else {
                statusBox.className = 'status-box status-danger';
                statusBox.innerHTML = `
                    <h3>❌ NOT LOGICALLY EQUIVALENT</h3>
                    <p>The formulas <strong>${safeF1}</strong> and <strong>${safeF2}</strong> differ under at least one assignment.</p>
                `;
            }
        } catch (err) {
            resultsCard.classList.remove('hidden');
            statusBox.className = 'status-box status-danger';
            statusBox.innerHTML = `<p>⚠️ ${this.escapeHTML(err.message)}</p>`;
        }
    }

    static runPredicateEval(containerEl, worldData) {
        const inputVal = containerEl.querySelector('#pred-formula-input').value.trim();
        const evalBox = containerEl.querySelector('#pred-eval-box');

        try {
            const ast = LogicParser.parse(inputVal);
            const predicates = GridWorld.createPredicatesFromWorld();
            const result = Evaluator.evaluatePredicate(ast, worldData, predicates);
            const safeVal = this.escapeHTML(inputVal);

            evalBox.className = `results-card ${result ? 'status-success' : 'status-danger'}`;
            evalBox.innerHTML = `
                <h3>${result ? '✅ TRUE in this World' : '❌ FALSE in this World'}</h3>
                <p>Formula: <code>${safeVal}</code></p>
            `;
        } catch (err) {
            evalBox.className = 'results-card status-danger';
            evalBox.innerHTML = `<p>⚠️ ${this.escapeHTML(err.message)}</p>`;
        }
    }

    static runSetEval(containerEl) {
        const strA = containerEl.querySelector('#set-input-a').value.trim();
        const strB = containerEl.querySelector('#set-input-b').value.trim();
        const op = containerEl.querySelector('#set-op-select').value;
        const resultsCard = containerEl.querySelector('#set-results');
        const statusBox = containerEl.querySelector('#set-status-box');

        const setA = strA ? strA.split(',').map(s => s.trim()).filter(Boolean) : [];
        const setB = strB ? strB.split(',').map(s => s.trim()).filter(Boolean) : [];

        try {
            const resultSet = Evaluator.evaluateSetOperation(op, setA, setB);
            resultsCard.classList.remove('hidden');

            const opNames = {
                union: 'A ∪ B (Union)',
                intersection: 'A ∩ B (Intersection)',
                difference: 'A \\ B (Difference)',
                symmetric_difference: 'A Δ B (Symmetric Difference)'
            };

            const aOnly = setA.filter(x => !setB.includes(x));
            const bOnly = setB.filter(x => !setA.includes(x));
            const both = setA.filter(x => setB.includes(x));

            statusBox.className = 'status-box status-success';
            statusBox.innerHTML = `
                <h3>Result for ${opNames[op] || op}</h3>
                <p class="set-result-formula">Resulting Set: <code>{ ${resultSet.join(', ')} }</code> (Cardinality = ${resultSet.length})</p>
                <div class="venn-breakdown" style="margin-top: 1rem; font-size: 0.9rem;">
                    <div><strong>A Only ({ ${aOnly.join(', ')} })</strong></div>
                    <div><strong>Shared A ∩ B ({ ${both.join(', ')} })</strong></div>
                    <div><strong>B Only ({ ${bOnly.join(', ')} })</strong></div>
                </div>
            `;
        } catch (err) {
            resultsCard.classList.remove('hidden');
            statusBox.className = 'status-box status-danger';
            statusBox.innerHTML = `<p>⚠️ ${this.escapeHTML(err.message)}</p>`;
        }
    }

    static runFunctionEval(containerEl) {
        const strDomain = containerEl.querySelector('#fn-domain-input').value.trim();
        const strCodomain = containerEl.querySelector('#fn-codomain-input').value.trim();
        const strMapping = containerEl.querySelector('#fn-mapping-input').value.trim();
        const resultsCard = containerEl.querySelector('#fn-results');
        const statusBox = containerEl.querySelector('#fn-status-box');

        const domain = strDomain ? strDomain.split(',').map(s => s.trim()).filter(Boolean) : [];
        const codomain = strCodomain ? strCodomain.split(',').map(s => s.trim()).filter(Boolean) : [];
        
        const mapping = {};
        if (strMapping) {
            const pairs = strMapping.split(',').map(s => s.trim());
            pairs.forEach(p => {
                const parts = p.split('->').map(x => x.trim());
                if (parts.length === 2) {
                    mapping[parts[0]] = parts[1];
                }
            });
        }

        try {
            const res = Evaluator.checkFunctionProperties(domain, codomain, mapping);
            resultsCard.classList.remove('hidden');

            statusBox.className = 'status-box status-success';
            statusBox.innerHTML = `
                <h3>Function Analysis Results</h3>
                <ul class="fn-results-list" style="list-style: none; padding: 0; line-height: 1.8;">
                    <li><strong>Valid Function:</strong> ${res.isValidFunction ? '✅ Yes' : '❌ No (Unmapped domain elements)'}</li>
                    <li><strong>Injective (One-to-One):</strong> ${res.isInjective ? '✅ Yes (All outputs unique)' : '❌ No (Duplicate outputs mapped)'}</li>
                    <li><strong>Surjective (Onto):</strong> ${res.isSurjective ? '✅ Yes (Range = Codomain)' : '❌ No (Uncovered codomain elements)'}</li>
                    <li><strong>Bijective (Invertible):</strong> ${res.isBijective ? '🌟 Yes! Inverse f⁻¹ exists' : '❌ No'}</li>
                    <li><strong>Range (Image):</strong> <code>{ ${res.range.join(', ')} }</code></li>
                </ul>
            `;
        } catch (err) {
            resultsCard.classList.remove('hidden');
            statusBox.className = 'status-box status-danger';
            statusBox.innerHTML = `<p>⚠️ ${this.escapeHTML(err.message)}</p>`;
        }
    }

    static runCalculusEval(containerEl) {
        const coef = parseFloat(containerEl.querySelector('#calc-coef').value) || 0;
        const power = parseFloat(containerEl.querySelector('#calc-power').value) || 0;
        const mode = containerEl.querySelector('#calc-mode-select').value;
        const resultsCard = containerEl.querySelector('#calc-results');
        const statusBox = containerEl.querySelector('#calc-status-box');

        try {
            resultsCard.classList.remove('hidden');
            statusBox.className = 'status-box status-success';

            if (mode === 'derivative') {
                const res = Evaluator.evaluatePowerRuleDerivative(coef, power);
                const formulaStr = `${coef}x^${power}`;
                const derivStr = `${res.coef}x^${res.power}`;
                statusBox.innerHTML = `
                    <h3>📈 Power Rule Derivative</h3>
                    <p>Function: <code>f(x) = ${formulaStr}</code></p>
                    <p style="margin-top: 0.5rem; font-size: 1.1rem; color: #84cc16;">Derivative: <code>f'(x) = ${derivStr}</code></p>
                `;
            } else if (mode === 'limit') {
                const targetX = parseFloat(containerEl.querySelector('#calc-target-x').value) || 0;
                const limitVal = Evaluator.evaluatePolynomialLimit(coef, power, targetX);
                statusBox.innerHTML = `
                    <h3>🌌 Limit Evaluation</h3>
                    <p>Formula: <code>lim_{x → ${targetX}} (${coef}x^${power})</code></p>
                    <p style="margin-top: 0.5rem; font-size: 1.1rem; color: #f59e0b;">Limit Value L = <strong>${limitVal}</strong></p>
                `;
            } else if (mode === 'integral') {
                const a = parseFloat(containerEl.querySelector('#calc-bound-a').value) || 0;
                const b = parseFloat(containerEl.querySelector('#calc-bound-b').value) || 0;
                const areaVal = Evaluator.evaluateDefiniteIntegralPowerRule(coef, power, a, b);
                statusBox.innerHTML = `
                    <h3>∫ Definite Integral (Net Area)</h3>
                    <p>Integral: <code>∫_{${a}}^{${b}} (${coef}x^${power}) dx</code></p>
                    <p style="margin-top: 0.5rem; font-size: 1.1rem; color: #6366f1;">Net Area = <strong>${areaVal.toFixed(4)}</strong></p>
                `;
            }
        } catch (err) {
            resultsCard.classList.remove('hidden');
            statusBox.className = 'status-box status-danger';
            statusBox.innerHTML = `<p>⚠️ ${this.escapeHTML(err.message)}</p>`;
        }
    }
}
