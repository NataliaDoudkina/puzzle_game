//GET request for puzzle action
const puzzleAction_get = async(req, res)=>{
   
   res.render('puzzleAction');
    
}

// GET request to save the best score into database
const saveTime = async(req,res)=>{
 var userId = req.cookies.user;
 var pic = req.params.id

    try{ 
        const db = req.app.locals.db;   
    let userObject = await db.collection('users').findOne({'about':userId},{'_id':1, 'username':1, 'userEmail':0, 'password':0});
    let user = userObject._id;
    let usName = userObject.userName;
    let lastScore = await db.collection('pictures').findOne({'user': usName, 'picture': pic},{"_id": 0,'score':1, 'picture':1});
    if(lastScore === null){
          await db.collection('pictures').insertOne({'user':usName, 'picture':pic, 'score': parseInt(req.cookies.time) }) 
          let allRecords =  await db.collection('pictures').find({'user': usName}, { '_id': 0,'picture': 1, 'score': 1 }).toArray(function(err,doc){
          res.render('myRecords',{allRecords:doc});       
    })
 }else{
     let newScore = req.cookies.time;
     let last = lastScore.score;

  if(parseInt(newScore) < parseInt(last)){ 
           await  db.collection('pictures').updateOne({'user': usName, 'picture': pic}, {$set:{'score': parseInt(newScore)}});
           let allRecords =  await db.collection('pictures').find({'user': usName}, { '_id': 0,'picture': 1, 'score': 1 }).toArray(function(err,doc){
           res.render('myRecords',{allRecords:doc});    
  
})
}
   else{
        let allRecords =  await db.collection('pictures').find({'user': usName}, { '_id': 0,'picture': 1, 'score': 1 }).toArray(function(err,doc){
        res.render('myRecords',{allRecords:doc}); 
      })
     }   
    }}catch(err){ 
        if (err){
          res.render('error')
        }
    }

} 



module.exports = {
    puzzleAction_get,
    saveTime
    
}