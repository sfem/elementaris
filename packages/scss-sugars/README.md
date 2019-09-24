# sfem.scss-sugars

Useful SCSS functions and mixins.

### Settings

```scss
$mq-generator-mod-prefix: '--'; // for media query helpers className
$mq-generator-val-prefix: '-'; // for media query helpers className

$sugar-text-contrast-dark: #000; // default dark for contrast checking
$sugar-text-contrast-light: #fff; // default light for contrast checking

$sugar-text-font: 'Roboto', sans-serif; // defaults for typo()
$sugar-text-size: 1rem; // defaults for typo()
$sugar-text-line-height: 1.5rem; // defaults for typo()
$sugar-text-weight: normal; // defaults for typo()
```

### Functions

```scss
// strip-unit

strip-unit(10px) // 10
```

```scss
// convert-unit

convert-unit(10) // 10px
convert-unit(10, em) // 10em
convert-unit(10px, em) // 10em
```

```scss
// to-string

to-string(10) // 10 as string
to-string(10) + 10 // 1010
```

```scss
// rem

rem(10px) // 0.625rem
```

```scss
// color functions

luminance($color);
contrast($back, $front);
get-contrast-color($color, $light, $dark); // return contrast $light or $dark for $color
```

```scss
// letter spacing
// Tracking from Sketch / font size in px = letter spacing

letter-spacing($tracking, $font-size)
```

```scss
// typo
// helper for font definition

typo($font-size, $line-height, $weight, $font) // all params have defaults 
```

```scss
// deep-map-merge
// non destructive multilevel map merging

deep-map-merge($list1, $list2)
```

```scss
// str-replace

str-replace('foo bar', 'foo ', '') // bar
```

### Mixins

```scss
// mq-generator
// generate @media helpers

.foo {
  @include mq-generator() {
    color: green;
  }
}

// to

.foo {
  color: green;
}

@media all and (min-width: 576px) {
  .foo-sm {
    color: green;
  }
}
@media all and (min-width: 768px) {
  .foo-md {
    color: green;
  }
}

// ================

.foo {
  @include mq-generator(bold) {
    font-weight: bold;
  }
}

// to

.foo--bold {
  font-weight: bold;
}

@media all and (min-width: 576px) {
  .foo--bold-sm {
    font-weight: bold;
  }
}
@media all and (min-width: 768px) {
  .foo--bold-md {
    font-weight: bold;
  }
}

// ====================

@for $i from 1 through 2 {
  .foo {
    @include mq-generator(order, $i) {
      order: $i;
    }
  }
}

// to

.foo--order-1 {
  order: 1;
}
@media all and (min-width: 576px) {
  .foo--order-sm-1 {
    order: 1;
  }
}
@media all and (min-width: 768px) {
  .foo--order-md-1 {
    order: 1;
  }
}
.foo--order-2 {
  order: 2;
}

@media all and (min-width: 576px) {
  .foo--order-sm-2 {
    order: 2;
  }
}
@media all and (min-width: 768px) {
  .foo--order-md-2 {
    order: 2;
  }
}
```

```scss
// box

.foo {
  @include box(10px);
}
.bar {
  @include box(10px, 20px);
}

// to

.foo {
  width: 10px;
  height: 10px;
}

.bar {
  width: 10px;
  height: 20px;
}
```

```scss
// aspect-padding

.foo {
  @include aspect-padding(3, 2);
}

// to

.foo {
  width: 100%;
  padding-top: 66.6666666667%;
}
```

```scss
// aspect-ratio

.foo {
  @include aspect-ratio(3, 2 [, position]);
}

// to

.foo {
  position: relative;
}
.foo:before {
  width: 100%;
  padding-top: 66.6666666667%;
  display: block;
  content: "";
}
```

```scss
// box-fill
// each prop can be pass to mixin

.foo {
  @include box-fill();
}

// to

.foo {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
}
```

```scss
// center-block

.foo {
  @include center-block();
}
.bar {
  @include center-block(transform);
}
.baz {
  @include center-block(position);
}

// to

.foo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.baz {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  margin: auto;
}
```

```scss
// ellipsis

.foo {
  @include ellipsis();
}

// to

.foo {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

```scss
// break-word

.foo {
  @include break-word();
}

// to

.foo {
  word-wrap: break-word;
  word-break: break-all;
  overflow-wrap: break-word;
}
```

```scss
// color-mods

$colors: (
  red: #D62237,
  orange: #FF7213
);

// -------

.foo {
  @include color-mods($colors)
}

// to

.foo--color-red {
  color: #D62237;
}
.foo--color-orange {
  color: #FF7213;
}
@media all and (min-width: 576px) {
  .foo--color-sm-red {
    color: #D62237;
  }
  .foo--color-sm-orange {
    color: #FF7213;
  }
}
// etc

// =============

.foo {
  @include color-mods($colors, bg)
}

// to

.foo--bg-red {
  background-color: #D62237;
}
.foo--bg-orange {
  background-color: #FF7213;
}
@media all and (min-width: 576px) {
  .foo--bg-sm-red {
    background-color: #D62237;
  }
  .foo--bg-sm-orange {
    background-color: #FF7213;
  }
}
// etc

// =============

.foo {
  @include color-mods($colors, $disable-bp: true)
}

// to (without media queries)

.foo--color-red {
  color: #D62237;
}
.foo--color-orange {
  color: #FF7213;
}

// =============

.foo {
  @include color-mods($colors, $type: bg, $alter-text: true, $disable-bp: true)
}

// to

.foo--bg-red {
  background-color: #D62237;
  color: #000;
}
.foo--bg-orange {
  background-color: #FF7213;
  color: #fff;
}
```

```scss
// mq-font

$fonts: (
  default: '16px Roboto, sans-serif',
  sm: '16px Roboto, sans-serif',
  md: '22px Roboto, sans-serif'
);

.foo {
  @include mq-font($fonts);
}

// to

.foo {
  font: 16px Roboto, sans-serif;
}
@media all and (min-width: 576px) {
  .foo {
    font: 16px Roboto, sans-serif;
  }
}
@media all and (min-width: 768px) {
  .foo {
    font: 22px Roboto, sans-serif;
  }
}
```