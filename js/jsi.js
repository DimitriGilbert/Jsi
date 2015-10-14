/**
 * @constructor
 */
var Jsi = {};

/**
* element already created as cloning is faster than creating
* @var
*/
Jsi.created = {};

Jsi.transitionEvent  = function(){
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    };

    for(var t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}();
Jsi.animationEvent  = function(){
    var el = document.createElement('fakeelement');
    var transitions = {
      'animation':'animationend',
      'OAnimationtion':'oAnimationtionEnd',
      'MozAnimationtion':'animationend',
      'WebkitAnimationtion':'webkitAnimationtionEnd'
    };

    for(var t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}();

/**
* document.getElementById shorcut
* @param {string} id the element id
* @return {object} DOMElement
*/
Jsi.docelid = function (id) {
	return document.getElementById(id);
};

/**
* document.querySelectorAll shorcut
* @param {string} query the selector
* @return {DOMNodeList}
*/
Jsi.doceleq = function (query) {
	var res = document.querySelectorAll(query);
	if (res.length > 0) {
		return res;
	}
	else{
		return null;
	}
};

/**
* document.querySelector shorcut
* @param {string} query the selector
* @return {DOMElement}
*/
Jsi.doceleqFirst = function (query) {
	return document.querySelector(query);
};

/**
* append an element to a parent
* @param {DOMElement|string} parent the element to append to or its id
* @param {DOMElement|object} elt or template object to append to parent
* @return {DOMElement} object
*/
Jsi.append = function (parent, elt) {
	if (elt.tag !== undefined || elt.isTextNode !== undefined ) {
		elt = this.elt(elt);
	}
	if (typeof parent != 'object') {
		parent = this.docelid(parent);
	}

	parent.appendChild(elt);

	elt = null;

	return parent;
};

/**
* append an element before another
* @param elt mixed the element to append to or its id
* @param n_elt mixed DOMElement or template object to append to parent
* @return object DOMElement
*/
Jsi.appendBefore = function (elt, n_elt) {
	if (n_elt.tag !== undefined) {
		n_elt = this.elt(n_elt);
	}
	if (typeof elt != 'object') {
		elt = this.docelid(elt);
	}

	elt.parentNode.insertBefore(n_elt, elt);

	n_elt = null;

	return elt;
};

/**
* append an element after another
* @param elt mixed the element to append to or its id
* @param n_elt mixed DOMElement or template object to append to parent
* @return object DOMElement
*/
Jsi.appendAfter = function (elt, n_elt) {
	if (n_elt.tag !== undefined) {
		n_elt = this.elt(n_elt);
	}
	if (typeof elt != 'object') {
		elt = this.docelid(elt);
	}

	elt.parentNode.insertBefore(n_elt, elt.nextSibling);

	n_elt = null;

	return elt;
};

/**
* append an element to a parent as its first child
* @param parent mixed the element to append to or its id
* @param elt mixed DOMElement or template object to append to parent
* @return object DOMElement
*/
Jsi.prepend = function (parent, elt) {
	if (elt.tag !== undefined) {
		elt = this.elt(elt);
	}
	if (typeof parent != 'object') {
		parent = this.docelid(parent);
	}

	if (parent.childNodes.length === 0) {
		this.append(parent, elt);
	}
	else{
		parent.insertBefore(elt, parent.firstChild);
	}

	return parent;
};

/**
* replace an element
* @return object DOMElement
*/
Jsi.replace = function (elt, n_elt) {
	if (n_elt.tag !== undefined) {
		n_elt = this.elt(n_elt);
	}

	if (typeof elt != 'object') {
		elt = this.docelid(elt);
	}

	var parent = elt.parentNode;

	parent.replaceChild(n_elt, elt);

	return parent;
};

/**
* create a text node
* @param content string the content of the text node
*/
Jsi.textNode = function(content){
	return document.createTextNode(content);
};

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
Jsi.elt = function(c) {
	var elt = null;
	if (c.isTextNode !== undefined) {
		elt = this.textNode(c.content);
	}
	else{
		// check if the element tag has already been created to clone it
		if (this.created[c.tag] === undefined) {
			this.created[c.tag] = document.createElement(c.tag);
			elt = this.created[c.tag].cloneNode();
		}
		else {
			elt = this.created[c.tag].cloneNode();		
		}
		// create element attribute
		if(c.attr !== undefined)
		{
			for(var key in c.attr)
			{
				// handle element event or certain specific attribute
				switch(key){
					case 'onclick':
						elt.addEventListener('click', c.attr[key]);
						break;
					case 'onchange':
						elt.addEventListener('change', c.attr[key]);
						break;
					case 'onfocus':
						elt.addEventListener('focus', c.attr[key]);
						break;
					case 'onkeyup':
						elt.addEventListener('keyup', c.attr[key]);
						break;
					case 'onkeypress':
						elt.addEventListener('keypress', c.attr[key]);
						break;
					case 'onsubmit':
						elt.addEventListener('submit', c.attr[key]);
						break;
					case 'onanimationend':
						elt.addEventListener(Jsi.animationend, c.attr[key]);
						break;
					case 'ontransitionend':
						elt.addEventListener(Jsi.transitionend, c.attr[key]);
						break;
					case 'oncopy':
						elt.addEventListener('copy', c.attr[key]);
						break;
					case 'oncut':
						elt.addEventListener('cut', c.attr[key]);
						break;
					case 'ondblclick':
						elt.addEventListener('dblclick', c.attr[key]);
						break;
					case 'oninvalid':
						elt.addEventListener('invalid', c.attr[key]);
						break;
					case 'onmousedown':
						elt.addEventListener('mousedown', c.attr[key]);
						break;
					case 'onmouseup':
						elt.addEventListener('mouseup', c.attr[key]);
						break;
					case 'onmouseenter':
						elt.addEventListener('mouseenter', c.attr[key]);
						break;
					case 'onmouseleave':
						elt.addEventListener('mouseleave', c.attr[key]);
						break;
					case 'onmousemove':
						elt.addEventListener('mousemove', c.attr[key]);
						break;
					case 'onmouseout':
						elt.addEventListener('mouseout', c.attr[key]);
						break;
					case 'onmouseover':
						elt.addEventListener('mouseover', c.attr[key]);
						break;
					case 'onpaste':
						elt.addEventListener('paste', c.attr[key]);
						break;
					case 'onresize':
						elt.addEventListener('resize', c.attr[key]);
						break;
					case 'onscroll':
						elt.addEventListener('scroll', c.attr[key]);
						break;
					case 'onselect':
						elt.addEventListener('select', c.attr[key]);
						break;
					case 'ontouchstart':
						elt.addEventListener('touchstart', c.attr[key]);
						break;
					case 'ontouchmove':
						elt.addEventListener('touchmove', c.attr[key]);
						break;
					case 'ontouchend':
						elt.addEventListener('touchend', c.attr[key]);
						break;
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

		// in some case you want to be able to force innerHTML value, 
		// /!\ THIS IS BAAAAAAD !
		if (c.innerForce !== undefined) {
			elt.innerHTML = c.innerForce;
		}

		// append elements if there are some 
		if (c.append !== undefined) {
			for (var ap in c.append) {
				if (c.append[ap].tag !== undefined) {
					elt = this.append(elt, this.elt(c.append[ap]));
				}
				else{
					elt = this.append(elt, c.append[ap]);
				}
			}
		}

		// prepend elements
		if (c.prepend !== undefined) {
			for (var pp in c.prepend) {
				if (c.prepend[pp].tag !== undefined) {
					elt = this.prepend(elt, this.elt(c.prepend[pp]));
				}
				else{
					elt = this.prepend(c.prepend[pp]);
				}
			}
		}
		
		// create inner text content node and append it
		if (c.inner !== undefined){
			elt.appendChild(this.textNode(c.inner));
		}

		if (c.initCallback !== undefined && typeof c.initCallback == 'function') {
			c.initCallback(elt);
		}
	}

	return elt;
};

Jsi.eltFromString = function (elt) {
	var el = elt;
	try{
		elt = new Range().createContextualFragment(el);
	}
	catch(e){
		var range = document.createRange();
		var div = document.createElement('div');
		range.selectNode(document.getElementsByTagName("div").item(0));
		elt = range.createContextualFragment (el);
	}
	return elt;
};

/*
* destroy a Dom element
* @param elt mixed id of the element or element itself
*/
Jsi.remove = function (elt) {
	if (typeof elt != 'object') {
		elt = this.docelid(elt);
	}

	if (elt !== null) {
		return elt.parentNode.removeChild(elt);
	}
	
	return false;
};

/**
* empty Dom element from it's children.
*/
Jsi.empty = function (elt) {
	if (typeof elt != 'object') {
		elt = this.docelid(elt);
	}

	while(elt.lastChild){
		elt.removeChild(elt.lastChild);
	}

	return elt;
};