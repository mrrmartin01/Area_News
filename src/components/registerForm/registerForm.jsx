"use client";

import { useState } from "react";
import { register } from "../../lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";

export const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  return (
    
    <form action={register} className={styles.form}>
      <input type="text" placeholder="username" name="username" />
      <input type="text" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button>Register</button>
    </form>
  );
};
