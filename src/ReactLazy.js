import React, { useEffect } from "react";

const ReactLazy = () => {
  const fetchApi = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await result.json();
    console.log(data);
  };
  useEffect(() => {
    console.log("hello");
  }, []);
  return <div>ReactLazy</div>;
};

export default ReactLazy;
