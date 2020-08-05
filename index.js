/***** Deliverable 1 *****/
const header = document.querySelector("#header")
// console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = 'red'

/***** Deliverable 3 *****/
// console.log(PLAYERS)

function renderPlayers(PLAYERS){
    const playersDivs = document.querySelector(".player-container");
    for (const player of PLAYERS) {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add("player");
        playerDiv.setAttribute("data-number", `${player.number}`);
        
        playerDiv.innerHTML = `
        <h3>${player.name} (<em>${player.nickname}</em>)</h3>
        <img src="${player.photo}" alt="${player.name}">
        `;

        playersDivs.append(playerDiv);
    };
};

renderPlayers(PLAYERS)


/***** Deliverable 4 *****/

a = document.querySelector("div[data-number='7']")
a.remove()