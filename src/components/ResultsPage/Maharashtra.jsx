import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import indiaLocations from '../../india_locations.json'; // Your location data

const ResultsPage = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Filter results based on the query
    const filteredResults = [];

    indiaLocations.forEach(location => {
      // Check if state matches the query
      if (location.state.toLowerCase().includes(query.toLowerCase())) {
        filteredResults.push(location);
      }
      // Check if city or tourist spot matches the query
      location.cities.forEach(city => {
        if (city.toLowerCase().includes(query.toLowerCase())) {
          filteredResults.push(location);
        }
      });

      location.touristSpots.forEach(spotObj => {
        const cityName = Object.keys(spotObj)[0];
        spotObj[cityName].forEach(spot => {
          if (spot.toLowerCase().includes(query.toLowerCase())) {
            filteredResults.push(location);
          }
        });
      });
    });

    setResults(filteredResults);
    setLoading(false);
  }, [query]);

  return (
    <div className="results-page">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>Results for "{query}"</h2>
          {results.length > 0 ? (
            <div>
              {results.map((location, index) => (
                <div key={index}>
                  <h3>{location.state}</h3>
                  <ul>
                    {location.cities.map((city, cityIndex) => (
                      <li key={cityIndex}>{city}</li>
                    ))}
                    {location.touristSpots.map((spotObj, spotIndex) => (
                      <div key={spotIndex}>
                        <h4>{Object.keys(spotObj)[0]}</h4>
                        <ul>
                          {spotObj[Object.keys(spotObj)[0]].map((spot, spotIdx) => (
                            <li key={spotIdx}>{spot}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div>No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResultsPage;
