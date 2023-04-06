import React from "react";
import { Comment } from "./App";

interface CommentListProps {
  comments: Comment[];
  setComments: (comments: Comment[]) => void;
}

export const CommentList: React.FC<CommentListProps> = ({
  comments,
  setComments,
}) => {
  const handleEdit = (commentId: number) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, editable: true };
        }
        return comment;
      })
    );
  };

  const handleSave = (commentId: number, newText: string) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, text: newText, editable: false };
        }
        return comment;
      })
    );
  };

  const handleDelete = (commentId: number) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.editable ? (
            <div className="textarea-button-container">
              <textarea
                value={comment.text}
                className="comment-container"
                onChange={(e) =>
                  setComments(
                    comments.map((c) =>
                      c.id === comment.id ? { ...c, text: e.target.value } : c
                    )
                  )
                }
              />
              <div className="save-delete-container">
                <button onClick={() => handleSave(comment.id, comment.text)}>
                  Save
                </button>
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="button-delete"
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="comment-container">{comment.text}</div>
              <button onClick={() => handleEdit(comment.id)}>Edit</button>
              <button
                onClick={() => handleDelete(comment.id)}
                className="button-delete"
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
