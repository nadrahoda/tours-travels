// src/context/CardsContext.js
import React, { createContext, useContext } from 'react';
import cardsData from '../data/cardsData';

const CardsContext = createContext();

export const CardsProvider = ({ children }) => (
  <CardsContext.Provider value={cardsData}>{children}</CardsContext.Provider>
);

export const useCards = () => useContext(CardsContext);
