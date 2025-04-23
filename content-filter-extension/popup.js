document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['incognitoBlock'],({ incognitoBlock}) => {
        document.getElementById('incognitoBlock').checked = !!incognitoBlock;

    });
});

document.getElementById('save').addEventListener('click', () => {
    const incog = document.getElementById('incognitoBlock').checked;
    chrome.storage.sync.set({ incognitoBlock: incog }, () => {
        alert('Settings saved!');
    });
});