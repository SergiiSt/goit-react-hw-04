export default function SearchBar({ onSearch }) {
  const handleInputChange = event => {
    event.preventDefault();
    onSearch(event.target.value);
    console.log(event.target.value);
  };

  return (
    <header>
      <form>
        <input
          type="text"
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
