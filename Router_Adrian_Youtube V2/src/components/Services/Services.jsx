import { Link, Outlet } from "react-router-dom";

export default function Services() {
  return (
    <div>
      <div> Nos services </div>
      <nav>
        <Link to="/services/marketing">Service marketing</Link>
        <Link to="/services/development">Service développement</Link>
      </nav>
      <Outlet/>
    </div>
  );
}
