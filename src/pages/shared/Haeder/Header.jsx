import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto mb-5" src={logo} alt="Logo Image" />
      <p className="text-lg text-gray-600 mb-2">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
