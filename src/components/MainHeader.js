import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import { searchMovie } from "../store/actions/movies";
import "../assets/styles/header/mainheader.scss";

export default (props) => {
  const { Search } = Input;
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onSearch = async () => {
    search === "" ? alert("again?") : dispatch(searchMovie(search));
  };

  return (
    <>
      <header className="main-header">
        <div>
          <h1>
            <Link to="/">Home</Link>
          </h1>
          <h1>
            <Link to="/people">People</Link>
          </h1>
        </div>
        <div className="main-header__search">
          <Search
            placeholder="search movie"
            onSearch={onSearch}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            style={{ width: 800 }}
          />
        </div>

        {/* <div className="homepage-modal">
          <button className="button-default" onClick={toggle}>
            SIGN IN
          </button>
        </div>
        <Modal isShowing={isShowing} hide={toggle} /> */}
      </header>
    </>
  );
};
