const TelegramApi = require("node-telegram-bot-api");

const token = "5733427586:AAE4malvpbi-CVqMb3hi5rBNOilYJL6sDQk";

const bot = new TelegramApi(token, { polling: true });
bot.setMyCommands([
  { command: "/start", description: "Начальное приветствие" },
  { command: "/info", description: "Ты мне брат?" },
]);

const start = () => {
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    console.log(msg)
    if (text === "/start") {
      await bot.sendMessage(
        chatId,
        `Привет, ${msg.from.first_name}! Добро пожаловать в телеграм бот самого великого, сильного и скромного человека =)`
      );

      return bot.sendPhoto(chatId, "./img/Привет странник.jpg");
      // bot.sendSticker(chatId, "https://t.me/addstickers/Paramagnetuk");
    }
    if (text === "/info") {
        // мой id 363963059
      if (msg.from.id === 363963059 ) {
        await bot.sendMessage(chatId, `Привет, брат!`);
        return bot.sendPhoto(chatId, "./img/брат.jpg");
      } 
      // степанов id 235301391
      if(msg.from.id === 235301391){
        await bot.sendAudio(chatId, "./img/не брат.mp3");
        setTimeout(() => bot.sendMessage(chatId, 'Да шучу я, конечно брат!'), 6000)
        return bot.sendPhoto(chatId, "./img/Серега.jpg");
      }

     // диман id 1054539762
     if(msg.from.id === 1054539762){
        await bot.sendMessage(chatId, 'Тебя я узнаю из тысячи, мой сладкий =*');
        return bot.sendPhoto(chatId, "./img/диман.jpg");
     } 

      await bot.sendMessage(chatId, "Не брат ты мне");
      return bot.sendPhoto(chatId, "./img/не брат ты мне.jpg");
    }

    return bot.sendMessage(chatId, 'Я тебя не понимаю')
  });
};

start();
