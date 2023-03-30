import React, { useEffect, useState } from "react";
import axios from "axios";

const Spotify = () => {
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(process.env.REACT_APP_SPOTIFY_URL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_TOKEN}`,
      },
    })
      .then((response) => {
        console.log(response.items);
        setTracks(response.items);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* {error ? <p>{error}</p> : tracks.map((track) => <p>{track.name}</p>)} */}
    </div>
  );
};

export default Spotify;
