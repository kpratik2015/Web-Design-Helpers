# [ARIA](https://www.w3.org/TR/wai-aria/)

Roles provide semantics to elements. Semantics = what something is and how it is used. Semantics/roles are a contract to the user. You're responsible for providing keyboard interaction.

## [Periodic Table of Semantics](https://gerardkcohen.github.io/periodic-table-of-semantics.html)

## [Widget Roles](https://www.w3.org/TR/wai-aria/#widget_roles)

## [Document Structure](https://www.w3.org/TR/wai-aria/#document_structure_roles)

## [Live Region Roles](https://www.w3.org/TR/wai-aria/#document_structure_roles)

Scenarios to use in like Real-time scores, chat, timers and error messages.

## [Window Roles](https://www.w3.org/TR/wai-aria/#document_structure_roles)

## [Global States and Properties](https://www.w3.org/TR/wai-aria/#document_structure_roles)

## 5 Rules of ARIA

- Don't use ARIA if you can use HTML instead!

```
<!--div role="banner" --> <header />
<!--div role="complementary" --> <aside />
<!--div role="form" --> <form />
<!--div role="main" --> <main />
<!--div role="navigation" --> <nav />
<!--div role="region" --> <section [accessible name] />
<div role="search">
<footer role="contentinfo">
```

- Don't change native semantics.

**Links are activated using enter key and buttons are activated using space keys.**
Don't do this -> `<a href="#" role="button">Menu</a>`
Just use a button for menu.

- All interactive ARIA roles need to be operable by keyboard.

- Don't use role="presentation" or aria-hidden="true" on visible focusable elements.

- All interactive elements must have an accessible name.

## Extra Notes

- Aria support varies. Dependent on the browser and/or the assistive technology.
- You cannot make up your own ARIA role
- **Accessibility Tree**: A hierarchy of accessible objects, provided by OS accessibility APIs, that expose accessibility related information to assistive technologies.
