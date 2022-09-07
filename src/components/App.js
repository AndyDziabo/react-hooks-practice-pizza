import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaSelect, setPizzaSelect] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then(res => res.json())
      .then(pizzas => setPizzas(pizzas));
  }, []);

  const handleSelect = (pizza => setPizzaSelect(pizza));

  function handlePizzaEdit(editedPizza) {
    const updatedPizzas = pizzas.map((pizza) => {
      if(pizza.id === editedPizza.id){
        return editedPizza;
      }else{
        return pizza;
      }
    });
    setPizzas(updatedPizzas);
  }

  function handleUpdateForm(key, value) {
    setPizzaSelect({...pizzaSelect, [key]: value});
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={pizzaSelect}  onUpdateForm={handleUpdateForm} onPizzaEdit={handlePizzaEdit} />
      <PizzaList pizzas={pizzas} onSelect={handleSelect} />
    </>
  );
}

export default App;
