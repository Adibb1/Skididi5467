"use client";

import Parse from "@/lib/parse";
import { UserLogin } from "../interfaces/auth";

export const signUp = async (formData: UserLogin) => {
  const { username, password, email } = formData;
  const user = new Parse.User();
  user.set("username", username);
  user.set("password", password);
  user.set("email", email);

  // other fields can be set just like with Parse.Object
  // user.set("phone", "415-392-0202");
  try {
    await user.signUp();
    return { msg: "User signed up successfully.", status: 200 };
  } catch (error: any) {
    return { error, status: 400 };
  }
};

export const logIn = async (formData: UserLogin) => {
  try {
    const { email, password } = formData;
    const user = await Parse.User.logIn(email, password);
    // find a way to remove later
    // Parse.User.enableUnsafeCurrentUser();
    // await Parse.User.become(user.getSessionToken()!);
    return {
      msg: "User logged in successfully.",
      token: user.getSessionToken(),
      status: 200,
    };
  } catch (error: any) {
    return { error, status: 400 };
  }
};

export const logOut = async () => {
  try {
    await Parse.User.logOut();
    return {
      msg: "User logged out successfully.",
      status: 200,
    };
  } catch (error: any) {
    return { error, status: 400 };
  }
};

export const getCurrentUser = async () => {
  const user = Parse.User.current();
  // const query = new Parse.Query("_Session");
  // query.equalTo("sessionToken", token);
  // const session = await query.first({ useMasterKey: true });

  // const user = session?.get("user");
  // await user.fetch({ useMasterKey: true })
  if (user) {
    return {
      id: user.id,
      username: user.get("username"),
      email: user.get("email"),
      createdAt: user.createdAt,
    };
  }
  return null;
};
