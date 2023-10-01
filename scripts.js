function updateTime() {
  const timeElement = document.getElementById('time');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);
updateTime();

document.getElementById('menu').addEventListener('click', function() {
  const links = document.getElementById('links');
  links.style.display = links.style.display === 'block' ? 'none' : 'block';
});
