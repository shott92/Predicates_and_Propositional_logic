#!/usr/bin/env python3
import os
import re

def clean_js(content):
    # Remove import statements
    content = re.sub(r'import\s+.*?;\n?', '', content)
    # Convert export const / export class to const / class
    content = re.sub(r'export\s+const\s+', 'const ', content)
    content = re.sub(r'export\s+class\s+', 'class ', content)
    content = re.sub(r'export\s+default\s+', '', content)
    return content

def main():
    root_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Read CSS
    css_path = os.path.join(root_dir, 'css', 'styles.css')
    with open(css_path, 'r', encoding='utf-8') as f:
        css_content = f.read()

    # Read JS modules in order
    js_files = [
        os.path.join(root_dir, 'js', 'engine', 'logic-parser.js'),
        os.path.join(root_dir, 'js', 'engine', 'evaluator.js'),
        os.path.join(root_dir, 'js', 'data', 'challenges.js'),
        os.path.join(root_dir, 'js', 'ui', 'keyboard.js'),
        os.path.join(root_dir, 'js', 'ui', 'grid-world.js'),
        os.path.join(root_dir, 'js', 'ui', 'sound.js'),
        os.path.join(root_dir, 'js', 'ui', 'visual-intuition.js'),
        os.path.join(root_dir, 'js', 'ui', 'sandbox.js'),
        os.path.join(root_dir, 'js', 'app.js'),
    ]

    bundled_js_parts = []
    for filepath in js_files:
        filename = os.path.basename(filepath)
        with open(filepath, 'r', encoding='utf-8') as f:
            code = f.read()
        cleaned = clean_js(code)
        bundled_js_parts.append(f"/* --- MODULE: {filename} --- */\n" + cleaned.strip())

    bundled_js = "\n\n".join(bundled_js_parts)

    html_template = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OmniMath Realm - eLearning App</title>
    <meta name="description" content="A super portable offline eLearning application for mastering Propositional & Predicate Logic, Set Theory, Functions & Mappings, Cardinality & Infinities, and Calculus (Limits, Derivatives, Integrals). Shareable with zero prerequisites.">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet">
    
    <style>
{css_content}
    </style>
</head>
<body>
    <!-- Header / App Bar -->
    <header class="app-header">
        <div class="logo-container">
            <div class="logo-icon">⚡</div>
            <div class="logo-text">
                <h1>OmniMath Realm</h1>
                <p>Master Logic, Sets, Infinities & Calculus</p>
            </div>
        </div>

        <div class="header-stats">
            <div class="stat-pill" title="Total Experience Points">
                <span class="icon">⚡</span>
                <span id="stat-xp-val">0</span> XP
            </div>
            <div class="stat-pill" title="Current Daily Streak">
                <span id="stat-streak-val">1 🔥</span>
            </div>
            <div class="stat-pill" title="Challenges Solved">
                <span class="icon">🏆</span>
                <span id="stat-completed-val">0 / 130</span>
            </div>
            <button class="sound-toggle-btn" id="btn-sound-toggle" title="Toggle Sound Effects">🔊</button>
        </div>
    </header>

    <!-- Navigation Bar -->
    <nav class="nav-bar">
        <button class="nav-tab-btn active" data-view="campaign">🗺️ Campaign Map</button>
        <button class="nav-tab-btn" data-view="workspace">⚡ Workspace</button>
        <button class="nav-tab-btn" data-view="sandbox">🧪 Multi-Tool Sandbox</button>
        <button class="nav-tab-btn" data-view="stats">🏆 Realm Shrine</button>
    </nav>

    <!-- Main Container -->
    <main class="main-container">
        <!-- VIEW 1: CAMPAIGN MAP -->
        <section id="view-campaign" class="view-panel active">
            <div class="campaign-header">
                <h2>OmniMath Mathematics & Logic Campaign</h2>
                <p>Conquer 13 biomes spanning Propositional Logic, Predicates, Set Theory, Mappings, Infinite Cardinalities, Limits, Derivatives, and Integrals!</p>
            </div>
            <div class="categories-grid"></div>
        </section>

        <!-- VIEW 2: WORKSPACE -->
        <section id="view-workspace" class="view-panel">
            <div class="workspace-layout">
                <aside class="challenge-sidebar">
                    <h3>Curriculum Levels</h3>
                    <div class="challenge-list"></div>
                </aside>
                <div class="challenge-main-area"></div>
            </div>
        </section>

        <!-- VIEW 3: SANDBOX -->
        <section id="view-sandbox" class="view-panel"></section>

        <!-- VIEW 4: STATS & SHRINE -->
        <section id="view-stats" class="view-panel"></section>
    </main>

    <script>
{bundled_js}
    </script>
</body>
</html>
"""

    index_html_path = os.path.join(root_dir, 'index.html')
    prop_html_path = os.path.join(root_dir, 'PropNPredsLogicLair.html')
    prop_file_path = os.path.join(root_dir, 'PropNPredsLogicLair')

    for target in [index_html_path, prop_html_path, prop_file_path]:
        with open(target, 'w', encoding='utf-8') as f:
            f.write(html_template)
        print(f"Successfully generated: {target} ({len(html_template)} bytes)")

if __name__ == '__main__':
    main()
