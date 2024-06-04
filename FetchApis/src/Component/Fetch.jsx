import React, { useEffect, useState } from "react";
import axios from "axios";
import loading from "../assets/loading.gif";
import { ClipLoader, HashLoader } from "react-spinners";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    let response = await axios.get("https://api.escuelajs.co/api/v1/products");
    console.log(response.data)
    setData(response.data);
    setIsLoading(false);
  };

  const getCategories = async () => {
    setIsLoading(true);
    const responses = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    setCategoriesData(responses?.data);
    setIsLoading(false);
  };

  const handleClick = async (e) => {
    setIsLoading(true);
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${e.target.value}`
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HashLoader color="red" />
        </div>
      ) : (
        <div>
          {categoriesData?.map((item, key) => {
            return (
              <button value={item} onClick={handleClick}>
                {item}
              </button>
            );
          })}
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  border: "1px solid black",
                  margin: "5px 0px",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item?.images.map((image, key)=>{
                  return <img width={100} src={image} alt={item.title} />
                })}
                <div>
                  <div>name: {item.title}</div>
                  <div>category: {item.category.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Fetch;
