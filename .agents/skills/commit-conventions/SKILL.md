---
name: commit-conventions
description: Propose, write, or review concise and predictable Git commit messages from a change or diff.
---

# Commit conventions

## Message format

Use one of these formats:

- `<type>: <description>`
- `<type>(<scope>): <description>`

The subject must:

- Be one line with a maximum of 72 characters.
- Use a lowercase type and optional lowercase scope.
- Start the description with a lowercase imperative verb.
- Use clear American English.
- Describe the primary logical change.
- Have no trailing punctuation.
- Have no body, footer, emoji, issue reference, or breaking-change marker.
- Avoid vague terms such as `initial`, `new`, `misc`, `stuff`, or `changes`.

The imperative verb comes after the type and optional scope:

```text
ci: add build workflow
feat(editor): add keyboard shortcuts
fix(api): reject expired tokens
```

Mention a filename or artifact only when it makes the change more precise:

```text
docs: add README.md
```

Do not force filenames into messages where they add no useful information.

## Scopes

Scopes are optional.

Use a scope only when all of the following are true:

- The repository has stable, clearly named module boundaries.
- The scope identifies one of those boundaries.
- The scope makes the message easier to locate.

Valid scopes can refer to a stable application, package, service, or module:

```text
feat(editor): add keyboard shortcuts
fix(api): reject expired tokens
refactor(auth): simplify session handling
```

Do not use scopes for:

- Small or early-stage projects.
- Cross-cutting changes.
- Changes that affect several unrelated modules.
- Arbitrary directories, filenames, or temporary implementation details.

When in doubt, omit the scope.

## Type selection

Choose the type that best describes the primary purpose of the change:

| Type | Use for |
|---|---|
| `feat` | A user-facing capability or behavior |
| `fix` | A correction to incorrect or broken behavior |
| `refactor` | An internal structural change without behavior change |
| `perf` | An improvement to performance or resource usage |
| `docs` | Documentation or written guidance |
| `style` | Formatting-only changes without behavior change |
| `test` | Adding or changing tests |
| `build` | Dependencies, build tools, or build configuration |
| `ci` | Continuous integration or delivery automation |
| `chore` | Repository maintenance that does not fit another type |
| `revert` | Undoing a previous change |

## Preferred verbs

| Type | Verbs |
|---|---|
| `feat` | add, implement, support, enable, allow |
| `fix` | prevent, handle, correct, resolve, restore |
| `refactor` | extract, simplify, move, replace, remove |
| `perf` | reduce, optimize, improve |
| `docs` | add, update, document, clarify, correct |
| `style` | format, align, normalize |
| `test` | add, update, cover, verify |
| `build` | configure, migrate, upgrade, update |
| `ci` | add, update, configure |
| `chore` | add, update, remove, initialize |
| `revert` | restore, undo, remove |

Use another verb only when it is more accurate.

When several types could apply, choose the one that describes the main outcome.

Examples:

- Use `ci` for a new GitHub Actions workflow.
- Use `build` for changing Vite, TypeScript, Bun, or package configuration.
- Use `docs` for README or skill documentation.
- Use `test` when the main change is test coverage, even if test tooling is also changed.

## Procedure

1. Inspect the relevant diff or the change described by the user.
2. Identify the primary logical change.
3. Check whether the change contains unrelated modifications. If it does, do not hide them behind one vague message; recommend separate commits or ask for clarification when necessary.
4. Select the most accurate type.
5. Add a scope only when its use is clearly justified.
6. Write one concise imperative description.
7. Check the subject against every rule above and the 72-character limit.

Do not create, amend, stage, or commit anything unless the user explicitly asks for that action.

When the user asks only for a commit message, return one final message without alternatives.

## Examples

### Valid

```text
docs: add README.md
docs: document skill installation
docs: refine commit-conventions skill
feat: add application scaffold
feat: add keyboard shortcuts
feat(editor): add keyboard shortcuts
fix: prevent duplicate uploads
fix(api): reject expired tokens
refactor: simplify configuration loading
refactor: extract camera controls
refactor(auth): simplify session handling
perf: reduce initial bundle size
build: configure Vite
ci: add build workflow
chore: update repository metadata
test: cover expired sessions
```

### Invalid

```text
feat(viewer): Add controls
fix: fix loading errors
docs: Add README
chore: initial setup
feat!: remove legacy API
ci: add CI workflow
```
