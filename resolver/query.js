const imdb = require('imdb-api')
module.exports = {
 async insertmovie(_,args,{db})  {
     
    const title = args.title;
  return  db('movie').where('title',title )
     .then(function(rows) {
        console.log("here is rows",+rows);
        if(rows==0){
         imdb.get({name: title}, {apiKey: '6dfb9bb4'}).then((things) => {
            var mov_id =things.imdbid;
            var mov_title=things.title;
            var mov_rating =things.rating;
            var mov_generes = things.genres;
            var mov_rel_date = things.released;
           return db('movie').insert({id:mov_id,title:mov_title,rating:mov_rating,relesedyear:mov_rel_date,generes:[mov_generes]})
            .then((result) =>{
              
               console.log(result)
            })
        }).catch((error)=>{
           console.log(error)
        })
        return{
           message:"success"
        }
      }else{
         return{
            message:"failure"
         }
      }
        
     })
   

  },
  async searchMovieById(_,args,{db}){
     console.log(args.id)
     var mov_id = args.id;
  return  db('movie').where('id',mov_id).then((result)=>{
      // console.log(result);
       return{
          id: result[0].id,
          title:result[0].title,
          rating:result[0].rating,
          relesedyear:result[0].relesedyear,
          generes: result[0].generes
       }
    }).catch((error)=>{
       console.log(error)
    })
  },
  async searchMovieById(_,args,{db}){
   console.log(args.id)
   var mov_id = args.id;
return  db('movie').where('id',mov_id).then((result)=>{
    // console.log(result);
     return{
        id: result[0].id,
        title:result[0].title,
        rating:result[0].rating,
        relesedyear:result[0].relesedyear,
        generes: result[0].generes
     }
  }).catch((error)=>{
     console.log(error)
  })
},
async searchMovieByDate(_,args,{db}){
   //console.log(args.)
   var mov_date = args.reldate;
return  db('movie').where(' relesedyear',mov_date).then((result)=>{
    // console.log(result);
     return{
        id: result[0].id,
        title:result[0].title,
        rating:result[0].rating,
        relesedyear:result[0].relesedyear,
        generes: result[0].generes
     }
  }).catch((error)=>{
     console.log(error)
  })
},
async searchMovieByGenere(_,args,{db}){
   //console.log(args.)
   var mov_genere = args.genere;
return  db('movie').where(' generes',[mov_genere]).then((result)=>{
    // console.log(result);
     return{
        id: result[0].id,
        title:result[0].title,
        rating:result[0].rating,
        relesedyear:result[0].relesedyear,
        generes: result[0].generes
     }
  }).catch((error)=>{
     console.log(error)
  })
},
 searchMovieByRating (_,args,{db}){
   //console.log(args.)
   var mov_rating = args.rating;
return  db('movie').where(' rating','>',mov_rating).then((result)=>{
    // console.log(result);
    let ratingdata =[];
      result.map(data =>{
      //  console.log(data.id)
         ratingdata.push({
         id: data.id,
         title:data.title,
         rating:data.rating,
         relesedyear:data.relesedyear,
         generes: data.generes
        })
       
         
      })
      console.log(ratingdata)
      return ratingdata
  }).catch((error)=>{
     console.log(error)
  })
}
}
