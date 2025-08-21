var follows = document.querySelectorAll('div[aria-label="Toggle to follow"]');
var delay = 1500;
var i = 0;
function unfollow() {
  if (i == follows.length) {
    return;
  }
  var remaining = (((follows.length - i) * (delay + 500)) / 1000).toFixed(0);
  console.log(
    "Unfollowing",
    i + 1,
    "of",
    follows.length + ", ~",
    remaining + "s",
    "remaining…"
  );
  follows[i].click();
  i = i + 1;
  setTimeout(unfollow, Math.floor(500 + Math.random() * delay * 2));
}
unfollow();
