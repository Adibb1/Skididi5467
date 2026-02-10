"use client";

import Parse from "@/lib/parse";
import { GameAccountInfo } from "../interfaces/gameAccount";

export const addGameAccount = async (formData: GameAccountInfo) => {
  const GameAccount = Parse.Object.extend("GameAccount");
  const gameAccount = new GameAccount();

  // for (const key in formData) {
  //   gameAccount.set(key, formData[key]);
  // }

  try {
    await gameAccount.save({...formData, user: Parse.User.current()});
    return { msg: "Game account added successfully.", status: 200 };
  } catch (error: any) {
    return { error, status: 400 };
  }
};

export const myGameAccounts = async () => {
  const query = new Parse.Query("GameAccount");
  query.equalTo("user", Parse.User.current());
  const results = await query.find();
  const gameAccounts = results.map((res) => res.attributes)
  return gameAccounts
};
