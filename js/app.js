import { CATEGORIES, CHALLENGES } from './data/challenges.js';
import { LogicParser } from './engine/logic-parser.js';
import { Evaluator } from './engine/evaluator.js';
import { LogicKeyboard } from './ui/keyboard.js';
import { GridWorld } from './ui/grid-world.js';
import { SoundEffects } from './ui/sound.js';
import { SandboxView } from './ui/sandbox.js';
import { VisualIntuitionEngine } from './ui/visual-intuition.js';

class LogicLairApp {
    constructor() {
        this.userState = this.loadState();
        this.currentCategory = null;
        this.currentChallengeIndex = 0;
        this.selectedOption = null;
        this.activeWorldState = null;

        this.initDOM();
        this.bindEvents();
        this.renderHeaderStats();
        this.renderCampaignMap();
    }

    loadState() {
        const saved = localStorage.getItem('omnimath_realm_user_state') || 
                      localStorage.getItem('discrete_math_realm_user_state') || 
                      localStorage.getItem('logic_lair_user_state');
        if (saved) {
            try { return JSON.parse(saved); } catch (e) {}
        }
        return {
            xp: 0,
            streak: 1,
            completedChallenges: [], // Array of challenge IDs
            muted: false
        };
    }

    saveState() {
        localStorage.setItem('omnimath_realm_user_state', JSON.stringify(this.userState));
        this.renderHeaderStats();
    }

    initDOM() {
        this.viewCampaign = document.getElementById('view-campaign');
        this.viewWorkspace = document.getElementById('view-workspace');
        this.viewSandbox = document.getElementById('view-sandbox');
        this.viewStats = document.getElementById('view-stats');

        this.navBtns = document.querySelectorAll('.nav-tab-btn');
        this.soundBtn = document.getElementById('btn-sound-toggle');
    }

    bindEvents() {
        // Navigation Tabs
        this.navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                SoundEffects.playClick();
                const targetView = btn.getAttribute('data-view');
                this.switchView(targetView);
            });
        });

        // Sound Toggle
        if (this.soundBtn) {
            this.soundBtn.addEventListener('click', () => {
                const muted = SoundEffects.toggleMute();
                this.userState.muted = muted;
                this.soundBtn.textContent = muted ? '🔇' : '🔊';
                this.saveState();
            });
            if (this.userState.muted) {
                SoundEffects.isMuted = true;
                this.soundBtn.textContent = '🔇';
            }
        }
    }

    switchView(viewId) {
        this.navBtns.forEach(b => b.classList.remove('active'));
        const activeNav = Array.from(this.navBtns).filter(b => b.getAttribute('data-view') === viewId);
        activeNav.forEach(n => n.classList.add('active'));

        [this.viewCampaign, this.viewWorkspace, this.viewSandbox, this.viewStats].forEach(v => {
            if (v) v.classList.remove('active');
        });

        if (viewId === 'campaign') {
            this.resetBiomeTheme();
            this.renderCampaignMap();
            if (this.viewCampaign) this.viewCampaign.classList.add('active');
        } else if (viewId === 'workspace') {
            if (!this.currentCategory) {
                this.currentCategory = CATEGORIES[0];
            }
            this.applyBiomeTheme(this.currentCategory);
            this.renderWorkspace();
            if (this.viewWorkspace) this.viewWorkspace.classList.add('active');
        } else if (viewId === 'sandbox') {
            this.resetBiomeTheme();
            SandboxView.init(this.viewSandbox);
            if (this.viewSandbox) this.viewSandbox.classList.add('active');
        } else if (viewId === 'stats') {
            this.resetBiomeTheme();
            this.renderStatsView();
            if (this.viewStats) this.viewStats.classList.add('active');
        }
    }

    applyBiomeTheme(cat) {
        if (!cat) return;
        document.documentElement.style.setProperty('--primary', cat.color);
        document.documentElement.style.setProperty('--border-glow', `${cat.color}66`);
        document.body.style.backgroundImage = `
            radial-gradient(at 10% 10%, ${cat.color}22 0px, transparent 50%),
            radial-gradient(at 90% 80%, rgba(139, 92, 246, 0.15) 0px, transparent 50%)
        `;
    }

    resetBiomeTheme() {
        document.documentElement.style.setProperty('--primary', '#06b6d4');
        document.documentElement.style.setProperty('--border-glow', 'rgba(6, 182, 212, 0.4)');
        document.body.style.backgroundImage = `
            radial-gradient(at 10% 10%, rgba(6, 182, 212, 0.12) 0px, transparent 50%),
            radial-gradient(at 90% 80%, rgba(139, 92, 246, 0.12) 0px, transparent 50%)
        `;
    }

    renderHeaderStats() {
        const xpEl = document.getElementById('stat-xp-val');
        const streakEl = document.getElementById('stat-streak-val');
        const countEl = document.getElementById('stat-completed-val');

        if (xpEl) xpEl.textContent = this.userState.xp;
        if (streakEl) streakEl.textContent = `${this.userState.streak} 🔥`;
        if (countEl) countEl.textContent = `${this.userState.completedChallenges.length} / ${CHALLENGES.length}`;
    }

    renderCampaignMap() {
        if (!this.viewCampaign) return;

        const grid = this.viewCampaign.querySelector('.categories-grid');
        if (!grid) return;

        grid.innerHTML = '';

        CATEGORIES.forEach(cat => {
            const catChallenges = CHALLENGES.filter(c => c.categoryId === cat.id);
            const completedCount = catChallenges.filter(c => this.userState.completedChallenges.includes(c.id)).length;
            const pct = catChallenges.length ? Math.round((completedCount / catChallenges.length) * 100) : 0;

            const card = document.createElement('div');
            card.className = 'category-card';
            card.style.setProperty('--category-color', cat.color);

            card.innerHTML = `
                <div class="category-header">
                    <div class="category-icon">${cat.icon}</div>
                    <div class="category-title">
                        <h3>${cat.name}</h3>
                    </div>
                </div>
                <p class="category-desc">${cat.description}</p>
                <div class="category-progress">
                    <span>${completedCount} / ${catChallenges.length} Mastered</span>
                    <span>${pct}%</span>
                </div>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${pct}%"></div>
                </div>
            `;

            card.addEventListener('click', () => {
                SoundEffects.playClick();
                this.currentCategory = cat;
                this.currentChallengeIndex = 0;
                this.switchView('workspace');
            });

            grid.appendChild(card);
        });
    }

    renderWorkspace() {
        if (!this.viewWorkspace || !this.currentCategory) return;

        this.applyBiomeTheme(this.currentCategory);

        const catChallenges = CHALLENGES.filter(c => c.categoryId === this.currentCategory.id);
        const sidebarList = this.viewWorkspace.querySelector('.challenge-list');
        const mobileCarousel = this.viewWorkspace.querySelector('.mobile-level-carousel');
        const mainArea = this.viewWorkspace.querySelector('.challenge-main-area');

        // Sidebar List (Desktop)
        if (sidebarList) {
            sidebarList.innerHTML = '';
            catChallenges.forEach((ch, idx) => {
                const isCompleted = this.userState.completedChallenges.includes(ch.id);
                const isActive = idx === this.currentChallengeIndex;

                const btn = document.createElement('button');
                btn.className = `challenge-item-btn ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
                btn.innerHTML = `
                    <span>#${idx + 1} ${ch.title}</span>
                    <span class="status-icon">${isCompleted ? '✅' : '🔒'}</span>
                `;

                btn.addEventListener('click', () => {
                    SoundEffects.playClick();
                    this.currentChallengeIndex = idx;
                    this.renderWorkspace();
                });

                sidebarList.appendChild(btn);
            });
        }

        // Horizontal Carousel (Mobile)
        if (mobileCarousel) {
            mobileCarousel.innerHTML = '';
            catChallenges.forEach((ch, idx) => {
                const isCompleted = this.userState.completedChallenges.includes(ch.id);
                const isActive = idx === this.currentChallengeIndex;

                const chip = document.createElement('button');
                chip.className = `mobile-level-chip ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
                chip.innerHTML = `
                    <span>#${idx + 1}</span>
                    <span>${isCompleted ? '✅' : ''}</span>
                `;

                chip.addEventListener('click', () => {
                    SoundEffects.playClick();
                    this.currentChallengeIndex = idx;
                    this.renderWorkspace();
                });

                mobileCarousel.appendChild(chip);
            });
        }

        // Render Current Challenge Card
        const currentCh = catChallenges[this.currentChallengeIndex];
        if (mainArea && currentCh) {
            this.renderChallengeCard(mainArea, currentCh, catChallenges);
        }
    }

    renderChallengeCard(containerEl, ch, catChallenges) {
        this.selectedOption = null;
        this.activeWorldState = ch.world ? JSON.parse(JSON.stringify(ch.world)) : null;

        let contentHtml = `
            <div class="biome-banner" style="background: linear-gradient(135deg, ${this.currentCategory.color}22, rgba(15, 23, 42, 0.8)); border: 1px solid ${this.currentCategory.color}44; padding: 0.75rem 1.25rem; border-radius: 12px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <span style="font-size: 1.6rem;">${this.currentCategory.icon}</span>
                    <div>
                        <div style="font-weight: 700; color: ${this.currentCategory.color}; font-size: 0.95rem;">${this.currentCategory.name} Realm</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted);">${this.currentCategory.description}</div>
                    </div>
                </div>
                <span class="challenge-xp" style="background: ${this.currentCategory.color}22; color: ${this.currentCategory.color}; border: 1px solid ${this.currentCategory.color}66; padding: 0.3rem 0.75rem; border-radius: 20px; font-weight: 700;">⚡ +${ch.xp} XP</span>
            </div>

            <div class="challenge-card">
                <h3 class="challenge-title">Level ${this.currentChallengeIndex + 1}: ${ch.title}</h3>
        `;

        if (ch.learningInfo) {
            contentHtml += `
                <div class="learning-info-card" style="background: ${this.currentCategory.color}12; border-left: 4px solid ${this.currentCategory.color}; padding: 1rem 1.25rem; border-radius: 8px; margin: 1rem 0;">
                    <div style="font-weight: 700; color: ${this.currentCategory.color}; margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.5rem;">
                        <span>📖 Educational Context & Priming</span>
                    </div>
                    <div style="font-size: 0.95rem; line-height: 1.6; color: var(--text-main);">${ch.learningInfo}</div>
                </div>
            `;
        }

        // Add Manim Visual Intuition Container if applicable
        const hasVisualGraphic = ['cat_limits', 'cat_derivatives', 'cat_integrals', 'cat_set_theory', 'cat_functions'].includes(ch.categoryId);
        if (hasVisualGraphic) {
            contentHtml += `<div id="ch-visual-intuition-container" style="margin: 1rem 0;"></div>`;
        }

        contentHtml += `<p class="challenge-prompt" style="font-size: 1.1rem; font-weight: 600; margin: 1rem 0;">${ch.prompt}</p>`;

        if (ch.formula) {
            contentHtml += `<div class="formula-box">${ch.formula}</div>`;
        }

        if (ch.premises) {
            contentHtml += `<ul class="premises-list">`;
            ch.premises.forEach((p, idx) => {
                contentHtml += `<li>Premise ${idx + 1}: <code>${p}</code></li>`;
            });
            contentHtml += `</ul>`;
        }

        // Options (Multiple Choice or Input)
        if (ch.options) {
            contentHtml += `<div class="options-grid">`;
            ch.options.forEach(opt => {
                contentHtml += `<button class="option-btn" data-val="${opt}">${opt}</button>`;
            });
            contentHtml += `</div>`;
        } else if (ch.type === 'equivalence_input') {
            contentHtml += `
                <div class="input-card">
                    <input type="text" id="ch-input-formula" placeholder="Type equivalent expression...">
                    <div id="ch-keyboard"></div>
                </div>
            `;
        }

        // World grid area if predicate world challenge
        if (ch.type === 'predicate_world' || ch.type === 'predicate_world_builder') {
            contentHtml += `<div id="ch-world-container"></div>`;
        }

        contentHtml += `
            <div class="action-bar" style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.75rem;">
                <button class="btn btn-primary" id="btn-submit-answer">Submit Answer</button>
                <button class="btn btn-secondary" id="btn-hint">Need Hint?</button>
                <button class="btn btn-secondary" id="btn-reveal-answer" style="border-color: #f59e0b; color: #fde047;">Reveal Answer</button>
            </div>
            <div id="ch-feedback" class="feedback-box hidden"></div>
        </div>`;

        containerEl.innerHTML = contentHtml;

        // Render Visual Intuition Graphic
        if (hasVisualGraphic) {
            const visualBox = containerEl.querySelector('#ch-visual-intuition-container');
            if (visualBox) {
                if (ch.categoryId === 'cat_limits' || ch.categoryId === 'cat_derivatives') {
                    VisualIntuitionEngine.renderTangentGraph(visualBox, 'x_squared', 1.5);
                } else if (ch.categoryId === 'cat_integrals') {
                    VisualIntuitionEngine.renderRiemannArea(visualBox, 0, 3, 8);
                } else if (ch.categoryId === 'cat_set_theory') {
                    VisualIntuitionEngine.renderVennDiagramSVG(visualBox, ['1', '2', '3', '4'], ['3', '4', '5', '6'], 'intersection');
                } else if (ch.categoryId === 'cat_functions') {
                    VisualIntuitionEngine.renderMappingGraphSVG(visualBox, ['1', '2', '3'], ['A', 'B', 'C', 'D'], { '1': 'A', '2': 'B', '3': 'C' });
                }
            }
        }

        // Attach On-Screen Keyboard if applicable
        if (ch.type === 'equivalence_input') {
            const kbContainer = containerEl.querySelector('#ch-keyboard');
            const inputEl = containerEl.querySelector('#ch-input-formula');
            LogicKeyboard.attach(kbContainer, inputEl);
        }

        // Attach World Grid if applicable
        if (ch.world) {
            const worldContainer = containerEl.querySelector('#ch-world-container');
            const isBuilder = ch.type === 'predicate_world_builder';
            GridWorld.render(worldContainer, this.activeWorldState, isBuilder, (newWorld) => {
                this.activeWorldState = newWorld;
            });
        }

        // Bind Option Buttons
        const optBtns = containerEl.querySelectorAll('.option-btn');
        optBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                SoundEffects.playClick();
                optBtns.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                this.selectedOption = btn.getAttribute('data-val');
            });
        });

        // Submit Button
        const submitBtn = containerEl.querySelector('#btn-submit-answer');
        submitBtn.addEventListener('click', () => this.checkAnswer(ch, catChallenges));

        // Hint Button
        const hintBtn = containerEl.querySelector('#btn-hint');
        const feedbackEl = containerEl.querySelector('#ch-feedback');
        hintBtn.addEventListener('click', () => {
            SoundEffects.playClick();
            feedbackEl.className = 'feedback-box error';
            feedbackEl.classList.remove('hidden');
            feedbackEl.innerHTML = `<h4>💡 Hint</h4><p>${ch.hint}</p>`;
        });

        // Reveal Answer Button
        const revealBtn = containerEl.querySelector('#btn-reveal-answer');
        revealBtn.addEventListener('click', () => {
            SoundEffects.playClick();
            feedbackEl.className = 'feedback-box success';
            feedbackEl.classList.remove('hidden');
            const rawAnswerText = ch.correctAnswer || ch.targetFormula || 'Follow hint instructions to alter the grid';
            const safeAnswerText = LogicLairApp.escapeHTML(rawAnswerText);
            feedbackEl.innerHTML = `<h4>🔓 Answer Revealed</h4><p><strong>Correct Solution:</strong> <code>${safeAnswerText}</code></p><p style="margin-top:0.4rem;">${ch.explanation}</p>`;
        });
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

    checkAnswer(ch, catChallenges) {
        const feedbackEl = document.getElementById('ch-feedback');
        let isCorrect = false;

        if (ch.type === 'predicate_world_builder') {
            try {
                const ast = LogicParser.parse(ch.formula);
                const predicates = GridWorld.createPredicatesFromWorld();
                isCorrect = Evaluator.evaluatePredicate(ast, this.activeWorldState, predicates);
            } catch (err) {
                isCorrect = false;
            }
        } else if (ch.type === 'equivalence_input') {
            const inputVal = document.getElementById('ch-input-formula')?.value.trim();
            if (inputVal) {
                try {
                    isCorrect = Evaluator.areEquivalent(inputVal, ch.targetFormula);
                } catch (err) {
                    isCorrect = false;
                }
            }
        } else {
            if (!this.selectedOption) {
                feedbackEl.className = 'feedback-box error';
                feedbackEl.classList.remove('hidden');
                feedbackEl.innerHTML = `<h4>⚠️ Please select an answer!</h4>`;
                return;
            }
            isCorrect = (this.selectedOption === ch.correctAnswer);
        }

        feedbackEl.classList.remove('hidden');

        if (isCorrect) {
            SoundEffects.playCorrect();
            feedbackEl.className = 'feedback-box success';
            feedbackEl.innerHTML = `
                <h4>🎉 Correct! (+${ch.xp} XP)</h4>
                <p>${ch.explanation}</p>
            `;

            if (!this.userState.completedChallenges.includes(ch.id)) {
                this.userState.completedChallenges.push(ch.id);
                this.userState.xp += ch.xp;
                this.saveState();
            }

            // Check if next challenge available
            if (this.currentChallengeIndex < catChallenges.length - 1) {
                setTimeout(() => {
                    this.currentChallengeIndex++;
                    this.renderWorkspace();
                }, 1800);
            } else {
                SoundEffects.playLevelUp();
                setTimeout(() => {
                    alert(`🏆 Congratulations! You cleared all challenges in ${this.currentCategory.name}!`);
                    this.switchView('campaign');
                }, 1500);
            }
        } else {
            SoundEffects.playIncorrect();
            feedbackEl.className = 'feedback-box error';
            feedbackEl.innerHTML = `
                <h4>❌ Not quite right!</h4>
                <p>${ch.hint}</p>
            `;
        }
    }

    renderStatsView() {
        if (!this.viewStats) return;

        const totalCh = CHALLENGES.length;
        const completedCh = this.userState.completedChallenges.length;
        const pct = Math.round((completedCh / totalCh) * 100);

        this.viewStats.innerHTML = `
            <div class="campaign-header">
                <h2>🏆 OmniMath Realm Shrine & Badges</h2>
                <p>Track your mastery over Logic, Set Theory, Mappings, Infinities, and Calculus.</p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                <div class="input-card" style="text-align: center;">
                    <div style="font-size: 2.5rem; color: var(--accent);">⚡ ${this.userState.xp}</div>
                    <div style="font-weight: 700; color: var(--text-muted); margin-top: 0.4rem;">Total Experience (XP)</div>
                </div>

                <div class="input-card" style="text-align: center;">
                    <div style="font-size: 2.5rem; color: var(--primary);">${completedCh} / ${totalCh}</div>
                    <div style="font-weight: 700; color: var(--text-muted); margin-top: 0.4rem;">Challenges Solved (${pct}%)</div>
                </div>

                <div class="input-card" style="text-align: center;">
                    <div style="font-size: 2.5rem; color: #ec4899;">🔥 ${this.userState.streak}</div>
                    <div style="font-weight: 700; color: var(--text-muted); margin-top: 0.4rem;">Current Streak</div>
                </div>
            </div>

            <div class="input-card">
                <h3>🏅 Earned Badges & Mastery Titles</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 1rem;">
                    <div class="stat-pill" style="padding: 1rem; justify-content: flex-start; gap: 1rem;">
                        <span style="font-size: 2rem;">⚡</span>
                        <div>
                            <strong>Logic Initiate</strong>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Unlocked by completing your first challenge.</p>
                        </div>
                    </div>

                    <div class="stat-pill" style="padding: 1rem; justify-content: flex-start; gap: 1rem; ${completedCh >= 10 ? '' : 'opacity: 0.4;'}">
                        <span style="font-size: 2rem;">⚖️</span>
                        <div>
                            <strong>De Morgan Master</strong>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Unlocked by solving 10 equivalence challenges.</p>
                        </div>
                    </div>

                    <div class="stat-pill" style="padding: 1rem; justify-content: flex-start; gap: 1rem; ${completedCh >= 30 ? '' : 'opacity: 0.4;'}">
                        <span style="font-size: 2rem;">🌐</span>
                        <div>
                            <strong>Quantifier Slayer</strong>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Unlocked by mastering 30 predicate challenges.</p>
                        </div>
                    </div>

                    <div class="stat-pill" style="padding: 1rem; justify-content: flex-start; gap: 1rem; ${completedCh >= 60 ? '' : 'opacity: 0.4;'}">
                        <span style="font-size: 2rem;">📐</span>
                        <div>
                            <strong>Set Theory Alchemist</strong>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Unlocked by conquering Set Theory challenges.</p>
                        </div>
                    </div>

                    <div class="stat-pill" style="padding: 1rem; justify-content: flex-start; gap: 1rem; ${completedCh >= 90 ? '' : 'opacity: 0.4;'}">
                        <span style="font-size: 2rem;">♾️</span>
                        <div>
                            <strong>Infinity Conqueror</strong>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Unlocked by solving Cardinality & Cantor challenges.</p>
                        </div>
                    </div>

                    <div class="stat-pill" style="padding: 1rem; justify-content: flex-start; gap: 1rem; ${completedCh >= 110 ? '' : 'opacity: 0.4;'}">
                        <span style="font-size: 2rem;">🌌</span>
                        <div>
                            <strong>Limit Pathfinder</strong>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Unlocked by mastering Limits & Continuity.</p>
                        </div>
                    </div>

                    <div class="stat-pill" style="padding: 1rem; justify-content: flex-start; gap: 1rem; ${completedCh >= 120 ? '' : 'opacity: 0.4;'}">
                        <span style="font-size: 2rem;">📈</span>
                        <div>
                            <strong>Derivative Speedster</strong>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Unlocked by conquering Differential Calculus.</p>
                        </div>
                    </div>

                    <div class="stat-pill" style="padding: 1rem; justify-content: flex-start; gap: 1rem; ${completedCh >= 130 ? '' : 'opacity: 0.4;'}">
                        <span style="font-size: 2rem;">👑</span>
                        <div>
                            <strong>OmniMath Overlord</strong>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Unlocked by clearing all 130 challenges across all realms!</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    window.app = new LogicLairApp();
});
