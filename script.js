/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
function SelezionaImmagine(event){

  /* Ci permette di cambiare risposta */
  const immagine_non_selezionata_prec = event.currentTarget.parentNode.querySelectorAll(".non_selezionato");
  const immagine_selezionata_prec = event.currentTarget.parentNode.querySelector(".selezionato");
  if(immagine_selezionata_prec){
    immagine_selezionata_prec.classList.remove("selezionato");
    immagine_selezionata_prec.querySelector(".checkbox").src= "images/unchecked.png";
}

for(const box of immagine_non_selezionata_prec){
  box.classList.remove("non_selezionato");
}

  const checkbox = event.currentTarget.querySelector(".checkbox");
  checkbox.src = "images/checked.png";
  event.currentTarget.classList.add("selezionato");

  const lista_blocchi = event.currentTarget.parentNode.querySelectorAll(".choice-grid div");
  /* lista_blocchi è una lista che contiene i blocchi di una stessa sezione con stesso nodo genitore */
  for(const box of lista_blocchi){
      if(box !== event.currentTarget){
          box.classList.add("non_selezionato");
      }
  }
  
  const immagine_scelta = document.querySelectorAll(".selezionato");  
/*Se sono state selezionate tre immagini otterò il risulato finale */
  if(immagine_scelta.length === 3){
      for(const box of boxes){
        /* Rimuoviamo la funzione perchè allora potrei continuare a 
        selezionare immagini anche se il test è terminato */
          box.removeEventListener('click', SelezionaImmagine);
      }
      if(immagine_scelta[1].dataset.choiceId === immagine_scelta[2].dataset.choiceId){
        return Visualizza(immagine_scelta[1])
    }
    return Visualizza(immagine_scelta[0])
  }

}

function Visualizza(risulato){

  const Titolo = document.querySelector("h1.Risposta");
  const contenuto = document.querySelector("div.Risposta");
  const container = document.querySelector("div.Risultato");
  
  Titolo.textContent = RESULTS_MAP[risulato.dataset.choiceId].title;
  contenuto.textContent = RESULTS_MAP[risulato.dataset.choiceId].contents;
  container.classList.remove("hidden");
  
}

function Riavvio(event){
  const boxes =  document.querySelectorAll('.choice-grid div');
  const checkbox = document.querySelectorAll('.checkbox');
  for(let box of boxes){
    box.classList.remove('selezionato');
    box.classList.remove('non_selezionato');
    for(let check of checkbox){
      check.src="images/unchecked.png";
    }
    box.addEventListener('click', SelezionaImmagine);
  }
 document.querySelector('.Risultato').classList.add('hidden')
}

const boxes = document.querySelectorAll(".choice-grid div");
for(const box of boxes){
    box.addEventListener('click', SelezionaImmagine);
}
const box = document.querySelector('button');
box.addEventListener('click', Riavvio);