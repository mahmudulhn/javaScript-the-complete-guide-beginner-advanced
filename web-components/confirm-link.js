class ConfirmLink extends HTMLAnchorElement {
    connectedCallback() {
        this.addEventListener('click', event => {
            if (!confirm('Do u want to leave?')) {
                event.preventDefault();
            }
        });
    }
}

customElements.define('uc-confirm-link', ConfirmLink, { extends: 'a' });