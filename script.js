function shortenUrl() {
  const input = document.getElementById("longUrl").value;
  if (!input.startsWith("http")) {
    alert("Please enter a valid URL.");
    return;
  }

  // Simulate shortening using a fake hash
  const hash = Math.random().toString(36).substring(2, 7);
  const shortUrl = `https://yourgithubusername.github.io/url-shortener-demo/?r=${hash}`;

  document.getElementById("result").innerHTML = `
    Shortened URL: <a href="${input}" target="_blank">${shortUrl}</a>
    <br><small>(Redirect simulation only)</small>
  `;
}
