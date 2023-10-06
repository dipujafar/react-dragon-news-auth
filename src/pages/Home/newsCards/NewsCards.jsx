import { Link } from "react-router-dom";

const NewsCards = ({ news }) => {
  const { image_url, title, details, _id } = news;
  return (
    <div className="card  bg-base-100 shadow-xl mb-10">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <Link to={`news/${_id}`} className="text-blue-700 font-bold">
              Red More...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCards;
