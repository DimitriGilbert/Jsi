class Jsi{
	constructor(doc){
		if (doc === undefined) {
			doc = document;
		}
		this.doc = doc;
		this.created = new Map();

		this.eltEvent = new Map();
		this.eltEvent.set('onclick', 'click');
		this.eltEvent.set('onchange', 'change');
		this.eltEvent.set('onfocus', 'focus');
		this.eltEvent.set('onkeyup', 'keyup');
		this.eltEvent.set('onkeypress', 'keypress');
		this.eltEvent.set('onsubmit', 'submit');
		this.eltEvent.set('onanimationend', 'animationend');
		this.eltEvent.set('ontransitionend', 'transitionend');
		this.eltEvent.set('oncopy', 'copy');
		this.eltEvent.set('oncut', 'cut');
		this.eltEvent.set('ondblclick', 'dblclick');
		this.eltEvent.set('oninvalid', 'invalid');
		this.eltEvent.set('onmousedown', 'mousedown');
		this.eltEvent.set('onmouseup', 'mouseup');
		this.eltEvent.set('onmouseenter', 'mouseenter');
		this.eltEvent.set('onmouseleave', 'mouseleave');
		this.eltEvent.set('onmousemove', 'mousemove');
		this.eltEvent.set('onmouseout', 'mouseout');
		this.eltEvent.set('onmouseover', 'mouseover');
		this.eltEvent.set('onpaste', 'paste');
		this.eltEvent.set('onresize', 'resize');
		this.eltEvent.set('onscroll', 'scroll');
		this.eltEvent.set('onselect', 'select');
		this.eltEvent.set('ontouchstart', 'touchstart');
		this.eltEvent.set('ontouchmove', 'touchmove');
		this.eltEvent.set('ontouchend', 'touchend');
	}

	/**
	* document.getElementById shorcut
	* @param {string} id the element id
	* @return {object} DOMElement
	*/
	id(id) {
		return this.doc.getElementById(id);
	}
	/**
	* document.querySelectorAll shorcut
	* @param {string} query the selector
	* @return {DOMNodeList}
	*/
	query(query) {
		var res = this.doc.querySelectorAll(query);
		if (res.length > 0) {
			return res;
		}
		else{
			return null;
		}
	}

	/**
	* document.querySelector shorcut
	* @param {string} query the selector
	* @return {DOMElement}
	*/
	queryFirst(query) {
		return this.doc.querySelector(query);
	}

	select(q){
		let res = this.id(q);
		if (res === null) {
			res = this.queryFirst(q);
		}
		return res;
	}

	/**
	* append an element to a parent
	* @param {DOMElement|string} parent the element to append to or its id
	* @param {DOMElement|object} elt or template object to append to parent
	* @return {DOMElement} object
	*/
	append(parent, elt, getParent) {
		if (elt.tag !== undefined || elt.isTextNode !== undefined ) {
			elt = this.create(elt);
		}
		if (typeof parent != 'object') {
			parent = this.select(parent);
		}

		if (parent !== null && parent !== undefined) {
			let res = parent.appendChild(elt);
			if (getParent !== undefined) {
				res = parent;
			}
			return res;
		}
		throw parent + ' cannot be found';
	}

	/**
	* append an element before another
	* @param elt mixed the element to append to or its id
	* @param n_elt mixed DOMElement or template object to append to parent
	* @return object DOMElement
	*/
	appendBefore(elt, n_elt) {
		if (n_elt.tag !== undefined) {
			n_elt = this.create(n_elt);
		}
		if (typeof elt != 'object') {
			elt = this.select(elt);
		}

		if (elt !== null && elt !== undefined) {
			return elt.parentNode.insertBefore(n_elt, elt);
		}

		throw elt + ' cannot be found';
	}

	/**
	* append an element after another
	* @param elt mixed the element to append to or its id
	* @param n_elt mixed DOMElement or template object to append to parent
	* @return object DOMElement
	*/
	appendAfter(elt, n_elt) {
		if (n_elt.tag !== undefined) {
			n_elt = this.create(n_elt);
		}
		if (typeof elt != 'object') {
			elt = this.select(elt);
		}

		if (elt !== null && elt !== undefined) {
			return elt.parentNode.insertBefore(n_elt, elt.nextSibling);
		}

		throw elt + ' cannot be found';
	}

	/**
	* append an element to a parent as its first child
	* @param parent mixed the element to append to or its id
	* @param elt mixed DOMElement or template object to append to parent
	* @return object DOMElement
	*/
	prepend(parent, elt) {
		if (elt.tag !== undefined) {
			elt = this.create(elt);
		}
		if (typeof parent != 'object') {
			parent = this.select(parent);
		}

		if (parent !== null && parent !== undefined) {
			if (parent.childNodes.length === 0) {
				return this.append(parent, elt);
			}
			else{
				return parent.insertBefore(elt, parent.firstChild);
			}
		}

		throw parent + ' cannot be found';
	}

	/**
	* replace an element
	* @return object DOMElement
	*/
	replace(elt, n_elt) {
		if (n_elt.tag !== undefined) {
			n_elt = this.create(n_elt);
		}
		if (typeof elt != 'object') {
			elt = this.select(elt);
		}

		if (elt !== null && elt !== undefined) {
			let parent = elt.parentNode;
			return parent.replaceChild(n_elt, elt);
		}

		throw elt + ' cannot be found';
	}

	/*
	* destroy a Dom element
	* @param elt mixed id of the element or element itself
	*/
	remove(elt) {
		if (typeof elt != 'object') {
			elt = this.select(elt);
		}

		if (elt !== null && elt !== undefined) {
			return elt.parentNode.removeChild(elt);
		}
		
		return false;
	}

	/**
	* empty Dom element from it's children.
	*/
	empty(elt) {
		if (typeof elt != 'object') {
			elt = this.select(elt);
		}

		if (elt !== null && elt !== undefined) {
			while(elt.lastChild){
				elt.removeChild(elt.lastChild);
			}

			return elt;
		}
	}

	/**
	* create a text node
	* @param content string the content of the text node
	*/
	textNode(content){
		return this.doc.createTextNode(content);
	}

	/**
	* create an element from a template object
	* @param c object the template object to be created
	* @return object DOMElement
	*<exemple>
	*{
	*	"tag":"type of element",
	*	"attr":{
	*		"attribute1":"value of attr 1",
	*		"...":"..."
	*	},
	*	"inner":"the text content of the node"
	*}
	*</exemple>
	*/
	create(c) {
		var elt = null;
		if (c.isTextNode !== undefined) {
			elt = this.textNode(c.content);
		}
		else{
			// check if the element tag has already been created to clone it
			if (!this.created.has(c.tag)) {
				this.created.set(c.tag, this.doc.createElement(c.tag));
			}
			elt = this.created.get(c.tag).cloneNode();
			
			// create element attribute
			if(c.attr !== undefined)
			{
				for(var key in c.attr)
				{
					// handle element event or certain specific attribute
					if (this.eltEvent.has(key)) {
						elt.addEventListener(this.eltEvent.get(key), c.attr[key]);
					}
					else{
						switch(key){
							case 'checked':
								elt.checked = c.attr[key];
								break;
							case 'className':
								elt.setAttribute('class',c.attr[key]);
								break;
							default:
								elt.setAttribute(key,c.attr[key]);
								break;
						}
					}
				}
			}

			// in some case you want to be able to force innerHTML value, 
			// /!\ THIS IS BAAAAAAD !
			if (c.innerForce !== undefined) {
				elt.innerHTML = c.innerForce;
			}

			// append elements if there are some 
			if (c.append !== undefined) {
				for (var ap in c.append) {
					elt = this.append(elt, c.append[ap], true);
				}
			}
			
			// create inner text content node and append it
			if (c.inner !== undefined){
				elt.appendChild(this.textNode(c.inner));
			}

			if (c.initCallback !== undefined && typeof c.initCallback === 'function') {
				c.initCallback(elt);
			}
		}

		return elt;
	}

	eltFromString(elt) {
		var el = elt;
		try{
			elt = new Range().createContextualFragment(el);
		}
		catch(e){
			var range = this.doc.createRange();
			var div = this.doc.createElement('div');
			range.selectNode(this.doc.getElementsByTagName("div").item(0));
			elt = range.createContextualFragment(el);
		}
		return elt;
	}
}

module.exports = Jsi;