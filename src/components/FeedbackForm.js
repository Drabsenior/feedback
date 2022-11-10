import { useState, useContext, useEffect } from "react";

import RatingComponent from "./RatingComponent";
import Button from "./shared/Button";
import Card from "./shared/Card";
import { FeedbackContext, feedbackEdit } from "../context/FeedbackContext";

const FeedbackForm = () => {
  const { handleAdd, updateItem, feedbackEdit } = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const handleInputChange = (e) => {
    if (text === "") {
      setIsDisabled(true);
      setMessage("");
    } else if (text !== "" && text.trim().length <= 10) {
      setIsDisabled(true);
      setMessage("characters must be longer than 10 characters");
    } else {
      setIsDisabled(false);
      setMessage("");
    }
    setText(e.target.value);
  };
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setIsDisabled(false);
      setRating(feedbackEdit.item.rating);
      setText(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      text,
      rating,
    };
    if (feedbackEdit.edit === true) {
      updateItem(feedbackEdit.item.id, newFeedback);
    } else {
      handleAdd(newFeedback);
    }

    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you like to rate our service ?</h2>
        <RatingComponent
          rating={rating}
          select={(rating) => setRating(rating)}
        />
        <div className="input-group">
          <input
            value={text}
            onChange={handleInputChange}
            type="text"
            placeholder="Write a review here"
          />
          <Button type="submit" isDisabled={isDisabled}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
};

export default FeedbackForm;
