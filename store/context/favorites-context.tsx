import { useState, createContext } from "react";

import { baseWrapperType } from "../../interfaces/ComponentsTypes";

type FavoritesContextType = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>(
  {} as FavoritesContextType
);

function FavoriteContextProvider({ children }: baseWrapperType) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);
  const addFavorite = (id: string) => {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  };
  const removeFavorite = (id: string) => {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };
  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoriteContextProvider;
