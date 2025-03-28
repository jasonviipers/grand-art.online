import nodemailder from 'nodemailer';
import Logger from '../logger';

if (!process.env.MAILER_EMAIL || !process.env.MAILER_EMAIL_PASSWORD) {
	Logger.error('MAILER_EMAIL or MAILER_EMAIL_PASSWORD is not defined');
}

const transporter = nodemailder.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.MAILER_EMAIL,
		pass: process.env.MAILER_EMAIL_PASSWORD,
	},
});

export const sendMail = async (options: nodemailder.SendMailOptions) => {
	return await transporter.sendMail(options);
};
