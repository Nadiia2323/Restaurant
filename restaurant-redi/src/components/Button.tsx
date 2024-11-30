import styles from "./Button.module.css";

type ButtonProps = {
  onOrder: () => void;
  isSelected: boolean;
};

function Button({ onOrder, isSelected }: ButtonProps) {
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
