(async () => {
  // 1. Load the JSON file
  let blockedSites = [];
  try {
    const resp = await fetch(chrome.runtime.getURL("blocked_sites.json"));
    blockedSites = await resp.json();
    console.log('Blocked list:', blockedSites);
  } catch (err) {
    // Optionally exit early if you can’t load the list
    return;
  }

  // 2. Check the current hostname
  const currentUrl = window.location.hostname.toLowerCase();
  if (blockedSites.some(site => currentUrl.includes(site.toLowerCase()))) {
    // 3. Block/redirect
    document.documentElement.innerHTML = `
      <div style="display: flex; height: 100vh; align-items: center;
                  justify-content: center; text-align: center;
                  background-color: #111; color: white;
                  font-family: sans-serif;">
        <div>
          <h1>Stay Strong 💪</h1>
          <p>This site is blocked by <strong>Resilience</strong>.</p>
          <p>You're in control. Redirecting you to something better...</p>
        </div>
      </div>
    `;
    setTimeout(() => {
      window.location.href = 'https://www.nofap.com/';
    }, 4000);
  }
})();