// Handles the flagging of already blocked sites

let blocked_sites = [];

// This event fires when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
    // Fetch the blocked sites data from the file
    fetch(chrome.runtime.getURL("blocked_sites.json"))
        .then(response => response.json())  // Don't forget the parentheses here
        .then(data => {
            // Output for debugging
            console.log(data);
            blocked_sites = data;  // Store the blocked sites data

            // Add blocking rules based on the fetched data
            const rules = blocked_sites.map((site, index) => ({
                id: index + 1,
                priority: 1,
                action: { type: "block" },
                condition: {
                    urlFilter: site.url,
                    resourceTypes: ["main_frame", "sub_frame"]
                }
            }));

            // Update rules dynamically using Declarative Net Request API
            chrome.declarativeNetRequest.updateDynamicRules({
                addRules: rules,
                removeRules: []  // Optionally, remove any old rules if necessary
            });
        })
        .catch(error => {
            //console.error("Error fetching blocked_sites.json:", error);
        });
});
