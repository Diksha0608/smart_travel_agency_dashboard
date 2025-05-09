// @ts-nocheck
import React from 'react';
import { Link } from 'react-router';

const TripCard =
  (id,name,tags,imageUrl,location,price):TripCardProps => {
  return (
    <Link> <img src={imageUrl} alt={name} /> </Link>
  );
};
export default TripCard;
