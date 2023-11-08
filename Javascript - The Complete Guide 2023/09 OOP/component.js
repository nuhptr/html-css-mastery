class ELementAttribute {
   constructor(attrName, attrValue) {
      this.name = attrName
      this.value = attrValue
   }
}

class Components {
   constructor(renderHookId) {
      this.hookId = renderHookId
   }

   createRootElement(tag, cssClasses, attributes) {
      const rootElement = document.createElement(tag)

      if (cssClasses) rootElement.className = cssClasses

      if (attributes && attributes.length > 0)
         for (const attr of attributes) {
            rootElement.setAttribute(attr.name, attr.value)
         }

      document.getElementById(this.hookId).append(rootElement)
      return rootElement
   }
}
