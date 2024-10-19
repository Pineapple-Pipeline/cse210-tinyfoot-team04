class Footnotes {
    constructor() {
        this.footnoteLinks = document.querySelectorAll('[data-footnote]');
        this.init();
    }

    init() {
        this.footnoteLinks.forEach(link => {
            console.log('Adding click listener to:', link); // Debug log
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
        console.log('Footnote clicked:', link); // Debug log
        event.preventDefault();
        const footnoteId = link.getAttribute('data-footnote');
        const footnoteText = document.querySelector(`#footnote-${footnoteId}`).innerHTML;
        const footnoteContainer = document.getElementById('footnote-container');

        if (footnoteContainer.style.display === 'block' && footnoteContainer.innerHTML === footnoteText) {
            footnoteContainer.style.display = 'none';
            removeBlur()
        } else {
            footnoteContainer.innerHTML = footnoteText;
            const rect = link.getBoundingClientRect();
            footnoteContainer.style.left = `${rect.left + window.scrollX}px`;
            footnoteContainer.style.top = `${rect.bottom + window.scrollY}px`;
            footnoteContainer.style.display = 'block';
            applyBlur()
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