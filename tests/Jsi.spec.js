describe("Jsi", function() {
	it("document element select", function() {
		expect(Jsi.docelid).toBeDefined();
        expect(Jsi.doceleq).toBeDefined();
        expect(Jsi.doceleqFirst).toBeDefined();
        expect(typeof Jsi.docelid).toEqual('function');
        expect(typeof Jsi.doceleq).toEqual('function');
        expect(typeof Jsi.doceleqFirst).toEqual('function');

        document.body.innerHTML = '<div id="plop" class="plop"></div>';

        expect(Jsi.docelid('plop')).toBeDefined();
        expect(Jsi.docelid('plop')).not.toBe(null);
        expect(Jsi.docelid('plop').nodeName).toBe('DIV');
        expect(Jsi.docelid('plop').getAttribute('class')).toBe('plop');
        expect(Jsi.docelid('plop2')).toBeDefined();
        expect(Jsi.docelid('plop2')).toBe(null);

        expect(Jsi.doceleqFirst('#plop')).toBeDefined();
        expect(Jsi.doceleqFirst('#plop')).not.toBe(null);
        expect(Jsi.doceleqFirst('#plop').nodeName).toBe('DIV');
        expect(Jsi.doceleqFirst('#plop').getAttribute('class')).toBe('plop');
        expect(Jsi.doceleqFirst('#plop2')).toBeDefined();
        expect(Jsi.doceleqFirst('#plop2')).toBe(null);

        expect(Jsi.doceleqFirst('.plop')).toBeDefined();
        expect(Jsi.doceleqFirst('.plop')).not.toBe(null);
        expect(Jsi.doceleqFirst('.plop').nodeName).toBe('DIV');
        expect(Jsi.doceleqFirst('.plop').getAttribute('id')).toBe('plop');
        expect(Jsi.doceleqFirst('.plop2')).toBeDefined();
        expect(Jsi.doceleqFirst('.plop2')).toBe(null);

        expect(Jsi.doceleq('#plop')).toBeDefined();
        expect(Jsi.doceleq('#plop')).not.toBe(null);
        expect(Jsi.doceleq('#plop').length).toBe(1);
        expect(Jsi.doceleq('#plop').item(0).nodeName).toBe('DIV');
        expect(Jsi.doceleq('#plop').item(0).getAttribute('class')).toBe('plop');
        expect(Jsi.doceleq('#plop2')).toBeDefined();
        expect(Jsi.doceleq('#plop2')).toBe(null);

        expect(Jsi.doceleq('.plop')).toBeDefined();
        expect(Jsi.doceleq('.plop')).not.toBe(null);
        expect(Jsi.doceleq('.plop').length).toBe(1);
        expect(Jsi.doceleq('.plop').item(0).nodeName).toBe('DIV');
        expect(Jsi.doceleq('.plop').item(0).getAttribute('id')).toBe('plop');
        expect(Jsi.doceleq('.plop2')).toBeDefined();
        expect(Jsi.doceleq('.plop2')).toBe(null);
    });

    it("document element creation", function() {
        expect(Jsi.elt).toBeDefined();

        var elt = {
            tag:"div"
        };

        var e1 = Jsi.elt(elt);
        expect(e1).not.toBe(null);
        expect(e1.nodeName).toBe('DIV');

        elt.attr = {
            className:"plop",
            id:"plop"
        };
        var e2 = Jsi.elt(elt);
        expect(e2.getAttribute('class')).toBe('plop');
        expect(e2.getAttribute('id')).toBe('plop');
    });

    it("document element append", function() {
        expect(Jsi.append).toBeDefined();

        document.body.innerHTML = '<div id="plop" class="plop"></div>';
        var e = Jsi.append('plop', {
            tag:"div"
        });
        expect(e).not.toBe(null);
        expect(e.nodeName).toBe('DIV');
        expect(e.childNodes.length).toBe(1);
        expect(e.childNodes.item(0)).not.toBe(null);
        expect(e.childNodes.item(0).nodeName).toBe('DIV');
        
        var e2 = Jsi.append(e, {
            tag:"div",
            attr:{
                className:"plop",
                id:"plop"
            }
        });
        expect(e2).not.toBe(null);
        expect(e2.nodeName).toBe('DIV');
        expect(e2.childNodes.length).toBe(2);
        expect(e2.childNodes.item(1)).not.toBe(null);
        expect(e2.childNodes.item(1).nodeName).toBe('DIV');
        expect(e2.childNodes.item(1).getAttribute('id')).toBe('plop');
    });

    it("document element append before/after", function() {
        expect(Jsi.prepend).toBeDefined();
        expect(Jsi.appendBefore).toBeDefined();
        expect(Jsi.appendAfter).toBeDefined();

        document.body.innerHTML = '<div id="plop" class="plop"></div>';
        Jsi.append('plop', {
            tag:"div",
            attr:{
                className:"plop",
                id:"plop2"
            }
        });
        
        Jsi.append('plop', {
            tag:"div",
            attr:{
                className:"plop",
                id:"plop3"
            }
        });
        
        Jsi.appendBefore(
            Jsi.docelid('plop2'),
            {
                tag:"div",
                attr:{
                    className:"plop",
                    id:"plop4"
                }
            }
        );

        expect(Jsi.docelid('plop').childNodes.length).toBe(3);
        expect(Jsi.docelid('plop').childNodes.item(0)).not.toBe(null);
        expect(Jsi.docelid('plop').childNodes.item(0).nodeName).toBe('DIV');
        expect(Jsi.docelid('plop').childNodes.item(0).getAttribute('id')).toBe('plop4');
        
        Jsi.appendAfter(
            Jsi.docelid('plop2'),
            {
                tag:"div",
                attr:{
                    className:"plop",
                    id:"plop5"
                }
            }
        );

        expect(Jsi.docelid('plop').childNodes.length).toBe(4);
        expect(Jsi.docelid('plop').childNodes.item(2)).not.toBe(null);
        expect(Jsi.docelid('plop').childNodes.item(2).nodeName).toBe('DIV');
        expect(Jsi.docelid('plop').childNodes.item(2).getAttribute('id')).toBe('plop5');
        
        Jsi.prepend('plop', {
            tag:"div",
            attr:{
                className:"plop",
                id:"first"
            }
        });

        expect(Jsi.docelid('plop').childNodes.length).toBe(5);
        expect(Jsi.docelid('plop').childNodes.item(0)).not.toBe(null);
        expect(Jsi.docelid('plop').childNodes.item(0).nodeName).toBe('DIV');
        expect(Jsi.docelid('plop').childNodes.item(0).getAttribute('id')).toBe('first');
        
    });


});
