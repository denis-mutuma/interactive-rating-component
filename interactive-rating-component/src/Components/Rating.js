import React from "react";
import starImage from "../Images/icon-star.svg"
import RatingButton from "./RatingButton";
import SubmitButton from "./SubmitButton";

export default function Rating({ onClick, submit, value, onSubmit }) {

    return (
        <div className="container">
            <div className="rating--content">
                <img src={starImage} className="circle" />
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your
                    support request. All feedback is appreciated
                    to help us improve our offering!
                </p>
                <div className="rating--scale">
                    <RatingButton value={1} onClick={onClick} />
                    <RatingButton value={2} onClick={onClick} />
                    <RatingButton value={3} onClick={onClick} />
                    <RatingButton value={4} onClick={onClick} />
                    <RatingButton value={5} onClick={onClick} />
                </div>
                <form onSubmit={onSubmit}>
                    {submit && <SubmitButton value={value} />}
                </form>
            </div >
        </div >
    );
}