const MovieCard = ({ movie }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 flex flex-col h-full border-red-400 border-2">
        <img className="w-full h-48 object-cover" src={movie.img} alt={movie.title} />
  
        <div className="px-6 py-4 flex-grow">
          <div className="font-bold text-xl mb-2 text-red-400">{movie.title}</div>
        
          <div className="flex flex-wrap mt-2">
            {movie.genre.map((genre, index) => (
              <span key={index} className="bg-violet-700 rounded-full px-3 py-1 text-teal-400 text-sm mr-2 mb-2">
                {genre}
              </span>
            ))}
          </div>
  
          <div className="flex space-x-2 text-violet-400 text-sm mt-2">
            <span>Release Date: {movie.release}</span>
          </div>
  
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">⭐ {movie.rating}</span>
            <span className="ml-2 text-violet-400 text-sm">({movie.reviews_count} reviews)</span>
          </div>
        </div>
  
        <div className="mt-auto px-6 pb-4">
          <button className="bg-yellow-500 hover:bg-yello-700 text-white font-bold py-2 px-4 rounded w-full">
            Add To Favorites
          </button>
        </div>
      </div>
    );
  };
    
    export default MovieCard;