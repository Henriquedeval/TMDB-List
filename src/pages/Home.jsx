import React, { useState, useEffect } from "react";
import Card from "../components/CardTop";
import Movie from "./Movie";
const Home = () => {
  const moviesUrl = "https://api.themoviedb.org/3/movie/";
  const apiKey = "api_key=93fcd63399051febe54634c1f73d1bd2";

  const [topMovies, setTopMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  const getTopMovies = async (url) => {
    
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setTopMovies(data.results);
    setLoading(false);
   
  };

  useEffect(() => {
    const getTopMoviesURL = `${moviesUrl}/top_rated?${apiKey}`;
   // console.log(getTopMoviesURL)
   getTopMovies(getTopMoviesURL);
  }, []);

  return (
    <>
      {loading ? (
        <div>Carregando</div>
      ) : (
        <div className="container">
          <h2 className="Title">Best Movies:</h2>
          <div className="movies-container">
            {topMovies.map((topM) => {
              return <Card key={topM.id} topM={topM} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
