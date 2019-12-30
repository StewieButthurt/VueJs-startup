const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const config = require('./config/config')
const request = require('request');
// validator
let validator = require('validator')
const nodemailer = require('nodemailer')

// для http запроса

const app = express()

app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(__dirname));


class Course {
	static getAll() {
		return new Promise((resolve, reject) => {
			fs.readFile(
				path.join(__dirname, '.', 'data', 'blog-posts.json'),
				'utf-8',
				(err, content) => {
					if(err) {
						reject(err)	
					} else {
						resolve(JSON.parse(content))
					}

				}
			)
		})
	
	}
}
// обработка запроса подгрузки новостей



app.get('/', function(req, res) {
  res.sendfile('index.html');
});


app.post('/', async (req, res) => {
	console.log(1);
	const blogNews = await Course.getAll()
	let blogNewsResult = []
	let blogNewsLength = blogNews.length
	if(blogNews.length > req.body.params) {
		if (blogNews.length - req.body.params === 1) {
			blogNewsResult.push(blogNews[req.body.params])
		} else {
			blogNewsResult.push(blogNews[req.body.params])
			blogNewsResult.push(blogNews[req.body.params + 1])
		}
		res.send({
			blogNewsResult,
			blogNewsLength
		})
	}
} )

// обработка формы и отправка формы на почту
app.post('/form', async (req, res) => {
	if(!req.body.recaptchaToken) {
		return res.status(400).json({message: "recaptchaToken is required"});
	}
	let counter = 0;
	for(let i = 0; i < req.body.inputMain.length; i++) {
		if(req.body.inputMain[i].title === 'YOUR NAME') {
			if( validator.isAlpha(req.body.inputMain[i].value) === true) {
				counter++
			} 
		} else if(req.body.inputMain[i].title === 'YOUR E-MAIL') {
			if( validator.isEmail(req.body.inputMain[i].value) === true) {
				counter++
			}
		} else if(req.body.inputMain[i].title === 'YOUR SUBJECT' || 'COMPANY NAME') {
			if( validator.isEmpty(req.body.inputMain[i].value) !== true) {
				counter++
			}
		}
	}
	if(req.body.inputMain.length === counter) {
		
		const verifyCaptchaOptions = {
		       uri: "https://www.google.com/recaptcha/api/siteverify",
		       json: true,
		       form: {
		           secret: '6Le8kbIUAAAAAKvGBn4kJTgHfVoeI-oIJhdn4MU5',
		           response: req.body.recaptchaToken
		       }
		};

		request.post(verifyCaptchaOptions, function(err, response, body) {
		            if (err) {
		                return res.status(500).json({message: "oops, something went wrong on our side"});
		            }

		            if (!body.success) {
		                return res.status(500).json({message: body["error-codes"].join(".")});
		            }

		           if(res.status(201)) {
		           		const output = `
		           			<p>You have a new contact request</p>
		           			<h3>Contact Details</h3>
		           			<ul>
		           				<li>Name: ${req.body.inputMain[0].value}</li>
		           				<li>Email: ${req.body.inputMain[1].value}</li>
		           				<li>Subject: ${req.body.inputMain[2].value}</li>
		           				<li>Company name: ${req.body.inputMain[3].value}</li>
		           				<li>Message: ${req.body.inputMessage}</li>
		           		`;

		           		let smtpTransport;

		           		try {
		           			smtpTransport = nodemailer.createTransport({
		           				host: 'smtp.mail.ru',
		           				port: 465,
		           				secure: true,
		           				auth: {
		           					user: "ckotieika@mail.ru",
		           					pass: "Iron1996"
		           				}
		           			});
		           		} catch (e) {
		           			let message = false;

		           			res.send({
		           				message
		           			})

		           			return console.log('Error: ' + e.name + ":" + e.message);
		           		}

		           		let mailOptions = {
		           			from: 'ckotieika@mail.ru',
		           			to: 'nosoff.slawa@yandex.ru',
		           			subject: 'Обращение с сайта StartUp',
		           			text: 'Обращение с сайта StartUp',
		           			html: output
		           		};

		           		smtpTransport.sendMail(mailOptions, (error, info) => {
		           			if( error ) {
		           				let message = false;
		           				console.log('error')

		           				res.send({
		           					message
		           				})

		           				return console.log('Error');
		           			} else {
		           				console.log('Message sent: %s', info.messageId);
		           				console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
		           			}
		           		let message = true
		           				res.send({
		           					message
		           				})
		           		})
		           }
		           

		         
		        }
		    );

	
	}
	
})

app.listen(process.env.PORT || config.port,
() => console.log(`Server start on port ${config.port} ...`))