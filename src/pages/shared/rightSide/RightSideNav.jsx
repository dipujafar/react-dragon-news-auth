import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone1 from "../../../assets/qZone1.png";
import Qzone2 from "../../../assets/qZone2.png";
import Qzone3 from "../../../assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 mb-7">
        <h1 className="text-xl font-semibold mb-6 text-start">Login</h1>
        <button className="btn btn-outline btn-info w-full mb-2">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Google
        </button>
      </div>
      <div className="p-4 mb-7">
        <h1 className="text-xl font-semibold mb-6 text-start">Find us On</h1>
        <a
          href=""
          className="p-4 flex items-center gap-3 text-lg border rounded-t-lg"
        >
          <FaFacebook></FaFacebook>
          Facebook
        </a>
        <a href="" className="p-4 flex items-center gap-3 text-lg border-x ">
          <FaTwitter></FaTwitter>
          Facebook
        </a>
        <a
          href=""
          className="p-4 flex items-center gap-3 text-lg border rounded-b-lg"
        >
          <FaInstagram></FaInstagram>
          Facebook
        </a>
      </div>
      {/* Q Zone */}

      <div className="p-4 mb-7">
        <h1 className="text-xl font-semibold mb-6 text-start">Q Zone</h1>
        <img src={Qzone1} alt="" />
        <img src={Qzone2} alt="" />
        <img src={Qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
