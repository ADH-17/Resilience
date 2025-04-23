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
    //Block site or filter or redirect
    document.documentElement.innerHTML = ` 
    <div style="display: flex; height: 100vh; align-items: center; justify-content: center; text-align: center; background-color: #111; color: white; font-family: sans-serif;">
      <div>
        <h1>Stay Strong 💪</h1>
        <p>This site is blocked by <strong>Resilience</strong>.</p>
        <p>You're in control. Remember why you're fighting.</p>

        <h2>Resources to keep you on track:</h2>
        <a href= "https://nofap.com/">Visit nofap.com</a>
      </div>
    </div>
    `;

    
  }