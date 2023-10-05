import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className=" mt-7 flex items-center p-4 bg-gray-200 rounded">
      <button className="btn btn-sm btn-secondary">Latest</button>
      <Marquee pauseOnHover={true} direction="right">
        <Link to="/" className="ml-6">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to="/" className="ml-6">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to="/" className="ml-6">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
