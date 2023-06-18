import Link from "next/link";
import navStyles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={navStyles.customNavbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
