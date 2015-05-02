## react-rails-alt

**DEMO APP**

This is demonstrates an app working with Rails, [React.js](http://reactjs.org),
and [Alt](http://alt.js.org).

## Dependencies

* [react-rails gem](https://github.com/reactjs/react-rails) &mdash; for
  React.js, ES6 Harmony, and `react_component` mounting helper.
* [rails-assets](https://rails-assets.org/) &mdash; for access to the
  [bower](http://bower.io/) version of Alt.

## Implementation

### ES6 Harmony

ES6 Harmony support must be enabled: https://github.com/reactjs/react-rails#jsx

Some notable ES2015 features are missing, like `const` and `let`.

**NOTE: if you config after the Asset Pipeline has its way with your
components, you'll need to run `bin/rake assets:clean` or `rm -vfr tmp/cache` to
get things working again.**

### Alt instantiation

Make sure to instantiate alt before loading stores, actions, etc.

I did this with the following in `application.js`:

```js
...
//= require_self
//= require_tree .

var alt = new Alt();
```

### Alt and avoiding Modules

If you want to avoid adding a module system, you'll need to wrap Alt examples in
an IIFE. If the Alt docs read something like this:

```javascript
class NameActions = { ... }

module.exports = alt.createActions(NameActions);
```

You'll write something like this:

```javascript
(() => {
  class NameActions { ... }

  this.NameActions = alt.createActions(NameActions);
})();
```

**NOTE: if you want ES6 syntax available in these files, you'll need to append
`.jsx` to the file name. This is a little kludgy but will allow you to work with
the gems you already have installed.**
