import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
export default function Logo() {
  return (
    <div className="flex items-center">
      <Link to={"/"}>
        <img
          className="hidden md:block"
          src={logo}
          alt=""
          height={100}
          width={100}
        />
      </Link>
    </div>
  );
}
