import styles from "./Navbar.module.css";

type SearchFieldProps = {
  dishesFilter: (query: string) => void;
};

function SearchField({ dishesFilter }: SearchFieldProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dishesFilter(event.target.value);
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        onChange={handleOnChange}
        placeholder="Search dishes..."
      />
    </>
  );
}

export default SearchField;
