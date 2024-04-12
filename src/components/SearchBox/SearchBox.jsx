// import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onSearch }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onSearch} />
    </div>
  );
};

export default SearchBox;
