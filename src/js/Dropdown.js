class Dropdown {

    // Remove or Add class
    toggleClass(elem, className) {
        if (elem.className.indexOf(className) !== -1) {
            elem.className = elem.className.replace(className, '');
        } else {
            elem.className = elem.className.replace(/\s+/g, ' ') + ' ' + className;
        }
    }

    dropdownText(event) {
        const dropdown = event.currentTarget.nextSibling;
        const chevron = event.currentTarget.firstElementChild;

        this.toggleClass(dropdown, 'hide');
        this.toggleClass(chevron, 'rotate-90');
    }

    dropdownCounter() {
        const dropdown = document.querySelector('.dropdown .dropdown__menu');
        const chevronCounter = document.getElementById('chevron-counter')
        const primaryButton = document.getElementById('primary-button');

        this.toggleClass(dropdown, 'hide');
        this.toggleClass(chevronCounter, 'rotate-90');
        this.toggleClass(primaryButton, 'hide');
    }
}

document.getElementById('dropdown-counter').addEventListener('click', function (e) {
    const dropdown = new Dropdown();

    dropdown.dropdownCounter();

    e.preventDefault();
})

document.querySelector('.dropdown__confirm').addEventListener('click', function (e) {
    const dropdown = new Dropdown();

    dropdown.dropdownCounter();

    e.preventDefault();
})

document.querySelectorAll('.dropdown-text__title').forEach(dropdown => dropdown.addEventListener('click', function (e) {
    const dropdown = new Dropdown();

    dropdown.dropdownText(e);

    e.preventDefault();
}))