function List() {
  //   const fruits = ["apple", "banana", "mandarine", "plum"];

  //   const listItems = fruits.map((fruit) => <li>{fruit}</li>);

  //   return <ul>{listItems}</ul>;

  const tsAlbums = [
    { id: 1, name: "evermore ", year: 2020 },
    { id: 2, name: "folklore ", year: 2020 },
    { id: 3, name: "midnights ", year: 2023 },
    { id: 4, name: "reputation ", year: 2017 },
  ];

  // Vrste sortiranja
  //   tsAlbums.sort((a, b) => a.name.localeCompare(b.name)); A-Z sortiranje
  // tsAlbums.sort((a, b) => b.name.localeCompare(a.name)); Z-A sortiranje
  tsAlbums.sort((a, b) => a.year - b.year); // brojevno sortiranje najmanje-najvece
  //tsAlbums.sort((a, b) => b.year - a.year); brojevno sortiranje najvece-najmanje
  const tsAlbumsList = tsAlbums.map((album) => (
    <li key={album.id}>
      {album.name} : {album.year}
    </li>
  ));

  return tsAlbumsList;
}

export default List;
