const socket = io();
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-button");

sendBtn.addEventListener("click", async () => {
    const msg = input.value.trim();
    if (!msg) return;

    socket.emit("chat message", msg);
    input.value='';
});

socket.on("chat message", (msg) => {
    const newMsg = document.createElement("div");
    newMsg.textContent = msg;
    chatBox.appendChild(newMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
})