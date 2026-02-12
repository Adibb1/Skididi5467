"use client";

import Parse from "@/lib/parse";
import { Game } from "../interfaces/games";

export const addGame = async (formData: Game) => {
  const Game = Parse.Object.extend("Games");
  const game = new Game();

  try {
    await game.save({...formData});
    return { msg: "Game added successfully.", status: 200 };
  } catch (error: any) {
    return { error, status: 400 };
  }
};

export const allGames = async () => {
  const query = new Parse.Query("Games");
  const results = await query.find();
  const games = results.map((res) => res.attributes)
  return games
};
