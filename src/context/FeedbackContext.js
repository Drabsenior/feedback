import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&_order=desc",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  const handleAdd = async (newFeedback) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };
  const handleEdit = async (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateItem = async (id, newitem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newitem),
    });
    const data = await response.json();
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...data } : { ...item }
      )
    );
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
    await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        handleAdd,
        handleDelete,
        handleEdit,
        updateItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
