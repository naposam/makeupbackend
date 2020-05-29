import mongoose from 'mongoose'
//const mongoose = require('mongoose');





export default () =>{
	mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://localhost/meetupME');
	mongoose.connection
	.once('open', () => console.log('mongoose db running'))
	.on('error', err => console.error(err))
}