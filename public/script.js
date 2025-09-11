const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-button");

sendBtn.addEventListener("click", async () => {
    const msg = input.value.trim();
    if (!msg) return;

    const response = await fetch("/message", {
        method: "POST",
        headers :{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: msg})
    });

    const data = await response.json();

    const userMsg = document.createElement("div");
    userMsg.textContent = "You: " + msg;
    chatBox.appendChild(userMsg);

    const serverMsg = document.createElement("div");
    serverMsg.textContent = "Server: " + data.reply;
    chatBox.appendChild(serverMsg)

    input.value = "";
});