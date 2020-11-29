/**
 * Log user events
 * Author: goessm
 */

const eventLog = [];

/**
 * Call when event occured to add it to log
 * @param {string} eventType Identifier for the type of event to log
 * @param {Map} eventData Map / Dict of additional event data
 */
const logEvent = function (eventType, eventData) {
    console.log(`logging user action: ${eventType}`);
    const time = new Date().getTime();
    eventLog.push([time, eventType, eventData]);
    console.log(eventLog);
};

const getEventLog = function () {
    return eventLog;
};

module.exports = {
    logEvent: logEvent,
    getEventLog: getEventLog
};
