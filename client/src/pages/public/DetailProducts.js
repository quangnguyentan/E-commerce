import React, { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components";
import { useParams } from "react-router-dom";
import { apiGetProductById } from "../../apis";
import Slider from "react-slick";
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};
const DetailProducts = () => {
  const { pid, title, category } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProductData = async () => {
    const response = await apiGetProductById(pid);

    if (response.success) {
      setProduct(response.productDatas);
    }
  };
  useEffect(() => {
    if (pid) {
      fetchProductData();
    }
  }, [pid]);
  return (
    <div className="w-full">
      <div className="h-[81px] flex justify-center items-center bg-gray-100 ">
        <div className="w-main flex flex-col">
          <h3 className="font-semibold text-[18px]"> {title}</h3>
          <Breadcrumbs title={title} category={category} />
        </div>
      </div>
      <div className="w-main m-auto mt-4 flex">
        <div className="w-2/5 flex flex-col gap-4">
          <img
            className="h-[458px] w-[458px] object-cover border"
            src={product?.images}
            alt="product"
          />
          <div className="w-[458px] ">
            <Slider className="image-slider" {...settings}>
              {product?.imagescat?.map((el) => (
                <img
                  src={el}
                  alt="sub-product"
                  className="h-[143px] w-[143px] object-cover border"
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-2/5">prices</div>
        <div className="w-1/5">information</div>
      </div>
      <div className="h-[500px] w-full"></div>
    </div>
  );
};

export default DetailProducts;
