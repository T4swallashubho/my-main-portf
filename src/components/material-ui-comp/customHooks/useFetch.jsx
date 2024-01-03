// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

function useFetch() {
  const [posts1, setposts] = useState([]);

  useEffect(() => {
    const file_name = ["blog-post.1", "blog-post.2", "blog-post.3"];
    let blogs = [];
    for (let i = 0; i < file_name.length; i++) {
      import(`../${file_name[i]}.md`).then((res) =>
        fetch(res.default)
          .then((res) => res.text())
          .then((data) => {
            blogs.push(data);
            setposts([...blogs]);
          })
      );
    }
  }, []);

  return [posts1];
}

export default useFetch;
