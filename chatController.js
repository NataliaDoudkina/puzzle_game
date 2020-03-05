

const get_chat = async(req,res)=>{if(req.cookies.user === undefined || req.cookies.logedIn === undefined)
    
  {  res.render('index'); 
  console.log("Access denied") 
  
} 
else if(req.cookies.admin !=undefined){
    res.render('admin')
   
}else{

  let userId = req.cookies.user;
  try{
const db = req.app.locals.db;        
let credentials =  await db.collection('users').findOne(
 {"about":userId},
  {"userEmail": 0, "_id": 0, "userName":1,"password":0, "about":0 }
 )
 
let userName = credentials.userName;
res.render('chat', {userName});           
return;
}
catch(err){
  if (err){res.render('error')}
} 
} 
}


module.exports={
    get_chat,
  
 
}