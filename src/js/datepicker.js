import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/toxin.css';
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin';

const datepicker = document.querySelector("#datepicker-start");

flatpickr(datepicker, {
    "plugins": [new rangePlugin({ input: "#datepicker-end" })]
})