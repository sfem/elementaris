# css.sugars

Simple css/scss class helpers.

### Install

```
npm install -S @sfem/css-sugars
```

or

```
yarn add @sfem/css-sugars
```

### Usage

Include css in your html

```html
<link rel="stylesheet" type="text/css" href="sugars.css">
```

or import module to your scss

```scss
@import '~@sfem/src/sugars';
```

### SCSS Config

```scss
$sugar-padding-list: (0, 8, 16);
$sugar-ratio-list: ((1, 1), (3, 2), (4, 3));

$sugar-font-weight-list: (normal, bold);
$sugar-font-style-list: (italic, normal);
$sugar-text-align-list: (left, center, right, justify);
$sugar-vertical-align-list: (baseline, bottom, middle, sub, super, text-bottom, text-top, top);
$sugar-word-break-list: (normal break-all keep-all break-word);
$sugar-display-list: (inline, inline-block, flex, inline-flex);
```

```scss
// enable only certain sugars

$enable-sugars: (paddings margins);
```

```scss
// disable certain sugars

$disable-sugars: (word-break) !default;
```

### List of available sugars

* font-weight
* font-style
* text-align
* display
* vertical-align
* word-break
* ellipsis
* paddings
* margins
* hiders
* aspect-ratio
* round