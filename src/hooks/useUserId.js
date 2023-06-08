import React from "react";
import { findAccessToken } from "../util/getToken";

const useUserId = () => {
  const [fetching, setFetching] = React.useState(false);
  const [json, setJson] = React.useState();
  const [error, setError] = React.useState();
  const token = findAccessToken();

  React.useEffect(() => {
    setFetching(true);
    setError();
    setJson();
    fetch(`https://api.spotify.com/v1/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          setError(response.status);
          setFetching(false);
        } else {
          response.json().then((json) => {
            setJson(json);
            setFetching(false);
          });
        }
      })
      .catch((e) => {
        setJson();
        setFetching(false);
        setError(e.message);
      });
  }, [token]);

  return { json, fetching, error };
};

export default useUserId;