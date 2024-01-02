// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

function useFetch(paths) {
  const [posts1, setposts] = useState([]);

  const filename = paths;

  useEffect(() => {
    let blogs = [];
    for (let i = 0; i < filename.length; i++) {
      import(filename[i]).then(() =>
        fetch(filename[i])
          .then((res) => res.text())
          .then((data) => {
            blogs.push(data);
            setposts([...blogs]);
          })
      );
    }
  }, [paths, filename]);

  return [posts1];
}

export default useFetch;
