#!/usr/bin/env python3
import os
import re

def clean_js(content):
    content = re.sub(r'import\s+.*?;\n?', '', content)
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

    # 1. DESKTOP TEMPLATE (index.html)
    desktop_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OmniMath Realm - Desktop Suite</title>
    <meta name="description" content="Desktop-optimized eLearning web application for OmniMath Realm. Featuring split two-column workspace layouts and high-density wide grid views.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet">
    <style>
{css_content}
    </style>
</head>
<body>
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

    <nav class="nav-bar">
        <button class="nav-tab-btn active" data-view="campaign">🗺️ Campaign Map</button>
        <button class="nav-tab-btn" data-view="workspace">⚡ Workspace</button>
        <button class="nav-tab-btn" data-view="sandbox">🧪 Multi-Tool Sandbox</button>
        <button class="nav-tab-btn" data-view="stats">🏆 Realm Shrine</button>
    </nav>

    <main class="main-container">
        <section id="view-campaign" class="view-panel active">
            <div class="campaign-header">
                <h2>OmniMath Mathematics & Logic Campaign</h2>
                <p>Conquer 13 biomes spanning Propositional Logic, Predicates, Set Theory, Mappings, Infinite Cardinalities, Limits, Derivatives, and Integrals!</p>
            </div>
            <div class="categories-grid"></div>
        </section>

        <section id="view-workspace" class="view-panel">
            <div class="workspace-layout">
                <aside class="challenge-sidebar">
                    <h3>Curriculum Levels</h3>
                    <div class="challenge-list"></div>
                </aside>
                <div class="challenge-main-area"></div>
            </div>
        </section>

        <section id="view-sandbox" class="view-panel"></section>
        <section id="view-stats" class="view-panel"></section>
    </main>

    <script>
{bundled_js}
    </script>
</body>
</html>
"""

    # 2. MOBILE TEMPLATE (OmniMathRealm.html & OmniMathRealm)
    mobile_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>OmniMath Realm Mobile</title>
    <meta name="description" content="Mobile-optimized touchscreen eLearning application for OmniMath Realm. Featuring fixed bottom app navigation, horizontal level carousel, and 48px touch targets.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet">
    <style>
{css_content}
    </style>
</head>
<body class="mobile-app-layout">
    <header class="app-header">
        <div class="logo-container">
            <div class="logo-icon">⚡</div>
            <div class="logo-text">
                <h1>OmniMath Realm</h1>
            </div>
        </div>

        <div class="header-stats">
            <div class="stat-pill">
                <span>⚡ <span id="stat-xp-val">0</span></span>
            </div>
            <div class="stat-pill">
                <span id="stat-streak-val">1 🔥</span>
            </div>
            <div class="stat-pill">
                <span>🏆 <span id="stat-completed-val">0/130</span></span>
            </div>
            <button class="sound-toggle-btn" id="btn-sound-toggle">🔊</button>
        </div>
    </header>

    <main class="main-container">
        <section id="view-campaign" class="view-panel active">
            <div class="campaign-header">
                <h2>OmniMath Campaign</h2>
                <p>Tap a realm biome to begin!</p>
            </div>
            <div class="categories-grid"></div>
        </section>

        <section id="view-workspace" class="view-panel">
            <div class="mobile-level-carousel"></div>
            <div class="challenge-main-area"></div>
        </section>

        <section id="view-sandbox" class="view-panel"></section>
        <section id="view-stats" class="view-panel"></section>
    </main>

    <!-- Fixed Bottom Mobile Navigation Bar -->
    <nav class="mobile-bottom-nav">
        <button class="nav-tab-btn active" data-view="campaign">
            <span>🗺️</span> Campaign
        </button>
        <button class="nav-tab-btn" data-view="workspace">
            <span>⚡</span> Workspace
        </button>
        <button class="nav-tab-btn" data-view="sandbox">
            <span>🧪</span> Sandbox
        </button>
        <button class="nav-tab-btn" data-view="stats">
            <span>🏆</span> Shrine
        </button>
    </nav>

    <script>
{bundled_js}
    </script>
</body>
</html>
"""

    index_html_path = os.path.join(root_dir, 'index.html')
    omni_html_path = os.path.join(root_dir, 'OmniMathRealm.html')
    omni_file_path = os.path.join(root_dir, 'OmniMathRealm')

    with open(index_html_path, 'w', encoding='utf-8') as f:
        f.write(desktop_html)
    print(f"Generated Desktop Optimized: {index_html_path} ({len(desktop_html)} bytes)")

    for target in [omni_html_path, omni_file_path]:
        with open(target, 'w', encoding='utf-8') as f:
            f.write(mobile_html)
        print(f"Generated Mobile Optimized: {target} ({len(mobile_html)} bytes)")

if __name__ == '__main__':
    main()
