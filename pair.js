const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Gifted_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Gifted_Tech = Gifted_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Gifted_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Gifted_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Gifted_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Gifted_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id, { text: '' + b64data });

               let GIFTED_MD_TEXT = `
*_Pair Code Connected*
*_Made With love by ©STANY-TECH™♻️_*
❖⊷━━━━━━━━━━━━━━━━━━━━━━━━⊷❖
╭──━━━━━━◇✣❖◇━━━━━━━───❂
┃ FOR ALL STANY-TECH MD BOT
┃ _Thanks for your support._
╰──━━━━━━◇✣❖◇━━━━━━━───❂
  ▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒
╭──━━━━━━◇✣❖◇━━━━━━━───❂
┃❖  『••• ⬡𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽⬡ •••』
┃⬡ *Ytube:* _https://youtube.com/@stanleytechnology?si=jQO3LPtvE92aw4fi_
┃⬡ *wa-me:* _https://wa.me/255756738502_
┃⬡ *wa-me:* _https://wa.me/255612285041_
┃
┃⬡MY bot Repos⬡
┃
┃⬡ *STANY-TECH-XMD bot:* _https://github.com/Stanking11/STANY-TECH-XMD
┃⬡ *My Github:* _https://github.com/Stanking11_
┃
┃⬡Support channels⬡
┃
┃⬡ *WATSAPP:* _https://whatsapp.com/channel/0029VaxKouY7tkj8NiPg0t45_
┃⬡ *GROUP COMMUNITY:*_https://chat.whatsapp.com/EqfFoV8zm7hGTux2P4nmbN_
┃
┃⬡ *©Copyright*2025 _STANLEY MASANYIWA |©STANY-TECH™
╰───━━━━━━◇✣❖◇━━━━━━━───❂
▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒
✣➻⊷━━━━━━━━━━━━━━━━━━━━━━━━⊷➻✣

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id,{text:GIFTED_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Gifted_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await GIFTED_MD_PAIR_CODE()
});
module.exports = router
