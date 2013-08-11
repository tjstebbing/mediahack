Mediahack
=========

Add media query classes to DOM nodes
------------------------------------

mediahack adds classes to a DOM node when media queries
are matched, for instance setting 'portrait' when a tablet
is in portrait.

This makes it easy to write css selectors for these options
without long-hand media queries all through your css.

Usage
-----

Simply pass an element you'd like decorated with media classes:

```javascript
mediahack(document.body);
```

Then make use of css to do the rest:

```css
body.portrait div.sidebar {
    display: none;
}
```

Distributions
-------------

Mediahack comes in three delicious flavours: Vanilla, Strawberry and Chocolate.

* *mediahack.js*  Uncompressed source.
* *mediahack.min.js*  minified.
* *mediahack-poly.min.js*  minified, includes https://github.com/weblinc/media-match polyfill for older browsers.

Please see POLYFILL-LICENCE.txt for the BSD/Copyright notice for MediaMatch.


Default class / queries
-----------------------

By default, the following classes will be added when their media query
is matched:

 * *landscape*  'all and (orientation:landscape)'
 * *portrait*  'all and (orientation:portrait)'
 * *small*  'all and (max-width:768px)'
 * *medium*  'all and (min-width:768px) and (max-width:991px)'
 * *large*  'all and (min-width:992px)'

mediahack() takes an optional second argument, an object containing your own
matches if you'd like to overwrite the defaults.

Licence
-------

MediaHack is (c) 2013 Pomke Nohkan and is made available to you under an MIT Licence.
