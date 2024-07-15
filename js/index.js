"use strict";

const data = [
    {
        sender:"Sadam",
        date:"Dec, 12",
        message:"lorem, ipsum dolor sit consescture ekkif pikin wey go soon collect slap....",},
    {  
        Sender:"m",
        date:"Dec, 12",
        message:"lorem, ipsum dolor sit consescture ekkif pikin wey g",},
    ,  
    {
        sender:"Sadam",
        date:"Dec, 12",
        message:"lorem, ipsum dolor sit consescture ekkif pikin wey go soon collect slap....",},
        {
            sender:"Sadam",
            date:"Dec, 12",
            message:"lorem, ipsum dolor sit consescture ekkif pikin wey go soon collect slap....",},
];

const messages = document.querySelector(".messages_area");

const render = function (data) {
    messages.innerHTML =data.map{
    d =>` <div class="messages">
    <div class="messages_left">
        <div class="check check_2">
            <i class="fa-regular fa-square-check"></i>
            <span><i class="fa-solid fa-check"></i> </span>
        </div>
        <i class="fa-solid fa-check hover star"></i>
        <span>${d.sender}</span>
    </div>
    <div class="messages_content">   ${d.message}</div>
    <div class="message_date">${d.date}</div>
</div>`
}
// .join(" ");
// };

render(data)
     