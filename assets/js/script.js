const heartIconEl = document.getElementById("heart-icon");
const likesEl = document.getElementById("likes");

//if the heart has not been clicked increase like by 1
// if it has been clicked, remove like when clicked again

const increaseLikeCount = () => {
  let likes = parseInt(likesEl.textContent);
  likesEl.classList.toggle("liked");
  likesEl.classList.toggle("not-liked");

  if (likesEl.classList.contains("not-liked")) {
    likes--;
    likesEl.textContent = likes;
    heartIconEl.classList.remove("red-heart");
  }

  if (likesEl.classList.contains("liked")) {
    likes++;
    likesEl.textContent = likes;
    heartIconEl.classList.add("red-heart");
  }
};

heartIconEl.addEventListener("click", increaseLikeCount);
