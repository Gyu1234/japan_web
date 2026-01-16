document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('likeBtn');
  const icon = document.getElementById('likeIcon');

  if (!btn || !icon) return;

  btn.addEventListener('click', () => {
    const liked = btn.classList.toggle('btn-danger');
    btn.classList.toggle('btn-outline-danger', !liked);

    icon.classList.toggle('bi-heart-fill', liked);
    icon.classList.toggle('bi-heart', !liked);
  });
});
