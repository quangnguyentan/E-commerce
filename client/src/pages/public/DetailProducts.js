import React, { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components";
import { useParams } from "react-router-dom";
import { apiGetProductById } from "../../apis";
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
    </div>
  );
};

export default DetailProducts;
