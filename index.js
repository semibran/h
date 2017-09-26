module.exports = function h(tag, attributes, children) {
  if (Array.isArray(attributes)) {
    children = attributes
    attributes = null
  }
  if (!children) {
    children = []
  }
  return {
    tag: tag,
    attributes: attributes,
    children: children
  }
}
