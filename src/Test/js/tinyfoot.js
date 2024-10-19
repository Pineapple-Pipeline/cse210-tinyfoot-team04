class Footnotes {
    constructor() {
        this.footnoteLinks = document.querySelectorAll('[data-footnote]');
        this.init();
    }

    init() {
        this.footnoteLinks.forEach(link => {
            link.addEventListener('click', (event) => this.toggleFootnote(event, link));
        });

        const footnoteContainer = document.createElement('div');
        footnoteContainer.id = 'footnote-container';
        document.body.appendChild(footnoteContainer);

        document.addEventListener('click', (event) => {
            if (!event.target.closest('[data-footnote]') && !event.target.closest('#footnote-container')) {
                footnoteContainer.style.display = 'none';
                removeBlur()
            }
        });
    }

    toggleFootnote(event, link) {
        event.preventDefault();
        const footnoteId = link.getAttribute('data-footnote');
        const footnoteText = document.querySelector(`#footnote-${footnoteId}`).innerHTML;
        const footnoteContainer = document.getElementById('footnote-container');

        if (footnoteContainer.style.display === 'block') {
            // Close the footnote if it's already open
            footnoteContainer.style.display = 'none';
            removeBlur()
        } else {
            // Open the footnote
            footnoteContainer.innerHTML = footnoteText;
            const rect = link.getBoundingClientRect();
            footnoteContainer.style.left = `${rect.left + window.scrollX}px`;
            footnoteContainer.style.top = `${rect.bottom + window.scrollY}px`;
            footnoteContainer.style.display = 'block';
            applyBlur()

            // add copy button
            const copyButton = document.createElement('button');
            copyButton.innerHTML = 'Copy';
            copyButton.classList.add('copy-button');
            copyButton.addEventListener('click', () => {
                navigator.clipboard.writeText(footnoteText).then(() => {
                    copyButton.innerHTML = 'Copied!';
                    setTimeout(() => {
                        copyButton.innerHTML = 'Copy';
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            });            
            footnoteContainer.appendChild(document.createElement('br'));
            footnoteContainer.appendChild(copyButton);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Footnotes();
});

function createBlurContainer() {
    const blurContainer = document.createElement('div');
    blurContainer.classList.add('blur-container');
    document.body.appendChild(blurContainer);
  }
  
function applyBlur() {
    createBlurContainer();
    document.body.classList.add('blurred');
 }
  
  function removeBlur() {
    document.body.classList.remove('blurred');
    const blurContainer = document.querySelector('.blur-container');
    if (blurContainer) {
      blurContainer.remove();
 }}