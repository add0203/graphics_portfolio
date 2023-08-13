import React from "react";
import ReviewCard from "../reviewCard/ReviewCard";
import { reviews } from "../../data";
import "./Review.scss";

const Review = () => {
  return (
    <div className="review-container">
      <div className="heading">Review’s</div>
      <div className="review-body">
        {reviews.map((item) => (
          <ReviewCard
            key={item.id}
            img={item.img}
            head={item.head}
            subHead={item.subHead}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;
