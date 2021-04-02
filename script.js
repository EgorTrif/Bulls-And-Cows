//create main place
const body = document.getElementById('body')
body.style.backgroundImage = "url(./cow.jpg)"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundSize = "1536px 754px"
body.style.color = "black";
body.style.fontFamily = "Indie Flower, cursive"

const audio = document.createElement('audio')
audio.src = "./skot.mp3"
audio.autoplay = "autoplay"
audio.loop = "-1"
body.appendChild(audio)

const playField = document.createElement('div')
playField.id = "playField"
playField.style.border = "5px solid blue"
playField.style.borderRadius = "10px"
playField.style.width = "700px"
playField.style.height = "680px"
playField.style.margin = "30px"
playField.style.backgroundImage = "url(./butterfly.gif)"
playField.style.backgroundRepeat = "no-repeat"
body.appendChild(playField)

//creat a main menu

const h1 = document.createElement("h1")
h1.textContent = "Bulls&Cows"
h1.style.textAlign = "center"
playField.appendChild(h1)

const menu = document.createElement("div")
menu.id = "menu"
menu.style.margin = "10px"
menu.style.borderTop = "3px solid white"
menu.style.borderBottom = "3px solid white"
playField.appendChild(menu)

const ngBtn = document.createElement("button")
ngBtn.textContent = "New game"
ngBtn.style.fontFamily = "Indie Flower, cursive"
ngBtn.style.backgroundImage = "url(./cloud.png)"
ngBtn.style.backgroundSize = "50%"
ngBtn.style.backgroundPosition = "center"
ngBtn.style.backgroundRepeat = "no-repeat"
ngBtn.style.backgroundColor = "transparent"
ngBtn.style.width = "223px"
ngBtn.style.height = "90px"
ngBtn.style.fontSize = "24pt"
ngBtn.style.border = "none"
ngBtn.style.outline = "none"

const modeBtn = document.createElement("button")
modeBtn.textContent = "Game mode"
modeBtn.style.fontFamily = "Indie Flower, cursive"
modeBtn.style.backgroundImage = "url(./cloud.png)"
modeBtn.style.backgroundColor = "transparent"
modeBtn.style.width = "100px"
modeBtn.style.height = "50px"
modeBtn.style.backgroundSize = "50%"
modeBtn.style.backgroundPosition = "center"
modeBtn.style.backgroundRepeat = "no-repeat"
modeBtn.style.backgroundColor = "transparent"
modeBtn.style.width = "223px"
modeBtn.style.height = "90px"
modeBtn.style.fontSize = "24pt"
modeBtn.style.border = "none"
modeBtn.style.outline = "none"

const HTPBtn = document.createElement("button")
HTPBtn.textContent = "How to play"
HTPBtn.style.fontFamily = "Indie Flower, cursive"
HTPBtn.style.backgroundImage = "url(./cloud.png)"
HTPBtn.style.backgroundColor = "transparent"
HTPBtn.style.width = "150px"
HTPBtn.style.height = "50px"
HTPBtn.style.backgroundSize = "50%"
HTPBtn.style.backgroundPosition = "center"
HTPBtn.style.backgroundRepeat = "no-repeat"
HTPBtn.style.backgroundColor = "transparent"
HTPBtn.style.width = "224px"
HTPBtn.style.height = "90px"
HTPBtn.style.fontSize = "24pt"
HTPBtn.style.border = "none"
HTPBtn.style.outline = "none"

menu.appendChild(ngBtn)
menu.appendChild(modeBtn)
menu.appendChild(HTPBtn)

ngBtn.onmouseover = function(){
    ngBtn.style.backgroundSize = "40%"
}
ngBtn.onmouseout = function(){
    ngBtn.style.backgroundSize = "50%"
}
modeBtn.onmouseover = function(){
    modeBtn.style.backgroundSize = "40%"
}
modeBtn.onmouseout = function(){
    modeBtn.style.backgroundSize = "50%"
}
HTPBtn.onmouseover = function(){
    HTPBtn.style.backgroundSize = "40%"
}
HTPBtn.onmouseout = function(){
    HTPBtn.style.backgroundSize = "50%"
}

//create place for the screen

const screenP = document.createElement("div")
screenP.id = "screen"
screenP.style.backgroundImage = "url(./butterfly2.gif)"
screenP.style.backgroundPosition = "right"
screenP.style.backgroundRepeat = "no-repeat"
screenP.style.borderRight = "3px solid white"
screenP.style.borderLeft = "3px solid white"
screenP.style.height = "465px"
screenP.style.margin = "10px"
playField.appendChild(screenP)

//create place for the game PvsC

const game = document.createElement("div")
game.id = "game"
game.style.marginLeft = "10px"
game.style.display = "none"
screenP.appendChild(game)

const h2 = document.createElement("h2")
h2.textContent = "Try to guess a number!"
game.appendChild(h2)

const inputGuess = document.createElement("input")
inputGuess.maxLength = 4;
inputGuess.style.borderColor = "skyblue"
inputGuess.style.outline = "none"
inputGuess.style.backgroundColor = "transparent";
inputGuess.style.fontFamily = "inherit"
inputGuess.style.width = "150px"
game.appendChild(inputGuess)

const ok = document.createElement("button")
ok.textContent = "Enter"
ok.style.marginLeft = "10px"
ok.style.backgroundColor = "transparent";
ok.style.fontFamily = "inherit"
ok.style.borderColor = "skyblue"
ok.style.outline = "none"
game.appendChild(ok)

inputGuess.insertAdjacentHTML('beforebegin','Your number: ')
ok.insertAdjacentHTML('afterend','<div id = "check"></div>')
document.getElementById("check").style.opacity = "0"
document.getElementById("check").style.color = "red"
document.getElementById("check").style.fontSize = "18pt"

const result = document.createElement("div")
result.id = "result"
result.style.boxSizing = "border-box"
game.appendChild(result)

const ol = document.createElement("ol");
ol.style.fontSize = "16pt"
ol.style.overflow = "auto"
ol.style.boxSizing = "border-box"
ol.style.height = "345px"
ol.style.margin = "0"
result.appendChild(ol)

const win = document.createElement("div")
win.id = "win"
win.style.height = "350px"
win.style.textAlign = "center"
win.style.fontSize = "24pt"
win.textContent = ""
win.style.display = "none"
result.appendChild(win)

//create place for the game PlvsPl

const game2 = document.createElement("div")
game2.id = "game2"
game2.style.marginLeft = "10px"
game2.style.display = "none"
screenP.appendChild(game2)

const h2v2 = document.createElement("h2")
h2v2.textContent = "One player think of number, other player try to guess it!"
game2.appendChild(h2v2)

const inputNumber = document.createElement("input")
inputNumber.maxLength = 4;
inputNumber.style.borderColor = "skyblue"
inputNumber.style.outline = "none"
inputNumber.style.backgroundColor = "transparent";
inputNumber.style.fontFamily = "inherit"
inputNumber.style.width = "150px"
inputNumber.style.margin = "5px"
game2.appendChild(inputNumber)

inputNumber.insertAdjacentHTML('beforebegin','2st player guess number: ')

const br = document.createElement("br")
game2.appendChild(br)

const inputBulls = document.createElement("input")
inputBulls.maxLength = 1;
inputBulls.style.borderColor = "skyblue"
inputBulls.style.outline = "none"
inputBulls.style.backgroundColor = "transparent";
inputBulls.style.fontFamily = "inherit"
inputBulls.style.width = "20px"
inputBulls.style.margin = "5px"
game2.appendChild(inputBulls)

inputBulls.insertAdjacentHTML('beforebegin','1st player check number: Bulls ')

const inputCows = document.createElement("input")
inputCows.maxLength = 1;
inputCows.style.borderColor = "skyblue"
inputCows.style.outline = "none"
inputCows.style.backgroundColor = "transparent";
inputCows.style.fontFamily = "inherit"
inputCows.style.width = "20px"
inputCows.style.margin = "5px"
game2.appendChild(inputCows)

inputCows.insertAdjacentHTML('beforebegin',' Cows ')

const enter = document.createElement("button")
enter.textContent = "Enter"
enter.style.marginLeft = "10px"
enter.style.backgroundColor = "transparent";
enter.style.fontFamily = "inherit"
enter.style.borderColor = "skyblue"
enter.style.outline = "none"
enter.style.marginLeft = "20px"
game2.appendChild(enter)

const check2 = document.createElement("div")
check2.style.opacity = "0"
check2.style.color = "red"
check2.style.fontSize = "18pt"
game2.appendChild(check2)

const result2 = document.createElement("div")
result2.id = "result2"
result2.style.boxSizing = "border-box"
game2.appendChild(result2)

const ol2 = document.createElement("ol");
ol2.style.fontSize = "18pt"
ol2.style.overflow = "auto"
ol2.style.boxSizing = "border-box"
ol2.style.height = "260px"
ol2.style.margin = "0"
result2.appendChild(ol2)

const win2 = document.createElement("div")
win2.id = "win2"
win2.style.height = "300px"
win2.style.textAlign = "center"
win2.style.fontSize = "24pt"
win2.textContent = ""
win2.style.display = "none"
result2.appendChild(win2)

//create place for game mode

const gameMode = document.createElement("div")
gameMode.id = "gameMode"
gameMode.style.display = "none"
screenP.appendChild(gameMode)

const pve = document.createElement("div")
pve.textContent = "Player vs Computer mode"
pve.style.fontSize = "18pt"
pve.style.marginLeft = "30px"
pve.style.marginRight = "30px"
pve.style.marginBottom = "30px"
gameMode.appendChild(pve)

const pveBtn = document.createElement("button")
pve.appendChild(pveBtn)

const pvp = document.createElement("div")
pvp.textContent = "Player vs Player mode"
pvp.style.fontSize = "18pt"
pvp.style.margin = "30px"
gameMode.appendChild(pvp)

const pvpBtn = document.createElement("button")
pvp.appendChild(pvpBtn)

const howMany = document.createElement("div")
howMany.textContent = "How many tries do you need?"
howMany.style.fontSize = "18pt"
howMany.style.margin = "30px"
gameMode.appendChild(howMany)

const triesNum = document.createElement("input")
triesNum.maxLength = 2;
triesNum.style.borderColor = "skyblue"
triesNum.style.outline = "none"
triesNum.style.backgroundColor = "transparent";
triesNum.style.fontFamily = "inherit"
triesNum.style.width = "50px"
triesNum.style.height = "20px"
triesNum.style.margin = "10px"
triesNum.style.fontSize = "14pt"
triesNum.value = "10"
howMany.appendChild(triesNum)

const err = document.createElement("div")
err.style.fontSize = "18pt"
err.style.textAlign = "center"
err.style.margin = "30px"
err.style.color = "red"
howMany.appendChild(err)

//create place for How to play

const htp = document.createElement('div')
htp.id = "htp"
htp.style.textAlign = "center"
htp.style.fontSize = "16pt"
htp.style.display = "none"
htp.textContent = "Bulls&Cows is an old code-breaking mind or paper and pencil game for two or more players, predating the commercially marketed board game Mastermind. Rules: you enter your guess number, computer compares it with the secret number and gives you two clues: numbers of \"bulls\" and \"cows\". A bull is a digit which is present in both the number in the same position. And a cow is a digit which is present in both the numbers in the different position. For example, if the computer number is 2056 and you ask 9516, an answer will be \"one bull and one cow\" (but you won't know which digit is a bull and which digit is a cow). Have fun!"
screenP.appendChild(htp)

//create working buttons

ngBtn.addEventListener('click',function() {
    screenP.style.padding = "inherit"
    let triesN = triesNum.value
    if (abc(triesN) === true || triesN == "" || triesN <= 0 || triesN != parseInt(triesN)){
    document.getElementById("check").innerText = "You should use only numbers!"
    err.innerText = "Inccorent number of tries"
    triesNum.value = ""
    }
    else if (switcher == true){
    win.style.display = "none"
    document.getElementById("check").style.opacity = "0"
    document.getElementById("check").style.display = "block"
    ol.style.display = "none"
    ol.innerHTML = ""
    counts = 0;
    compNumber = computerNumber()
    game.style.display = "block"
    htp.style.display = "none"
    gameMode.style.display = "none"
    err.innerText = ""
    ok.disabled = false
    }   
    else if (switcher == false) {
    gameMode.style.display = "none"
    game2.style.display = "block"
    htp.style.display = "none"
    counts = 0;
    win2.style.display = "none"
    check2.style.display = "block"
    check2.style.opacity = "0"
    ol2.style.display = "none"
    ol2.innerHTML = ""
    err.innerText = ""
    enter.disabled = false
    }
})

let compNumber = 0
const tries = [];
let counts = 0;

// this button from PlvsComp mode
ok.addEventListener('click',function() {
    counts++ 
    let playerNum = inputGuess.value
    let triesN = triesNum.value
    document.getElementById("check").style.opacity = "1"
    if(repeating(playerNum) === true) {
    document.getElementById("check").innerText = "Digits should not be repeated!"
    inputGuess.value = ""
    }
    else if (abc(playerNum) === true){
    document.getElementById("check").innerText = "You should use only numbers!"
    inputGuess.value = ""
    }
    else if (playerNum == "") {
        document.getElementById("check").innerText = "Empty input!"
        inputGuess.value = ""
    }
    else if (playerNum < 0 || playerNum != parseInt(playerNum) || playerNum >= 10000 || inputGuess.value.length < 4) {
        document.getElementById("check").innerText = "Incorrect number!"
        inputGuess.value = ""
    }
    else if (compNumber == playerNum) {
        win.style.display = "block"
        win.textContent = "YOU WIN WITH "+counts+" TRIES!"
        const img = document.createElement("img")
        img.src = "./datass.gif"
        img.width = "300"
        const b2 = document.createElement("br")
        win.appendChild(b2)
        win.appendChild(img)
        ol.style.display = "none"
        inputGuess.value = ""
        ok.disabled = true
        document.getElementById("check").style.display = "none"
    }
    else if (counts == Number(triesN)) {
        win.style.display = "block"
        win.textContent = "ALL TRIES LEFT! YOU LOSE!"
        const img = document.createElement("img")
        img.src = "./lose.gif"
        img.width = "300"
        const b1 = document.createElement("br")
        win.appendChild(b1)
        win.appendChild(img)
        document.getElementById("check").style.display = "none"
        ol.style.display = "none"
        inputGuess.value = ""
        ok.disabled = true
    }
    else {
            ol.style.display = "block"
            tries.push(inputGuess.value)
            let li = document.createElement('li');
            li.innerHTML = tries[tries.length - 1]+" "+comparison(playerNum, compNumber);
            ol.appendChild(li);
            document.getElementById("check").innerText = (triesN-counts)+" tries left!"
            inputGuess.value = ""
    }
})

//this button from PlvsPl mode
enter.addEventListener('click',function() {
    counts++ 
    let player1 = inputNumber.value
    let bullsP2 = inputBulls.value
    let cowsP2 = inputCows.value
    let triesN = triesNum.value
    check2.style.opacity = "1"
    if(repeating(player1) === true) {
    check2.innerText = "Digits should not be repeated!"
    inputNumber.value = ""
    inputBulls.value = ""
    inputCows.value = ""
    }
    else if (abc(player1) === true || abc(bullsP2) === true || abc(cowsP2) === true){
    check2.innerText = "2nd player should use only numbers!"
    inputNumber.value = ""
    inputBulls.value = ""
    inputCows.value = ""
    }
    else if (player1 == "" || bullsP2 == "" || cowsP2 == "") {
        check2.innerText = "Empty input!"
        inputNumber.value = ""
        inputBulls.value = ""
        inputCows.value = ""
    }
    else if (player1 < 0 || player1 != parseInt(player1) || player1 >= 10000 || inputNumber.value.length < 4) {
        check2.innerText = "Incorrect number!"
        inputNumber.value = ""
        inputBulls.value = ""
        inputCows.value = ""
    }
    else if (bullsP2 < 0 || cowsP2 < 0 || bullsP2 > 4 || cowsP2 > 4 || (Number(bullsP2)+Number(cowsP2)) > 4) {
        check2.innerText = "Incorrect bulls and cows!"
        inputNumber.value = ""
        inputBulls.value = ""
        inputCows.value = ""
    }
    else if (bullsP2 == 4 && cowsP2 == 0) {
        win2.style.display = "block"
        win2.textContent = "2nd PLAYER WIN WITH "+counts+" TRIES!"
        const img = document.createElement("img")
        img.src = "./datass.gif"
        img.width = "250"
        const b4 = document.createElement("br")
        win2.appendChild(b4)
        win2.appendChild(img)
        check2.style.display = "none"
        ol2.style.display = "none"
        inputNumber.value = ""
        inputBulls.value = ""
        inputCows.value = ""
        enter.disabled = true
    }
    else if (counts == Number(triesN)) {
        win2.style.display = "block"
        win2.textContent = "ALL TRIES LEFT! 2nd PLAYER LOSE OR 1ST PLAYER IS A F@#$%&* LIAR!"
        win2.style.fontSize = "20pt"
        const img = document.createElement("img")
        img.src = "./lose.gif"
        img.width = "250"
        const b = document.createElement("br")
        win2.appendChild(b)
        win2.appendChild(img)
        check2.style.display = "none"
        ol2.style.display = "none"
        inputNumber.value = ""
        inputBulls.value = ""
        inputCows.value = ""
        enter.disabled = true
    }
    else {
            ol2.style.display = "block"
            tries.push(inputNumber.value)
            let li = document.createElement('li');
            li.innerHTML = tries[tries.length - 1]+" Bulls "+bullsP2+" Cows "+cowsP2
            ol2.appendChild(li);
            check2.innerText = (triesN-counts)+" tries left!"
            inputNumber.value = ""
            inputBulls.value = ""
            inputCows.value = ""
    }
})

let switcher = true;

modeBtn.addEventListener('click',function() {
    screenP.style.paddingTop = "10px"
    game.style.display = "none"
    game2.style.display = "none"
    htp.style.display = "none"
    gameMode.style.display = "block"
    if (switcher == true){
    Enable(pveBtn)
    Disable(pvpBtn)
    }
    else if (switcher == false) {
    Enable(pvpBtn)
    Disable(pveBtn)
    }
    })

HTPBtn.addEventListener('click',function() {
    screenP.style.padding = "inherit"
    let triesN = triesNum.value
    if (abc(triesN) === true || triesN == "" || triesN < 0 || triesN != parseInt(triesN)){
        document.getElementById("check").innerText = "You should use only numbers!"
        err.innerText = "Inccorent number of tries"
        triesNum.value = ""
        }
    else {
    game.style.display = "none"
    gameMode.style.display = "none"
    htp.style.display = "block"
    err.innerText = ""
    }
    })

pveBtn.addEventListener('click',function() {
    if (switcher == true){
        Disable(pveBtn)
        Enable(pvpBtn)
        switcher = false
    }
    else if (switcher == false) {
        Disable(pvpBtn)
        Enable(pveBtn)
        switcher = true
    }
    })

pvpBtn.addEventListener('click',function() {
    if (switcher == false){
        Disable(pvpBtn)
        Enable(pveBtn)
        switcher = true
    }
    else if (switcher == true) {
        Disable(pveBtn)
        Enable(pvpBtn)
        switcher = false
    }
        })

//All used functions

function randomNumber(){
    let number= Math.floor(Math.random()*10);
    return number
    }

function repeating(N) {
        return (/([0-9]).*?\1/).test(N)
    }

function abc(S) {
    return (/^[a-zA-Zа-яА-ЯёЁ]+$/).test(S)
}

function comparison(num1, num2) {
    let bulls = 0;
    let cows = 0;
    num1;
    num2;
    output1 = []
    output2 = []
    pNumber = num1.toString();
    cNumber = num2.toString();
    let len1 = pNumber.length;
    let len2 = cNumber.length;

for (i = 0; i < len1; ++i) {
    output1.push(+pNumber.charAt(i));
}
for (i = 0; i < len2; ++i) {
    output2.push(+cNumber.charAt(i));
}
let ln1 = output1.length;
let ln2 = output2.length;
for (i = 0; i < ln1; ++i) {
    for (j = 0; j < ln2; ++j){
        if (output1[i] == output2[j] && i==j){
            bulls++;
        }
        else {
            if (output1[i] == output2[j]) {
                cows++;
            }
        }
    }
}
return bulls + " Bulls " + cows + " Cows";
}

function computerNumber(){
    let fourth = randomNumber();
    let third;
    let second;
    let first;
    for (let i;i=1;i++)    {
            third = randomNumber();
            second = randomNumber();
            first = randomNumber();
            if(third!=fourth && second!=fourth && second!=third && first!=fourth && first!=third && first!=second){
                break
            }
        }
        let rnd = fourth.toString()+third.toString()+second.toString()+first.toString();
        console.log(rnd);
        return rnd;
    }

function Enable(element1){
element1.innerHTML = "Enable"
element1.style.width = "100px"
element1.style.height = "40px"
element1.style.marginLeft = "15px"
element1.style.backgroundColor = "transparent";
element1.style.fontFamily = "inherit"
element1.style.fontSize = "16pt"
element1.style.borderColor = "green"
element1.style.color = "green"
element1.style.outline = "none"

element1.onmouseover = function(){
    element1.style.backgroundColor = "green";
    element1.style.color = "white"
    element1.style.borderColor = "white"
}
element1.onmouseout = function(){
    element1.style.backgroundColor = "transparent";
    element1.style.color = "green"
    element1.style.borderColor = "green"
}
}

function Disable(element2) {
    element2.innerHTML = "Disable"
    element2.style.width = "100px"
    element2.style.height = "40px"
    element2.style.marginLeft = "15px"
    element2.style.backgroundColor = "transparent";
    element2.style.fontFamily = "inherit"
    element2.style.fontSize = "16pt"
    element2.style.borderColor = "red"
    element2.style.color = "red"
    element2.style.outline = "none"

    element2.onmouseover = function(){
        element2.style.backgroundColor = "red";
        element2.style.color = "white"
        element2.style.borderColor = "white"
    }
    element2.onmouseout = function(){
        element2.style.backgroundColor = "transparent";
        element2.style.color = "red"
        element2.style.borderColor = "red"
    }
}