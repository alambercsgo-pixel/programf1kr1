let result;
let check = false;

function verify() {
    let A = parseFloat(document.getElementById('A').value);
    let B = parseFloat(document.getElementById('B').value);
    let C = parseFloat(document.getElementById('C').value);
    console.log(A, B, C);

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        result = "Введите все три числа";
        check = false;
    }
    else if (A < B && B < C) {
        result = "Выполняется неравенство A < B < C";
        check = true;
    }
    else if (A < B && B > C) {
        result = "Выполняется неравенство A < B > C";
        check = true;
    }
    else {
        result = "Ни одно из неравенств не выполняется";
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Ни одно неравенство не выполняется или результат не проверен. Измените данные и нажмите «Проверить»");
    }
}

document.getElementById("verify").addEventListener('click', verify);
document.getElementById("send").addEventListener('click', send);
