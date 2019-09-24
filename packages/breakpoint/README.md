# sfem.breakpoint

Simple scss media query mixin. Helper for responsive design.

### Install

```
npm install -S @sfem/breakpoint
```

or

```
yarn add @sfem/breakpoint
```

### Settings

```scss
$breakpoints: (
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
)
```

### Usage

Import module to your scss

```scss
@import '@sfem/breakpoint/lib/breakpoint';
```

Call mixins:

```scss
@include bp(sm) {
  /* code here */
}

// for

@media all and (min-width: 576px) {
  /* code here */
}
```

```scss
@include bp(sm, $degrade: true) {
  /* code here */
}

// for

@media all and (max-width: 575px) {
  /* code here */
}
```

```scss
@include bp(640px) {
 /* code here */
}

// for

@media all and (min-width: 640px) {
  /* code here */
}
```

```scss
@include bp(640px 1024px) {
  /* code here */
}

// for

@media all and (min-width: 640px) and (max-width: 1024px) {
  /* code here */
}
```

```scss
@include bp(max-width 600px) {
 /* code here */
}

// for

@media all and (max-width: 600px) {
  /* code here */
}
```

```scss
@include bp(((min-width 600px) (max-width 1024px))) {
  /* code here */
  /* any query chain */
}

// for

@media all and (min-width: 600px) and (max-width: 1024px) {
  /* code here */
  /* any query chain */
}
```