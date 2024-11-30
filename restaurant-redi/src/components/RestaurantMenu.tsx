import { useState } from "react";
import rawMenu from "../db/dishes.json";
import Dish from "./Dish";
import styles from "./Dish.module.css";
import Navbar from "./Navbar";
import SearchField from "./SearchField";
import Receipt from "./Receipt";

export type Dish = {
  image: string;
  name: string;
  description: string;
  price: number;
};

export type DishArray = Dish[];

function RestaurantMenu() {
  const [dishes, setDishes] = useState<DishArray>(rawMenu);
  const [selectedDishes, setSelectedDishes] = useState<
    { name: string; price: number }[]
  >([]);
  const handleOrder = (name: string, price: number) => {
    const isDishSelected = selectedDishes.some((dish) => dish.name === name);
    if (!isDishSelected) {
      setSelectedDishes([...selectedDishes, { name, price }]);
    } else if (isDishSelected) {
      setSelectedDishes(selectedDishes.filter((dish) => dish.name !== name));
    }
  };

  const handleDishesFilter = (query: string) => {
    const filteredDishes = rawMenu.filter((dish) =>
      dish.name.toLowerCase().includes(query.toLowerCase())
    );
    setDishes(filteredDishes);
  };

  return (
    <>
      <div className={styles.flagbackground}>
        <Navbar />
        <SearchField dishesFilter={handleDishesFilter} />

        <div>
          <h1>Menu</h1>
          <div className={styles.menucontainer}>
            <div className={styles.maincontainer}>
              {dishes.map((dish) => (
                <Dish
                  description={dish.description}
                  key={dish.name}
                  name={dish.name}
                  image={dish.image}
                  price={dish.price}
                  onOrder={() => handleOrder(dish.name, dish.price)}
                  isSelected={selectedDishes.some(
                    (selectedDish) => selectedDish.name === dish.name
                  )}
                />
              ))}
            </div>
            {selectedDishes.length > 0 && (
              <Receipt selectedDishes={selectedDishes} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantMenu;
