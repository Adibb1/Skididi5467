export interface GameAccountInfo {
  description: string;
  game: string;
  level: string;
  price: string;
  rank: string;
  title: string;
  [key: string]: string | number;
}
