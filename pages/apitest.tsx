import { useEffect } from "react";

export default function Index() {
  // useEffect(() => {
  //   fetch("/api/auth", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       email: "2k3j2jn32o",
  //       password: "scj092n3",
  //     })
  //   }).then(response => response.json()).then(data => console.log(data));
  // }, []);

  useEffect(() => {
    fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        owner: "Arif Kurniawan",
      })
    }).then(response => response.json()).then(data => console.log(data));
  }, []);

  return <></>
}