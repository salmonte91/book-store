import React, { useState } from 'react';
import { CommentInput } from './CommentInput';
import { CommentList } from './CommentList';

export interface Comment {
  id: number;
  text: string;
  editable: boolean;
}

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  
  const handleSubmit = (text:string) => {
    const newComment = {id: Date.now(), text, editable: false};
    setComments([...comments, newComment]);
  };

  return (
    <div className="main-container">
      <CommentList comments={comments} setComments={setComments} />
      <CommentInput onSubmit={handleSubmit} />
    </div>
  );
}

export default App;