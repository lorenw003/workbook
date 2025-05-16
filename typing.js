// This code was modified from https://css-tricks.com/snippets/css/typewriter-effect/, to suit single phrases
        
    var TxtType = function(el, phrase, period) {
        this.phrase = phrase;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.phrase.length;
        var fullTxt = this.phrase[i];

        this.txt = fullTxt.substring(0, this.txt.length + 1);

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 150 - Math.random() * 100;

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var phrase = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (phrase) {
            new TxtType(elements[i], JSON.parse(phrase), period);
            }
        }
    };