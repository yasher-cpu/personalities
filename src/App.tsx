import { useState } from 'react';
import { ArtistList } from './data.tsx';
import './App.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < ArtistList.length - 1;
  const hasPrevious = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0); 
    }
  }

  function handlePreviousClick() {
    if (hasPrevious) {
      setIndex(index - 1);
    } else {
      setIndex(ArtistList.length - 1); 
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let artist = ArtistList[index];

  return (
    <>
      <h1>Mark Yasher P. Santos</h1>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={handlePreviousClick} disabled={!hasPrevious}>
          Back
        </button>
        
        <button onClick={handleNextClick} disabled={!hasNext}>
          Next
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'} details
        </button>
      </div>

      <h2>
        <i>{artist.name}</i> - {artist.artist}
      </h2>

      <h3>
        ({index + 1} of {ArtistList.length})
      </h3>

      {showMore && <p>{artist.description}</p>} 

      <img
        src={artist.url}
        alt={artist.alt}
        style={{ width: '200px', height: '250px', objectFit: 'cover', borderRadius: '8px', margin: '10px' }}
      />
    </>
  );
}
