let p = fetch('http://localhost:3001/posts')
p
  .then((response) => {
    console.log('response:', response);
    return response.json();
  })
  .then(posts => {
    console.log('posts:', posts);
  })
  .catch((error) => {
    console.log('error:', error);

  });
