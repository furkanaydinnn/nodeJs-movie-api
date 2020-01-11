const express = require('express');
const router = express.Router();

//Models
const Movie = require('../models/Movie');

router.get('/', (req, res, next)=> {
  res.json({status : 200});
});

router.post('/', (req, res, next)=> {
  /*const {title, imdb_score, category, year, country} = req.body;
  const movie = new Movie({
    title : title,
    imdb_score : imdb_score,
    category : category,
    year : year,
    country : country
  }); */

  const movie = new Movie(req.body);

 /* movie.save((err,data)=>{
    if(err)
      res.json(err);

     res.json(data);
  }); */

 const promise = movie.save();

 promise.then((data)=>{
   res.json(data);
 }).catch((err)=>{
   res.json(err);
 });
});

module.exports = router;
