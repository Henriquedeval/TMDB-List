import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/CardTop";

const Search = () => {
  const searchUrl = "https://api.themoviedb.org/3/search/movie/";
  const apiKey = "api_key=93fcd63399051febe54634c1f73d1bd2";

  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [movie, setMovie] = useState([]);
  const query = searchParams.get("q");

  const getSearchMovie = async (url) => {
    try{
      setLoading(true);
      const responseS = await fetch(url);
      const dataS = await responseS.json();
      console.log(dataS)
      setMovie(dataS.results);
      console.log(movie);
      setLoading(false);
    }catch(erro){
        console.log(erro)
    }
      
  };

  useEffect(() => {
    const searchMovieURL =`${searchUrl}?${apiKey}&query=${query}`;
    console.log(searchMovieURL);
    getSearchMovie(searchMovieURL);
    
  }, [query]);

  return (
    <>
      {loading ? (
        <div>Carregando</div>
      ) : (
        <div className="container">
          <h2 className="Title">Best Movies:</h2>
          <div className="movies-container">
            {movie.map((topM )=> {
              return <Card key={topM.id} topM={topM} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
