#!/usr/bin/env python3
import json
import re
import sys

def test():
    with open('js/data/challenges.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract categories and challenges using regex or basic parsing
    cat_match = re.search(r'export const CATEGORIES = (\[.*?\]);', content, re.DOTALL)
    ch_match = re.search(r'export const CHALLENGES = (\[.*?\]);', content, re.DOTALL)

    if not cat_match or not ch_match:
        print("ERROR: Could not match CATEGORIES or CHALLENGES in js/data/challenges.js")
        sys.exit(1)

    # Clean JS object strings to valid JSON format for testing
    cat_str = cat_match.group(1)
    ch_str = ch_match.group(1)

    # Convert JS object key names to quotes for JSON parsing
    def js_to_json(js_code):
        js_code = re.sub(r'(\s*)([a-zA-Z0-9_]+)\s*:', r'\1"\2":', js_code)
        # remove trailing commas
        js_code = re.sub(r',\s*([\]}])', r'\1', js_code)
        return js_code

    try:
        categories = json.loads(js_to_json(cat_str))
        challenges = json.loads(js_to_json(ch_str))
    except Exception as e:
        print(f"JSON Parse warning: {e}. Falling back to manual inspection...")
        categories = []
        challenges = []

    print(f"Found {len(categories)} categories in js/data/challenges.js")
    print(f"Found {len(challenges)} challenges in js/data/challenges.js")

    # Let's count challenges per category manually
    cat_counts = {}
    learning_scaffolds = 0

    for ch in re.finditer(r"id:\s*'([^']+)',\s*categoryId:\s*'([^']+)'", content):
        ch_id, cat_id = ch.groups()
        cat_counts[cat_id] = cat_counts.get(cat_id, 0) + 1

    for m in re.finditer(r"learningInfo:", content):
        learning_scaffolds += 1

    print("\n--- Challenge Counts per Category ---")
    for cat_id, count in cat_counts.items():
        print(f"  {cat_id}: {count} challenges")

    print(f"\nEducational Scaffolding Cards (learningInfo): {learning_scaffolds} found.")

    assert len(cat_counts) == 10, f"Expected 10 categories, found {len(cat_counts)}"
    assert sum(cat_counts.values()) == 100, f"Expected 100 challenges, found {sum(cat_counts.values())}"
    assert learning_scaffolds >= 30, f"Expected at least 30 scaffolding cards for early levels, found {learning_scaffolds}"

    print("\nALL VERIFICATION TESTS PASSED SUCCESSFULLY! 🎉")

if __name__ == '__main__':
    test()
