import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './App.css';

interface Item {
  [key: string]: string | number;
}

const ItemList = () => {
  const [randomlySelected, setRandomlySelected] = useState<Item | null>(null);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState<Item | null>(null);
  const [Items, setItems] = useState<Item[]>([]); // Use state to store the items
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    async function loadItemsFromCSV() {
      try {
        const response = await fetch('/list_injuries.csv');
        const text = await response.text();
        const result = Papa.parse(text, { header: true, skipEmptyLines: true }) as Papa.ParseResult<Item>; // Cast to Item[]
        setItems(result.data);
      } catch (error) {
        console.error('Error loading CSV:', error);
      }
    }
    loadItemsFromCSV();
  }, []);

  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * Items.length);
    setRandomlySelected(Items[randomIndex]);
    setShowPopup(true);
    setSearchResult(null);
  };

  const closePopup = () => {
    setShowPopup(false);
  }

  const handleSearch = () => {
    const idToSearch = parseInt(searchText, 10);
    let foundItem = Items.find((item) => item.ID == idToSearch);

    if (foundItem) {
      setSearchResult(foundItem);
      setShowPopup(true);
    } else {
      setSearchResult(null);
    }
  };

  const tableHeaders = Items.length > 0 ? Object.keys(Items[0]) : [];

  return (
    <>
      <button onClick={getRandomItem}>Random item</button>
      {showPopup && randomlySelected && (
        <div className="popup">
          <span className="popup-close" onClick={closePopup}>Close</span>
          {tableHeaders.map((header) => (
            <p key={header}>
              {header}: {randomlySelected[header]}
            </p>
          ))}
        </div>
      )}

      <hr />

      <div className="search-container">
        <label htmlFor="Search">
          Search: <input type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)} />
        </label>
        <button type="submit" onClick={handleSearch}>Confirm</button>
      </div>
      
      {showPopup && searchResult && (
        <div className="popup">
          <span className="popup-close" onClick={closePopup}>Close</span>
          {tableHeaders.map((header) => (
            <p key={header}>
              {header}: {searchResult[header]}
            </p>
          ))}
        </div>
      )}

      <hr />

      <table className="list">
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Items.map((item) => (
            <tr key={item.ID}>
              {tableHeaders.map((header) => (
                <td key={header}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  return (
    <>
      <ItemList />
    </>
  )
}

export default App;
