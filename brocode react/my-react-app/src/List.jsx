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

  tsAlbums.sort();

  const tsAlbumsList = tsAlbums.map((album) => (
    <li key={album.id}>
      {album.name} : {album.year}
    </li>
  ));

  return tsAlbumsList;
}

export default List;
