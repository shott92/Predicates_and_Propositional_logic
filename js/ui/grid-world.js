/**
 * GridWorld - Renders visual domain objects for First-Order Predicate Logic challenges
 */

export class GridWorld {
    static COLORS = {
        red: '#ef4444',
        blue: '#3b82f6',
        green: '#10b981',
        yellow: '#f59e0b',
        purple: '#a855f7'
    };

    static COLOR_LIST = ['red', 'blue', 'green'];

    /**
     * Render grid world inside container element
     * @param {HTMLElement} containerEl
     * @param {Array<Object>} worldData
     * @param {Boolean} isInteractive - If true, clicking shapes cycles their color
     * @param {Function} onChange - Callback when world state changes
     */
    static render(containerEl, worldData, isInteractive = false, onChange = null) {
        if (!containerEl) return;
        containerEl.innerHTML = '';
        containerEl.className = 'predicate-world-grid';

        worldData.forEach((obj, idx) => {
            const card = document.createElement('div');
            card.className = `world-object-card ${isInteractive ? 'interactive' : ''}`;
            card.setAttribute('data-id', obj.id);

            const shapeWrapper = document.createElement('div');
            shapeWrapper.className = `shape-icon size-${obj.size || 'medium'} shape-${obj.shape}`;
            shapeWrapper.style.color = this.COLORS[obj.color] || '#38bdf8';

            // SVG icon based on shape
            shapeWrapper.innerHTML = this.getShapeSvg(obj.shape, obj.color, obj.size);

            const label = document.createElement('div');
            label.className = 'object-label';
            label.innerHTML = `<strong>#${idx + 1}</strong> (${obj.shape}, <span style="color: ${this.COLORS[obj.color]}">${obj.color}</span>)`;

            card.appendChild(shapeWrapper);
            card.appendChild(label);

            if (isInteractive) {
                card.addEventListener('click', () => {
                    // Cycle color
                    const currIndex = this.COLOR_LIST.indexOf(obj.color);
                    const nextColor = this.COLOR_LIST[(currIndex + 1) % this.COLOR_LIST.length];
                    obj.color = nextColor;
                    this.render(containerEl, worldData, isInteractive, onChange);
                    if (onChange) onChange(worldData);
                });
            }

            containerEl.appendChild(card);
        });
    }

    static getShapeSvg(shape, colorName, size) {
        const hex = this.COLORS[colorName] || '#38bdf8';
        const sizePx = size === 'large' ? 64 : size === 'medium' ? 48 : 36;

        if (shape === 'square') {
            return `<svg width="${sizePx}" height="${sizePx}" viewBox="0 0 100 100">
                <rect x="10" y="10" width="80" height="80" rx="12" fill="${hex}" stroke="#ffffff" stroke-width="4"/>
            </svg>`;
        }
        if (shape === 'circle') {
            return `<svg width="${sizePx}" height="${sizePx}" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="${hex}" stroke="#ffffff" stroke-width="4"/>
            </svg>`;
        }
        if (shape === 'triangle') {
            return `<svg width="${sizePx}" height="${sizePx}" viewBox="0 0 100 100">
                <polygon points="50,10 90,85 10,85" fill="${hex}" stroke="#ffffff" stroke-width="4"/>
            </svg>`;
        }
        return `<div>${shape}</div>`;
    }

    /**
     * Create predicate functions matching visual world objects
     */
    static createPredicatesFromWorld() {
        return {
            Red: (obj) => obj && obj.color === 'red',
            Blue: (obj) => obj && obj.color === 'blue',
            Green: (obj) => obj && obj.color === 'green',
            Square: (obj) => obj && obj.shape === 'square',
            Circle: (obj) => obj && obj.shape === 'circle',
            Triangle: (obj) => obj && obj.shape === 'triangle',
            Large: (obj) => obj && obj.size === 'large',
            Medium: (obj) => obj && obj.size === 'medium',
            Small: (obj) => obj && obj.size === 'small',
            LeftOf: (objA, objB) => objA && objB && objA.x < objB.x,
            RightOf: (objA, objB) => objA && objB && objA.x > objB.x,
            SameColor: (objA, objB) => objA && objB && objA.color === objB.color,
            SameShape: (objA, objB) => objA && objB && objA.shape === objB.shape
        };
    }
}
