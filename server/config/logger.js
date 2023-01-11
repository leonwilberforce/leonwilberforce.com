const winston = require('winston');
const Sentry = require('winston-transport-sentry-node').default;

const sentryOptions = {
    sentry: {
      dsn: process.env.LOGGING_SENTRY_DNS,
      environment: process.env.ENVIRONMENT
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