const winston = require('winston');
const Sentry = require('winston-transport-sentry-node').default;
const config = require('./config.json');

const sentryOptions = {
    sentry: {
      dsn: config.logging.sentryDns,
      environment: config.config_id
    },
    level: 'error'
};

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'DD-MM-YYYY HH:mm:ss'
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
        format: winston.format.prettyPrint()
    }),
    new Sentry(sentryOptions)
  ],
});

module.exports = logger;