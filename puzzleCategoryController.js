const textDescription = require('../textDescription.json');

// Function  to load right category
const load_category_get = (req, res) =>{
    if (req.params.categoryType == 'animals'){
        res.render('animals');
    }
    if (req.params.categoryType == 'dogs'){
        res.render('dogs');
    }
    if (req.params.categoryType == 'geography'){
        res.render('geography');
    }
    if (req.params.categoryType == 'nature'){
        res.render('nature');
    }
    if (req.params.categoryType == 'wonders'){
        res.render('wonders');
    }
}

// Function to load right picture
const load_picture_get = (req, res)=>{
    // 5   animals 
    var allPictures = ['giraffe', 'tiger', 'baby_kangaroo', 'puma', 'lemur', 'goat-and-tiger', 'germanShepherd', 'pitBull', 'pug', 'WelshCorgi',
    'Husky', 'GoldenRetriever', 'Fujiyoshida', 'bigbuddha', 'rio_de_janeiro', 'monkey_park', 'paris', 'burano', 'tropics', 'village',
     'seaside', 'waterfall', 'chapel', 'river', 'Taj_Mahal', 'colosseum', 'zeus', 'hagiaSophia', 'wallofchina', 'kukulcan'
 ] 
    if(req.params.id == 'giraffe'){
        try{
            const db = req.app.locals.db; 
        
    //        let pics =  db.collection('pictures').find({'picture':'giraffe'}, {"sort":['score', 'asc']}).toArray((err,data)=>{
        let pics = db.collection('pictures').find({'picture':'giraffe'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
             res.render('puzzleAction', { description: textDescription.giraffe, name: 'giraffe', pics:data })

    });
}catch(err){
    if (err){res.render('error')}
}
    }   

    if (req.params.id =='tiger'){
        try{
            const db = req.app.locals.db; 
            let pics =  db.collection('pictures').find({'picture':'tiger'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
        res.render('puzzleAction', {description: textDescription.tiger, name: 'tiger', pics:data})
       
    });
}catch(err){
    if (err){res.render('error')}
}
    }

    if (req.params.id =='baby_kangaroo'){
        try{
            const db = req.app.locals.db; 
            var mysort = { score: -1 };
            let pics =  db.collection('pictures').find({'picture':'baby_kangaroo'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
        res.render('puzzleAction', {description: textDescription.baby_kangaroo, name: 'baby_kangaroo', pics:data })
            
    });
}catch(err){
    if (err){res.render('error')}
}
    }


    if (req.params.id =='puma'){
        try{
            const db = req.app.locals.db; 
            var mysort = { score: -1 };
            let pics =  db.collection('pictures').find({'picture':'puma'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
                res.render('puzzleAction', {description: textDescription.puma, name: 'puma',  pics:data})
            });
           }catch(err){
               if (err){res.render('error')}
           }
      
    }


    if (req.params.id =='lemur'){
        try{
            const db = req.app.locals.db; 
            var mysort = { score: -1 };
            let pics =  db.collection('pictures').find({'picture':'lemur'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
        res.render('puzzleAction', {description: textDescription.lemur, name: 'lemur', pics:data})
    });
}catch(err){
    if (err){res.render('error')}
}
    }


    if (req.params.id =='goat_and_tiger'){
        try{
            const db = req.app.locals.db; 
            var mysort = { score: -1 };
            let pics =  db.collection('pictures').find({'picture':'goat_and_tiger'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
        res.render('puzzleAction', {description: textDescription.goat_and_tiger, name: 'goat_and_tiger', pics:data })
    });
}catch(err){
    if (err){res.render('error')}
}
    }
    
    ///////////////////////////////////////////////////

    // 5 dogs pictures 

    if(req.params.id == 'germanShepherd'){
        try{
            const db = req.app.locals.db; 
            var mysort = { score: -1 };
            let pics =  db.collection('pictures').find({'picture':'germanShepherd'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
        
        res.render('puzzleAction', { description: textDescription.GermanShepherd, name: 'GermanShepherd', pics:data })
    });
}catch(err){
    if (err){res.render('error')}
}
    }

    if(req.params.id == 'pug'){
        try{
            const db = req.app.locals.db; 
            var mysort = { score: -1 };
            let pics =  db.collection('pictures').find({'picture':'Pug'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{    
        
        res.render('puzzleAction', { description: textDescription.Pug, name: 'Pug', pics:data })
    });
}catch(err){
    if (err){res.render('error')}
}
    }

    if(req.params.id == 'pitBull'){
        try{
            const db = req.app.locals.db; 
       //     var mysort = { score: -1 };
            let pics =  db.collection('pictures').find({'picture':'PitBull'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{  
        res.render('puzzleAction', { description: textDescription.PitBull, name: 'PitBull' , pics:data})
    });
}catch(err){
    if (err){res.render('error')}
}
    }

    if(req.params.id == 'welshCorgi'){
        try{
            const db = req.app.locals.db;   
            var mysort = { score: -1 };         
            let pics =  db.collection('pictures').find({'picture':'WelshCorgi'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{       
        res.render('puzzleAction', { description: textDescription.WelshCorgi, name: 'WelshCorgi', pics:data })
    });
}catch(err){
    if (err){res.render('error')}
}
    }

    if(req.params.id == 'husky'){
        try{
            const db = req.app.locals.db; 
            var mysort = { score: -1 };           
            let pics =  db.collection('pictures').find({'picture':'husky'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{   
        res.render('puzzleAction', { description: textDescription.husky, name: 'husky', pics:data })
    });
}catch(err){
    if (err){res.render('error')}
}
    }

    if(req.params.id == 'goldenRetriever'){
        try{
            const db = req.app.locals.db;  
            var mysort = { score: -1 };          
            let pics =  db.collection('pictures').find({'picture':'GoldenRetriever'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{      
        res.render('puzzleAction', { description: textDescription.GoldenRetriever, name: 'GoldenRetriever', pics:data })
       
    });
}catch(err){
    if (err){res.render('error')}
}
    }

   /////////////////////////////////////////////////////////

   //5 geography
   if(req.params.id == 'Fujiyoshida'){
    try{
        const db = req.app.locals.db;  
        var mysort = { score: -1 };          
        let pics =  db.collection('pictures').find({'picture':'Fujiyoshida'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
    res.render('puzzleAction', { description: textDescription.Fujiyoshida, name: 'Fujiyoshida', pics:data })
});
}catch(err){
    if (err){res.render('error')}
}
   }

   if(req.params.id == 'bigbuddha'){
    try{
        const db = req.app.locals.db;      
        var mysort = { score: -1 };      
        let pics =  db.collection('pictures').find({'picture':'bigbuddha'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{   
    res.render('puzzleAction', { description: textDescription.bigbuddha, name: 'bigbuddha' , pics:data})
});
}catch(err){
    if (err){res.render('error')}
}
   }

   if(req.params.id == 'rio_de_janeiro'){
    try{
        const db = req.app.locals.db;  
        var mysort = { score: -1 };          
        let pics =  db.collection('pictures').find({'picture':'rio_de_janeiro'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
    res.render('puzzleAction', { description: textDescription.rio, name: 'rio', pics:data })
});
}catch(err){
    if (err){res.render('error')}
}
   }

   if(req.params.id == 'monkey_park'){
    try{
        const db = req.app.locals.db;  
        var mysort = { score: -1 };          
        let pics =  db.collection('pictures').find({'picture':'monkey_park'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
    res.render('puzzleAction', { description: textDescription.monkey, name: 'monkey', pics:data })
});
}catch(err){
    if (err){res.render('error')}
}
   }

   if(req.params.id == 'paris'){
    try{
        const db = req.app.locals.db;  
        var mysort = { score: -1 };          
        let pics =  db.collection('pictures').find({'picture':'paris'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
    res.render('puzzleAction', { description: textDescription.paris, name: 'paris', pics:data })
});
}catch(err){
    if (err){res.render('error')}
}
   }

   if(req.params.id == 'burano'){
    try{
        const db = req.app.locals.db; 
        var mysort = { score: -1 };           
        let pics =  db.collection('pictures').find({'picture':'burano'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
    res.render('puzzleAction', { description: textDescription.burano, name: 'burano', pics:data })
});
}catch(err){
    if (err){res.render('error')}
}
   }

   ///////////////////////////////////////////

   //5 nature 
   if(req.params.id == 'tropics'){
    try{
        const db = req.app.locals.db;   
        var mysort = { score: -1 };         
        let pics =  db.collection('pictures').find({'picture':'tropics'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
    res.render('puzzleAction', { description: textDescription.tropics, name: 'tropics' , pics:data})
});
}catch(err){
    if (err){res.render('error')}
}
   }

   if(req.params.id == 'village'){
    try{
        const db = req.app.locals.db;  
        var mysort = { score: -1 };          
        let pics =  db.collection('pictures').find({'picture':'village'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
    res.render('puzzleAction', { description: textDescription.village, name: 'village', pics:data })
});
}catch(err){
    if (err){res.render('error')}
}
   }

   if(req.params.id == 'seaside'){
    try{
        const db = req.app.locals.db;       
        var mysort = { score: -1 };     
        let pics =  db.collection('pictures').find({'picture':'seaside'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
    res.render('puzzleAction', { description: textDescription.seaside, name: 'seaside' , pics:data})
});
}catch(err){
    if (err){res.render('error')}
}
   }

   if(req.params.id == 'waterfall'){
    try{
        const db = req.app.locals.db;   
        var mysort = { score: -1 };         
        let pics =  db.collection('pictures').find({'picture':'waterfall'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
    res.render('puzzleAction', { description: textDescription.waterfall, name: 'waterfall', pics:data })
});
}catch(err){
    if (err){res.render('error')}
}
   }

   if(req.params.id == 'chapel'){
    try{
        const db = req.app.locals.db;    
        var mysort = { score: -1 };        
        let pics =  db.collection('pictures').find({'picture':'chapel'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
    res.render('puzzleAction', { description: textDescription.chapel, name: 'chapel', pics:data })
});
}catch(err){
    if (err){res.render('error')}
}
   }

   if(req.params.id == 'river'){
    try{
        const db = req.app.locals.db;    
        var mysort = { score: -1 };        
        let pics =  db.collection('pictures').find({'picture':'river'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
    res.render('puzzleAction', { description: textDescription.river, name: 'river', pics:data })
});
}catch(err){
    if (err){res.render('error')}
}
   }

   ////////////////////////////////////////////////////////////

   //5  wonders
    if(req.params.id == 'Taj_Mahal'){
        try{
            const db = req.app.locals.db; 
            var mysort = { score: -1 };           
            let pics =  db.collection('pictures').find({'picture':'Taj_Mahal'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
        res.render('puzzleAction', { description: textDescription.Taj_Mahal, name: 'Taj_Mahal', pics:data })
    });
}catch(err){
    if (err){res.render('error')}
}
    }
    
    if(req.params.id == 'colosseum'){
        try{
            const db = req.app.locals.db;   
            let pics =  db.collection('pictures').find({'picture':'colosseum'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
        res.render('puzzleAction', { description: textDescription.colosseum, name: 'colosseum', pics:data })
    });
}catch(err){
    if (err){res.render('error')}
} }
    

    if(req.params.id == 'hagiaSophia'){
        try{
            const db = req.app.locals.db;   
            let pics =  db.collection('pictures').find({'picture':'hagiaSophia'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
        res.render('puzzleAction', { description: textDescription.hagiaSophia, name: 'hagiaSophia', pics:data })
    });
}catch(err){
    if (err){res.render('error')}
} }
    

    if(req.params.id == 'zeus'){
        try{
            const db = req.app.locals.db;  
            var mysort = { score: -1 };          
            let pics =  db.collection('pictures').find({'picture':'zeus'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
        res.render('puzzleAction', { description: textDescription.zeus, name: 'zeus', pics:data })
    });
}catch(err){
    if (err){res.render('error')}
} }
    

    if(req.params.id == 'kukulcan'){
        try{
            const db = req.app.locals.db;   
            var mysort = { score: -1 };         
            let pics =  db.collection('pictures').find({'picture':'kukulcan'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
        res.render('puzzleAction', { description: textDescription.kukulcan, name: 'kukulcan', pics:data })
    });
}catch(err){
    if (err){res.render('error')}
} }

    if(req.params.id == 'wallofchina'){
        try{
            const db = req.app.locals.db;   
            var mysort = { score: -1 };         
            let pics =  db.collection('pictures').find({'picture':'wallofchina'}, {"sort": [['score', 'asc']]}).toArray((err,data)=>{
        res.render('puzzleAction', { description: textDescription.wallofchina, name: 'wallofchina' , pics:data})
    });
}catch(err){
    if (err){res.render('error')}
} }


    ////////////////////////////////////////////////////////////////////////////////////

}

module.exports = {
    load_category_get,
    load_picture_get

}