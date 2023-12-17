import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name="Sophia" age={21} isStudent={true} />
      <Student name="Maria" age={19} isStudent={true} />
      <Student name="Johnatan" age={23} isStudent={false} />
      <Student name="Lana" age={26} isStudent={true} />
    </>
  );
}

export default App;
