import React from "react";

import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Shahi Paneer',
      description: 'Finest paneer and veggies',
      price: 200,
    },
    {
      id: 'm2',
      name: 'Butter Naan',
      description: 'Tandoor Bread!',
      price: 20,
    },
    {
      id: 'm3',
      name: 'Raita',
      description: 'Rich, creamy, with seasoning',
      price: 40,
    },
    {
      id: 'm4',
      name: 'Shahi Pulav',
      description: 'Healthy...with lots of veggies & herbs',
      price: 150,
    },
  ];
  
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);
    return <section className={classes.meals}>
        <ul>
            {mealsList}
        </ul>
    </section>
};

export default AvailableMeals;