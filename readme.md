# h
> Create virtual DOM nodes

## usage
`h` uses the standard `h(tag, attributes, children)` signature. Note that `children`, if provided, is always an array to minimize type checks:
```js
> h("div", { class: "foo" }, [ "hello world" ])
{
  tag: "div",
  attributes: { class: "foo" },
  children: [ "hello world" ]
}
```

`attributes` defaults to an empty object and thus can be omitted.
```js
> h("h1", [ "title" ])
{
  tag: "h1",
  attributes: {},
  children: [ "title" ]
}
```

The same principle applies to `children`, except with an empty array.
```js
> h("br")
{
  tag: "br",
  attributes: {},
  children: []
}
```

## see also
- [`semibran/manifest`](https://github.com/semibran/manifest) - turn virtual DOM nodes into real DOM elements

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
