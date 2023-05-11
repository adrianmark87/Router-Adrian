import axios from "axios";
import { useEffect, useState } from "react";

export default function Articles() {
  const [myApi, setMyApi] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/posts?limit=20").then((response) => {
      setMyApi(response.data.posts);
      console.log(response.data.posts);
    });
  }, []);

  return (
    <div>
      <h1>Nos articles</h1>
      <div>
        {myApi.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
          </li>
        ))}
      </div>
    </div>
  );
}
