import React, { useState } from 'react'


export interface CommentInputProps {
    onSubmit: (text:string) => void;
}

export const CommentInput: React.FC<CommentInputProps> = ({ onSubmit }) => {
  const [text, setText] = useState<string>(""); 
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  }
  return (
    <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="input-box" />
        <button className="comment-button">Submit</button>
    </form>
  )
}
