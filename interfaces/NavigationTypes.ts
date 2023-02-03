import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NativeStackParamList = {
  DrawerScreen: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

export type DrawerPrarmList = {
  Categories: undefined;
  Favorites: undefined;
};

export type OverviewScreenRouteType = RouteProp<
  NativeStackParamList,
  "MealsOverview"
>;

export type OverviewNavType = NativeStackNavigationProp<
  NativeStackParamList,
  "MealsOverview"
>;

export type MealDetailNavType = NativeStackNavigationProp<
  NativeStackParamList,
  "MealDetail"
>;
