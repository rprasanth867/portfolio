

## ARIA
ARIA (Accessible Rich Internet Applications) attributes are HTML attributes (prefixed with aria- or role) that give assistive technologies—like screen readers—extra semantic context about custom UI components, dynamic state changes, and relationships between elements that native HTML doesn't express on its own.

The golden rule of ARIA is: don't use ARIA if native HTML already does the job (e.g., use `<button> rather than <div role="button" tabindex="0">`). Native elements come with built-in keyboard support, focus management, and accessibility semantics for free.

- **aria-label:** Gives an element an accessible name when no visible text label is present (e.g., an icon-only close button `<button aria-label="Close modal">×</button>`).
- **aria-expanded="true | false":** Tells screen readers whether a disclosure, accordion, dropdown, or menu is currently open or collapsed.
- **aria-selected="true | false":** Indicates the active item in a tab list, listbox, or tree.
- **aria-checked="true | false | mixed":** Communicates checked state on custom checkboxes or tri-state "select all" controls.
- **aria-disabled="true":** Marks an element as disabled while keeping it perceivable in the accessibility tree (unlike native disabled, which removes focusability and can hide elements from some assistive tech).
- **aria-hidden="true":** Hides purely decorative icons or off-screen visual flourishes from assistive technologies. (Never put aria-hidden="true" on a focusable element.)

