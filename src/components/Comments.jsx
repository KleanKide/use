import { use } from "react";
import './comments.css'

async function fetchComments() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  if (!response.ok) {
    const error = new Error("HTTP error");
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  return data;
}
const commentsPromise = fetchComments();


export default function Comments() {
  const comments = use(commentsPromise);
  return (
    <div className="comment-body">
      {comments.map((el) => (
        <div className="comment-section" key={el.id}>
          <div className="comment-section-name"><strong>Name:</strong> {el.name}</div>
          <div className="comment-section-email"><strong>Email:</strong> {el.email}</div>
          <div className="comment-section-body"><strong>Comment:</strong> {el.body}</div>
          </div>
      ))}
    </div>
  );
}
