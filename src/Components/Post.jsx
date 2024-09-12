import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

function Post() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(5);

  const API = `https://picsum.photos/v2/list?page=${pageNo}&limit=5`;

  const fatchApiData = async (API) => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fatchApiData(API);
  }, [pageNo]);

  return (
    <div className="container">
      <div className="post-container">
        {data.map((item, index) => {
          return <img src={item.download_url} alt="image" />;
        })}
      </div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  );
}

export default Post;
