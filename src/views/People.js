import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tabs, Button } from "antd";
import { fetchAllPeople } from "../store/actions/people";
import MovieSlide from "../components/MovieSlide";
import { Card } from "antd";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
const People = (props) => {
  console.log(props, "myPROPS");
  //get movies
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people.people);
  useEffect(() => {
    dispatch(fetchAllPeople());
  }, []);
  console.log("ui", people);

  return (
    <>
      <MovieSlide />
      <div className="movie-list">
        <div className="movie-list__title">
          <h1>STAR WARS PEOPLE!</h1>
        </div>
        <Tabs defaultActiveKey="1" onChange={callback} size="large">
          <TabPane key="1" className="movie-list__movie">
            {people &&
              people.map((people) => (
                <div key={people.id} className="site-card-border-less-wrapper">
                  <Card
                    title={people.name}
                    bordered={false}
                    style={{ width: 300 }}
                  >
                    <p>Birth Year: {people.birth_year}</p>
                    <p>Gender: {people.gender}</p>
                    <Button>See More</Button>
                  </Card>
                </div>
              ))}
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default People;
