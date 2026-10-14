let result;
let check = false;

function verify() {
    let D = parseFloat(document.getElementById('D').value);
    let A = parseFloat(document.getElementById('A').value);
    console.log(D, A);

    if (isNaN(D) || isNaN(A) || D <= 0 || A <= 0) {
        result = "Введите положительные числа";
        check = false;
    }
    else if (A * Math.sqrt(2) <= D) {
        result = "Можно выпилить";
        check = true;
    }
    else {
        result = "Нельзя выпилить";
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Брус выпилить нельзя или результат не проверен. Измените данные и нажмите «Проверить»");
    }
}

document.getElementById("verify").addEventListener('click', verify);
document.getElementById("send").addEventListener('click', send);