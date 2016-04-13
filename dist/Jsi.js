(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Jsi = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Jsi = function () {
	function Jsi(doc) {
		_classCallCheck(this, Jsi);

		if (doc === undefined) {
			doc = document;
		}
		this.doc = doc;
		this.created = new Map();

		this.eltEvent = new Map();
		this.eltEvent.set('onclick', 'click');
		this.eltEvent.set('onchange', 'change');
		this.eltEvent.set('onfocus', 'focus');
		this.eltEvent.set('onblur', 'blur');
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
		this.eltEvent.set('ondrag', 'drag');
		this.eltEvent.set('ondragend', 'dragend');
		this.eltEvent.set('ondragenter', 'dragenter');
		this.eltEvent.set('ondragleave', 'dragleave');
		this.eltEvent.set('ondragover', 'dragover');
		this.eltEvent.set('ondragstart', 'dragstart');
		this.eltEvent.set('ondrop', 'drop');
		this.eltEvent.set('oninput', 'input');
		this.eltEvent.set('onloadstart', 'loadstart');
		this.eltEvent.set('onprogress', 'progress');
		this.eltEvent.set('onsuspend', 'suspend');
		this.eltEvent.set('onabort', 'abort');
		this.eltEvent.set('onerror', 'error');
		this.eltEvent.set('onemptied', 'emptied');
		this.eltEvent.set('onstalled', 'stalled');
		this.eltEvent.set('onloadedmetadata', 'loadedmetadata');
		this.eltEvent.set('onloadeddata', 'loadeddata');
		this.eltEvent.set('oncanplay', 'canplay');
		this.eltEvent.set('oncanplaythrough', 'canplaythrough');
		this.eltEvent.set('onplaying', 'playing');
		this.eltEvent.set('onwaiting', 'waiting');
		this.eltEvent.set('onseeking', 'seeking');
		this.eltEvent.set('onseeked', 'seeked');
		this.eltEvent.set('onended', 'ended');
		this.eltEvent.set('ondurationchange', 'durationchange');
		this.eltEvent.set('ontimeupdate', 'timeupdate');
		this.eltEvent.set('onplay', 'play');
		this.eltEvent.set('onpause', 'pause');
		this.eltEvent.set('onratechange', 'ratechange');
		this.eltEvent.set('onresize', 'resize');
		this.eltEvent.set('onvolumechange', 'volumechange');
	}

	/**
 * document.getElementById shorcut
 * @param {string} id the element id
 * @return {object} DOMElement
 */


	_createClass(Jsi, [{
		key: 'id',
		value: function id(_id) {
			return this.doc.getElementById(_id);
		}
		/**
  * document.querySelectorAll shorcut
  * @param {string} query the selector
  * @return {DOMNodeList}
  */

	}, {
		key: 'query',
		value: function query(_query) {
			var res = this.doc.querySelectorAll(_query);
			if (res.length > 0) {
				return res;
			} else {
				return null;
			}
		}

		/**
  * document.querySelector shorcut
  * @param {string} query the selector
  * @return {DOMElement}
  */

	}, {
		key: 'queryFirst',
		value: function queryFirst(query) {
			return this.doc.querySelector(query);
		}
	}, {
		key: 'select',
		value: function select(q) {
			var res = this.id(q);
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

	}, {
		key: 'append',
		value: function append(parent, elt, getParent) {
			if (elt.tag !== undefined || elt.isTextNode !== undefined) {
				elt = this.create(elt);
			}
			if ((typeof parent === 'undefined' ? 'undefined' : _typeof(parent)) != 'object') {
				parent = this.select(parent);
			}

			if (parent !== null && parent !== undefined) {
				var res = parent.appendChild(elt);
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

	}, {
		key: 'appendBefore',
		value: function appendBefore(elt, n_elt) {
			if (n_elt.tag !== undefined) {
				n_elt = this.create(n_elt);
			}
			if ((typeof elt === 'undefined' ? 'undefined' : _typeof(elt)) != 'object') {
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

	}, {
		key: 'appendAfter',
		value: function appendAfter(elt, n_elt) {
			if (n_elt.tag !== undefined) {
				n_elt = this.create(n_elt);
			}
			if ((typeof elt === 'undefined' ? 'undefined' : _typeof(elt)) != 'object') {
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

	}, {
		key: 'prepend',
		value: function prepend(parent, elt) {
			if (elt.tag !== undefined) {
				elt = this.create(elt);
			}
			if ((typeof parent === 'undefined' ? 'undefined' : _typeof(parent)) != 'object') {
				parent = this.select(parent);
			}

			if (parent !== null && parent !== undefined) {
				if (parent.childNodes.length === 0) {
					return this.append(parent, elt);
				} else {
					return parent.insertBefore(elt, parent.firstChild);
				}
			}

			throw parent + ' cannot be found';
		}

		/**
  * replace an element
  * @return object DOMElement
  */

	}, {
		key: 'replace',
		value: function replace(elt, n_elt) {
			if (n_elt.tag !== undefined) {
				n_elt = this.create(n_elt);
			}
			if ((typeof elt === 'undefined' ? 'undefined' : _typeof(elt)) != 'object') {
				elt = this.select(elt);
			}

			if (elt !== null && elt !== undefined) {
				var parent = elt.parentNode;
				return parent.replaceChild(n_elt, elt);
			}

			throw elt + ' cannot be found';
		}

		/*
  * destroy a Dom element
  * @param elt mixed id of the element or element itself
  */

	}, {
		key: 'remove',
		value: function remove(elt) {
			if ((typeof elt === 'undefined' ? 'undefined' : _typeof(elt)) != 'object') {
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

	}, {
		key: 'empty',
		value: function empty(elt) {
			if ((typeof elt === 'undefined' ? 'undefined' : _typeof(elt)) != 'object') {
				elt = this.select(elt);
			}

			if (elt !== null && elt !== undefined) {
				while (elt.lastChild) {
					elt.removeChild(elt.lastChild);
				}

				return elt;
			}
		}

		/**
  * create a text node
  * @param content string the content of the text node
  */

	}, {
		key: 'textNode',
		value: function textNode(content) {
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

	}, {
		key: 'create',
		value: function create(c) {
			var elt = null;
			if (c.isTextNode !== undefined) {
				elt = this.textNode(c.content);
			} else {
				// check if the element tag has already been created to clone it
				if (!this.created.has(c.tag)) {
					this.created.set(c.tag, this.doc.createElement(c.tag));
				}
				elt = this.created.get(c.tag).cloneNode();

				// create element attribute
				if (c.attr !== undefined) {
					for (var key in c.attr) {
						// handle element event or certain specific attribute
						if (this.eltEvent.has(key)) {
							elt.addEventListener(this.eltEvent.get(key), c.attr[key]);
						} else {
							switch (key) {
								case 'checked':
									elt.checked = c.attr[key];
									break;
								case 'className':
									elt.setAttribute('class', c.attr[key]);
									break;
								default:
									elt.setAttribute(key, c.attr[key]);
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
				if (c.inner !== undefined) {
					elt.appendChild(this.textNode(c.inner));
				}

				if (c.initCallback !== undefined && typeof c.initCallback === 'function') {
					c.initCallback(elt);
				}
			}

			return elt;
		}
	}, {
		key: 'eltFromString',
		value: function eltFromString(elt) {
			var el = elt;
			try {
				elt = new Range().createContextualFragment(el);
			} catch (e) {
				var range = this.doc.createRange();
				var div = this.doc.createElement('div');
				range.selectNode(this.doc.getElementsByTagName("div").item(0));
				elt = range.createContextualFragment(el);
			}
			return elt;
		}
	}, {
		key: 'reverseCreate',
		value: function reverseCreate(elt) {
			var n_elt = {};

			if (elt.nodeName === '#text') {
				n_elt.isTextNode = true;
				n_elt.content = elt.nodeValue;
			} else {
				n_elt.tag = elt.nodeName.toLowerCase();

				if (elt.attributes !== undefined) {
					if (elt.attributes.length > 0) {
						n_elt.attr = {};
						for (var i = elt.attributes.length - 1; i >= 0; i--) {
							n_elt.attr[elt.attributes.item(i).name] = elt.attributes.item(i).value;
						}
					}
				}

				if (elt.childNodes !== undefined) {
					if (elt.childNodes.length > 0) {
						n_elt.append = [];
						for (var i = elt.childNodes.length - 1; i <= elt.childNodes.length - 1; i++) {
							n_elt.append.push(this.reverseCreate(elt.childNodes.item(i)));
						}
					}
				}
			}

			return n_elt;
		}
	}, {
		key: 'reverseCreateFromString',
		value: function reverseCreateFromString(elt) {
			return this.reverseCreate(this.eltFromString(elt));
		}
	}]);

	return Jsi;
}();

module.exports = Jsi;

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImVzNi9qc2kuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztJQ0FNO0FBQ0wsVUFESyxHQUNMLENBQVksR0FBWixFQUFnQjt3QkFEWCxLQUNXOztBQUNmLE1BQUksUUFBUSxTQUFSLEVBQW1CO0FBQ3RCLFNBQU0sUUFBTixDQURzQjtHQUF2QjtBQUdBLE9BQUssR0FBTCxHQUFXLEdBQVgsQ0FKZTtBQUtmLE9BQUssT0FBTCxHQUFlLElBQUksR0FBSixFQUFmLENBTGU7O0FBT2YsT0FBSyxRQUFMLEdBQWdCLElBQUksR0FBSixFQUFoQixDQVBlO0FBUWYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUE2QixPQUE3QixFQVJlO0FBU2YsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFsQixFQUE4QixRQUE5QixFQVRlO0FBVWYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUE2QixPQUE3QixFQVZlO0FBV2YsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixRQUFsQixFQUE0QixNQUE1QixFQVhlO0FBWWYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUE2QixPQUE3QixFQVplO0FBYWYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixZQUFsQixFQUFnQyxVQUFoQyxFQWJlO0FBY2YsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFsQixFQUE4QixRQUE5QixFQWRlO0FBZWYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixnQkFBbEIsRUFBb0MsY0FBcEMsRUFmZTtBQWdCZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLGlCQUFsQixFQUFxQyxlQUFyQyxFQWhCZTtBQWlCZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFFB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QjtBQUNqQyxTQUFJLElBQUksVUFBSixDQUFlLE1BQWYsR0FBdUIsQ0FBdkIsRUFBMEI7QUFDN0IsWUFBTSxNQUFOLEdBQWUsRUFBZixDQUQ2QjtBQUU3QixXQUFLLElBQUksSUFBSSxJQUFJLFVBQUosQ0FBZSxNQUFmLEdBQXdCLENBQXhCLEVBQTJCLEtBQUssSUFBSSxVQUFKLENBQWUsTUFBZixHQUF3QixDQUF4QixFQUEyQixHQUF4RSxFQUE2RTtBQUM1RSxhQUFNLE1BQU4sQ0FBYSxJQUFiLENBQWtCLEtBQUssYUFBTCxDQUFtQixJQUFJLFVBQUosQ0FBZSxJQUFmLENBQW9CLENBQXBCLENBQW5CLENBQWxCLEVBRDRFO09BQTdFO01BRkQ7S0FERDtJQWhCRDs7QUEwQkEsVUFBTyxLQUFQLENBN0JpQjs7OzswQ0FnQ00sS0FBSTtBQUMzQixVQUFPLEtBQUssYUFBTCxDQUFtQixLQUFLLGFBQUwsQ0FBbUIsR0FBbkIsQ0FBbkIsQ0FBUCxDQUQyQjs7OztRQW5ZdkI7OztBQXdZTixPQUFPLE9BQVAsR0FBaUIsR0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgSnNpe1xuXHRjb25zdHJ1Y3Rvcihkb2Mpe1xuXHRcdGlmIChkb2MgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZG9jID0gZG9jdW1lbnQ7XG5cdFx0fVxuXHRcdHRoaXMuZG9jID0gZG9jO1xuXHRcdHRoaXMuY3JlYXRlZCA9IG5ldyBNYXAoKTtcblxuXHRcdHRoaXMuZWx0RXZlbnQgPSBuZXcgTWFwKCk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uY2xpY2snLCAnY2xpY2snKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25jaGFuZ2UnLCAnY2hhbmdlJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uZm9jdXMnLCAnZm9jdXMnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25ibHVyJywgJ2JsdXInKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25rZXl1cCcsICdrZXl1cCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmtleXByZXNzJywgJ2tleXByZXNzJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uc3VibWl0JywgJ3N1Ym1pdCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmFuaW1hdGlvbmVuZCcsICdhbmltYXRpb25lbmQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb250cmFuc2l0aW9uZW5kJywgJ3RyYW5zaXRpb25lbmQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25jb3B5JywgJ2NvcHknKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25jdXQnLCAnY3V0Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uZGJsY2xpY2snLCAnZGJsY2xpY2snKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25pbnZhbGlkJywgJ2ludmFsaWQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZWRvd24nLCAnbW91c2Vkb3duJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ubW91c2V1cCcsICdtb3VzZXVwJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ubW91c2VlbnRlcicsICdtb3VzZWVudGVyJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ubW91c2VsZWF2ZScsICdtb3VzZWxlYXZlJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ubW91c2Vtb3ZlJywgJ21vdXNlbW92ZScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlb3V0JywgJ21vdXNlb3V0Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ubW91c2VvdmVyJywgJ21vdXNlb3ZlcicpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnBhc3RlJywgJ3Bhc3RlJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ucmVzaXplJywgJ3Jlc2l6ZScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnNjcm9sbCcsICdzY3JvbGwnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25zZWxlY3QnLCAnc2VsZWN0Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29udG91Y2hzdGFydCcsICd0b3VjaHN0YXJ0Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29udG91Y2htb3ZlJywgJ3RvdWNobW92ZScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnRvdWNoZW5kJywgJ3RvdWNoZW5kJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uZHJhZycsICdkcmFnJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uZHJhZ2VuZCcsICdkcmFnZW5kJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uZHJhZ2VudGVyJywgJ2RyYWdlbnRlcicpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyYWdsZWF2ZScsICdkcmFnbGVhdmUnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25kcmFnb3ZlcicsICdkcmFnb3ZlcicpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyYWdzdGFydCcsICdkcmFnc3RhcnQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25kcm9wJywgJ2Ryb3AnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25pbnB1dCcsICdpbnB1dCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmxvYWRzdGFydCcsICdsb2Fkc3RhcnQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25wcm9ncmVzcycsICdwcm9ncmVzcycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnN1c3BlbmQnLCAnc3VzcGVuZCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmFib3J0JywgJ2Fib3J0Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uZXJyb3InLCAnZXJyb3InKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25lbXB0aWVkJywgJ2VtcHRpZWQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25zdGFsbGVkJywgJ3N0YWxsZWQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25sb2FkZWRtZXRhZGF0YScsICdsb2FkZWRtZXRhZGF0YScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmxvYWRlZGRhdGEnLCAnbG9hZGVkZGF0YScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmNhbnBsYXknLCAnY2FucGxheScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmNhbnBsYXl0aHJvdWdoJywgJ2NhbnBsYXl0aHJvdWdoJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ucGxheWluZycsICdwbGF5aW5nJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ud2FpdGluZycsICd3YWl0aW5nJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uc2Vla2luZycsICdzZWVraW5nJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uc2Vla2VkJywgJ3NlZWtlZCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmVuZGVkJywgJ2VuZGVkJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uZHVyYXRpb25jaGFuZ2UnLCAnZHVyYXRpb25jaGFuZ2UnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb250aW1ldXBkYXRlJywgJ3RpbWV1cGRhdGUnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25wbGF5JywgJ3BsYXknKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25wYXVzZScsICdwYXVzZScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnJhdGVjaGFuZ2UnLCAncmF0ZWNoYW5nZScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnJlc2l6ZScsICdyZXNpemUnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb252b2x1bWVjaGFuZ2UnLCAndm9sdW1lY2hhbmdlJyk7XG5cblx0fVxuXG5cdC8qKlxuXHQqIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkIHNob3JjdXRcblx0KiBAcGFyYW0ge3N0cmluZ30gaWQgdGhlIGVsZW1lbnQgaWRcblx0KiBAcmV0dXJuIHtvYmplY3R9IERPTUVsZW1lbnRcblx0Ki9cblx0aWQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHR9XG5cdC8qKlxuXHQqIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgc2hvcmN1dFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgc2VsZWN0b3Jcblx0KiBAcmV0dXJuIHtET01Ob2RlTGlzdH1cblx0Ki9cblx0cXVlcnkocXVlcnkpIHtcblx0XHRsZXQgcmVzID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvckFsbChxdWVyeSk7XG5cdFx0aWYgKHJlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogZG9jdW1lbnQucXVlcnlTZWxlY3RvciBzaG9yY3V0XG5cdCogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBzZWxlY3RvclxuXHQqIEByZXR1cm4ge0RPTUVsZW1lbnR9XG5cdCovXG5cdHF1ZXJ5Rmlyc3QocXVlcnkpIHtcblx0XHRyZXR1cm4gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihxdWVyeSk7XG5cdH1cblxuXHRzZWxlY3QocSl7XG5cdFx0bGV0IHJlcyA9IHRoaXMuaWQocSk7XG5cdFx0aWYgKHJlcyA9PT0gbnVsbCkge1xuXHRcdFx0cmVzID0gdGhpcy5xdWVyeUZpcnN0KHEpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzO1xuXHR9XG5cblx0LyoqXG5cdCogYXBwZW5kIGFuIGVsZW1lbnQgdG8gYSBwYXJlbnRcblx0KiBAcGFyYW0ge0RPTUVsZW1lbnR8c3RyaW5nfSBwYXJlbnQgdGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvIG9yIGl0cyBpZFxuXHQqIEBwYXJhbSB7RE9NRWxlbWVudHxvYmplY3R9IGVsdCBvciB0ZW1wbGF0ZSBvYmplY3QgdG8gYXBwZW5kIHRvIHBhcmVudFxuXHQqIEByZXR1cm4ge0RPTUVsZW1lbnR9IG9iamVjdFxuXHQqL1xuXHRhcHBlbmQocGFyZW50LCBlbHQsIGdldFBhcmVudCkge1xuXHRcdGlmIChlbHQudGFnICE9PSB1bmRlZmluZWQgfHwgZWx0LmlzVGV4dE5vZGUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGVsdCA9IHRoaXMuY3JlYXRlKGVsdCk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgcGFyZW50ICE9ICdvYmplY3QnKSB7XG5cdFx0XHRwYXJlbnQgPSB0aGlzLnNlbGVjdChwYXJlbnQpO1xuXHRcdH1cblxuXHRcdGlmIChwYXJlbnQgIT09IG51bGwgJiYgcGFyZW50ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGxldCByZXMgPSBwYXJlbnQuYXBwZW5kQ2hpbGQoZWx0KTtcblx0XHRcdGlmIChnZXRQYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXMgPSBwYXJlbnQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH1cblx0XHR0aHJvdyBwYXJlbnQgKyAnIGNhbm5vdCBiZSBmb3VuZCc7XG5cdH1cblxuXHQvKipcblx0KiBhcHBlbmQgYW4gZWxlbWVudCBiZWZvcmUgYW5vdGhlclxuXHQqIEBwYXJhbSBlbHQgbWl4ZWQgdGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvIG9yIGl0cyBpZFxuXHQqIEBwYXJhbSBuX2VsdCBtaXhlZCBET01FbGVtZW50IG9yIHRlbXBsYXRlIG9iamVjdCB0byBhcHBlbmQgdG8gcGFyZW50XG5cdCogQHJldHVybiBvYmplY3QgRE9NRWxlbWVudFxuXHQqL1xuXHRhcHBlbmRCZWZvcmUoZWx0LCBuX2VsdCkge1xuXHRcdGlmIChuX2VsdC50YWcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bl9lbHQgPSB0aGlzLmNyZWF0ZShuX2VsdCk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgZWx0ICE9ICdvYmplY3QnKSB7XG5cdFx0XHRlbHQgPSB0aGlzLnNlbGVjdChlbHQpO1xuXHRcdH1cblxuXHRcdGlmIChlbHQgIT09IG51bGwgJiYgZWx0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBlbHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobl9lbHQsIGVsdCk7XG5cdFx0fVxuXG5cdFx0dGhyb3cgZWx0ICsgJyBjYW5ub3QgYmUgZm91bmQnO1xuXHR9XG5cblx0LyoqXG5cdCogYXBwZW5kIGFuIGVsZW1lbnQgYWZ0ZXIgYW5vdGhlclxuXHQqIEBwYXJhbSBlbHQgbWl4ZWQgdGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvIG9yIGl0cyBpZFxuXHQqIEBwYXJhbSBuX2VsdCBtaXhlZCBET01FbGVtZW50IG9yIHRlbXBsYXRlIG9iamVjdCB0byBhcHBlbmQgdG8gcGFyZW50XG5cdCogQHJldHVybiBvYmplY3QgRE9NRWxlbWVudFxuXHQqL1xuXHRhcHBlbmRBZnRlcihlbHQsIG5fZWx0KSB7XG5cdFx0aWYgKG5fZWx0LnRhZyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRuX2VsdCA9IHRoaXMuY3JlYXRlKG5fZWx0KTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBlbHQgIT0gJ29iamVjdCcpIHtcblx0XHRcdGVsdCA9IHRoaXMuc2VsZWN0KGVsdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGVsdCAhPT0gbnVsbCAmJiBlbHQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGVsdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuX2VsdCwgZWx0Lm5leHRTaWJsaW5nKTtcblx0XHR9XG5cblx0XHR0aHJvdyBlbHQgKyAnIGNhbm5vdCBiZSBmb3VuZCc7XG5cdH1cblxuXHQvKipcblx0KiBhcHBlbmQgYW4gZWxlbWVudCB0byBhIHBhcmVudCBhcyBpdHMgZmlyc3QgY2hpbGRcblx0KiBAcGFyYW0gcGFyZW50IG1peGVkIHRoZSBlbGVtZW50IHRvIGFwcGVuZCB0byBvciBpdHMgaWRcblx0KiBAcGFyYW0gZWx0IG1peGVkIERPTUVsZW1lbnQgb3IgdGVtcGxhdGUgb2JqZWN0IHRvIGFwcGVuZCB0byBwYXJlbnRcblx0KiBAcmV0dXJuIG9iamVjdCBET01FbGVtZW50XG5cdCovXG5cdHByZXBlbmQocGFyZW50LCBlbHQpIHtcblx0XHRpZiAoZWx0LnRhZyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRlbHQgPSB0aGlzLmNyZWF0ZShlbHQpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHBhcmVudCAhPSAnb2JqZWN0Jykge1xuXHRcdFx0cGFyZW50ID0gdGhpcy5zZWxlY3QocGFyZW50KTtcblx0XHR9XG5cblx0XHRpZiAocGFyZW50ICE9PSBudWxsICYmIHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpZiAocGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFwcGVuZChwYXJlbnQsIGVsdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHRyZXR1cm4gcGFyZW50Lmluc2VydEJlZm9yZShlbHQsIHBhcmVudC5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aHJvdyBwYXJlbnQgKyAnIGNhbm5vdCBiZSBmb3VuZCc7XG5cdH1cblxuXHQvKipcblx0KiByZXBsYWNlIGFuIGVsZW1lbnRcblx0KiBAcmV0dXJuIG9iamVjdCBET01FbGVtZW50XG5cdCovXG5cdHJlcGxhY2UoZWx0LCBuX2VsdCkge1xuXHRcdGlmIChuX2VsdC50YWcgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bl9lbHQgPSB0aGlzLmNyZWF0ZShuX2VsdCk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgZWx0ICE9ICdvYmplY3QnKSB7XG5cdFx0XHRlbHQgPSB0aGlzLnNlbGVjdChlbHQpO1xuXHRcdH1cblxuXHRcdGlmIChlbHQgIT09IG51bGwgJiYgZWx0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGxldCBwYXJlbnQgPSBlbHQucGFyZW50Tm9kZTtcblx0XHRcdHJldHVybiBwYXJlbnQucmVwbGFjZUNoaWxkKG5fZWx0LCBlbHQpO1xuXHRcdH1cblxuXHRcdHRocm93IGVsdCArICcgY2Fubm90IGJlIGZvdW5kJztcblx0fVxuXG5cdC8qXG5cdCogZGVzdHJveSBhIERvbSBlbGVtZW50XG5cdCogQHBhcmFtIGVsdCBtaXhlZCBpZCBvZiB0aGUgZWxlbWVudCBvciBlbGVtZW50IGl0c2VsZlxuXHQqL1xuXHRyZW1vdmUoZWx0KSB7XG5cdFx0aWYgKHR5cGVvZiBlbHQgIT0gJ29iamVjdCcpIHtcblx0XHRcdGVsdCA9IHRoaXMuc2VsZWN0KGVsdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGVsdCAhPT0gbnVsbCAmJiBlbHQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGVsdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsdCk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIGVtcHR5IERvbSBlbGVtZW50IGZyb20gaXQncyBjaGlsZHJlbi5cblx0Ki9cblx0ZW1wdHkoZWx0KSB7XG5cdFx0aWYgKHR5cGVvZiBlbHQgIT0gJ29iamVjdCcpIHtcblx0XHRcdGVsdCA9IHRoaXMuc2VsZWN0KGVsdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGVsdCAhPT0gbnVsbCAmJiBlbHQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0d2hpbGUoZWx0Lmxhc3RDaGlsZCl7XG5cdFx0XHRcdGVsdC5yZW1vdmVDaGlsZChlbHQubGFzdENoaWxkKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGVsdDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBjcmVhdGUgYSB0ZXh0IG5vZGVcblx0KiBAcGFyYW0gY29udGVudCBzdHJpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIHRleHQgbm9kZVxuXHQqL1xuXHR0ZXh0Tm9kZShjb250ZW50KXtcblx0XHRyZXR1cm4gdGhpcy5kb2MuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cdH1cblxuXHQvKipcblx0KiBjcmVhdGUgYW4gZWxlbWVudCBmcm9tIGEgdGVtcGxhdGUgb2JqZWN0XG5cdCogQHBhcmFtIGMgb2JqZWN0IHRoZSB0ZW1wbGF0ZSBvYmplY3QgdG8gYmUgY3JlYXRlZFxuXHQqIEByZXR1cm4gb2JqZWN0IERPTUVsZW1lbnRcblx0KjxleGVtcGxlPlxuXHQqe1xuXHQqXHRcInRhZ1wiOlwidHlwZSBvZiBlbGVtZW50XCIsXG5cdCpcdFwiYXR0clwiOntcblx0Klx0XHRcImF0dHJpYnV0ZTFcIjpcInZhbHVlIG9mIGF0dHIgMVwiLFxuXHQqXHRcdFwiLi4uXCI6XCIuLi5cIlxuXHQqXHR9LFxuXHQqXHRcImlubmVyXCI6XCJ0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBub2RlXCJcblx0Kn1cblx0KjwvZXhlbXBsZT5cblx0Ki9cblx0Y3JlYXRlKGMpIHtcblx0XHRsZXQgZWx0ID0gbnVsbDtcblx0XHRpZiAoYy5pc1RleHROb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGVsdCA9IHRoaXMudGV4dE5vZGUoYy5jb250ZW50KTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdC8vIGNoZWNrIGlmIHRoZSBlbGVtZW50IHRhZyBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQgdG8gY2xvbmUgaXRcblx0XHRcdGlmICghdGhpcy5jcmVhdGVkLmhhcyhjLnRhZykpIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVkLnNldChjLnRhZywgdGhpcy5kb2MuY3JlYXRlRWxlbWVudChjLnRhZykpO1xuXHRcdFx0fVxuXHRcdFx0ZWx0ID0gdGhpcy5jcmVhdGVkLmdldChjLnRhZykuY2xvbmVOb2RlKCk7XG5cdFx0XHRcblx0XHRcdC8vIGNyZWF0ZSBlbGVtZW50IGF0dHJpYnV0ZVxuXHRcdFx0aWYoYy5hdHRyICE9PSB1bmRlZmluZWQpXG5cdFx0XHR7XG5cdFx0XHRcdGZvcihsZXQga2V5IGluIGMuYXR0cilcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8vIGhhbmRsZSBlbGVtZW50IGV2ZW50IG9yIGNlcnRhaW4gc3BlY2lmaWMgYXR0cmlidXRlXG5cdFx0XHRcdFx0aWYgKHRoaXMuZWx0RXZlbnQuaGFzKGtleSkpIHtcblx0XHRcdFx0XHRcdGVsdC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZWx0RXZlbnQuZ2V0KGtleSksIGMuYXR0cltrZXldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZXtcblx0XHRcdFx0XHRcdHN3aXRjaChrZXkpe1xuXHRcdFx0XHRcdFx0XHRjYXNlICdjaGVja2VkJzpcblx0XHRcdFx0XHRcdFx0XHRlbHQuY2hlY2tlZCA9IGMuYXR0cltrZXldO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdjbGFzc05hbWUnOlxuXHRcdFx0XHRcdFx0XHRcdGVsdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJyxjLmF0dHJba2V5XSk7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0ZWx0LnNldEF0dHJpYnV0ZShrZXksYy5hdHRyW2tleV0pO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBpbiBzb21lIGNhc2UgeW91IHdhbnQgdG8gYmUgYWJsZSB0byBmb3JjZSBpbm5lckhUTUwgdmFsdWUsIFxuXHRcdFx0Ly8gLyFcXCBUSElTIElTIEJBQUFBQUFEICFcblx0XHRcdGlmIChjLmlubmVyRm9yY2UgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRlbHQuaW5uZXJIVE1MID0gYy5pbm5lckZvcmNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhcHBlbmQgZWxlbWVudHMgaWYgdGhlcmUgYXJlIHNvbWUgXG5cdFx0XHRpZiAoYy5hcHBlbmQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRmb3IgKGxldCBhcCBpbiBjLmFwcGVuZCkge1xuXHRcdFx0XHRcdGVsdCA9IHRoaXMuYXBwZW5kKGVsdCwgYy5hcHBlbmRbYXBdLCB0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBjcmVhdGUgaW5uZXIgdGV4dCBjb250ZW50IG5vZGUgYW5kIGFwcGVuZCBpdFxuXHRcdFx0aWYgKGMuaW5uZXIgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRcdGVsdC5hcHBlbmRDaGlsZCh0aGlzLnRleHROb2RlKGMuaW5uZXIpKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGMuaW5pdENhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGMuaW5pdENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGMuaW5pdENhbGxiYWNrKGVsdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVsdDtcblx0fVxuXG5cdGVsdEZyb21TdHJpbmcoZWx0KSB7XG5cdFx0bGV0IGVsID0gZWx0O1xuXHRcdHRyeXtcblx0XHRcdGVsdCA9IG5ldyBSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChlbCk7XG5cdFx0fVxuXHRcdGNhdGNoKGUpe1xuXHRcdFx0bGV0IHJhbmdlID0gdGhpcy5kb2MuY3JlYXRlUmFuZ2UoKTtcblx0XHRcdGxldCBkaXYgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHJhbmdlLnNlbGVjdE5vZGUodGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIikuaXRlbSgwKSk7XG5cdFx0XHRlbHQgPSByYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoZWwpO1xuXHRcdH1cblx0XHRyZXR1cm4gZWx0O1xuXHR9XG5cblx0cmV2ZXJzZUNyZWF0ZShlbHQpe1xuXHRcdGxldCBuX2VsdCA9IHt9O1xuXG5cdFx0aWYgKGVsdC5ub2RlTmFtZSA9PT0gJyN0ZXh0Jykge1xuXHRcdFx0bl9lbHQuaXNUZXh0Tm9kZSA9IHRydWU7XG5cdFx0XHRuX2VsdC5jb250ZW50ID0gZWx0Lm5vZGVWYWx1ZTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdG5fZWx0LnRhZyA9IGVsdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XG5cdFx0XHRpZiAoZWx0LmF0dHJpYnV0ZXMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRpZiAoZWx0LmF0dHJpYnV0ZXMubGVuZ3RoID4wKSB7XG5cdFx0XHRcdFx0bl9lbHQuYXR0ciA9IHt9O1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSBlbHQuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRcdFx0bl9lbHQuYXR0cltlbHQuYXR0cmlidXRlcy5pdGVtKGkpLm5hbWVdID0gZWx0LmF0dHJpYnV0ZXMuaXRlbShpKS52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYgKGVsdC5jaGlsZE5vZGVzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0aWYgKGVsdC5jaGlsZE5vZGVzLmxlbmd0aCA+MCkge1xuXHRcdFx0XHRcdG5fZWx0LmFwcGVuZCA9IFtdO1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSBlbHQuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpIDw9IGVsdC5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0XHRcdFx0bl9lbHQuYXBwZW5kLnB1c2godGhpcy5yZXZlcnNlQ3JlYXRlKGVsdC5jaGlsZE5vZGVzLml0ZW0oaSkpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbl9lbHQ7XG5cdH1cblxuXHRyZXZlcnNlQ3JlYXRlRnJvbVN0cmluZyhlbHQpe1xuXHRcdHJldHVybiB0aGlzLnJldmVyc2VDcmVhdGUodGhpcy5lbHRGcm9tU3RyaW5nKGVsdCkpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSnNpOyJdfQ==
