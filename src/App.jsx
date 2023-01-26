import { useState } from "react";
import "./App.css";
import ProductsButtons from "./components/ProductButtons";

function App() {
  const [counter1, setCounter1] = useState("Zero");
  const [counter2, setCounter2] = useState("Zero");
  const [counter3, setCounter3] = useState("Zero");
  const [counter4, setCounter4] = useState("Zero");
  const [counterCart, setCounterCart] = useState(0);
  const [color, setColor] = useState("#ffc107");

  const addProduct = (counter, setCounter) => {
    counter === "Zero"
      ? (setCounter(1), setCounterCart(counterCart + 1))
      : setCounter(counter + 1);
  };

  const deleteProduct = (counter, setCounter) => {
    if (counter - 1 >= 0) {
      counter === 1
        ? (setCounter("Zero"), setCounterCart(counterCart - 1))
        : setCounter(counter - 1);
    }
  };

  const reset = () => {
    setCounter1("Zero");
    setCounter2("Zero");
    setCounter3("Zero");
    setCounter4("Zero");
    setCounterCart(0);
  };

  return (
    <div className="App">
      <section className="App__cart">
        <i className="bx bxs-cart-alt App__cart--icon"></i>
        <span className="App__counter">{counterCart}</span>
        <span>Items</span>
      </section>

      <section className="App__buttons">
        <ProductsButtons
          productProps={{
            addProduct: () => addProduct(counter1, setCounter1),
            deleteProduct: () => deleteProduct(counter1, setCounter1),
            counterNum: counter1,
            counterCart: counterCart,
            setCounterCart: setCounterCart,
            bgColor: color,
          }}
        />
        <ProductsButtons
          productProps={{
            addProduct: () => addProduct(counter2, setCounter2),
            deleteProduct: () => deleteProduct(counter2, setCounter2),
            counterNum: counter2,
            counterCart: counterCart,
            setCounterCart: setCounterCart,
            bgColor: color,
          }}
        />
        <ProductsButtons
          productProps={{
            addProduct: () => addProduct(counter3, setCounter3),
            deleteProduct: () => deleteProduct(counter3, setCounter3),
            counterNum: counter3,
            counterCart: counterCart,
            setCounterCart: setCounterCart,
            bgColor: color,
          }}
        />
        <ProductsButtons
          productProps={{
            addProduct: () => addProduct(counter4, setCounter4),
            deleteProduct: () => deleteProduct(counter4, setCounter4),
            counterNum: counter4,
            counterCart: counterCart,
            setCounterCart: setCounterCart,
            bgColor: color,
          }}
        />
      </section>

      <button onClick={reset} className="App__reset">
        <i className="bx bx-reset"></i>
      </button>
    </div>
  );
}

export default App;
