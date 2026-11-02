// Données de départ : utilisez ce tableau comme source de votre affichage.
let participants = [
  { id: 101, nom: "Salma Bennani", statut: "Inscrit" },
  { id: 102, nom: "Youssef Amrani", statut: "Présent" },
  { id: 103, nom: "Lina Idrissi", statut: "Inscrit" }
];

// À réaliser :
// 1. Afficher les participants à partir de ce tableau.
// 2. Ajouter un participant avec un id unique et le statut "Inscrit".
// 3. Changer le statut du participant choisi dans les deux sens.
// 4. Supprimer le participant choisi après confirmation.
// 5. Actualiser l'affichage après chaque action.

// Écrivez votre JavaScript ci-dessous.

const liste = document.querySelector("#liste-participants");
const form = document.querySelector("#formulaire-participant");

function afficher(){
participants.forEach(function(p){
  const participant= document.createElement("li");
  const div_info = document.createElement("div");
  div_info.className = "participant-info";
  const participant_id = document.createElement("span");
  participant_id.textContent = p.id ; 
  participant_id.className = "participant-id";
  const div = document.createElement("div");
  const nom =  document.createElement("h3");
  nom.className="participant-name";
  nom.textContent = p.nom ; 
  const badge_inscrit = document.createElement("span")
  badge_inscrit.textContent = p.statut ;
  div.append(nom ,badge_inscrit );
  div_info.append(participant_id ,div );
  const div_actions = document.createElement("div");
  div_actions.className = "participant-actions";
  const btnmodifier = document.createElement("button");
  btnmodifier.setAttribute("type" , "button");
  btnmodifier.setAttribute("aria-label" , "marquer" );
  btnmodifier.className = "button button-presence";
  btnmodifier.textContent = "Marquer présent";
  const btnsupprimer = document.createElement("button");
  btnsupprimer.setAttribute("type" ,"button" );
  btnsupprimer.setAttribute("aria-label" , "Supprimer")
  btnsupprimer.className = "button button-delete"
  btnsupprimer.textContent = " Supprimer";
  btnsupprimer.addEventListener("click",()=>{
    Supprimer(p.id)
  })
  div_actions.append(btnmodifier , btnsupprimer);


  participant.append(div_info, div_actions);
  liste.append(participant) ;


})
}
afficher();

let prochainId = 104 ;

form.addEventListener("submit" , function(event){
  form.textContent = "";
  event.preventDefault();
  const objet = {
    id : prochainId ,
    nom : document.querySelector("#nom").value.trim(),
    statut : "Inscrit" , 
  }
  prochainId++
  afficher()
})

function Supprimer(id){
  const participants = participants.filter((v)=>v.id !== id)
  afficher()
}

