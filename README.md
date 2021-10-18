# pyxis-scss

The Prima Assicurazioni's design system.

<img alt="Pyxis Design System" src="https://primait.invisionapp.com/assets/A_MGFjZjlkZDY2YjhlM2JmOcFk5Abzk3TRKxwC2DizMEC_4iALnd1rcz3A4sLpUZhZLAeTWF6uAwL4P5Wms5DGkWJqJGcTJbrH-nJvJ-Ijn0aqwJqoMNrGTe-44N-QSOJmH0sBBqsqThhHMvL4qhtgVA==" width="100%" />

## Table of contents

- [Use Pyxis SCSS](#use-pyxis-scss-recommended)
- [Use Pyxis CSS](#use-pyxis-css-not-recommended)
- [Pyxis Development](#pyxis-development)

---

### Use Pyxis SCSS (recommended)

You can install and use Pyxis foundations by following these steps:

- go to your project root
- run `yarn add pyxis-scss`
- go to your `scss` entrypoint
- import Pyxis with `@use pyxis-scss/src/scss/pyxis.scss`

### Use Pyxis CSS (not recommended)

- go to your project root
- run `yarn add pyxis-scss`
- require `pyxis-scss/dist/pyxis.css` in your framework or HTML

---

### Pyxis Development

##### Build CSS version

Run `yarn build` in Pyxis root directory.

##### Run development mode with code change detection

Run `yarn serve` in Pyxis root directory.

##### Lint code

Run `yarn lint` in Pyxis root directory.

To autofix errors reported by stylelint
Run `yarn lint:autofix` in Pyxis root directory.
