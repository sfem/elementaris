sfem.breakpoint
===========

Simple scss media query mixin. Helper for responsive design.

Install
---------

### npm
`npm install -S @sfem/breakpoint`

Usage
---------
Import module to your scss

```scss
@import '@sfem/breakpoint/lib/breakpoint';
```

Call mixins:

```scss
@include bp(s) {
  // code for min-width breakpoints
  // also you can pass bp list in mixin param as bp(s, $your-list)
}

@include bp-max(s) {
  // code for max-width breakpoints
}
```

```scss
@include bpq(min-width 20em) {
  // code for hand coded breakpoints
}
```

**Breakpoints:**

```scss
$breakpoints-list: (
  s: 640px,
  m: 1024px,
  l: 1200px,
  xl: 1440px
) !default;
```

Will generate

```scss
$breakpoints: (
  s: 640px,
  m: 1024px,
  l: 1200px,
  xl: 1440px
);

$breakpoints-before: (
  s: max-width 640px,
  m: max-width 1024px,
  l: max-width 1200px,
  xl: max-width 1440px
);
```