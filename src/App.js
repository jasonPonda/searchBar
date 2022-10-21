import "./App.css";
import Search from "./components/search";
import posts from "./components/posts";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const filterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
};

function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(posts, query);
  return (
    <Router>
      <div className="App">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id}>{post.name}</li>
          ))}
        </ul>
      </div>
    </Router>
  );
}

export default App;
