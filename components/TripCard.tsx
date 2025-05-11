// @ts-nocheck
import React from 'react';
import { Link, useLocation } from 'react-router';

const TripCard = ({id,name,tags,imageUrl,location,price}:TripCardProps) => {
  
  const path = useLocation();

  return (
    <Link  
    to={path.pathname === '/' 
    || path.pathname.startsWith('/travel') 
    ? `/travel/${id}` : `/trips/${id}` } className='trip-card' > 
  <img src={imageUrl} alt={name} />
    
    <article>
      <h2>{name}</h2>
    </article>
    <figure>
      <img src='/assets/icons/location-mark.svg' alt='location' className='size-4'/>
      <figcaption>{location}</figcaption>
    </figure>
    <div className="mt-5 pl=[18px] pr-3.8 pb-5"></div>
    </Link>
  );
};
export default TripCard;
