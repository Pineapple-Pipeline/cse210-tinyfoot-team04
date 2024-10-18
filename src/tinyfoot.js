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
        footnoteContainer.style.position = 'absolute';
        footnoteContainer.style.border = '1px solid #ccc';
        footnoteContainer.style.backgroundColor = '#f9f9f9';
        footnoteContainer.style.padding = '10px';
        footnoteContainer.style.zIndex = '1000';
        footnoteContainer.style.display = 'none';

        footnoteContainer.style.width = '200px';
        footnoteContainer.style.overFlowY = 'auto';

        document.body.appendChild(footnoteContainer);

        document.addEventListener('click', (event)=> {
            if (!event.target.closest('[data-footnote]') && !event.target.closest('#footnote-container')) {
                footnoteContainer.style.display = 'none';
            }
        });
    }

    toggleFootnote(event, link) {
        event.preventDefault();
        const footnoteId = link.getAttribute('data-footnote');
        const footnoteText = document.querySelector(`#footnote-${footnoteId}`).innerHTML;
        const footnoteContainer = document.getElementById('footnote-container');

        if (footnoteContainer.style.display === 'block' && footnoteContainer.innerHTML === footnoteText) {
            footnoteContainer.style.display = 'none';
        } else {
            footnoteContainer.innerHTML = footnoteText;
            const rect = link.getBoundingClientRect();
            footnoteContainer.style.left = `${rect.left + window.scrollX}px`;
            footnoteContainer.style.top = `${rect.bottom + window.scrollY}px`;
            footnoteContainer.style.display = 'block';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Footnotes();
});