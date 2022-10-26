import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState } from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [redVal, setRedVal] = useState(true);
  const history = useNavigate();
  const onSubmit = (e) => {
    history.push(`?=${searchQuery}`);
    e.preventDefault();
  };
  return (
    <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
      <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
        className="search"
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search blog posts"
        name="s"
      />
      <input className="btn-search" type="submit" value="Search" />

      <div>
        <Button variant="secondary" onClick={() => setRedVal(!redVal)}>
          Filter
        </Button>
        <Collapse in={redVal} dimension="width">
          <div>
            <div
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "red",
              }}
            ></div>
          </div>
        </Collapse>
      </div>
    </form>
  );
};

export default SearchBar;
