import { Link } from "react-router-dom";
import Logo from "../assets/images/lmarket-logo.png";

export const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between p-4 px-7 mx-auto ">
      <div className="main ">
        <Link to={"/"}>
          <div className="logo">
            <img className="h-10" src={Logo} alt="livestock marketplace logo" />
          </div>
        </Link>
      </div>
      <div className="menu">
        <ul className="flex flex-row gap-3 items-center">
          <Link to={"/profile"}>
            <li>Account</li>
          </Link>
          <Link to={"/cart"}>
            <li>Cart</li>
          </Link>
          <Link to={"/help"}>
            <li>Help</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
