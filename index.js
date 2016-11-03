var utils = require("loader-utils");
var strip = require("strip-comments");
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/loader.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};


module.exports = function (source) {

    if (this.cacheable) {
        this.cacheable();
    }

    try {

        var code = strip(source);

    } catch (e) {
        console.log('exception!!!');
        console.log(e);
    }

    return code;
};