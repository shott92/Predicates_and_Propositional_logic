#!/usr/bin/env python3
import json
import re
import sys

def test():
    with open('js/data/challenges.js', 'r', encoding='utf-8') as f:
        content = f.read()

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

    assert len(cat_counts) == 13, f"Expected 13 categories, found {len(cat_counts)}"
    assert sum(cat_counts.values()) == 130, f"Expected 130 challenges, found {sum(cat_counts.values())}"
    assert learning_scaffolds >= 39, f"Expected at least 39 scaffolding cards for early levels, found {learning_scaffolds}"

    print("\nALL VERIFICATION TESTS PASSED SUCCESSFULLY! 🎉")

if __name__ == '__main__':
    test()
