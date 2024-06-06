import "./App.css";
import ReactMarkdown from "react-markdown";
import React, { useState, useEffect } from "react";
import blog from "./blog.md";

function App() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(blog)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  const components = {
    img: (props) => (
      <img {...props} align="right" alt="markdown-content" style={{ maxWidth: "20%" }} />
    ),
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Eleanor Little</h1>
        <h3>About me</h3>
        <p>foobar</p>
        <h2>Where did the journey begin?</h2>


        <a href = 'https://www.facebook.com/eleanor.little.5'>This is me</a>
        <div className="md">
          <ReactMarkdown components={components}>{content}</ReactMarkdown>
        </div>
      </header>
    </div>
  );
}

export default App;
