import { LogicParser } from '../engine/logic-parser.js';
import { Evaluator } from '../engine/evaluator.js';
import { LogicKeyboard } from './keyboard.js';
import { GridWorld } from './grid-world.js';

export class SandboxView {
    static init(containerEl) {
        if (!containerEl) return;

        containerEl.innerHTML = `
            <div class="sandbox-header">
                <h2>🧪 Interactive Logic Sandbox</h2>
                <p>Build, test, and analyze any custom Propositional or Predicate Logic expression!</p>
            </div>

            <div class="sandbox-tabs">
                <button class="sandbox-tab-btn active" data-tab="truth-table-tool">Truth Table Generator</button>
                <button class="sandbox-tab-btn" data-tab="equivalence-tool">Equivalence Checker</button>
                <button class="sandbox-tab-btn" data-tab="predicate-tool">Predicate World Sandbox</button>
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
}
