// import React from "react";
import styles from "./Dish.module.css";
import Button from "./Button";

type DishProps = {
  name: string;
  image: string;
  price: number;
  description: string;
  isSelected: boolean;

  onOrder: () => void;
};

function Dish({
  name,
  image,
  price,
  description,
  onOrder,
  isSelected,
}: DishProps) {
  return (
    <div className={styles.dishContainer}>
      <div className={styles.dishImageContainer}>
        <img src={image} alt={name} className={styles.dishImage} />
        <div className={styles.imageOverlay}>{description}</div>
      </div>
      <h3>{name}</h3>
      <p>${price}</p>
      <Button onOrder={onOrder} isSelected={isSelected} />
    </div>
  );
}

export default Dish;
