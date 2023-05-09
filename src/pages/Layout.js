import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <div className="navbar">
        <ul>
          <li>
            <Link to="/">Kodu</Link>
          </li>
          <li>
            <Link to="/blogs">Postitused</Link>
          </li>
          <li>
            <Link to="/Services">Teenused</Link>
          </li>
          <li>
            <Link to="/UUdised">Uudised</Link>
          </li>
          <li>
            <Link to="/Pictures">Pildid</Link>
          </li>
          <li>
            <Link to="/Contacts">Kontaktid</Link>
          </li>
        </ul>
        </div>
      </nav>

      <Outlet  />
      <footer>
        Võta meiega ühendust <Link to="/Contacts">ühendust</Link>
      </footer>
    </>
  )
};

export default Layout;