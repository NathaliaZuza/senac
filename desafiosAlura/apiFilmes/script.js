function movieList(movie) {
    // Renderizar toda a estrutura do filme na página
}

const moviesContainer = document.querySelector('.container')

const movies = [
  {
    image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
    title: 'Batman',
    rating: 9.2,
    year: 2022,
    description: "Descrição do filme…",
    isFavorited: true,
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
    title: 'Avengers',
    rating: 9.2,
    year: 2019,
    description: "Descrição do filme…",
    isFavorited: false
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
    title: 'Doctor Strange',
    rating: 9.2,
    year: 2022,
    description: "Descrição do filme…",
    isFavorited: false
  },
]

window.onload = function() {
    movies.forEach(movie =>  movieList(movie))
}

function movieList(movie) {

    const { title, image, rating, year, description, isFavorited } = movie
  
    const movieElement = document.createElement('section')
    movieElement.classList.add('boxFilmes')
    moviesContainer.appendChild(movieElement)
  
    const movieInformations = document.createElement('div')
    movieInformations.classList.add('boxFilmes__content')
  
    const movieImageContainer = document.createElement('div')
    movieImageContainer.classList.add('contentImg')

    const movieImage = document.createElement('img')
    movieImage.src = image

    movieImageContainer.appendChild(movieImage)
    movieInformations.appendChild(movieImageContainer)
  
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
    movieRate.textContent = rating
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
    movieDescription.textContent = description
    movieDescriptionContainer.appendChild(movieDescription)
    
    movieElement.appendChild(movieInformations)
    movieElement.appendChild(movieDescriptionContainer)
  }