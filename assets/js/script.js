const heartIconEl = document.getElementById("heart-icon");
const likesEl = document.getElementById("likes");

const increaseLikeCount = () => {
    let likes = parseInt((likesEl.textContent));
    likes++
    likesEl.textContent = likes
}



heartIconEl.addEventListener("click", increaseLikeCount)