import { ViewStyle, TextStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export type baseWrapperType = {
  children: JSX.Element | JSX.Element[] | string;
};

export type CategoryGridTileProps = {
  title: string;
  color: string;
  onPress: () => void;
};

export type MealItemProps = {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
};

export type MealDetailsProps = {
  duration?: number;
  complexity?: string;
  affordability?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export type SubtitleProps = {
  children: string;
};

export type ListProps = {
  data?: string[];
};

export type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  color?: string;
  onPress: () => void;
};
