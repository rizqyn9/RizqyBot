"use strict";

/**
 * Get Client Options
 * @param  {Function} start function
 * @param  {Boolean} headless
 */
module.exports = options = function options(headless, start) {
  var options = {
    sessionId: 'R-Dev',
    headless: headless,
    qrTimeout: 0,
    authTimeout: 0,
    restartOnCrash: start,
    cacheEnabled: false,
    useChrome: true,
    killProcessOnBrowserClose: true,
    throwErrorOnTosBlock: false,
    chromiumArgs: ['--no-sandbox', '--disable-setuid-sandbox', '--aggressive-cache-discard', '--disable-cache', '--disable-application-cache', '--disable-offline-load-stale-cache', '--disk-cache-size=0']
  };
  return options;
};