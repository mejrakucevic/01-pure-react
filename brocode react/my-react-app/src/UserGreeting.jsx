import PropTypes from "prop-types";

function UserGreeting(props) {
  return props.isLoggedIn ? (
    <h1 className="welcomeMsg">Welcome {props.username}</h1>
  ) : (
    <h2 className="logInMsg">Please log in</h2>
  );
}

UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;

// condition ? expression1 : expression2
// uslov ? onda1 : onda2
// age >= 18 ? std::cout << "Punoletan/na si" : std::cout << "Nisi punoletan/na";
