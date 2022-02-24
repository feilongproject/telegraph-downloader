

async function Main(request: Request): Promise<Response> {

    return new Response("hello world!")


}


addEventListener("fetch", (event) => {
    event.respondWith(
        Main(event.request).catch(
            (err) => new Response(err.stack, { status: 500 })
        )
    );
})