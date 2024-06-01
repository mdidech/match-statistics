const socket = io();

const matchsDiv = document.querySelector('.matchs');

socket.on('updateMatchs', (matchs) => {
  matchs.forEach((match) => {
    const matchDiv = document.createElement('div');
    matchDiv.classList.add('col-3');
    const { league, teams, goals } = match;
    matchDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src=${league.logo} class="card-img-top" height="150px" style="object-fit:contain">
  <div class="card-body">
    <p class="card-text d-flex justify-content-around">
    <span>${teams.home.name} </span> ${goals.home} - ${goals.away}  
    <span>${teams.away.name}</span>
    
    </p>
  </div>
</div>
    
    `;
    matchsDiv.appendChild(matchDiv);
  });
});
