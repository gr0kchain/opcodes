#!/usr/bin/env node

const program = require('commander');
var columnify = require('columnify')
const { serialize } = require("./opcodes.js")

program
  .version('1.0')
  .description('Bitcoin opcode index')

if (!process.argv.slice(2).length || !/[c]/.test(process.argv.slice(2))) {
  console.log(columnify(serialize()));
  process.exit();
}

program.parse(process.argv)

