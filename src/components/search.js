import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState } from "react";
import posts from "./posts";
import { BiHeart } from "react-icons/bi";
import { WiDirectionDown } from "react-icons/wi";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(posts);

  // exclude column list from filter
  const excludeColumns = [posts.id, posts.image, posts.date, posts.info];

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(posts);
    else {
      const filteredData = posts.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  return (
    <>
      <form action="/" method="get" autoComplete="off">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
          className="search"
          type="text"
          placeholder="Type to search a job..."
          value={searchText}
          onChange={(e) => handleChange(e.target.value)}
        />
        <input className="btn-search" type="submit" value="Search" />
      </form>

      <div className="row">
        <div className="col">
          <button>All</button>
          <button>Location</button>
          <button>Type</button>
          <button>Field</button>
        </div>
      </div>

      <div className="contentBx">
        {data.map((values) => {
          const { id, title, companyName, city, date, image, info, filter } =
            values;
          return (
            <div className="jobList" key={id}>
              <img src={image} alt={companyName} />

              <div className="main">
                <p>{title}</p>
                <p>{companyName}</p>
                <p>{city}</p>
                <ul>
                  {filter.map(function (filtre, i) {
                    return (
                      <div key={i}>
                        <ul>
                          <li>{filtre.type}</li>
                          <li>{filtre.field}</li>
                        </ul>
                      </div>
                    );
                  })}
                </ul>
                <div className="second">
                  <div className="like">
                    <BiHeart size={23} />
                  </div>
                  <div className="right">
                    <p className="date">{date}</p>
                    <p className="down">
                      {info}
                      <WiDirectionDown size={30} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchBar;
