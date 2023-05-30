import { useContext } from "react";
import avaterImg from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../providers/AuthProvider";
export default function Avatar() {
  const { user } = useContext(AuthContext);
  return (
    <img
      className="rounded-full"
      src={user && user.photoURL ? user.photoURL : avaterImg}
      height={30}
      width={30}
      alt=""
    />
  );
}
