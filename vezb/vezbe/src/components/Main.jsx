import React from "react";
import styles from "./Main.module.css";
import pc from "./pics/pc.png";

function Main() {
  return (
    <>
      <header className={styles.header}>
        <h1>Website Demo</h1>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </nav>
        <button>Sign Up</button>
      </header>

      <main>
        <img src={pc} alt="gamingpc" />
        <h2>The Ultimate PC Shop for you.</h2>
      </main>

      <footer></footer>
    </>
  );
}

export default Main;
