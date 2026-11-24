---
name: skill-creation-guidelines
description: "Create or improve concise, efficient agent skills. Use when writing, reviewing, or simplifying a SKILL.md."
argument-hint: "Describe the skill's purpose and intended users."
user-invocable: true
---

# Skill Creation Guidelines

Create skills that make a task easier to complete with clear, concise instructions.

## Write the skill

1. **Define the task.** State what the skill helps with and when to use it.
2. **Describe actions.** Use short, direct steps in the order they happen.
3. **Be specific.** Name required inputs, tools, decisions, and expected results.
4. **Keep one purpose per point.** Combine overlapping guidance and remove repeated or obvious advice.
5. **Prefer positive directions.** Say what to do. Add restrictions only when essential to the task or specifically requested.
6. **Handle uncertainty.** Say what information to ask for when a required decision cannot be made from available context.
7. **Keep it lean.** Include only guidance needed to complete the task. Put lengthy details in linked reference files.

## Check the skill

- Use a clear, keyword-rich description that helps the skill get discovered.
- Keep the name lowercase, hyphenated, and identical to its folder name.
- Check that each instruction is actionable, non-duplicative, and easy to follow.
- Preserve essential task-specific safeguards and edge cases in as few words as possible.
- Validate the frontmatter and links, then remove any content that does not change how the task is done.
