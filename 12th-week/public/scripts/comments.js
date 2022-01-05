const loadCommentsBtnElement = document.getElementById("load-comments-btn");

async const fetchCommentsforPost = () => {
  const postId = loadCommentsBtnElement.dataset.postid;
  const response = await fetch(`/posts/${postId}/comments`);
};

loadCommentsBtnElement.addEventListener("click", fetchCommentsforPost);
