/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE0zZ1VXendOWlBya2dnNnlaQXliZ3ZiczlpL285OVRmalgwQ0Z5QWwyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDlrK1BGT3hDeDZLcnJiYUZnNEQvMUVRWittL2hLcEFOQTdySWlYV0JoQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQStaSTEyM2xBV0pRMGlpSVV4Sm5mZ2JwOEk1ZXU0YWs4VFFjRE5SREc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1VTFneEJWaGcwdVlhajVDZzZzbjBjd1I3aTFjS1paNi9IT2RRVjFSWldNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9KMFB3ell3ampvbTZSVE5JS1dvRWpKLytXd2xidHd2U0VFVVF3cjEyVnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlM1NENBbVdGYTZYSXdRRk0rTTBQTnNCSEhoY0pRVUNLNTNzQzVlRUdzUm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxNZXdzSk1MZWQvQ3huaVVjOGZtdkhROWIyNEhMOGpoUWNWZWdzbHFYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVVZaGJtWjBjL0ppbzdlL0FlNmM3U20xbm1POWtVeWR6NU9PUzhwTFpGUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitpUnBxM0doS3h5MzBxTWNUSmx3REpINmt4dkRJdlNRV2pucHpWM1NNSTNUVXgxem9XeWZ0MnJwVk9ENGd1M0FWS25CTExIa1J2dnFkK0p6bmhQVkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiJ1bnhlNDlLdHBuY2lVM3hLMnk5T1o3TXcwYjBpNVZaMDZscVhHOW4vaVVzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTY3NDcwODc0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxOEJEN0Y3MThDOUIyNzFCQkUwQURCOEUxRUU0Q0RCRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUxODAzMjcyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTk2NzQ3MDg3NDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTQ4MzU5RkFFQjdBQzRENjkzRjlDREJGRTA1QzhENDkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MTgwMzI3M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiN0taQU1UVzQiLCJtZSI6eyJpZCI6IjkxOTY3NDcwODc0NDo0OEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIwMDc1MTU4NjUwNDcxODo0OEBsaWQiLCJuYW1lIjoiU3VuZyBKaW4gV29vIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOU1pvWmtFRVBES3FjTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjcDJDZTJjUzErRnRXQ1FxNlRDTW5PY3NKekZWVi9NWXdFRjdRb2daaWdvPSIsImFjY291bnRTaWduYXR1cmUiOiJrcnMva1d2MENHYkJ4T0RDbGJRaEROTU0rR29mSjk1a3NsMmZHRjhnVkpubWRZdFBDT0MzMHd1T29xZ2VyT0hUSllCSUtGSEQ2NW95L2hLVWxIR2NBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR0FXK3BvdElLUHRVeFJoZi96Nm54NFRDQmFETzh1NGZCUHpkZFVSdXg4ZFZ1SFlYdXVHeThIUmU2OVM2V1czQWMwakJUWEFWSVpNSVVPbWY3OVIxQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTk2NzQ3MDg3NDQ6NDhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEtkZ250bkV0ZmhiVmdrS3Vrd2pKem5MQ2N4VlZmekdNQkJlMEtJR1lvSyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxODAzMjYxLCJsYXN0UHJvcEhhc2giOiIzZll3Q0siLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU4rOCJ9';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗥𝗔𝗩𝗘𝗡';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254114660061';
const owner = dev.split(",");
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/duv8ac.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 8080;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, owner, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
