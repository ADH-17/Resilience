const blockedSites = [
    "pornhub.com",
    "xvideos.com",
    "xhamster.com",
    "redtube.com",
    "xnxx.com"
  ];

  const currentUrl = window.location.hostname;

  if (blockedSites.some(site => currentUrl.includes(site))) {
    //Block site or filter or redirect
    document.documentElement.innerHTML = ` 
    <div style="display: flex; height: 100vh; align-items: center; justify-content: center; text-align: center; background-color: #111; color: white; font-family: sans-serif;">
      <div>
        <h1>Stay Strong 💪</h1>
        <p>This site is blocked by <strong>Resilience</strong>.</p>
        <p>You're in control. Redirecting you to something better...</p>
      </div>
    </div>
    `;

    setTimeout(() => {
        window.location.href = "https://www.nofap.com/";

    }, 4000);
  }