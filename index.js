const TelegramBot = require("node-telegram-bot-api");

const token = "7218070234:AAEy0sVBZAe9AdYap6dtha16t1pfqAuTm-0";
const webAppUrl = "https://stream-energy-tg-app.netlify.app/";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    bot.sendMessage(
      chatId,
      "Добро пожаловать приложение \"Zodiac\", тут вы можете получить информацию по гороскому на ваш знак зодиака.\nЧтобы открыть приложение нажмите слева в меню внизу кнопку 'Zodiac'"
    );
  }
});
