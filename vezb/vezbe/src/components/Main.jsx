import React from "react";
import { useState } from "react";
import styles from "./Main.module.css";
import pc from "./pics/pc.png";
import spaceinvaders from "./pics/spaceinvaders.png";
import Shop from "./Shop";

// import razer from "./pics/razer.png";
// import amd from "./pics/amd.png";
// import sony from "./pics/sony.png";
// import Shop from "../pages/Shop";

function Main() {
  const [modal, setModal] = useState(false);

  const toggleModa = () => {
    setModal(!modal);
  };
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

      <img src={pc} alt="gamingpc" />
      <main>
        <h2>The Ultimate PC Shop for you.</h2>
        <p>
          We're a team of Computer Science specialists, with a mission to get
          you the ultimate PC experience. Oh, and we love games too!
        </p>
        <button onClick={toggleModa}>Shop Now</button>
        <img
          src={spaceinvaders}
          alt="spaceinvaderslogo"
          style={{
            height: "150px",
            marginTop: "110px",
            marginRight: "50px",
            transform: "rotate(10deg)",
          }}
        />
        <img
          src={spaceinvaders}
          alt="spaceinvaderslogo"
          style={{
            height: "150px",
            marginTop: "-300px",
            marginRight: "900px",
            transform: "rotate(-10deg)",
          }}
        />
        <img
          src={spaceinvaders}
          alt="spaceinvaderslogo"
          style={{
            height: "150px",
            marginTop: "-350px",
            marginRight: "-800px",
            transform: "rotate(35deg)",
          }}
        />
      </main>

      <footer>
        <div className={styles.overlay}></div>

        {/* <div className={styles.sponsors}>
          <img src={razer} alt="razerlogo" className={styles.sponsorImage} />
          <img src={amd} alt="amdlogo" className={styles.sponsorImage} />
          <img src={sony} alt="sonylogo" className={styles.sponsorImage} />
        </div> */}

        <h2>ABOUT US</h2>
      </footer>

      {modal && (
        <div>
          <Shop />
        </div>
      )}
    </>
  );
}

export default Main;
