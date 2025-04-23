document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('toggleSwitch');  // Use 'toggleSwitch' instead of 'incognitoBlock'
  
    // Ensure the checkbox exists before accessing it
    if (checkbox) {
      chrome.storage.sync.get(['incognitoBlock'], ({ incognitoBlock }) => {
        // Set the checkbox state based on the stored value
        checkbox.checked = !!incognitoBlock;
      });
  
      // Save the state of the checkbox when clicked
      document.getElementById('save').addEventListener('click', () => {
        const incog = checkbox.checked;
        chrome.storage.sync.set({ incognitoBlock: incog }, () => {
          alert('Settings saved!');
        });
      });
    } else {
      console.error("Element with ID 'toggleSwitch' not found.");
    }
  });
  