import PropTypes from "prop-types";
function AgeChecker(props) {
  //   if (props.age >= 18) {
  //     return <h1 className="yes">User {props.username} is an adult</h1>;
  //   } else return <h2 className="no">User {props.username} is an minor</h2>;
  const adult = <h1 className="yes">User {props.username} is an adult</h1>;
  const minor = <h2 className="no">User {props.username} is an minor</h2>;

  return props.age >= 18 ? adult : minor;
}

AgeChecker.proptypes = {
  username: PropTypes.string,
  age: PropTypes.integer,
};

AgeChecker.defaultProps = {
  username: "Guest",
  age: 18,
};
export default AgeChecker;
// condition ? expression1 : expression2
// uslov ? onda1 : onda2
