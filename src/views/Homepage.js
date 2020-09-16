import React, { useEffect } from "react";
import { Card } from "antd";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllMovies } from "../store/actions/movies";
import MovieSlide from "../components/MovieSlide";
import "../assets/styles/homepage/homepage.scss";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

const Homepage = (props) => {
  console.log(props, "myPROPS");
  //get movies
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  useEffect(() => {
    dispatch(fetchAllMovies());
  }, []);
  console.log("ui", movies);

  return (
    <>
      <MovieSlide />
      <div className="movie-list">
        <div className="movie-list__title">
          <h1>STAR WARS MOVIE!</h1>
        </div>
        <Tabs defaultActiveKey="1" onChange={callback} size="large">
          <TabPane key="1" className="movie-list__movie">
            {movies &&
              movies.map((movie) => (
                <div key={movie.id} className="site-card-border-less-wrapper">
                  <Card
                    title={movie.title}
                    bordered={false}
                    style={{ width: 300 }}
                  >
                    <p>Director: {movie.director}</p>
                    <p>Release date: {movie.release_date}</p>
                  </Card>
                </div>
              ))}
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default Homepage;
