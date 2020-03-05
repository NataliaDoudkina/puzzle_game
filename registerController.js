//Register GET
const register_get = (req, res)=>{
  if(req.cookies.admin !=undefined){
    res.render('admin')
    console.log("Admin cannot access registration page")
}else
    res.render('register',{mistakes:[]})
}

// Register Post
const  register_post = async(req, res) =>{
    let regIssues = checkRegistrationInput(req.body.user_name, req.body.user_email, req.body.user_password, req.body.user_passwordCheck, req.body.termsAndConditions);
    if (regIssues.length === 0){
        DBregister(req, res);
    }
    else{ 
       res.render('register', { mistakes: regIssues });
    }
}
    

//DB registration function
const DBregister = async(req, res)=>{
    try{
        const db = req.app.locals.db;
        let duplicateCredentials = await db.collection('users').findOne({ $or: [{'userName': req.body.user_name},{'userEmail': req.body.user_email}]});
        if (duplicateCredentials === null){
             await db.collection('users').insertOne({'userName': req.body.user_name, 'userEmail': req.body.user_email,'password': req.body.user_password, 'about': 'No info yet (:', 'role': '0'});
             let message = encodeURIComponent('Account successfully created!');
             res.redirect('/signIn?message='+ message);   
           } 
        else { res.render('register', {mistakes: ['This username or email is already being used']}); }  
        } 
    catch(err){ 
          if (err){console.log(err);}
       }
}

//Check user input
const  checkRegistrationInput = ( username, email, password, passwordCheck, agreement)=>{
    let regIssues = [];
    const  numbersAndLetters= /^[a-z0-9 ]+$/i;

    if (username.length < 2 || username.length > 14){
        regIssues.push('Username should be  2-14 characters long');
    }
    if(!(numbersAndLetters.test(username))){
        regIssues.push('Username can only have English letters and numbers');
    }
    if(username === ''){
        regIssues.push('Username is required');
    }
    if(email === ''){
        regIssues.push('Email is required');
    }
    if (email.length > 40){
        regIssues.push('Email address is to long');
    }
    if (password.length > 40){
        regIssues.push('Password is too long');
    }
    if(password === ''){
        regIssues.push('Password is required');
    }
    if(password !== passwordCheck){
        regIssues.push('Passwords are not identical');
    }
    if (!agreement){
        regIssues.push('To register you need to accept Terms and Conditions');
    }
    
    return regIssues;
}

module.exports={
 register_get,
 register_post
}