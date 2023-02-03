import { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import type {
  OverviewScreenRouteType,
  OverviewNavType,
} from "../interfaces/NavigationTypes";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen() {
  const route = useRoute<OverviewScreenRouteType>();
  const navigation = useNavigation<OverviewNavType>();
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )!.title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}
