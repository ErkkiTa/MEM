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

    var moneyarray = [0, 3.2, 3.9, 3.8, 5.6, 3.8, 5.1, 5.0, 7.45, 6.8, 8.2, 6.9, 5.3, 3.9, 6.8, 6.7, 8.2]

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
        multiply = inputValue * moneyarray[14];
    }
    if (amet == 'Aednik') {
        multiply = inputValue * moneyarray[15];
    }
    if (amet == 'Logistik') {
        multiply = inputValue * moneyarray[16];
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
fetch('https://ta19rauniste.itmajakas.ee/mem/data.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        for (index in data) {
            console.log(data[index].amet);
            let obj = data[index];
            var div = document.getElementById('dataamet');

            div.innerHTML += '<p> ' + obj.amet + ' ;  ' + obj.sum + ' ; ' + obj.date + ' </p>';
        }

    });