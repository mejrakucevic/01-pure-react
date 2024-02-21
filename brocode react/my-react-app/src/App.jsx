import List from "./List";

function App() {
  const tsAlbums = [
    { id: 1, name: "Evermore ", year: 2020 },
    { id: 2, name: "Folklore ", year: 2020 },
    { id: 3, name: "Midnights ", year: 2023 },
    { id: 4, name: "Reputation ", year: 2017 },
    { id: 5, name: "Tortured Poets Department", year: 2024 },
  ];

  const clAlbums = [
    { id: 6, name: "Immunity ", year: 2019 },
    { id: 7, name: "Sling ", year: 2021 },
  ];

  return (
    <>
      {tsAlbums.length > 0 ? <List items={tsAlbums} /> : null}
      {clAlbums.length > 0 ? <List items={clAlbums} category="Clairo" /> : null}
    </>
  );
}

export default App;
