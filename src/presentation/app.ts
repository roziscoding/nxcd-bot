const botify = require('@rjmunhoz/botify')

export const app = botify(async (bot, _config) => {
  bot.command('hello', ({ reply }) => { reply('World') })
})
