import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackParamList, DrawerPrarmList } from "./NavigationTypes";

export type CatrgoriesScreenProps = NativeStackScreenProps<
  DrawerPrarmList,
  "Categories"
>;

export type MealDetailScreenProps = NativeStackScreenProps<
  NativeStackParamList,
  "MealDetail"
>;
