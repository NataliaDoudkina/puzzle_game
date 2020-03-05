const report_get = async(req,res)=>{

if(req.cookies.admin !=undefined){
    res.render('admin')
    console.log("Admin cannot access this page")
}else{
            res.render("report")
}
}


const getRequest = async(req,res)=>{


    try{
        const db = req.app.locals.db; 
        await db.collection('reports').insertOne({'userName': req.body.username, 'userEmail': req.body.user_email,'concern': req.body.concern});
        res.render('index')
    
}catch(err){
    res.render("error")
}
}


module.exports={
    report_get,
    getRequest,
}