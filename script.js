function shortenUrl() {
  const input = document.getElementById("longUrl").value;
  if (!input.startsWith("http")) {
    alert("Please enter a valid URL starting with http or https.");
    return;
  }

  // Generate a fake short hash
  const hash = Math.random().toString(36).substring(2, 7);
  const shortUrl = `https://zainbaig2005.github.io/url-shortener-demo/?r=${hash}`;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p>Shortened URL:</p>
    <input type="text" id="shortLink" value="${shortUrl}" readonly style="width: 350px;" />
    <button onclick="copyLink()">Copy</button>
    <br><small>(Redirect simulation only. This link won't actually work unless it's hardcoded.)</small>
  `;
}

function copyLink() {
  const shortInput = document.getElementById("shortLink");
  shortInput.select();
  shortInput.setSelectionRange(0, 99999); // For mobile
  document.execCommand("copy");
  alert("Copied to clipboard!");
}
