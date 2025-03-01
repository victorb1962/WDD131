import {successTemplate, participantTemplate} from './Template.mjs';

document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;
    console.log(`Participant Count: ${participantCount}`);
    const addButton = document.getElementById('add');

    function addParticipant() {
        participantCount += 1;
        console.log(`Participant Count: ${participantCount}`);
        const sectionDuplicates = participantTemplate(participantCount);
        addButton.insertAdjacentHTML('beforebegin', sectionDuplicates);
    }

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        console.log(feeElements);
        feeElements = [...feeElements];
        return Array.from(feeElements).reduce((sum, feeElement) => {
            const fee = parseFloat(feeElement.value) || 0;
            return sum + fee;
        }, 0);
    }

    function submitForm(event) {
        event.preventDefault();
        // do the rest of the stuff
        const adultName = document.getElementById('adult_name').value;
        const totalFeesSum = totalFees();
        const info = {
            adultName: adultName,
            participantCount: participantCount,
            totalFees: totalFeesSum
        };

        const summarySection = document.getElementById('summary');
        summarySection.innerHTML = successTemplate(info);
        summarySection.classList.remove('hide');
        document.querySelector('form').classList.add('hide');
    }

    addButton.addEventListener('click', addParticipant);
    const form = document.querySelector('form');
    form.addEventListener('submit', submitForm);
});