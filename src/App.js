import "./App.css";
import Container from "./Container";
import Counter from "./Counter";
function App() {
  const NUMBER = 5;

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    initialValue: 5,
  };

  const style = {
    App: {
      backgroundColor: "blue",
    },
  };
  return (
    <Container>
      <div>
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;
