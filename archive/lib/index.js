/*
 * asd
 * https://github.com/bardhlohaj/asd
 *
 * Copyright (c) 2014 bardhlohaj
 * Licensed under the Apache 2 license.
 */

/**
@class asd
 */


var  asd;
module.exports = asd = function(opts){
  this.el = opts.el;
  this.el.textContent = asd.hello(opts.text);
};

/**
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     asd.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


asd.hello = function (name) {

  return 'hello ' + name;
};

