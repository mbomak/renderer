function renderer() {
  let tag = 'div';
  let docEl = document.createElement(tag);

  function el(data) { 
    if (data) {
        docEl.innerHTML = data;
    }

    return docEl.outerHTML;
  }
  
  el.element = function(item) {
    if (item) {
      tag = item
      docEl = document.createElement(tag);
      return el;
    }
    
    return tag;
  }

  el.attr = function(name, value) {
    if (value) {
      docEl.setAttribute(name, value);
      return el;
    }
    
    return docEl.getAttribute(name);
  }

  return el;
}
