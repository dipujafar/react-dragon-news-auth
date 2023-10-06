import { useLoaderData } from "react-router-dom";
import Header from "../shared/Haeder/Header";
import Navbar from "../shared/Navbar/Navbar";
import LeftSideNav from "../shared/leftSide/LeftSideNav";
import RightSideNav from "../shared/rightSide/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import NewsCards from "./newsCards/NewsCards";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
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
          {news.map((aNews) => (
            <NewsCards key={aNews._id} news={aNews}></NewsCards>
          ))}
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
