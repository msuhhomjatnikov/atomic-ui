import './Color.sass';

export const BW_COLORS = ['white', 'black'] as const;
export type BlackAndWhiteColor = typeof BW_COLORS[number];

export const GRAY_COLORS = [
  'gray-110',
  'gray-120',
  'gray-135',
  'gray-150',
  'gray-200',
  'gray-300',
  'gray-450',
  'gray-550',
  'gray-700',
  'gray-900',
] as const;
export type GrayColor = typeof GRAY_COLORS[number];

export const BLUE_COLORS = [
  'blue-120',
  'blue-150',
  'blue-200',
  'blue-300',
  'blue-450',
  'blue-550',
  'blue-700',
  'blue-900',
] as const;
export type BlueColor = typeof BLUE_COLORS[number];

export const PURPLE_COLORS = [
  'purple-120',
  'purple-150',
  'purple-200',
  'purple-300',
  'purple-450',
  'purple-550',
  'purple-700',
  'purple-900',
] as const;
export type PurpleColor = typeof PURPLE_COLORS[number];

export const PINK_COLORS = [
  'pink-120',
  'pink-150',
  'pink-200',
  'pink-300',
  'pink-450',
  'pink-550',
  'pink-700',
  'pink-900',
] as const;
export type PinkColor = typeof PINK_COLORS[number];

export const RED_COLORS = [
  'red-120',
  'red-150',
  'red-200',
  'red-300',
  'red-450',
  'red-550',
  'red-700',
  'red-900',
] as const;
export type RedColor = typeof RED_COLORS[number];

export const ORANGE_COLORS = [
  'orange-120',
  'orange-150',
  'orange-200',
  'orange-300',
  'orange-450',
  'orange-550',
  'orange-700',
  'orange-900',
] as const;
export type OrangeColor = typeof ORANGE_COLORS[number];

export const YELLOW_COLORS = [
  'yellow-120',
  'yellow-150',
  'yellow-200',
  'yellow-300',
  'yellow-450',
  'yellow-550',
  'yellow-700',
  'yellow-900',
] as const;
export type YellowColor = typeof YELLOW_COLORS[number];

export const GREEN_COLORS = [
  'green-120',
  'green-150',
  'green-200',
  'green-300',
  'green-450',
  'green-550',
  'green-700',
  'green-900',
] as const;
export type GreenColor = typeof GREEN_COLORS[number];

export const ALL_COLORS = [
  BW_COLORS,
  GRAY_COLORS,
  BLUE_COLORS,
  PURPLE_COLORS,
  PINK_COLORS,
  RED_COLORS,
  ORANGE_COLORS,
  YELLOW_COLORS,
  GREEN_COLORS,
] as const;

export type Color =
  | BlackAndWhiteColor
  | GrayColor
  | BlueColor
  | PurpleColor
  | PinkColor
  | RedColor
  | OrangeColor
  | YellowColor
  | GreenColor;
