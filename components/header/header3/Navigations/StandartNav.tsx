import Link from "next/link";
import Logo from "../../../../components/miniComponents/Logo/Logo";
import styles from "./StandartNav.module.css";
// import { navItems } from "../NavArray";
import { navItems } from "../../../../controlFolder/control";
import { usePathname } from "next/navigation";

export default function StandartNav() {
  const pathname = usePathname();
  return (
    <nav className={styles.mainNavWrap}>
      <ul></ul>
      <ul className={styles.listWrap}>
        {navItems.map(({ title, homePage, url, button }) => (
          <li key={url}>
            <Link
              key={url}
              className={`${styles.navLink} ${
                pathname === url || (pathname.startsWith(url) && !homePage)
                  ? styles.active
                  : ""
              } ${button ? "button1" : ""}`}
              href={url}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
