
const Logger = require('2o3t-logger');
const logger = Logger.instance('names', {
	disabledFile: false,
});
//*************************************************************//
const LOG_DEBUG = true;
const LOG_INFO = true;
const LOG_WARN = true;
const LOG_ERROR = true;
const LOG_FATAL = true;

var loggerUtils = {
    d:(msg)  =>   { if (LOG_DEBUG) logger.debug(msg); },
    i:(msg)  =>   { if (LOG_INFO) logger.info(msg); },
    w:(msg)  =>   { if (LOG_WARN) logger.warn(msg); },
    f:(msg)  =>   { if (LOG_FATAL) logger.fatal(msg); },
    e:(msg)  =>   { if (LOG_ERROR) logger.error(msg); }
}
module.exports = loggerUtils;


