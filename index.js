'use strict';
const Discord = require('discord.js');

/**
 * Adds commas to a number
 * @param {string} err
 * @param {string} locale
 * @return {string}
 */
module.exports = function (err, num, contact) {
    var errorToSend = `ERR \`\`\`CSS\n${num}\n${err}\`\`\`\nPlease contact ${contact} and show them this message!`;
    return errorToSend;
};