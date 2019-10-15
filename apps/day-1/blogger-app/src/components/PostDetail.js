import React from 'react';

const PostDetail = (props) => {
  return <div>
    <div>
      Title: {props.post.title}
    </div>
    <div>
      Body: {props.post.body}
    </div>
    <div>
      Author: {props.post.author}
    </div>
    <div>
      Category: {props.post.category}
    </div>
    <hr />
  </div>;
};

export default PostDetail;
