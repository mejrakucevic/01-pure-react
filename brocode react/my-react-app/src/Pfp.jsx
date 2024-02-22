function Pfp() {
  const imageUrl = "./pics/happy.gif";

  const handleClick = (e) => {
    e.target.style.display = "none";
  };
  return <img onClick={(e) => handleClick(e)} src={imageUrl} alt="" />;
}

export default Pfp;
