const userCardNumber = prompt("Введіть номер карти");
const userName = prompt("Введіть ваше ім'я");
const userCountry = prompt("Введіть країну проживання: USA, UK, UA");
const userAge = Number(prompt("ВВедіть ваш вік"));

if (userName && userCountry && userAge && userCardNumber.length == 19) {
    if (userCountry == "USA", "UK") {
        alert(`Good afternoon ${userName}, your year of birth is ${2023 - userAge}. Funds will be sent to
        your card ${userCardNumber}. By place of residence ${userCountry}.
        `);
    } else {
        alert(`Доброго дня ${userName}, ваш рік народження ${2023 - userAge}. Вам буде надіслано
        кошти на картку ${userCardNumber}. По місцю проживання ${userCountry}`);
    }
} else {
    alert("Дані введено невірно");
}