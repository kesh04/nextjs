import Link from 'next/link'
import React from 'react'
import styles from "./Button.module.css"
const Button = ({text , url}) => {
  return (
    <Link href={url}>
    <button className={styles.container}>{text}</button>
  </Link>
  )
}

export default Button