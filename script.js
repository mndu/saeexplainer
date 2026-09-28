const button = document.getElementById('copy-citation');
button.addEventListener('click', async () => {
  const code = document.getElementById('bibtex');
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(code.textContent);
    button.textContent = 'Copied!';
    status.textContent = 'BibTeX copied to clipboard.';
    setTimeout(() => { button.textContent = 'Copy BibTeX'; }, 2200);
  } catch {
    const range = document.createRange();
    range.selectNodeContents(code);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C (Windows) or ⌘C (Mac) to copy.';
  }
});
