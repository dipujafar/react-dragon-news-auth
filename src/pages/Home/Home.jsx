import Header from "../shared/Haeder/Header";
import Navbar from "../shared/Navbar/Navbar";
import LeftSideNav from "../shared/leftSide/LeftSideNav";
import RightSideNav from "../shared/rightSide/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2">
          <h1>News Coming Soon...</h1>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
