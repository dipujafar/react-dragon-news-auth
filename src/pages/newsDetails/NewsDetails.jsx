import Header from "../shared/Haeder/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/rightSide/RightSideNav";

const NewsDetails = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3 mt-8">
          <h1 className="text-4xl font-semi-bold">News Details</h1>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
