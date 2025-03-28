import winston from 'winston';

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	defaultMeta: {service: 'user-service'},
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({filename: 'error.log', level: 'error'}),
	],
});

class Logger {
	static log(message: string) {
		if (typeof window !== 'undefined') {
			console.log(message);
		} else {
			logger.info(message);
		}
	}

	static error(message: string) {
		if (typeof window !== 'undefined') {
			console.error(message);
		} else {
			logger.error(message);
		}
	}

	static warn(message: string) {
		if (typeof window !== 'undefined') {
			console.warn(message);
		} else {
			logger.warn(message);
		}
	}

	static info(message: string) {
		if (typeof window !== 'undefined') {
			console.info(message);
		} else {
			logger.info(message);
		}
	}
}

export default Logger;
