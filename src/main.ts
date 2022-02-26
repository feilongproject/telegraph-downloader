import { BotToken, ChatId } from "./var";


async function Main(request: Request): Promise<Response> {

    const messageRece: messageRece = await request.json();
    console.log(JSON.stringify(messageRece));
    var linkUrl = "";

    const entities = messageRece.message.entities;
    const text = messageRece.message.text;
    if (entities) {
        entities.forEach(e => {
            //console.log(`${e.type}: ${text.substring(e.offset, e.offset + e.length)} ${e.url ? e.url : ""}`);
            if (e.url)
                linkUrl = e.url.replaceAll("telegra.ph","t.bili.ml");
        });
    }

    if (linkUrl)
        await fetch(`https://api.telegram.org/bot${BotToken}/sendMessage`, {
            method: "POST",
            body: `{"chat_id":${ChatId},"text":"${linkUrl}"}`,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            return res.json()

        }).then(res => {
            console.log(res)
        })


    return new Response("hello world!");
}


addEventListener("fetch", (event) => {
    event.respondWith(
        Main(event.request).catch(
            (err) => new Response(err.stack, { status: 500 })
        )
    );
})