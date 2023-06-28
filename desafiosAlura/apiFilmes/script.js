const moviesContainer = document.querySelector('.container')

// async function getPopularMovies() {
//     fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eefae713ff0a6dd5e70c65ef7c62878e&language=en-US&page=1`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data.results)
//         })
// }

async function getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=eefae713ff0a6dd5e70c65ef7c62878e&language=en-US&page=1`
    const fetchResponse = await fetch(url)
    const { results } = await fetchResponse.json()
    return results
  } 

window.onload = async function() {
    const movies = await getPopularMovies()
    movies.forEach(movie => movieList(movie))
    console.log(await getPopularMovies())
}


function movieList(movie) {

    // {res.map(movie =>{
    //     const title = movie.title
    // })}
        const { title, poster_path, vote_average, release_date, overview } = movie
        const year = new Date(release_date).getFullYear()
        const image = `https://image.tmdb.org/t/p/w500${poster_path}`
        const isFavorited = false
    
        const movieElement = document.createElement('section')
        movieElement.classList.add('boxFilmes')
        moviesContainer.appendChild(movieElement)
    
        const movieInformations = document.createElement('div')
        movieInformations.classList.add('boxFilmes__content')
    
        const contentImg = document.createElement('div')
        contentImg.classList.add('contentImg')

        const movieImage = document.createElement('img')
        movieImage.src = `https://image.tmdb.org/t/p/w500${poster_path}`
        contentImg.appendChild(movieImage)
        movieInformations.appendChild(contentImg)
    
        const movieTextContainer = document.createElement('div')
        movieTextContainer.classList.add('contentMain__info')
        const movieTitle = document.createElement('h4')
        movieTitle.textContent = `${title} (${year})`
        movieTextContainer.appendChild(movieTitle)
        movieInformations.appendChild(movieTextContainer)
   
        const informations = document.createElement('div')
        informations.classList.add('favoritar')
        movieTextContainer.appendChild(informations)
    
        const ratingContainer = document.createElement('div')
        ratingContainer.classList.add('favoritar_estrela')
        const starImage = document.createElement('img')
        starImage.src = 'img/star.png'
        const movieRate = document.createElement('span')
        movieRate.classList.add('movie-rate')
        movieRate.textContent = vote_average
        ratingContainer.appendChild(starImage)
        ratingContainer.appendChild(movieRate)
        informations.appendChild(ratingContainer)
    
        const favorite = document.createElement('div')
        favorite.classList.add('favoritar_coracao')
        const favoriteImage = document.createElement('img')
        favoriteImage.src = isFavorited ? 'img/heart-fill.svg' : 'img/heart.svg'
        favoriteImage.classList.add('favoriteImage')
        const favoriteText = document.createElement('span')
        favoriteText.classList.add('movie-favorite')
        favoriteText.textContent = 'Favoritar'
        favorite.appendChild(favoriteImage)
        favorite.appendChild(favoriteText)
        informations.appendChild(favorite)
    
        const movieDescriptionContainer = document.createElement('div')
        movieDescriptionContainer.classList.add('contentInfo')
        const movieDescription = document.createElement('p')
        movieDescription.textContent = overview
        movieDescriptionContainer.appendChild(movieDescription)
        
        movieElement.appendChild(movieInformations)
        movieElement.appendChild(movieDescriptionContainer)
   
  }