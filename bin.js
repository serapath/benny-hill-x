#!/usr/bin/env node

var path = require('path')
var childProcess = require('child_process')

var FILENAME = path.join(__dirname, 'theme.mp3')

var bin = 'play'
var song = [FILENAME]

if (process.platform == 'darwin') bin = 'afplay'

var args = process.argv.slice(2)


var length = isNaN(parseInt(args[0])) ? 5 : parseInt(args.shift())

var cmd = args.shift()

if (cmd) childProcess.spawn(cmd, args).on('exit', benny)
else benny()

function benny () {
  var proc = childProcess.spawn(bin, song)
  setTimeout(function () { proc.kill() },length*1000)
}
