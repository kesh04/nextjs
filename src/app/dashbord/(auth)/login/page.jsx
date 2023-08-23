"use client"

import React from 'react'
import styles from "./page.module.css"
// import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";


const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };


  return (
    <div className={styles.container}>
       <form onSubmit={handleSubmit} className={styles.form}>
       
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Register</button>
        {/* {error && "Something went wrong!"} */}
      </form>
      <button onClick={()=>signIn("google")}>Login with Google</button>
      Login
    </div>
  )
}

export default Login
