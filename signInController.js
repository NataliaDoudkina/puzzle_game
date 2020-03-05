const uuidv4 = require('uuid/v4');

// Sign in GET 
const signIn_get = (req, res)=>{
 if(req.cookies.admin !=undefined){
    res.render('admin')
    console.log("Admin cannot access this page")
}else{
    let message = req.query.message;
    if(message){
     res.render('signIn', {mistakes:[], success: [message], emailEJS:'', passwordEJS:''});
    }else{
     res.render('signIn', {mistakes:[], success:[], emailEJS:'', passwordEJS:''});
    }
}
}

// Sign in POST
const signIn_post = async(req, res)=>{
    try{
     const db = req.app.locals.db; 
     let userIsFound= await db.collection('users').findOne({'userEmail': req.body.user_email});
     if (userIsFound === null){
         res.render('signIn', {mistakes:['Email or password is wrong'], success:[], emailEJS : req.body.user_email, passwordEJS : req.body.user_password})
     } else{
         let passwordMatch = req.body.user_password == userIsFound.password;
        let role = userIsFound.role;
         if (passwordMatch&&role==0){
             if(req.cookies.user === undefined || req.cookies.logedIn === undefined){
                 const randomID = uuidv4();
                 await db.collection('cookies').createIndex( { "createdAt":1 }, { expireAfterSeconds: 864000 });
                 await db.collection('cookies').insertOne({ cookieID:randomID, "createdAt": new Date(), userEmail: userIsFound.userEmail, userName: userIsFound.userName});
                 await db.collection('users').updateOne({"userEmail": userIsFound.userEmail},{ $set: {"about":randomID}});
                 res.cookie('user', randomID, { maxAge: 864000000, httpOnly: true });
                 res.cookie('logedIn','true', { maxAge: 864000000 }, path="/");
                 res.render('index'); 
             }
             else {
                 res.send('Logged in '); // to change this later on  to PERSON ACCOUNT or other options 
                }; 
         }


         else if(passwordMatch&&role==1){ // admin login
          
            if(req.cookies.user === undefined || req.cookies.logedIn === undefined){
                const randomID = uuidv4();
                await db.collection('cookies').createIndex( { "createdAt":1 }, { expireAfterSeconds: 864000 });
                await db.collection('cookies').insertOne({ cookieID:randomID, "createdAt": new Date(), userEmail: userIsFound.userEmail, userName: userIsFound.userName});
               await db.collection('users').updateOne({"userEmail": userIsFound.userEmail},{ $set: {"about":randomID}});
                res.cookie('user', randomID, { maxAge: 864000000, httpOnly: true });
                res.cookie('logedIn','true', { maxAge: 864000000 });
                res.cookie('admin', 'true', {maxAge: 864000000});
                res.render('admin'); 
                            }
                         }

         else{
             res.render('signIn', { mistakes : ['Email or password is wrong'], success:[], emailEJS: req.body.user_email, passwordEJS: req.body.user_password})
            }; 
        }
    }catch(err){
        if (err){console.log(err)}
    }
 }

module.exports={
 signIn_get,
 signIn_post
}