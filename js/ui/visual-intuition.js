/**
 * Visual Intuition Engine for OmniMath Realm
 * 3Blue1Brown (Manim) & Brilliant.org inspired interactive SVG/Canvas math graphics
 */

export class VisualIntuitionEngine {
    /**
     * Render Interactive Tangent Line & Derivative Slope Graph (Manim Style)
     */
    static renderTangentGraph(container, fnType = 'x_squared', initialX = 1.5) {
        if (!container) return;

        container.innerHTML = `
            <div class="manim-card" style="background: #0d1117; border: 1px solid rgba(6, 182, 212, 0.4); border-radius: 12px; padding: 1rem; color: #f8fafc; box-shadow: 0 0 25px rgba(6, 182, 212, 0.15);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <div style="font-weight: 700; color: #38bdf8; font-family: var(--font-heading); display: flex; align-items: center; gap: 0.5rem;">
                        <span>📈 Manim Visual Intuition: Instantaneous Rate of Change</span>
                    </div>
                    <span class="manim-readout" style="background: rgba(132, 204, 22, 0.2); color: #a3e635; border: 1px solid #84cc16; padding: 0.2rem 0.6rem; border-radius: 6px; font-family: var(--font-code); font-size: 0.85rem; font-weight: 700;">f'(x) = Slope</span>
                </div>

                <div style="position: relative; width: 100%; height: 220px;">
                    <canvas class="manim-canvas" style="width: 100%; height: 100%; display: block; border-radius: 8px; background: #06090e; border: 1px solid rgba(255, 255, 255, 0.08);"></canvas>
                </div>

                <div style="margin-top: 0.75rem; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
                    <label style="font-size: 0.85rem; color: #94a3b8; font-weight: 600;">Slide Position x:</label>
                    <input type="range" class="manim-x-slider" min="-3" max="3" step="0.05" value="${initialX}" style="flex: 1; accent-color: #84cc16; cursor: pointer;">
                    <div class="manim-val-display" style="font-family: var(--font-code); font-weight: 700; color: #f8fafc; min-width: 140px; text-align: right;"></div>
                </div>
            </div>
        `;

        const canvas = container.querySelector('.manim-canvas');
        const slider = container.querySelector('.manim-x-slider');
        const valDisplay = container.querySelector('.manim-val-display');

        const draw = () => {
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);

            const width = rect.width;
            const height = rect.height;

            // Clear background
            ctx.fillStyle = '#06090e';
            ctx.fillRect(0, 0, width, height);

            // Coordinate origin
            const originX = width / 2;
            const originY = height / 2 + 30;
            const scaleX = width / 8;
            const scaleY = height / 8;

            // Grid lines
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
            ctx.lineWidth = 1;
            for (let x = -4; x <= 4; x += 1) {
                const cx = originX + x * scaleX;
                ctx.beginPath();
                ctx.moveTo(cx, 0);
                ctx.lineTo(cx, height);
                ctx.stroke();
            }
            for (let y = -4; y <= 4; y += 1) {
                const cy = originY - y * scaleY;
                ctx.beginPath();
                ctx.moveTo(0, cy);
                ctx.lineTo(width, cy);
                ctx.stroke();
            }

            // Axes
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(0, originY);
            ctx.lineTo(width, originY);
            ctx.moveTo(originX, 0);
            ctx.lineTo(originX, height);
            ctx.stroke();

            // Function evaluator: f(x) = x^2 / 2
            const f = (x) => {
                if (fnType === 'sin') return Math.sin(x) * 1.5;
                if (fnType === 'cubic') return 0.2 * (x * x * x) - x;
                return 0.5 * x * x;
            };

            const df = (x) => {
                if (fnType === 'sin') return Math.cos(x) * 1.5;
                if (fnType === 'cubic') return 0.6 * (x * x) - 1;
                return x;
            };

            // Draw Curve (Glowing Cyan)
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#06b6d4';
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 3;
            ctx.beginPath();
            let first = true;
            for (let px = -4; px <= 4; px += 0.05) {
                const py = f(px);
                const cx = originX + px * scaleX;
                const cy = originY - py * scaleY;
                if (first) { ctx.moveTo(cx, cy); first = false; }
                else { ctx.lineTo(cx, cy); }
            }
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Target X position from slider
            const curX = parseFloat(slider.value);
            const curY = f(curX);
            const slope = df(curX);

            const ptX = originX + curX * scaleX;
            const ptY = originY - curY * scaleY;

            // Draw Tangent Line (Glowing Lime)
            ctx.shadowBlur = 12;
            ctx.shadowColor = '#84cc16';
            ctx.strokeStyle = '#a3e635';
            ctx.lineWidth = 2.5;

            const tLen = 2.5;
            const x1 = curX - tLen;
            const y1 = curY - slope * tLen;
            const x2 = curX + tLen;
            const y2 = curY + slope * tLen;

            ctx.beginPath();
            ctx.moveTo(originX + x1 * scaleX, originY - y1 * scaleY);
            ctx.lineTo(originX + x2 * scaleX, originY - y2 * scaleY);
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Point on Curve
            ctx.fillStyle = '#fde047';
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#f59e0b';
            ctx.beginPath();
            ctx.arc(ptX, ptY, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

            // Update readout
            valDisplay.innerHTML = `x = ${curX.toFixed(2)} | <span style="color: #a3e635;">m = ${slope.toFixed(2)}</span>`;
        };

        slider.addEventListener('input', draw);
        window.addEventListener('resize', draw);
        setTimeout(draw, 50);
    }

    /**
     * Render Interactive Riemann Sum Area Accumulator (3Blue1Brown Style)
     */
    static renderRiemannArea(container, a = 0, b = 3, initialN = 8) {
        if (!container) return;

        container.innerHTML = `
            <div class="manim-card" style="background: #0d1117; border: 1px solid rgba(99, 102, 241, 0.4); border-radius: 12px; padding: 1rem; color: #f8fafc; box-shadow: 0 0 25px rgba(99, 102, 241, 0.15);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <div style="font-weight: 700; color: #818cf8; font-family: var(--font-heading);">
                        <span>∫ Manim Visual Intuition: Riemann Area Accumulation (dx → 0)</span>
                    </div>
                    <span class="riemann-readout" style="background: rgba(99, 102, 241, 0.2); color: #a5b4fc; border: 1px solid #6366f1; padding: 0.2rem 0.6rem; border-radius: 6px; font-family: var(--font-code); font-size: 0.85rem; font-weight: 700;">∫ f(x) dx</span>
                </div>

                <div style="position: relative; width: 100%; height: 220px;">
                    <canvas class="riemann-canvas" style="width: 100%; height: 100%; display: block; border-radius: 8px; background: #06090e; border: 1px solid rgba(255, 255, 255, 0.08);"></canvas>
                </div>

                <div style="margin-top: 0.75rem; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
                    <label style="font-size: 0.85rem; color: #94a3b8; font-weight: 600;">Subdivisions N (dx = Δx):</label>
                    <input type="range" class="riemann-n-slider" min="2" max="60" step="1" value="${initialN}" style="flex: 1; accent-color: #6366f1; cursor: pointer;">
                    <div class="riemann-val-display" style="font-family: var(--font-code); font-weight: 700; color: #f8fafc; min-width: 140px; text-align: right;"></div>
                </div>
            </div>
        `;

        const canvas = container.querySelector('.riemann-canvas');
        const slider = container.querySelector('.riemann-n-slider');
        const valDisplay = container.querySelector('.riemann-val-display');

        const draw = () => {
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);

            const width = rect.width;
            const height = rect.height;

            ctx.fillStyle = '#06090e';
            ctx.fillRect(0, 0, width, height);

            const originX = 50;
            const originY = height - 40;
            const scaleX = (width - 80) / 4;
            const scaleY = (height - 60) / 5;

            // f(x) = 0.5 x^2
            const f = (x) => 0.4 * x * x;

            const N = parseInt(slider.value);
            const dx = (b - a) / N;

            let approxArea = 0;

            // Draw Riemann Rectangles
            ctx.fillStyle = 'rgba(99, 102, 241, 0.35)';
            ctx.strokeStyle = 'rgba(165, 180, 252, 0.6)';
            ctx.lineWidth = N > 35 ? 0.5 : 1;

            for (let i = 0; i < N; i++) {
                const xLeft = a + i * dx;
                const hVal = f(xLeft);
                approxArea += hVal * dx;

                const rx = originX + xLeft * scaleX;
                const ry = originY - hVal * scaleY;
                const rw = dx * scaleX;
                const rh = hVal * scaleY;

                ctx.fillRect(rx, ry, rw, rh);
                ctx.strokeRect(rx, ry, rw, rh);
            }

            // Draw Curve
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#6366f1';
            ctx.strokeStyle = '#818cf8';
            ctx.lineWidth = 3;
            ctx.beginPath();
            let first = true;
            for (let px = 0; px <= 3.8; px += 0.05) {
                const py = f(px);
                const cx = originX + px * scaleX;
                const cy = originY - py * scaleY;
                if (first) { ctx.moveTo(cx, cy); first = false; }
                else { ctx.lineTo(cx, cy); }
            }
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Exact integral of 0.4 x^2 from 0 to 3 = 0.4 * 3^3 / 3 = 3.6
            const exactArea = 3.6;

            valDisplay.innerHTML = `N = ${N} | Area ≈ <span style="color: #818cf8;">${approxArea.toFixed(3)}</span> (Exact: ${exactArea.toFixed(2)})`;
        };

        slider.addEventListener('input', draw);
        window.addEventListener('resize', draw);
        setTimeout(draw, 50);
    }

    /**
     * Render SVG Venn Diagram with Glowing Highlights
     */
    static renderVennDiagramSVG(container, setA = ['1', '2', '3', '4'], setB = ['3', '4', '5', '6'], operation = 'union') {
        if (!container) return;

        const aOnly = setA.filter(x => !setB.includes(x));
        const bOnly = setB.filter(x => !setA.includes(x));
        const both = setA.filter(x => setB.includes(x));

        let highlightA = operation === 'union' || operation === 'difference' || operation === 'symmetric_difference';
        let highlightB = operation === 'union' || operation === 'symmetric_difference';
        let highlightBoth = operation === 'union' || operation === 'intersection';

        if (operation === 'difference') {
            highlightA = true;
            highlightBoth = false;
            highlightB = false;
        }

        container.innerHTML = `
            <div class="manim-card" style="background: #0d1117; border: 1px solid rgba(2, 132, 199, 0.4); border-radius: 12px; padding: 1rem; color: #f8fafc;">
                <div style="font-weight: 700; color: #38bdf8; margin-bottom: 0.5rem; font-family: var(--font-heading);">
                    📐 Interactive Venn Diagram Graphic
                </div>

                <svg viewBox="0 0 400 200" style="width: 100%; height: 180px; filter: drop-shadow(0 0 8px rgba(2, 132, 199, 0.3));">
                    <!-- Circle A -->
                    <circle cx="150" cy="100" r="70" 
                            fill="${highlightA ? 'rgba(6, 182, 212, 0.35)' : 'rgba(255,255,255,0.05)'}" 
                            stroke="#06b6d4" stroke-width="3" />

                    <!-- Circle B -->
                    <circle cx="250" cy="100" r="70" 
                            fill="${highlightB ? 'rgba(168, 85, 247, 0.35)' : 'rgba(255,255,255,0.05)'}" 
                            stroke="#a855f7" stroke-width="3" />

                    <!-- Labels -->
                    <text x="110" y="50" fill="#38bdf8" font-weight="700" font-size="16">Set A</text>
                    <text x="260" y="50" fill="#c084fc" font-weight="700" font-size="16">Set B</text>

                    <!-- Elements in A Only -->
                    <text x="115" y="105" fill="#f8fafc" font-weight="600" font-size="14" text-anchor="middle">{ ${aOnly.join(', ')} }</text>

                    <!-- Shared Elements A ∩ B -->
                    <text x="200" y="105" fill="${highlightBoth ? '#fde047' : '#94a3b8'}" font-weight="700" font-size="14" text-anchor="middle">{ ${both.join(', ')} }</text>

                    <!-- Elements in B Only -->
                    <text x="285" y="105" fill="#f8fafc" font-weight="600" font-size="14" text-anchor="middle">{ ${bOnly.join(', ')} }</text>
                </svg>
            </div>
        `;
    }

    /**
     * Render SVG Vector Mapping Graph (Domain -> Codomain Arrow Network)
     */
    static renderMappingGraphSVG(container, domain = ['1', '2', '3'], codomain = ['A', 'B', 'C', 'D'], mapping = { '1': 'A', '2': 'B', '3': 'C' }) {
        if (!container) return;

        let svgHtml = `
            <div class="manim-card" style="background: #0d1117; border: 1px solid rgba(168, 85, 247, 0.4); border-radius: 12px; padding: 1rem; color: #f8fafc;">
                <div style="font-weight: 700; color: #c084fc; margin-bottom: 0.5rem; font-family: var(--font-heading);">
                    🔄 Vector Arrow Mapping Network (f: X → Y)
                </div>

                <svg viewBox="0 0 400 220" style="width: 100%; height: 200px;">
                    <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7" />
                        </marker>
                    </defs>

                    <!-- Domain Oval -->
                    <rect x="30" y="20" width="100" height="180" rx="30" fill="rgba(6, 182, 212, 0.08)" stroke="#06b6d4" stroke-width="2" />
                    <text x="80" y="42" fill="#38bdf8" font-weight="700" font-size="14" text-anchor="middle">Domain X</text>

                    <!-- Codomain Oval -->
                    <rect x="270" y="20" width="100" height="180" rx="30" fill="rgba(168, 85, 247, 0.08)" stroke="#a855f7" stroke-width="2" />
                    <text x="320" y="42" fill="#c084fc" font-weight="700" font-size="14" text-anchor="middle">Codomain Y</text>
        `;

        // Domain nodes
        const domStep = 130 / (domain.length || 1);
        const domCoords = {};
        domain.forEach((d, idx) => {
            const y = 70 + idx * domStep;
            domCoords[d] = { x: 100, y };
            svgHtml += `
                <circle cx="100" cy="${y}" r="14" fill="#090d16" stroke="#38bdf8" stroke-width="2" />
                <text x="100" y="${y + 5}" fill="#f8fafc" font-weight="700" font-size="13" text-anchor="middle">${d}</text>
            `;
        });

        // Codomain nodes
        const codStep = 130 / (codomain.length || 1);
        const codCoords = {};
        codomain.forEach((c, idx) => {
            const y = 70 + idx * codStep;
            codCoords[c] = { x: 270, y };
            svgHtml += `
                <circle cx="270" cy="${y}" r="14" fill="#090d16" stroke="#c084fc" stroke-width="2" />
                <text x="270" y="${y + 5}" fill="#f8fafc" font-weight="700" font-size="13" text-anchor="middle">${c}</text>
            `;
        });

        // Arrows
        Object.entries(mapping).forEach(([domVal, codVal]) => {
            const src = domCoords[domVal];
            const tgt = codCoords[codVal];
            if (src && tgt) {
                svgHtml += `
                    <line x1="${src.x + 14}" y1="${src.y}" x2="${tgt.x - 14}" y2="${tgt.y}" 
                          stroke="#a855f7" stroke-width="2.5" marker-end="url(#arrow)" />
                `;
            }
        });

        svgHtml += `</svg></div>`;
        container.innerHTML = svgHtml;
    }
}
