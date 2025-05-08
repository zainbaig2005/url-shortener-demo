function shortenUrl() {
  const input = document.getElementById("longUrl").value;
  if (!input.startsWith("http")) {
    alert("Please enter a valid URL.");
    return;
  }

  // Generate fake short hash
  const hash = Math.random().toString(36).substring(2, 7);
  const shortUrl = `https://zainbaig2005.github.io/url-shortener-demo/?r=${hash}`;

  // Save in browser localStorage
  const redirects = JSON.parse(localStorage.getItem("redirects") || "{}");
  redirects[hash] = input;
  localStorage.setItem("redirects", JSON.stringify(redirects));

  document.getElementById("result").innerHTML = `
    Shortened URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>
    <br><small>(Will only work in this browser)</small>
  `;
}
