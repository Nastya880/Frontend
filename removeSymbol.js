// Функция на вход принимает две строки - сообщение (обычная строка с текстом) и символ который надо удалить из этого сообщения

function removeString(message, symbol) {
    let mes_len = message.length;
    let i = 0;
    while (i < mes_len) {
        let index = message.indexOf(symbol);
        if (index !== -1)
            message = message.slice(0, index) + message.slice(index + 1, mes_len);
        i++;
    }
    return message;
}

// let message = "Большое и интересное сообщение";
// let index = message.indexOf("о");
// message = message.slice(0, index) + message.slice(index, 3);
// console.log(message);
console.log(removeString("Большое и интересное сообщение", "о")); // Бльше и интересне сбщение
console.log(removeString("Hello world!", "z")); // Hello world!
console.log(removeString("А роза азора", "А")); // роза азора
