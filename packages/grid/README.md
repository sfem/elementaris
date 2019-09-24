## Sfem Grid

### Install

```
npm install -S @sfem/grid
```

or

```
yarn add @sfem/grid
```

#### css

Add the `sfem-grid.css` development or `sfem-grid.min.css` production to your html page.

```html
<link rel="stylesheet" href="css/sfem-grid.min.css" type="text/css">
```

#### Using in scss

```scss
@import "~@sfem/grid/src/sfem-grid.scss"; // if node-sass-tilde-importer installed or relative path if not

// class names setting
$sfem-grid-name: 'grd'; // default: grid
$sfem-grid-box-name: 'bxs'; // default: grid__box

// Grid sets. We can generate grids with various nums of columns
$sfem-grid-columns: (10, 12); // default: (12)

// Grid padding
$sfem-grid-gap-base: 20; // default: 24
$sfem-grid-gaps: (2, 6, 9); // default: (0, 8, 16)

// Screen size breakpoints (default)
// after change this variable keys in class names will be changed
$sfem-grid-breakpoint: (
    xxs: 320px,
    xs: 640px,
    s: 768px,
    m: 1024px,
    l: 1280px,
    xl: 1440px,
    xxl: 1600px
) // default from @sfem/breakpoint;
```

[Full documentation](https://sfem.github.io/docs/grid/)