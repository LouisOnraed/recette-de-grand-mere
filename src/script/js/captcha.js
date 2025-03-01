
document.addEventListener("DOMContentLoaded", function () {
    const captchaContainer = document.getElementById("captcha-container");
    const messageEl = document.getElementById("captcha-message");

    captchaContainer.innerHTML = `
<div id="game-area" style="position:relative; width:300px; height:200px; border:1px solid black; overflow:hidden;">
<div id="target" style="width:30px; height:30px; background-color:green; position:absolute; top:50px; left:50px; cursor:pointer;"></div>
</div>
`;

    const target = document.getElementById("target");

    function getRandomPosition() {
        let x = Math.random() * 270;
        let y = Math.random() * 170;
        return { x, y };
    }

    let moves = 0;
    target.addEventListener("mouseover", function () {
        if (moves < 5) {
            let newPos = getRandomPosition();
            target.style.left = newPos.x + "px";
            target.style.top = newPos.y + "px";
            moves++;
        }
    });

    target.addEventListener("click", function () {
        messageEl.innerHTML = "<input type='checkbox' required selected> Bien joué ! Tu n'es pas un robot !";
    });
});