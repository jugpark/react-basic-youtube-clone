import styles from "./search_header.module.css";
import React, { useRef } from "react";

const SearchHeader = ({ onSearch }) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);

    }
    const onClick = (event) => {
        handleSearch();
    };

    const onKeyPress = (event) => {
        if(event.key === "Enter") {
            handleSearch();
        }
    }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.image} src="/images/logo.png" alt="logo" />
        <h1 className={styles.logo}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonimg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;
