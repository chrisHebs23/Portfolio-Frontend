// import React from 'react'

import axios from "axios";
import { useEffect, useRef, useState } from "react";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const useAxios = ({ params }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const load = useRef(true);

  const getProjects = async () => {
    setIsLoading(true);
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND_URL}/${params}`,
    })
      .then((res) => {
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (load.current) {
      getProjects();
      load.current = false;
    }
  }, []);

  return { response, error, isLoading };
};

export default useAxios;
