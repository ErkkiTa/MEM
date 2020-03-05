// feedback
document.querySelectorAll('.feedback li').forEach(entry => entry.addEventListener('click', e => {
    if (!entry.classList.contains('active')) {
        document.querySelector('.feedback li.active').classList.remove('active');
        entry.classList.add('active');
    }
    e.preventDefault();
}));

function showBottom(value) {
    document.getElementById("occupation").value = value;
}

//arvutus

function getInputValue() {

    var moneyarray = [0, 3.27, 3.91, 3.80, 5.58, 3.81, 5.07, 5.00, 7.45, 6.76, 8.20, 6.94, 5.31, 3.99, 6.79, 6.73, 8.22]

    var inputValue = document.getElementById("hours").value;
    var amet = document.getElementById("occupation").value;

    if (amet == 'Nõudepesija') {
        multiply = inputValue * moneyarray[1];
    }
    if (amet == 'Koristaja') {
        multiply = inputValue * moneyarray[2];
    }
    if (amet == 'Õpetaja') {
        multiply = inputValue * moneyarray[3];
    }
    if (amet == 'Autojuht') {
        multiply = inputValue * moneyarray[4];
    }
    if (amet == 'Lapsehoidja') {
        multiply = inputValue * moneyarray[5];
    }
    if (amet == 'Kokk') {
        multiply = inputValue * moneyarray[6];
    }
    if (amet == 'Elektrik') {
        multiply = inputValue * moneyarray[7];
    }
    if (amet == 'Tehnik') {
        multiply = inputValue * moneyarray[8];
    }
    if (amet == 'Õde') {
        multiply = inputValue * moneyarray[9];
    }
    if (amet == 'Ehitaja') {
        multiply = inputValue * moneyarray[10];
    }
    if (amet == 'Raamatupidaja') {
        multiply = inputValue * moneyarray[11];
    }
    if (amet == 'Õmbleja') {
        multiply = inputValue * moneyarray[12];
    }
    if (amet == 'Juuksur') {
        multiply = inputValue * moneyarray[13];
    }
    if (amet == 'Psüholoog') {
        multiply = inputValue * moneyarray[13];
    }
    if (amet == 'Aednik') {
        multiply = inputValue * moneyarray[13];
    }
    if (amet == 'Logistik') {
        multiply = inputValue * moneyarray[13];
    }

    document.getElementById("sum").innerHTML = multiply + "€";
}
