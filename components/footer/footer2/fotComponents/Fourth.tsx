import styles from "./Fourth.module.css";
import Link from "next/link";
import infoJson from "../../../../json/info.json";

const images = [
  //footer instagram images
  "https://github.com/levanydze/restaurant2024support/blob/main/menuImages/pizza/pizza2.png?raw=true",
  "https://github.com/levanydze/restaurant2024support/blob/main/menuImages/pizza/pizza3.png?raw=true",
  "https://raw.githubusercontent.com/levanydze/restaurant2024support/main/menuImages/pizza/pizza4.webp",
  "https://github.com/levanydze/restaurant2024support/blob/main/menuImages/pizza/pizza1.png?raw=true",
  "https://raw.githubusercontent.com/levanydze/restaurant2024support/main/menuImages/pizza/pizza4.webp",
  "https://github.com/levanydze/restaurant2024support/blob/main/menuImages/pizza/pizza2.png?raw=true",
  "https://github.com/levanydze/restaurant2024support/blob/main/menuImages/pizza/pizza2.png?raw=true",
  "https://github.com/levanydze/restaurant2024support/blob/main/menuImages/pizza/pizza2.png?raw=true",
];

export default function Fourth() {
  const { instagramUrl } = infoJson;

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Instagram</h2>
      <div className={styles.imageWrapper}>
        {images.slice(0, 6).map((img, index) => (
          <img
            key={index}
            className={styles.image}
            alt={`Instagram photo`}
            width={70}
            height={70}
            src={img}
          />
        ))}
      </div>

      <Link
        href={instagramUrl}
        passHref
        target="_blank"
        rel="noopener noreferrer"
        className={styles.viewMoreLink}
      >
        <p>View More Photos</p>
      </Link>
    </section>
  );
}
