import React from "react";

import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card.js";

import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Shahi Paneer",
    description: "Finest paneer and veggies",
    price: 200,
  },
  {
    id: "m2",
    name: "Butter Naan",
    description: "Tandoor Bread!",
    price: 20,
  },
  {
    id: "m3",
    name: "Raita",
    description: "Rich, creamy, with seasoning",
    price: 40,
  },
  {
    id: "m4",
    name: "Shahi Pulav",
    description: "Healthy...with lots of veggies & herbs",
    price: 150,
  },
  {
    id: "m5",
    name: "Chilli Chicken",
    description: "Fresh chicken & spicy sauce",
    price: 350,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul className={classes["meals ul"]}>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
