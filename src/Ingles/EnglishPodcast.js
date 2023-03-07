import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EnglishPodcasts.css';

const EnglishPodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      const response = await axios.get(
        'https://itunes.apple.com/search?term=english+podcast&media=podcast'
      );
      setPodcasts(response.data.results);
    };

    fetchPodcasts();
  }, []);

  return (
    <div className="container">
      <h1>English Podcasts</h1>
      <ul className="list-group">
        {podcasts.map((podcast) => (
          <li key={podcast.trackId} className="list-group-item">
            <div className="row">
              <div className="col-md-2">
                <img
                  src={podcast.artworkUrl100}
                  alt={podcast.collectionName}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10">
                <h3>{podcast.collectionName}</h3>
                <h4>{podcast.artistName}</h4>
                <a href={podcast.collectionViewUrl} target="_blank" rel="noreferrer">{podcast.collectionViewUrl}</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnglishPodcasts;
