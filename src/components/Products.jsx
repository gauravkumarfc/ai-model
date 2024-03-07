import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
  }

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      setLoading(true);
      const simulatedData = [
        {
          id: 1,
          title: "Generate images",
          price: 22.3,
          description:
          "Models that generate images from text prompts",
          category: "image",
          image:
            "https://tjzk.replicate.delivery/models_models_cover_image/61004930-fb88-4e09-9bd4-74fd8b4aa677/sdxl_cover.png",
          rating: { rate: 4.1, count: 259 },
          link: "https://replicate.com/collections/text-to-image"
        },
        {
          id: 1,
          title: "Generate videos",
          price: 22.3,
          description:
            "These models can generate and edit videos from text prompts and images",
          category: "videos",
          image:
            "https://tjzk.replicate.delivery/models_models_featured_image/d56e8888-a591-4edd-a9d3-2285b2ab66b4/1mrNnh8.jpg",
          rating: { rate: 4.1, count: 259 },
          link:"https://replicate.com/collections/text-to-video"
        },
        {
          id: 1,
          title: "Train a language model",
          price: 22.3,
          description:
            "These large language models can be fine-tuned for custom tasks using the Replicate training API.",
          category: "language model",
          image:
            "https://tjzk.replicate.delivery/models_models_featured_image/70238cb4-e24b-43ed-96e0-5f7d98f9cc3f/future-llama-70b-chat.jpg",
          rating: { rate: 4.1, count: 259 },link:"https://replicate.com/collections/trainable-language-models"
        },
        {
          id: 1,
          title: "Generate music",
          price: 22.3,
          description:
            "These models generate and modify music from text prompts and raw audio",
          category: "music",
          image:
            "https://tjzk.replicate.delivery/models_models_featured_image/a921a8b3-3e9e-48ef-995c-29143ea11bec/musicgen.jpeg",
          rating: { rate: 4.1, count: 259 },link:"hhttps://replicate.com/collections/audio-generation"
        },
        {
          id: 1,
          title: "Make 3D stuff",
          price: 22.3,
          description:
            "",
          category: "3D",
          image:
            "https://replicate.delivery/pbxt/H0Canvu42iL0B1NCbZBeAjrruuy8PlNsgo1EDTlJpgjDZZdIA/out_%7Bi%7D.gif",
          rating: { rate: 4.1, count: 259 },link:"https://replicate.com/collections/3d-model"
        },
        // Add more products here...
      ];

      if (componentMounted) {
        setData(simulatedData);
        setFilter(simulatedData);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        {/* Skeleton loading code */}
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                className="card-img-top p-3"
                src={product.image}
                alt="Card"
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.title.substring(0, 12)}...
                </h5>
                <p className="card-text">
                  {product.description.substring(0, 90)}...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                {/* <li className="list-group-item lead">$ {product.price}</li> */}
              </ul>
              <div className="card-body">
                <Link to={product.link} className="btn btn-dark m-1">
                  Try me
                </Link>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Models</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
