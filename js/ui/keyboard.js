/**
 * LogicKeyboard - Virtual logic symbols toolbar/keyboard
 */

export class LogicKeyboard {
    static SYMBOLS = [
        { char: '∧', label: 'AND (∧)', code: '∧' },
        { char: '∨', label: 'OR (∨)', code: '∨' },
        { char: '¬', label: 'NOT (¬)', code: '¬' },
        { char: '→', label: 'IMPLIES (→)', code: '→' },
        { char: '↔', label: 'IFF (↔)', code: '↔' },
        { char: '∀', label: 'FORALL (∀)', code: '∀' },
        { char: '∃', label: 'EXISTS (∃)', code: '∃' },
        { char: '⊕', label: 'XOR (⊕)', code: '⊕' },
        { char: '(', label: '(', code: '(' },
        { char: ')', label: ')', code: ')' },
        { char: 'P', label: 'P', code: 'P' },
        { char: 'Q', label: 'Q', code: 'Q' },
        { char: 'R', label: 'R', code: 'R' },
        { char: 'x', label: 'x', code: 'x' },
        { char: 'y', label: 'y', code: 'y' }
    ];

    /**
     * Attach logic keyboard to a target input element
     */
    static attach(containerEl, inputEl) {
        if (!containerEl || !inputEl) return;

        containerEl.innerHTML = '';
        containerEl.className = 'logic-keyboard-bar';

        this.SYMBOLS.forEach(sym => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'logic-key-btn';
            btn.textContent = sym.char;
            btn.title = sym.label;
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.insertAtCursor(inputEl, sym.code);
            });
            containerEl.appendChild(btn);
        });
    }

    /**
     * Insert text at current cursor position in input element
     */
    static insertAtCursor(inputEl, text) {
        const start = inputEl.selectionStart || 0;
        const end = inputEl.selectionEnd || 0;
        const val = inputEl.value;

        inputEl.value = val.substring(0, start) + text + val.substring(end);
        inputEl.selectionStart = inputEl.selectionEnd = start + text.length;
        inputEl.focus();

        // Dispatch input event so live listeners update
        inputEl.dispatchEvent(new Event('input', { bubbles: true }));
    }
}
