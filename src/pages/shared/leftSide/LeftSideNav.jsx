import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1 className="text-xl font-semibold mb-5">All Category</h1>
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.id}`}
          key={category.id}
          className="block py-4 px-8"
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;
