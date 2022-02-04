import React from "react";
import { useState } from "react";

function Header() {
  return (
    <header className="hero is-black is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="content has-text-centered">
          <h1 className="title">HTTP ステータスコード</h1>
          </div>
        </div>
      </div>
    </header>
  );
}

function Gallery() {
  const [num, setName] = useState("");
  const handleChange = (e) => setName(e.target.value);
  const [url, setUrl] = useState("https://http.cat/404.jpg");
  return (
    <div>
      <form>
        <label>Number:</label>
        <input value={num} onChange={handleChange} />
        <button onClick={e => {e.preventDefault(); setUrl("https://http.cat/" + num + ".jpg")}}>
          更新
        </button>
      </form>
      <div className="card-image">
        <figure className="image">
          <img src={url} alt="images" />
        </figure>
      </div>
    </div>
  );
}

function Main() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Explain />
          <br />
          <Gallery />
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>日本大学文理学部情報科学科 Webプログラミング演習課題</p>
        <p>5420082 内山涼太</p>
        <p>API from HTTP Cats</p>
        <p>
          <a href="https://http.cat/">https://http.cat/</a>
        </p>
      </div>
    </footer>
  );
}

function Explain() {
  return(
    <div>
      <p>数字を入力すると、そのステータスコードとその意味が表示されます。
        一緒に猫の画像も出てきます。
      </p>
      <p>ステータスコードに存在しない数字や文字を入力すると404になります。</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;