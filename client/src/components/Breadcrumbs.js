import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";
import icons from "../utils/icons";
const { MdKeyboardArrowRight } = icons;
const Breadcrumbs = ({ title, category }) => {
  const routes = [
    { path: "/:category", breadcrumb: category },
    { path: "/", breadcrumb: "Home" },
    { path: "/:category/:id/:title", breadcrumb: title },
  ];
  const breadcrumbs = useBreadcrumbs(routes);
  console.log(breadcrumbs);
  return (
    <div className="text-sm ">
      {breadcrumbs
        ?.filter((el) => !el.match.route === false)
        .map(({ match, breadcrumb }) => (
          <Link key={match.pathname} to={match.pathname} className="flex">
            <span>{breadcrumb}</span>
            <MdKeyboardArrowRight />
          </Link>
        ))}
    </div>
  );
};

export default Breadcrumbs;
