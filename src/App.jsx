import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Figure from "./components/Figure";

function App() {
  let works = [
    { id: 1, title: "work 1", url: "https://picsum.photos/600/400?random=1", desc: "description" },
    { id: 2, title: "work 2", url: "https://picsum.photos/600/400?random=2", desc: "description" },
    { id: 3, title: "work 3", url: "https://picsum.photos/600/400?random=3", desc: "description" },
    { id: 4, title: "work 4", url: "https://picsum.photos/600/400?random=4", desc: "description" },
    { id: 5, title: "work 5", url: "https://picsum.photos/600/400?random=5", desc: "description" },
    { id: 6, title: "work 6", url: "https://picsum.photos/600/400?random=6", desc: "description" },
    { id: 7, title: "work 7", url: "https://picsum.photos/600/400?random=7", desc: "description" },
    { id: 8, title: "work 8", url: "https://picsum.photos/600/400?random=8",desc: "description" },
  ];
  const [id, setId] = useState(1);

  const _work = works.find((w) => w.id === id);
  return (
    <>
      <Header />
      <Nav data={works} onChangeMode={(id) => setId(id)} id={id} />
      <button
        type="button"
        onClick={() => {
          if (id > 1) setId(id - 1);
        }}
      >이전</button>
      <button
        type="button"
        onClick={() => {
          if (id < works.length) setId(id + 1);
        }}
      >다음</button>
      {_work && <Figure data={_work} />}
      
    </>
  );
}

export default App;
