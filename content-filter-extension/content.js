const blockedSites = [
    "pornhub.com",
    "xvideos.com",
    "xhamster.com",
    "redtube.com",
    "xnxx.com",
    "brazzers.com"
  ];

  const currentUrl = window.location.hostname;

  if (blockedSites.some(site => currentUrl.includes(site))) {
    document.documentElement.innerHTML = ` 
    <div style="display: flex; height: 100vh; align-items: center; justify-content: center; text-align: center; background-color: #111; color: white; font-family: sans-serif;">
      <div>
        <h1> class="title_top_center">STOP! DANGER AHEAD!</h1>
        <h2>Stay Strong 💪</h1>
        <p>This site is blocked by <strong>Resilience</strong>.</p>
        <p>You're in control. Remember why you're fighting.</p>

        <h3>Resources to keep you on track:</h2>
        <a href= "https://nofap.com/">Visit nofap.com</a>
      </div>
    </div>
    `;

    
  }

// Skip scanning on blocked sites, filter out non-blocked sites
if (!blockedSites.some(site => currentUrl.includes(site))) {
  const classifyImages = async () => {
    const images = document.querySelectorAll('img');
    for (const img of images) {
      try {
        const response = await fetch(img.src);
        const blob = await response.blob();
        const formData = new FormData();
        formData.append('file', blob, 'image.jpg');

        const result = await fetch('http://localhost:5000/classify', {
          method: 'POST',
          body: formData
        });
        const data = await result.json();

        if (data.nsfw) {
          img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="300" height="200" fill="black"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">Image Blocked</text></svg>';
        }
      } catch (err) {
        console.error('Error classifying image:', err);
      }
    }
  };

  window.addEventListener('load', classifyImages);
}
