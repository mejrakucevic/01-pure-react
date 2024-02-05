import React, { useState } from "react";

function TBR() {
  const [books, setBooks] = useState(["Moscow Cow", "Normal People", "LAX"]);
  const [newBook, setNewBook] = useState([]);

  function handleInputChange(event) {
    setNewBook(event.target.value);
  }

  function addTBR() {}

  function deleteTBR(index) {}

  function moveTBRup(index) {}

  function moveTBRdown(index) {}
  return (
    <>
      <div className="tbrList">
        <h1>To Be Read</h1>

        <div>
          <input
            type="text"
            placeholder="Enter a book..."
            value={newBook}
            onChange={handleInputChange}
          />
          <button className="btn" onClick={addTBR}>
            Add
          </button>
        </div>

        <ol>
          {books.map((book, index) => (
            <li key={index}>
              <span className="text">{book}</span>
              <button className="deleteBtn" onClick={() => deleteTBR(index)}>
                Delete
              </button>

              <button className="moveTBRup" onClick={() => moveTBRup(index)}>
                ☝🏼
              </button>

              <button
                className="moveTBRdown"
                onClick={() => moveTBRdown(index)}
              >
                👇🏼
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default TBR;
