import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Figure from "./components/Figure";
import Controls from "./components/Controls";

function App() {
  let works = [
    {
      id: 1,
      title: "work 1",
      url: "https://picsum.photos/600/400?random=1",
      desc: "description",
    },
    {
      id: 2,
      title: "work 2",
      url: "https://picsum.photos/600/400?random=2",
      desc: "description",
    },
    {
      id: 3,
      title: "work 3",
      url: "https://picsum.photos/600/400?random=3",
      desc: "description",
    },
    {
      id: 4,
      title: "work 4",
      url: "https://picsum.photos/600/400?random=4",
      desc: "description",
    },
    {
      id: 5,
      title: "work 5",
      url: "https://picsum.photos/600/400?random=5",
      desc: "description",
    },
    {
      id: 6,
      title: "work 6",
      url: "https://picsum.photos/600/400?random=6",
      desc: "description",
    },
    {
      id: 7,
      title: "work 7",
      url: "https://picsum.photos/600/400?random=7",
      desc: "description",
    },
    {
      id: 8,
      title: "work 8",
      url: "https://picsum.photos/600/400?random=8",
      desc: "description",
    },
  ];
  const [id, setId] = useState(1);

  const _work = works.find((w) => w.id === id);
  const activeIndex = works.findIndex((w) => w.id === id);
  const prevWork = activeIndex > 0 ? works[activeIndex - 1] : null;
  const nextWork =
    activeIndex < works.length - 1 ? works[activeIndex + 1] : null;
  console.log(activeIndex);

  return (
    <>
      <Header />
      <Nav data={works} onChangeMode={(id) => setId(id)} id={id} />
      <Controls
        prevWork={prevWork}
        nextWork={nextWork}
        onChangeMode={(_id) => {
          setId(_id);
        }}
      />
    </>
  );
}

export default App;
