sfem.breakpoint
===========

Simple scss media query mixin. Helper for responsive design.

Install
---------

### npm
`npm install @sfem/breakpoint`

Usage
---------
Import module to your scss

```scss
@import '@sfem/breakpoint/sfem-breakpoint';
```

Call mixins:

```scss
@include bp(xs) {
  // code
}

@include bp(xs, $breakpoints-before) {
  // code
}

```

```scss
@include bpq(min-width 20em) {
  // code
}
```

Breakpoints:

```scss
$breakpoints: (
  xxs: 320px,
  xs: 640px,
  s: 768px,
  m: 1024px,
  l: 1280px,
  xl: 1440px,
  xxl: 1600px
) !default;

$breakpoints-before: (
  xxs: max-width 320px,
  xs: max-width 640px,
  s: max-width 768px,
  m: max-width 980px,
  l: max-width 1280px,
  xl: max-width 1440px,
  xxl: max-width 1600px
) !default;
```