import { useState } from "react";
const BACKEND_URL = "/";


export const Post = () => {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [response, setResponse] = useState(null);
  const post = (postfix, postData, csrfToken) => {
    setPending(true);
    return fetch(BACKEND_URL + postfix, {
      method: "POST",
      credentials: "include",
      headers: {
        "X-CSRFtoken": csrfToken,
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(postData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not connect to the server");
        }

        return res.json();
      })
      .then((data) => {
        setPending(false);
        setResponse(data);
        setError("");
        return true;
      })
      .catch((res, err) => {
        setPending(false);
        setError(err);
        return false;
      });
  };
  return { post, pending, response, error };
};

export const Get = () => {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [response, setResponse] = useState(null);
  const get = (postfix, data = null) => {
    return fetch(BACKEND_URL + postfix, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : null,
    })
      .then((res) => {
        if (res.ok) {
          setPending(false);
        }
        return res.json();
      })
      .then((data) => {
        setResponse(data);
        return true;
      })
      .catch((err) => {
        setPending(false);
        setError(err);
        return false;
      });
  };
  return { get, pending, response, error };
};
