const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348137085644";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_38_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA4OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDU2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQyLFxuICAgICAgICA1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDg5LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDkyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzksXG4gICAgICAgIDIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA5LFxuICAgICAgICA2NyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg4LFxuICAgICAgICA1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExLFxuICAgICAgICAxMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzksXG4gICAgICAgIDczLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgODksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI2LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImpTcC9IT2ZIa29jYzhjVi91WGVHS1hQSUZ5NFdPQ052L1hoVlRKRENhV009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImN1NE9xVzhVVFZlM2Nzc2Q5WmlHQWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWE4YmUzZDMtZDg3Yy00MDFkLWFlMzktYTM3MDkyMThjNTFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDIzNSxcbiAgICAgIDIsXG4gICAgICAxODksXG4gICAgICAxODcsXG4gICAgICAxNDgsXG4gICAgICAyNDAsXG4gICAgICA5MyxcbiAgICAgIDI0MixcbiAgICAgIDY3LFxuICAgICAgMTM1LFxuICAgICAgMjUwLFxuICAgICAgMjIwLFxuICAgICAgMzMsXG4gICAgICA4OCxcbiAgICAgIDEzOCxcbiAgICAgIDE3OSxcbiAgICAgIDgwLFxuICAgICAgMTI5LFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgODEsXG4gICAgICAxODMsXG4gICAgICAzOCxcbiAgICAgIDg4LFxuICAgICAgMSxcbiAgICAgIDE5NSxcbiAgICAgIDEzMyxcbiAgICAgIDE5OSxcbiAgICAgIDIxNSxcbiAgICAgIDQ2LFxuICAgICAgOTcsXG4gICAgICAyMTUsXG4gICAgICA0OSxcbiAgICAgIDIwNCxcbiAgICAgIDIwMCxcbiAgICAgIDEzNixcbiAgICAgIDExMixcbiAgICAgIDE5MSxcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjc5QVoySFdUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM3MDg1NjQ0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJbnRpbWFjeSBIdWIgVHZcIixcbiAgICBcImxpZFwiOiBcIjE0MTcyNTM5ODAwMzgxNzoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01INzB0WUJFTktUMXJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRmh0d29xVFhBMDNsWGhWTEpIaS9GRjg4SjkzRERacjFpVlJCeTd1N25naz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCZStyT2d6ckxRRi9qSCtKVkwzdkZOeUpCaW1rWloweTdReC9GVzFEckx6ZmUrOWNTWE9YcEpaMEx3ZVJSNmYzdkN1d1BJSDhnVXRIdWdJSlNtMDRDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzbVMzUVYrVkMrRXhaNjluVkZaM2t4dDFOdktUclpPZFdaeWxTRFhWS1lDZmxOdG5uajIzdzVXYk04TjNJVSsxMXE5V1FmdG5Rc0NicXBWZVp4VmRndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM3MDg1NjQ0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY4ODE4Nzhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
