import styles from "./Receipt.module.css";

type Dish = {
  name: string;
  price: number;
};

type ReceiptProps = {
  selectedDishes: Dish[];
};

function Receipt({ selectedDishes }: ReceiptProps) {
  const totalPrice = selectedDishes.reduce((acc, dish) => acc + dish.price, 0);

  return (
    <div className={styles.receipt}>
      <h2>Your Receipt</h2>
      <ul>
        {selectedDishes.map((dish) => (
          <li key={dish.name}>
            {dish.name} - ${dish.price}
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        <strong>Total: ${totalPrice}</strong>
      </div>
    </div>
  );
}

export default Receipt;
