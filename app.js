// feedback
let data = [];

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

    var moneyarray = [0, 5.07, 3.80, 5.58, 3.81, 5.78, 3.80, 6.73, 6.04, 5.31, 3.99, 3.77, 4.48, 3.95]

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

    let obj = {
        amet: amet,
        sum: multiply + "€",
        date: Date()
    };

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "savedata.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("amet=" + amet + "&sum=" + multiply + "€");

    xhttp.addEventListener('error', function(event) {
        alert('Oops! Something went wrong.');
        console.log(event);
    });

    console.log(obj);

}

/*

*/