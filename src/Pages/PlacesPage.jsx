

import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './st.css'; // Assuming you have your CSS styles imported here

export default function PlacesPage() {
  // Initialize places with liked state
  const [places, setPlaces] = useState([
    { id: 1, name: 'Place 1', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City E', cost: '$300', rooms: 2, distance: '25km', date: '2024-06-05' },
    { id: 2, name: 'Place 2', imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City B', cost: '$150', rooms: 3, distance: '10km', date: '2024-06-02' },
    { id: 3, name: 'Place 3', imageUrl: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City F', cost: '$350', rooms: 3, distance: '30km', date: '2024-06-06' },
    { id: 4, name: 'Place 4', imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City G', cost: '$400', rooms: 4, distance: '35km', date: '2024-06-07' },
    { id: 5, name: 'Place 5', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City E', cost: '$300', rooms: 2, distance: '25km', date: '2024-06-05' },
    { id: 6, name: 'Place 6', imageUrl: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City F', cost: '$350', rooms: 3, distance: '30km', date: '2024-06-06' },
    { id: 7, name: 'Place 7', imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City G', cost: '$400', rooms: 4, distance: '35km', date: '2024-06-07' },
    { id: 8, name: 'Place 8', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City E', cost: '$300', rooms: 2, distance: '25km', date: '2024-06-05' },
    { id: 9, name: 'Place 9', imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City B', cost: '$150', rooms: 3, distance: '10km', date: '2024-06-02' },
    { id: 10, name: 'Place 10', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City E', cost: '$300', rooms: 2, distance: '25km', date: '2024-06-05' },
    { id: 11, name: 'Place 11', imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City K', cost: '$600', rooms: 4, distance: '55km', date: '2024-06-11' },

    { id: 12, name: 'Place 12', imageUrl: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City F', cost: '$350', rooms: 3, distance: '30km', date: '2024-06-06' },
    { id: 13, name: 'Place 13', imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City G', cost: '$400', rooms: 4, distance: '35km', date: '2024-06-07' },

    { id: 14, name: 'Place 14', imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City B', cost: '$150', rooms: 3, distance: '10km', date: '2024-06-02' },

    { id: 15, name: 'Place 15', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City E', cost: '$300', rooms: 2, distance: '25km', date: '2024-06-05' },
    { id: 16, name: 'Place 16', imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City P', cost: '$850', rooms: 5, distance: '80km', date: '2024-06-16' },

    { id: 17, name: 'Place 17', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City E', cost: '$300', rooms: 2, distance: '25km', date: '2024-06-05' },
    { id: 18, name: 'Place 18', imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City G', cost: '$400', rooms: 4, distance: '35km', date: '2024-06-07' },
    { id: 19, name: 'Place 19', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City S', cost: '$1000', rooms: 4, distance: '95km', date: '2024-06-19' },
    { id: 20, name: 'Place 20', imageUrl: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City T', cost: '$1050', rooms: 5, distance: '100km', date: '2024-06-20' },
    { id: 21, name: 'Place 21', imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City U', cost: '$1100', rooms: 2, distance: '105km', date: '2024-06-21' },
    { id: 22, name: 'Place 22', imageUrl: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City F', cost: '$350', rooms: 3, distance: '30km', date: '2024-06-06' },

    { id: 23, name: 'Place 23', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City E', cost: '$300', rooms: 2, distance: '25km', date: '2024-06-05' },
    { id: 24, name: 'Place 24', imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City B', cost: '$150', rooms: 3, distance: '10km', date: '2024-06-02' },
    { id: 1, name: 'Place 1', imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', location: 'City E', cost: '$300', rooms: 2, distance: '25km', date: '2024-06-05' }  
]);

  // Handle like button click
  const handleLike = (id) => {
    const updatedPlaces = places.map(place => {
      if (place.id === id) {
        return { ...place, liked: !place.liked }; // Toggle liked state
      }
      return place;
    });
     setPlaces(updatedPlaces);
  };

  return (
    <div>
        <Nav/>     <div style={{ textAlign: 'center', fontSize: '2rem', color: 'grey', animation: 'fadeIn 2s ease-in-out' }}>
   <h1 style={{ color: 'red' }}>Welcome to Airbnb</h1>
  <p>Discover new and exciting places.</p>
    </div>
     <div className="grid-container">
     {places.map(place => (
          <div key={place.id} className="grid-item">
          <img src={place.imageUrl} alt={place.name} />
    <h3>{place.name}</h3>
            <div className="details">
        <p><strong>Location:</strong> {place.location}</p>
            <p><strong>Cost:</strong> {place.cost}</p>
      </div>
            <div className="details">
              <p><strong>Rooms:</strong> {place.rooms}</p>
        <p><strong>Distance:</strong> {place.distance}</p>
            </div>
      <button className={place.liked ? 'like-button liked' : 'like-button'} onClick={() => handleLike(place.id)}>
              
            </button>
          </div>
        ))}
      </div>
      
      <Link to="/liked" className="liked-link"></Link>
    </div>
  );
}

