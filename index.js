module.exports = function h(tag, attributes, children) {
  if (!attributes) attributes = {}
  else if (Array.isArray(attributes)) {
    children = attributes
    attributes = {}
  }
  if (!children) children = []
  return {
    tag: tag,
    attributes: attributes,
    children: children
  }
}
