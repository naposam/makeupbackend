import Group from './model'


export const createGroup = async (req, res) =>{
  const {
    name,
    description,
    category
   } = req.body;

   if(!name){
     return res.status(400).json({error: true, message: 'Name nust be provided'})
   }else if(typeof name !== 'string'){
    return res.status(400).json({error: true, message: 'Name nust be a String'})

   }else if(name.length < 5){
    return res.status(400).json({error: true, message: 'Name nust be five characters long'})

   }
   if(!description){
     return res.status(400).json({error: true, message: 'description nust be provided'})
   }else if( typeof description !== 'string'){
    return res.status(400).json({error: true, message: 'description nust be a String'})

   }else if(description.length < 10){
    return res.status(400).json({error: true, message: 'description nust be 10 characters long'})

   }
   const group = new Group({title, description})
   if(!groupId){
    return res.status(400).json({error: true, message: 'Group must be provided'})
   }
   try {
     Group.addMeetup(groupId, {title, description});
   } catch (e) {
    return res.status(400).json({error: true, message: 'Meetup cannot be created'})
   }
}
