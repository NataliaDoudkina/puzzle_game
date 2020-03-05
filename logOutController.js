//GET logout request
const logOut_get = async(req, res)=>{
    try{
       res.clearCookie('admin')
        res.clearCookie('logedIn')
        res.clearCookie('picName')
        res.clearCookie('time')
        const db = req.app.locals.db;
        await db.collection('cookies').deleteOne({"cookieID": req.cookies.user});
        res.render('index')
     }
    catch(err){ 
        if (err){res.render('error')}
    }
}

module.exports= {
    logOut_get
}
