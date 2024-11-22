import './Home.css';
import React, {useState} from 'react';

export function Home() {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        // Handle the search logic here
        console.log(`Searching weather for ${city}`);
      };

    return <div>
      <h1 className="header">Home</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
}
