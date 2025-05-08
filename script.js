function shortenUrl() {
  const input = document.getElementById("longUrl").value;
  if (!input.startsWith("http")) {
    alert("Please enter a valid URL starting with http or https.");
    return;
  }

  const hash = Math.random().toString(36).substring(2, 7);
  const shortUrl = `${window.location.origin}${window.location.pathname}?r=${hash}`;

  // Save mapping in localStorage
  const redirects = JSON.parse(localStorage.getItem("redirects") || "{}");
  redirects[hash] = input;
  localStorage.setItem("redirects", JSON.stringify(redirects));

  document.getElementById("result").innerHTML = `
    <p>Shortened URL:</p>
    <input type="text" id="shortLink" value="${shortUrl}" readonly style="width: 350px;" />
    <button onclick="copyLink()">Copy</button>
    <br><small>(Will work only in this browser/device)</small>
  `;
}

function copyLink() {
  const shortInput = document.getElementById("shortLink");
  shortInput.select();
  shortInput.setSelectionRange(0, 99999); // For mobile
  document.execCommand("copy");
  alert("Copied to clipboard!");
}
