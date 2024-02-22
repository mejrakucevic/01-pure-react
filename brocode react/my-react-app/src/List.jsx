import PropTypes from "prop-types";

function List(props) {
  const category = props.category;
  const itemList = props.items;
  //   const fruits = ["apple", "banana", "mandarine", "plum"];

  //   const listItems = fruits.map((fruit) => <li>{fruit}</li>);

  //   return <ul>{listItems}</ul>;

  // filtriranje - filter method
  // const newAlbums = tsAlbums.filter((album) => album.year > 2020);

  //const olderAlbums = tsAlbums.filter((oldAlbum) => oldAlbum.year <= 2020);

  const listaAlbuma = itemList.map((item) => (
    <li key={item.id}>
      {item.name} : {item.year}
    </li>
  ));
  return (
    <>
      <h3>{category}</h3>
      <ol className="listItems">{listaAlbuma}</ol>
    </>
  );

  // Kreiranje liste -----------------------------------------------------------------------------------------------------------------------------------------
  // const povrce = ["pecurke", "krastavac", "paprika", "brokoli"];
  // const listaPovrca = povrce.map((vrsta) => <li>{vrsta}</li>);
  // return <ol>{listaPovrca}</ol>;
  // --------------------------------------------------------------------------------------------------------------------------------------------------------

  // Vrste sortiranja liste --------------------------------------------------------------------------------------------------------------------------------
  // tsAlbums.sort((a, b) => a.name.localeCompare(b.name)); A-Z sortiranje
  // tsAlbums.sort((a, b) => b.name.localeCompare(a.name)); Z-A sortiranje
  // tsAlbums.sort((a, b) => a.year - b.year); // brojevno sortiranje najmanje-najvece
  // tsAlbums.sort((a, b) => b.year - a.year); brojevno sortiranje najvece-najmanje
  // --------------------------------------------------------------------------------------------------------------------------------------------------------
}

List.defaultProps = {
  category: "Category",
  items: [],
};

List.PropTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      year: PropTypes.number,
    })
  ),
};

export default List;
// const tsAlbums = [
//   { id: 1, name: "Evermore ", year: 2020 },
//   { id: 2, name: "Folklore ", year: 2020 },
//   { id: 3, name: "Midnights ", year: 2023 },
//   { id: 4, name: "Reputation ", year: 2017 },
//   { id: 5, name: "Tortured Poets Department", year: 2024 },
// ];

// const clAlbums = [
//   { id: 6, name: "Immunity ", year: 2019 },
//   { id: 7, name: "Sling ", year: 2021 },
// ];

// return (
//   <>
//     {tsAlbums.length > 0 ? <List items={tsAlbums} /> : null}
//     {clAlbums.length > 0 ? <List items={clAlbums} category="Clairo" /> : null}
//   </>
// );
// }
