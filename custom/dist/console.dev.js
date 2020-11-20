"use strict";

var chalk = require('chalk'); // !Simple


exports.bot = function (string) {
  return chalk.yellow("[BOT]\t" + "".concat(string));
};

exports.dev = function (string) {
  return chalk.magenta("[DEV]\t" + "".concat(string));
};

exports.exe = function (string) {
  return chalk.blueBright("[EXEC]\t" + "".concat(string));
};

exports.warn = function (string) {
  return chalk.bgRedBright.whiteBright("[WARN]\t" + "".concat(string));
};

exports.group = function (string) {
  return chalk.green("[GROUP]\t" + "".concat(string));
};

exports.spam = function () {
  return chalk.red("[SPAM]\t");
}; //! Personal


exports.exeChat = function (date, command, string, name) {
  return console.log(chalk.blueBright("[EXEC]\t"), chalk.yellowBright(date), chalk.blueBright(command), chalk.white(string), chalk.cyan(name));
};

exports.warnChat = function (date, command, string, name) {
  return console.log(chalk.bgRedBright.whiteBright("[WARN]\t"), chalk.yellowBright(date), chalk.bgRedBright.whiteBright(command), chalk.white(string), chalk.cyan(name));
};

exports.spamChat = function (date, command, string, name) {
  return console.log(chalk.red("[SPAM]\t"), chalk.yellowBright(date), chalk.red(command), chalk.white(string), chalk.red(name));
}; // !Group


exports.exeGroup = function (date, command, string, name, string2, grupName) {
  return console.log(chalk.blueBright("[EXEC]\t"), chalk.yellowBright(date), chalk.blueBright(command), chalk.white(string), chalk.cyan(name), chalk.white(string2), chalk.cyan(grupName));
};

exports.warnGroup = function (date, command, string, name, string2, grupName) {
  return console.log(chalk.bgRedBright.whiteBright("[WARN]\t"), chalk.yellowBright(date), chalk.red(command), chalk.white(string), chalk.bgRedBright.whiteBright(name), chalk.white(string2), chalk.cyan(grupName));
};

exports.spamGroup = function (date, command, string, name, string2, grupName) {
  return console.log(chalk.red("[SPAM]\t"), chalk.yellowBright(date), chalk.red(command), chalk.white(string), chalk.cyan(name), chalk.white(string2), chalk.cyan(grupName));
};

exports.badWord = function (date, command, string, name, string2, grupName) {
  return console.log(chalk.green("[BADW]\t"), chalk.yellowBright(date), chalk.green(command), chalk.white(string), chalk.cyan(name), chalk.white(string2), chalk.cyan(grupName));
}; //! For Banned Person


exports.banPerson = function (date, command, string, name) {
  return console.log(chalk.bgGreen.black("[BAN]\t".concat(date, " ").concat(command, " ").concat(string, " ").concat(name)));
}; //!Processing Console


exports.msg = function (string) {
  return chalk.cyan("".concat(string));
};

exports.time = function (string) {
  return chalk.yellow("".concat(string));
};

exports.err = function (string) {
  return console.log(chalk.red('[ERROR]'), "".concat(string));
};