import axios from "axios";

export const getProjects = async () => {
  return await axios({
    method: "get",
    url: `${process.env.REACT_APP_BACKEND_URL}/project`,
  })
    .then((response) => response.data.projects)
    .catch((err) => err);
};
