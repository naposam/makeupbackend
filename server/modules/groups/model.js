import mongoose, { Schema } from 'mongoose'

const GroupSchema = new Schema({
 name:{
   type: String,
   required: true,
   unique: true,
   minlength: [5, 'Name must be 5 character long']
 },
 description: {
  type: String,
  required: true,
  minlength: [10, 'Description must be 5 character long']
 },
 category:{
   type: String,

 },
 meetups: [{
   type: Schema.Types.ObjectId,
   ref: 'Meetup'
 }]

}, {timestamps: true})

GroupSchema.static.addMeetup = async function(id, args){
  const MeetUp = mongoose.model('Meetup')
console.log(id,args)
  //const group = await this.fingById(id)

  //const meetup = await new MeetUp({...args, group})


}
export default mongoose.model('Group', GroupSchema)
