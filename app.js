// Bring in Express code
const express = require('express')

		const app = express()

		const port = 3000

		app.use(express.json()) // This line is necessary for Express to be able to parse JSON in request body's
		
        const favoriteMovieList = [{
			title: "Star Wars",
			starRating: 5,
			isRecommended: true,
			createdAt: new Date(),
			lastModified: new Date()
		}, {
			title: "The Avengers",
			starRating: 4,
			isRecommended: true,
			createdAt: new Date(),
			lastModified: new Date()
		}];

		

		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`)
		})

//------------------------------------------------------------

		app.get('/all-movies', (req, res) => {
			res.json({
				sucess:true,
				favoriteMovieList
			})
            
		})
//------------------------------------------------------------
		app.get('/single-movie/:titleToFind',(req, res)=>{
			let foundMovie = favoriteMovieList.find((movie)=>{
				return movie.title === req.params.titleToFind
			})

			res.json({
				success:true,
				foundMovie
			})
		})

//------------------------------------------------------------
		app.post('/new-movie',(req, res)=>{
			const newMovie = {}
			newMovie.title = req.body.title,
			newMovie.starRating = req.body.starRating,
			newMovie.isRecomended = req.body.isRecomended,
			newMovie.reatedAt =  new Date(),
			newMovie.lastModified =  new Date()

			favoriteMovieList.push(newMovie)

			res.json({
				success: true
			})
		})

//------------------------------------------------------------
		app.delete("delete-movie/:titleToDelte",(req,res)=>{
			const titleToDelete = req.params.title

			const deleteMovieIndex = favoriteMovieList.findIndex((movie)=>{
				return movie.title === titleToDelete
			})

			favoriteMovieList.splice(deleteMovieIndex,1)

			res.json({
				success: true,
				
			})

		})
//------------------------------------------------------------