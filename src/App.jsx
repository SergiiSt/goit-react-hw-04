// import { fetchImages } from './articles-api';
import { useState } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const [query, setQuery] = useState(' ');
  const handleSearch = newSearch => {
    setQuery(newSearch);
  };

  return <SearchBar query={query} onSearch={handleSearch} />;
}

export default App;
