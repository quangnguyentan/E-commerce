import React, { memo } from "react";
import Slider from "react-slick";
import { Product } from "./";
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};
const CustomSlider = ({ product, activedTab }) => {
  return (
    <>
      {product && (
        <Slider {...settings}>
          {product?.map((el) => (
            <Product
              key={el._id}
              pid={el.id}
              productData={el}
              isNew={activedTab === 1 ? true : false}
            />
          ))}
        </Slider>
      )}
    </>
  );
};

export default memo(CustomSlider);
