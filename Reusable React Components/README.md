# Reusable React Components Art

## Tips

- Get HTML ID via prop to make the component really re-usable.

```
MyComponent.propTypes = {
  htmlId: PropTypes.string.isRequired
}
```

- Set Logical Defaults: conveys common use case

- Accessibility Matters

E.g. make tab indexes required field for focus related elements like inputs of form.

- Consider configuration prop

When a component may have lots of additional props in future (> 4 or 5) then its better to club in an object prop

Example:

```
<CustomerDetail customer={{
  firstName: "Pratik",
  lastName: "Kataria",
  title: "Software Engineer",
  office: "Home"
}}>
```

- Support Server Rendering

Don't assume your component is in a browser: 1. Avoid document or window calls & 2.Avoid using setTimeout

- Prefer separate, simple components to one complicated and highly customizable component.

## What is Atomic Design?

Language for describing components written at multiple layers of abstraction.

- Atoms: Basic Building blocks
- Molecules: Groups of two or more atoms
- Organisms: Groups of molecules functioning together

This was popularized by Brad Frost in book Atomic Design.

Atomic Design = Modular Design

## Atom

- You can't break an atom down any further
- Demonstrates base styles

### What Belongs in /components?

![](./componentStructures.png)

```
/Button
  Button.js
  Button.spec.js
  index.js
```

**Honor the underlying element's API. Example: value, maxLength and events (onFocus, onBlur...) in case of input**

**Avoid: userList and instead use: users**

**Use spread operator to transfer props {...props}**

```
const Hello = ({ name, ...rest }) =>
  <div {...rest}>Hi {name}!</div>
```

## Molecules

Grouping atoms together which creates simple, functional and reusable components.

Molecules should also have a single (but higher level) responsibility.

## Organisms

Keep organisms from making any API calls and care only about the molecules it has.
