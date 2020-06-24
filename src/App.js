import React, { useCallback, useState, useEffect } from "react";
import "./App.css";

function App() {

    const [photoOfTheDay, setPhotoOfTheDay] = useState("");
    const [photoTitle, setPhotoTitle] = useState("");
    const [photoOfTheDay, setPhotoOfTheDay] = useState("");

  useEffect ( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=Q6RD3lJAhyj5FK5PBQDjbzBnfmHtEtIbEcrCVWjS")
    .then (res => {
      setPhotoOfTheDay(res.data);
      setPhotoTitle(res.data);
      setPhotoOfTheDay(res.data);
    })
    .catch(err =>  {
      console.log(error)
      setPhotoOfTheDay({
        copyright: "",
        title: "404 Photo Not Found",
      })
    })
  })


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
