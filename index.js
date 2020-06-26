require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const BOT_TOKEN = process.env.BOT_TOKEN;

bot.login(BOT_TOKEN);