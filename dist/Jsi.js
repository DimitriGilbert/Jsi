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
						for (var i = elt.childNodes.length - 1; i >= 0; i--) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImVzNi9qc2kuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztJQ0FNO0FBQ0wsVUFESyxHQUNMLENBQVksR0FBWixFQUFnQjt3QkFEWCxLQUNXOztBQUNmLE1BQUksUUFBUSxTQUFSLEVBQW1CO0FBQ3RCLFNBQU0sUUFBTixDQURzQjtHQUF2QjtBQUdBLE9BQUssR0FBTCxHQUFXLEdBQVgsQ0FKZTtBQUtmLE9BQUssT0FBTCxHQUFlLElBQUksR0FBSixFQUFmLENBTGU7O0FBT2YsT0FBSyxRQUFMLEdBQWdCLElBQUksR0FBSixFQUFoQixDQVBlO0FBUWYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUE2QixPQUE3QixFQVJlO0FBU2YsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFsQixFQUE4QixRQUE5QixFQVRlO0FBVWYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUE2QixPQUE3QixFQVZlO0FBV2YsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixRQUFsQixFQUE0QixNQUE1QixFQVhlO0FBWWYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixTQUFsQixFQUE2QixPQUE3QixFQVplO0FBYWYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixZQUFsQixFQUFnQyxVQUFoQyxFQWJlO0FBY2YsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFsQixFQUE4QixRQUE5QixFQWRlO0FBZWYsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixnQkFBbEIsRUFBb0MsY0FBcEMsRUFmZTtBQWdCZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLGlCQUFsQixFQUFxQyxlQUFyQyxFQWhCZTtBQWlCZixPQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFFB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QjtBQUNqQyxTQUFJLElBQUksVUFBSixDQUFlLE1BQWYsR0FBdUIsQ0FBdkIsRUFBMEI7QUFDN0IsWUFBTSxNQUFOLEdBQWUsRUFBZixDQUQ2QjtBQUU3QixXQUFLLElBQUksSUFBSSxJQUFJLFVBQUosQ0FBZSxNQUFmLEdBQXdCLENBQXhCLEVBQTJCLEtBQUssQ0FBTCxFQUFRLEdBQWhELEVBQXFEO0FBQ3BELGFBQU0sTUFBTixDQUFhLElBQWIsQ0FBa0IsS0FBSyxhQUFMLENBQW1CLElBQUksVUFBSixDQUFlLElBQWYsQ0FBb0IsQ0FBcEIsQ0FBbkIsQ0FBbEIsRUFEb0Q7T0FBckQ7TUFGRDtLQUREO0lBaEJEOztBQTBCQSxVQUFPLEtBQVAsQ0E3QmlCOzs7OzBDQWdDTSxLQUFJO0FBQzNCLFVBQU8sS0FBSyxhQUFMLENBQW1CLEtBQUssYUFBTCxDQUFtQixHQUFuQixDQUFuQixDQUFQLENBRDJCOzs7O1FBbll2Qjs7O0FBd1lOLE9BQU8sT0FBUCxHQUFpQixHQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBKc2l7XG5cdGNvbnN0cnVjdG9yKGRvYyl7XG5cdFx0aWYgKGRvYyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkb2MgPSBkb2N1bWVudDtcblx0XHR9XG5cdFx0dGhpcy5kb2MgPSBkb2M7XG5cdFx0dGhpcy5jcmVhdGVkID0gbmV3IE1hcCgpO1xuXG5cdFx0dGhpcy5lbHRFdmVudCA9IG5ldyBNYXAoKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25jbGljaycsICdjbGljaycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmNoYW5nZScsICdjaGFuZ2UnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25mb2N1cycsICdmb2N1cycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmJsdXInLCAnYmx1cicpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmtleXVwJywgJ2tleXVwJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ua2V5cHJlc3MnLCAna2V5cHJlc3MnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25zdWJtaXQnLCAnc3VibWl0Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uYW5pbWF0aW9uZW5kJywgJ2FuaW1hdGlvbmVuZCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnRyYW5zaXRpb25lbmQnLCAndHJhbnNpdGlvbmVuZCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmNvcHknLCAnY29weScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmN1dCcsICdjdXQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25kYmxjbGljaycsICdkYmxjbGljaycpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmludmFsaWQnLCAnaW52YWxpZCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbm1vdXNlZG93bicsICdtb3VzZWRvd24nKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZXVwJywgJ21vdXNldXAnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZWVudGVyJywgJ21vdXNlZW50ZXInKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZWxlYXZlJywgJ21vdXNlbGVhdmUnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZW1vdmUnLCAnbW91c2Vtb3ZlJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ubW91c2VvdXQnLCAnbW91c2VvdXQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25tb3VzZW92ZXInLCAnbW91c2VvdmVyJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ucGFzdGUnLCAncGFzdGUnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25yZXNpemUnLCAncmVzaXplJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uc2Nyb2xsJywgJ3Njcm9sbCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnNlbGVjdCcsICdzZWxlY3QnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb250b3VjaHN0YXJ0JywgJ3RvdWNoc3RhcnQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb250b3VjaG1vdmUnLCAndG91Y2htb3ZlJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29udG91Y2hlbmQnLCAndG91Y2hlbmQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25kcmFnJywgJ2RyYWcnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25kcmFnZW5kJywgJ2RyYWdlbmQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25kcmFnZW50ZXInLCAnZHJhZ2VudGVyJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uZHJhZ2xlYXZlJywgJ2RyYWdsZWF2ZScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyYWdvdmVyJywgJ2RyYWdvdmVyJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uZHJhZ3N0YXJ0JywgJ2RyYWdzdGFydCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmRyb3AnLCAnZHJvcCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmlucHV0JywgJ2lucHV0Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ubG9hZHN0YXJ0JywgJ2xvYWRzdGFydCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnByb2dyZXNzJywgJ3Byb2dyZXNzJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uc3VzcGVuZCcsICdzdXNwZW5kJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uYWJvcnQnLCAnYWJvcnQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25lcnJvcicsICdlcnJvcicpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmVtcHRpZWQnLCAnZW1wdGllZCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnN0YWxsZWQnLCAnc3RhbGxlZCcpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbmxvYWRlZG1ldGFkYXRhJywgJ2xvYWRlZG1ldGFkYXRhJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ubG9hZGVkZGF0YScsICdsb2FkZWRkYXRhJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uY2FucGxheScsICdjYW5wbGF5Jyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uY2FucGxheXRocm91Z2gnLCAnY2FucGxheXRocm91Z2gnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25wbGF5aW5nJywgJ3BsYXlpbmcnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb253YWl0aW5nJywgJ3dhaXRpbmcnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25zZWVraW5nJywgJ3NlZWtpbmcnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25zZWVrZWQnLCAnc2Vla2VkJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29uZW5kZWQnLCAnZW5kZWQnKTtcblx0XHR0aGlzLmVsdEV2ZW50LnNldCgnb25kdXJhdGlvbmNoYW5nZScsICdkdXJhdGlvbmNoYW5nZScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnRpbWV1cGRhdGUnLCAndGltZXVwZGF0ZScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnBsYXknLCAncGxheScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnBhdXNlJywgJ3BhdXNlJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ucmF0ZWNoYW5nZScsICdyYXRlY2hhbmdlJyk7XG5cdFx0dGhpcy5lbHRFdmVudC5zZXQoJ29ucmVzaXplJywgJ3Jlc2l6ZScpO1xuXHRcdHRoaXMuZWx0RXZlbnQuc2V0KCdvbnZvbHVtZWNoYW5nZScsICd2b2x1bWVjaGFuZ2UnKTtcblxuXHR9XG5cblx0LyoqXG5cdCogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgc2hvcmN1dFxuXHQqIEBwYXJhbSB7c3RyaW5nfSBpZCB0aGUgZWxlbWVudCBpZFxuXHQqIEByZXR1cm4ge29iamVjdH0gRE9NRWxlbWVudFxuXHQqL1xuXHRpZChpZCkge1xuXHRcdHJldHVybiB0aGlzLmRvYy5nZXRFbGVtZW50QnlJZChpZCk7XG5cdH1cblx0LyoqXG5cdCogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCBzaG9yY3V0XG5cdCogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBzZWxlY3RvclxuXHQqIEByZXR1cm4ge0RPTU5vZGVMaXN0fVxuXHQqL1xuXHRxdWVyeShxdWVyeSkge1xuXHRcdGxldCByZXMgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcblx0XHRpZiAocmVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiByZXM7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yIHNob3JjdXRcblx0KiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHNlbGVjdG9yXG5cdCogQHJldHVybiB7RE9NRWxlbWVudH1cblx0Ki9cblx0cXVlcnlGaXJzdChxdWVyeSkge1xuXHRcdHJldHVybiB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcblx0fVxuXG5cdHNlbGVjdChxKXtcblx0XHRsZXQgcmVzID0gdGhpcy5pZChxKTtcblx0XHRpZiAocmVzID09PSBudWxsKSB7XG5cdFx0XHRyZXMgPSB0aGlzLnF1ZXJ5Rmlyc3QocSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXM7XG5cdH1cblxuXHQvKipcblx0KiBhcHBlbmQgYW4gZWxlbWVudCB0byBhIHBhcmVudFxuXHQqIEBwYXJhbSB7RE9NRWxlbWVudHxzdHJpbmd9IHBhcmVudCB0aGUgZWxlbWVudCB0byBhcHBlbmQgdG8gb3IgaXRzIGlkXG5cdCogQHBhcmFtIHtET01FbGVtZW50fG9iamVjdH0gZWx0IG9yIHRlbXBsYXRlIG9iamVjdCB0byBhcHBlbmQgdG8gcGFyZW50XG5cdCogQHJldHVybiB7RE9NRWxlbWVudH0gb2JqZWN0XG5cdCovXG5cdGFwcGVuZChwYXJlbnQsIGVsdCwgZ2V0UGFyZW50KSB7XG5cdFx0aWYgKGVsdC50YWcgIT09IHVuZGVmaW5lZCB8fCBlbHQuaXNUZXh0Tm9kZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0ZWx0ID0gdGhpcy5jcmVhdGUoZWx0KTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBwYXJlbnQgIT0gJ29iamVjdCcpIHtcblx0XHRcdHBhcmVudCA9IHRoaXMuc2VsZWN0KHBhcmVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcmVudCAhPT0gbnVsbCAmJiBwYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bGV0IHJlcyA9IHBhcmVudC5hcHBlbmRDaGlsZChlbHQpO1xuXHRcdFx0aWYgKGdldFBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJlcyA9IHBhcmVudDtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXM7XG5cdFx0fVxuXHRcdHRocm93IHBhcmVudCArICcgY2Fubm90IGJlIGZvdW5kJztcblx0fVxuXG5cdC8qKlxuXHQqIGFwcGVuZCBhbiBlbGVtZW50IGJlZm9yZSBhbm90aGVyXG5cdCogQHBhcmFtIGVsdCBtaXhlZCB0aGUgZWxlbWVudCB0byBhcHBlbmQgdG8gb3IgaXRzIGlkXG5cdCogQHBhcmFtIG5fZWx0IG1peGVkIERPTUVsZW1lbnQgb3IgdGVtcGxhdGUgb2JqZWN0IHRvIGFwcGVuZCB0byBwYXJlbnRcblx0KiBAcmV0dXJuIG9iamVjdCBET01FbGVtZW50XG5cdCovXG5cdGFwcGVuZEJlZm9yZShlbHQsIG5fZWx0KSB7XG5cdFx0aWYgKG5fZWx0LnRhZyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRuX2VsdCA9IHRoaXMuY3JlYXRlKG5fZWx0KTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBlbHQgIT0gJ29iamVjdCcpIHtcblx0XHRcdGVsdCA9IHRoaXMuc2VsZWN0KGVsdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGVsdCAhPT0gbnVsbCAmJiBlbHQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGVsdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuX2VsdCwgZWx0KTtcblx0XHR9XG5cblx0XHR0aHJvdyBlbHQgKyAnIGNhbm5vdCBiZSBmb3VuZCc7XG5cdH1cblxuXHQvKipcblx0KiBhcHBlbmQgYW4gZWxlbWVudCBhZnRlciBhbm90aGVyXG5cdCogQHBhcmFtIGVsdCBtaXhlZCB0aGUgZWxlbWVudCB0byBhcHBlbmQgdG8gb3IgaXRzIGlkXG5cdCogQHBhcmFtIG5fZWx0IG1peGVkIERPTUVsZW1lbnQgb3IgdGVtcGxhdGUgb2JqZWN0IHRvIGFwcGVuZCB0byBwYXJlbnRcblx0KiBAcmV0dXJuIG9iamVjdCBET01FbGVtZW50XG5cdCovXG5cdGFwcGVuZEFmdGVyKGVsdCwgbl9lbHQpIHtcblx0XHRpZiAobl9lbHQudGFnICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdG5fZWx0ID0gdGhpcy5jcmVhdGUobl9lbHQpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGVsdCAhPSAnb2JqZWN0Jykge1xuXHRcdFx0ZWx0ID0gdGhpcy5zZWxlY3QoZWx0KTtcblx0XHR9XG5cblx0XHRpZiAoZWx0ICE9PSBudWxsICYmIGVsdCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gZWx0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5fZWx0LCBlbHQubmV4dFNpYmxpbmcpO1xuXHRcdH1cblxuXHRcdHRocm93IGVsdCArICcgY2Fubm90IGJlIGZvdW5kJztcblx0fVxuXG5cdC8qKlxuXHQqIGFwcGVuZCBhbiBlbGVtZW50IHRvIGEgcGFyZW50IGFzIGl0cyBmaXJzdCBjaGlsZFxuXHQqIEBwYXJhbSBwYXJlbnQgbWl4ZWQgdGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvIG9yIGl0cyBpZFxuXHQqIEBwYXJhbSBlbHQgbWl4ZWQgRE9NRWxlbWVudCBvciB0ZW1wbGF0ZSBvYmplY3QgdG8gYXBwZW5kIHRvIHBhcmVudFxuXHQqIEByZXR1cm4gb2JqZWN0IERPTUVsZW1lbnRcblx0Ki9cblx0cHJlcGVuZChwYXJlbnQsIGVsdCkge1xuXHRcdGlmIChlbHQudGFnICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGVsdCA9IHRoaXMuY3JlYXRlKGVsdCk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgcGFyZW50ICE9ICdvYmplY3QnKSB7XG5cdFx0XHRwYXJlbnQgPSB0aGlzLnNlbGVjdChwYXJlbnQpO1xuXHRcdH1cblxuXHRcdGlmIChwYXJlbnQgIT09IG51bGwgJiYgcGFyZW50ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGlmIChwYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuYXBwZW5kKHBhcmVudCwgZWx0KTtcblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRcdHJldHVybiBwYXJlbnQuaW5zZXJ0QmVmb3JlKGVsdCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRocm93IHBhcmVudCArICcgY2Fubm90IGJlIGZvdW5kJztcblx0fVxuXG5cdC8qKlxuXHQqIHJlcGxhY2UgYW4gZWxlbWVudFxuXHQqIEByZXR1cm4gb2JqZWN0IERPTUVsZW1lbnRcblx0Ki9cblx0cmVwbGFjZShlbHQsIG5fZWx0KSB7XG5cdFx0aWYgKG5fZWx0LnRhZyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRuX2VsdCA9IHRoaXMuY3JlYXRlKG5fZWx0KTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBlbHQgIT0gJ29iamVjdCcpIHtcblx0XHRcdGVsdCA9IHRoaXMuc2VsZWN0KGVsdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGVsdCAhPT0gbnVsbCAmJiBlbHQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bGV0IHBhcmVudCA9IGVsdC5wYXJlbnROb2RlO1xuXHRcdFx0cmV0dXJuIHBhcmVudC5yZXBsYWNlQ2hpbGQobl9lbHQsIGVsdCk7XG5cdFx0fVxuXG5cdFx0dGhyb3cgZWx0ICsgJyBjYW5ub3QgYmUgZm91bmQnO1xuXHR9XG5cblx0Lypcblx0KiBkZXN0cm95IGEgRG9tIGVsZW1lbnRcblx0KiBAcGFyYW0gZWx0IG1peGVkIGlkIG9mIHRoZSBlbGVtZW50IG9yIGVsZW1lbnQgaXRzZWxmXG5cdCovXG5cdHJlbW92ZShlbHQpIHtcblx0XHRpZiAodHlwZW9mIGVsdCAhPSAnb2JqZWN0Jykge1xuXHRcdFx0ZWx0ID0gdGhpcy5zZWxlY3QoZWx0KTtcblx0XHR9XG5cblx0XHRpZiAoZWx0ICE9PSBudWxsICYmIGVsdCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gZWx0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWx0KTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCogZW1wdHkgRG9tIGVsZW1lbnQgZnJvbSBpdCdzIGNoaWxkcmVuLlxuXHQqL1xuXHRlbXB0eShlbHQpIHtcblx0XHRpZiAodHlwZW9mIGVsdCAhPSAnb2JqZWN0Jykge1xuXHRcdFx0ZWx0ID0gdGhpcy5zZWxlY3QoZWx0KTtcblx0XHR9XG5cblx0XHRpZiAoZWx0ICE9PSBudWxsICYmIGVsdCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR3aGlsZShlbHQubGFzdENoaWxkKXtcblx0XHRcdFx0ZWx0LnJlbW92ZUNoaWxkKGVsdC5sYXN0Q2hpbGQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZWx0O1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIGNyZWF0ZSBhIHRleHQgbm9kZVxuXHQqIEBwYXJhbSBjb250ZW50IHN0cmluZyB0aGUgY29udGVudCBvZiB0aGUgdGV4dCBub2RlXG5cdCovXG5cdHRleHROb2RlKGNvbnRlbnQpe1xuXHRcdHJldHVybiB0aGlzLmRvYy5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblx0fVxuXG5cdC8qKlxuXHQqIGNyZWF0ZSBhbiBlbGVtZW50IGZyb20gYSB0ZW1wbGF0ZSBvYmplY3Rcblx0KiBAcGFyYW0gYyBvYmplY3QgdGhlIHRlbXBsYXRlIG9iamVjdCB0byBiZSBjcmVhdGVkXG5cdCogQHJldHVybiBvYmplY3QgRE9NRWxlbWVudFxuXHQqPGV4ZW1wbGU+XG5cdCp7XG5cdCpcdFwidGFnXCI6XCJ0eXBlIG9mIGVsZW1lbnRcIixcblx0Klx0XCJhdHRyXCI6e1xuXHQqXHRcdFwiYXR0cmlidXRlMVwiOlwidmFsdWUgb2YgYXR0ciAxXCIsXG5cdCpcdFx0XCIuLi5cIjpcIi4uLlwiXG5cdCpcdH0sXG5cdCpcdFwiaW5uZXJcIjpcInRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIG5vZGVcIlxuXHQqfVxuXHQqPC9leGVtcGxlPlxuXHQqL1xuXHRjcmVhdGUoYykge1xuXHRcdGxldCBlbHQgPSBudWxsO1xuXHRcdGlmIChjLmlzVGV4dE5vZGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZWx0ID0gdGhpcy50ZXh0Tm9kZShjLmNvbnRlbnQpO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0Ly8gY2hlY2sgaWYgdGhlIGVsZW1lbnQgdGFnIGhhcyBhbHJlYWR5IGJlZW4gY3JlYXRlZCB0byBjbG9uZSBpdFxuXHRcdFx0aWYgKCF0aGlzLmNyZWF0ZWQuaGFzKGMudGFnKSkge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZWQuc2V0KGMudGFnLCB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KGMudGFnKSk7XG5cdFx0XHR9XG5cdFx0XHRlbHQgPSB0aGlzLmNyZWF0ZWQuZ2V0KGMudGFnKS5jbG9uZU5vZGUoKTtcblx0XHRcdFxuXHRcdFx0Ly8gY3JlYXRlIGVsZW1lbnQgYXR0cmlidXRlXG5cdFx0XHRpZihjLmF0dHIgIT09IHVuZGVmaW5lZClcblx0XHRcdHtcblx0XHRcdFx0Zm9yKGxldCBrZXkgaW4gYy5hdHRyKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly8gaGFuZGxlIGVsZW1lbnQgZXZlbnQgb3IgY2VydGFpbiBzcGVjaWZpYyBhdHRyaWJ1dGVcblx0XHRcdFx0XHRpZiAodGhpcy5lbHRFdmVudC5oYXMoa2V5KSkge1xuXHRcdFx0XHRcdFx0ZWx0LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5lbHRFdmVudC5nZXQoa2V5KSwgYy5hdHRyW2tleV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdFx0c3dpdGNoKGtleSl7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2NoZWNrZWQnOlxuXHRcdFx0XHRcdFx0XHRcdGVsdC5jaGVja2VkID0gYy5hdHRyW2tleV07XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2NsYXNzTmFtZSc6XG5cdFx0XHRcdFx0XHRcdFx0ZWx0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLGMuYXR0cltrZXldKTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRlbHQuc2V0QXR0cmlidXRlKGtleSxjLmF0dHJba2V5XSk7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGluIHNvbWUgY2FzZSB5b3Ugd2FudCB0byBiZSBhYmxlIHRvIGZvcmNlIGlubmVySFRNTCB2YWx1ZSwgXG5cdFx0XHQvLyAvIVxcIFRISVMgSVMgQkFBQUFBQUQgIVxuXHRcdFx0aWYgKGMuaW5uZXJGb3JjZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGVsdC5pbm5lckhUTUwgPSBjLmlubmVyRm9yY2U7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGFwcGVuZCBlbGVtZW50cyBpZiB0aGVyZSBhcmUgc29tZSBcblx0XHRcdGlmIChjLmFwcGVuZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGZvciAobGV0IGFwIGluIGMuYXBwZW5kKSB7XG5cdFx0XHRcdFx0ZWx0ID0gdGhpcy5hcHBlbmQoZWx0LCBjLmFwcGVuZFthcF0sIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIGNyZWF0ZSBpbm5lciB0ZXh0IGNvbnRlbnQgbm9kZSBhbmQgYXBwZW5kIGl0XG5cdFx0XHRpZiAoYy5pbm5lciAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdFx0ZWx0LmFwcGVuZENoaWxkKHRoaXMudGV4dE5vZGUoYy5pbm5lcikpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYy5pbml0Q2FsbGJhY2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYy5pbml0Q2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Yy5pbml0Q2FsbGJhY2soZWx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZWx0O1xuXHR9XG5cblx0ZWx0RnJvbVN0cmluZyhlbHQpIHtcblx0XHRsZXQgZWwgPSBlbHQ7XG5cdFx0dHJ5e1xuXHRcdFx0ZWx0ID0gbmV3IFJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGVsKTtcblx0XHR9XG5cdFx0Y2F0Y2goZSl7XG5cdFx0XHRsZXQgcmFuZ2UgPSB0aGlzLmRvYy5jcmVhdGVSYW5nZSgpO1xuXHRcdFx0bGV0IGRpdiA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0cmFuZ2Uuc2VsZWN0Tm9kZSh0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKS5pdGVtKDApKTtcblx0XHRcdGVsdCA9IHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChlbCk7XG5cdFx0fVxuXHRcdHJldHVybiBlbHQ7XG5cdH1cblxuXHRyZXZlcnNlQ3JlYXRlKGVsdCl7XG5cdFx0bGV0IG5fZWx0ID0ge307XG5cblx0XHRpZiAoZWx0Lm5vZGVOYW1lID09PSAnI3RleHQnKSB7XG5cdFx0XHRuX2VsdC5pc1RleHROb2RlID0gdHJ1ZTtcblx0XHRcdG5fZWx0LmNvbnRlbnQgPSBlbHQubm9kZVZhbHVlO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0bl9lbHQudGFnID0gZWx0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcblx0XHRcdGlmIChlbHQuYXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmIChlbHQuYXR0cmlidXRlcy5sZW5ndGggPjApIHtcblx0XHRcdFx0XHRuX2VsdC5hdHRyID0ge307XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IGVsdC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdFx0XHRuX2VsdC5hdHRyW2VsdC5hdHRyaWJ1dGVzLml0ZW0oaSkubmFtZV0gPSBlbHQuYXR0cmlidXRlcy5pdGVtKGkpLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZiAoZWx0LmNoaWxkTm9kZXMgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRpZiAoZWx0LmNoaWxkTm9kZXMubGVuZ3RoID4wKSB7XG5cdFx0XHRcdFx0bl9lbHQuYXBwZW5kID0gW107XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IGVsdC5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdFx0XHRuX2VsdC5hcHBlbmQucHVzaCh0aGlzLnJldmVyc2VDcmVhdGUoZWx0LmNoaWxkTm9kZXMuaXRlbShpKSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuX2VsdDtcblx0fVxuXG5cdHJldmVyc2VDcmVhdGVGcm9tU3RyaW5nKGVsdCl7XG5cdFx0cmV0dXJuIHRoaXMucmV2ZXJzZUNyZWF0ZSh0aGlzLmVsdEZyb21TdHJpbmcoZWx0KSk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKc2k7Il19
