/* MediaHack - (c) 2013 Pomke Nohkan MIT LICENCED. */

function mediahack(elem, matches) {

    var matches = matches || {
        landscape : 'all and (orientation:landscape)',
        portrait : 'all and (orientation:portrait)',
        small : 'all and (max-width:768px)',
        medium : 'all and (min-width:768px) and (max-width:991px)',
        large : 'all and (min-width:992px)'
    };

    for(var cls in matches) {
        var mq = window.matchMedia(matches[cls]);
        (function(mq, cls) {
            var cb = function(mq) {
                if(mq.matches) {
                    addClass(elem, cls);
                } else {
                    removeClass(elem, cls);
                }
            }
            cb(mq); // invoke immediately.
            mq.addListener(cb); // register change events.
        })(mq, cls);
    }

    /* class helpers borrowed from https://github.com/raffecat/manglr/ */
    function addClass(elem, cls) {
        var seq = cls.split(' ');
        var clist = elem.classList;
        if (clist) {
            // classList is fast and avoids spurious reflows.
            for (var cls,i=0; i<seq.length; i++) {
                if (cls=seq[i]) clist.add(cls);
            }
        } else {
            var classes = ' '+elem.className+' ', org = classes;
            for (var cls,i=0; i<seq.length; i++) {
                if (cls=seq[i]) {
                    cls = cls+' ';
                    if (!~classes.indexOf(' '+cls)) {
                        classes += cls;
                    }
                }
            }
            // avoid setting className unless we actually changed it.
            if (classes !== org) elem.className = classes.slice(1,-1);
        }
    }

    function removeClass(elem, cls) {
        var seq = cls.split(' ');
        var clist = elem.classList;
        if (clist) {
            // classList is fast and avoids spurious reflows.
            for (var cls,i=0; i<seq.length; i++) {
                if (cls=seq[i]) clist.remove(cls);
            }
        } else {
            var classes = ' '+elem.className+' ', org = classes;
            for (var cls,i=0;i<seq.length;i++) {
                if (cls=seq[i]) {
                    cls = ' '+cls+' ';
                    if (~classes.indexOf(cls)) {
                        classes = classes.replace(cls,' ');
                    }
                }
            }
            // avoid setting className unless we actually changed it.
            if (classes !== org) elem.className = classes.slice(1,-1);
        }
    }
}
