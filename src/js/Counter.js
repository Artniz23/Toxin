
// variables

const increase = document.querySelectorAll('.increase');

const counters = document.querySelectorAll('.counter');

const decrease = document.querySelectorAll('.decrease');

const clear = document.querySelector('.dropdown__clear');

const dropdownTitle = document.querySelector('.dropdown__title');

const borderLight = '1px solid rgba(31, 32, 65, 0.25)';

const borderDark = '1px solid rgba(31, 32, 65, 0.5)';

let num = 0;

// Class Counter

class Counter {

    inc_counter(event) {
        const decrease = event.currentTarget.previousSibling.previousSibling.id;

        const decreaseBtn = document.getElementById(decrease);

        const id = event.currentTarget.previousSibling.id;

        const counterInc = document.getElementById(id);

        increase.forEach(numInc => num === 3 ? numInc.style.border = borderLight : borderDark);

        if (num > 3) {
            return false
        } else {
            counterInc.innerHTML++;
            num++;
            dropdownTitle.innerHTML = `${num} Guests`;
            decreaseBtn.style.border = borderDark;
        }
    }

    dec_counter(event) {
        const id = event.currentTarget.nextSibling.id;

        const counterDec = document.getElementById(id);

        event.target.style.border = counterDec.innerHTML <= '1' ? borderLight : borderDark;

        if (counterDec.innerHTML < 1) {
            return false
        } else {
            counterDec.innerHTML--;
            num--;
            dropdownTitle.innerHTML = num < 1 ? 'How many Guests ?' : num + ' ' + 'Guests';
            increase.forEach(numInc => numInc.style.border = borderDark)
        }
    }

    clearBtn() {
        counters.forEach(count => count.innerHTML = 0);

        num = 0;

        dropdownTitle.innerHTML = 'How many Guests ?';

        increase.forEach(numInc => numInc.style.border = borderDark);

        decrease.forEach(numDec => numDec.style.border = borderLight);
    }
}

// Event Listeners

clear.addEventListener('click', function (e) {
    const counter = new Counter;

    counter.clearBtn();

    e.preventDefault();
})

increase.forEach(numInc => numInc.addEventListener('click', function (e) {
    const counter = new Counter;

    counter.inc_counter(e);

    e.preventDefault();
}));

decrease.forEach(numDec => numDec.addEventListener('click', function (e) {
    const counter = new Counter;

    counter.dec_counter(e);

    e.preventDefault();
}));