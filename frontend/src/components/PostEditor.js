import React, { useState } from 'react';

const PostEditor = () => {
  const [content, setContent] = useState('');

  return (
    <div>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
    </div>
  );
};

export default PostEditor;
