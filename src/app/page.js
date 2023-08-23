import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";
export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>
        Better design for your 
      </h1>
      <p className={styles.desc}>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam temporibus fugiat enim!
      </p>
      <Button url="/portfolio" text="SEE Our Works" />
    </div>
    <div className={styles.item}>
      <Image src={Hero} alt="" className={styles.img} />
    </div>
  </div>
        
      
     
      
   
  );
}
