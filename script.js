let name = prompt("Как Вас зовут?");

alert(`Привет,${name}!`, ["имя"]);

let age = prompt("Сколько Вам лет?");


switch (true) {

    case age < 18:
        alert("Вам еще рано, до свиданья.");
        break;
    case age >= 18:
        alert("добро пожаловать и приятных покупок!");
        break;
    default:
        alert("неверно введен возраст!");
}