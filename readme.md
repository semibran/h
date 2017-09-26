# h
> Create virtual DOM nodes

## usage
```js
> const h = require("h")
> h("div", { class: "foo" }, ["hello world"])
{
  tag: "div",
  attributes: { class: "foo" },
  children: [ "hello world" ]
}

> h("h1", ["title"])
{
  tag: "h1",
  attributes: {},
  children: ["title"]
}

> h("br")
{
  tag: "br",
  attributes: {},
  children: []
}
```

## see also
- [`semibran/manifest`](https://github.com/semibran/h) - turn virtual DOM nodes into real DOM elements

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
