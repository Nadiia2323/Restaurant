import styles from "./Button.module.css";

function Button({ onOrder, isSelected }) {
  const buttonClass = isSelected ? styles.removeOrder : styles.dishButton;
  return (
    <>
      <button onClick={onOrder} className={buttonClass}>
        {isSelected ? "Remove from Order" : "Add to Order"}
      </button>
    </>
  );
}

export default Button;
