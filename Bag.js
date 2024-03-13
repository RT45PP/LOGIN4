document.addEventListener('DOMContentLoaded', function() {
    const removeButtons = document.querySelectorAll('.remove-button');
    const boxes = document.querySelectorAll('.box1, .box2, .box3, .box4');
    const container = document.querySelector('.container');
    const boxDistance = 285;
  
    removeButtons.forEach(function(removeButton, index) {
      removeButton.addEventListener('click', function() {
        // Afficher une boîte de dialogue de confirmation
        const confirmation = confirm("Êtes-vous sûr de vouloir retirer le produit ?");
  
        if (confirmation) {
          // Supprimer la boîte correspondante
          const boxToRemove = boxes[index];
          boxToRemove.style.height = boxToRemove.offsetHeight + 'px';
          boxToRemove.classList.add('box-removed');
  
          // Réorganiser les boîtes restantes
          const remainingBoxes = document.querySelectorAll('.box1, .box2, .box3, .box4');
          remainingBoxes.forEach(function(remainingBox, remainingIndex) {
            if (remainingIndex > index) {
              remainingBox.style.transform = `translateY(-${boxDistance}px)`;
            }
          });
  
          // Rechercher le prochain box visible pour combler l'espace laissé
          let nextVisibleBoxIndex = index;
          while (nextVisibleBoxIndex < boxes.length - 1) {
            nextVisibleBoxIndex++;
            if (!boxes[nextVisibleBoxIndex].classList.contains('box-removed')) {
              break;
            }
          }
  
          // Décaler les prochains boxes pour remplir l'espace laissé
          let shiftAmount = 0;
          for (let i = index + 1; i < nextVisibleBoxIndex; i++) {
            if (!boxes[i].classList.contains('box-removed')) {
              shiftAmount += boxDistance;
              boxes[i].style.transform = `translateY(-${shiftAmount}px)`;
            }
          }
  
          // Supprimer la boîte après l'animation
          boxToRemove.addEventListener('transitionend', function() {
            boxToRemove.remove();
  
            // Réorganiser les boîtes restantes après la suppression de la boîte
            const remainingBoxes = document.querySelectorAll('.box1, .box2, .box3, .box4');
            remainingBoxes.forEach(function(remainingBox, remainingIndex) {
              if (remainingIndex > index) {
                remainingBox.style.transform = `translateY(0)`;
              }
            });
          });
        }
      });
    });
  
    const minusBtns = document.querySelectorAll('.minus');
    const plusBtns = document.querySelectorAll('.plus');
    const quantityElements = document.querySelectorAll('.quantity');
    const priceElements = document.querySelectorAll('.price');
  
    minusBtns.forEach(function(minusBtn, index) {
      minusBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityElements[index].textContent);
        if (quantity > 1) {
          quantity--;
          quantityElements[index].textContent = quantity;
          updatePrice(priceElements[index], quantity);
        }
      });
    });
  
    plusBtns.forEach(function(plusBtn, index) {
      plusBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityElements[index].textContent);
        quantity++;
        quantityElements[index].textContent = quantity;
        updatePrice(priceElements[index], quantity);
      });
    });
  
    function updatePrice(priceElement, quantity) {
      const priceText = priceElement.textContent;
      const newPriceText = priceText.replace(/\d+$/, quantity);
      priceElement.textContent = newPriceText;
    }
  });

  // Récupérer le bouton "Commander"
const commanderButton = document.getElementById("commander-button");

// Récupérer la div "box5"
const box5 = document.querySelector(".box5");

// Cacher la div "box5" au chargement de la page
box5.style.display = "none";

// Ajouter un écouteur d'événement pour le clic sur le bouton "Commander"
commanderButton.addEventListener("click", function() {
  // Vérifier si la div "box5" est déjà visible
  if (box5.style.display === "none") {
    // Afficher la div "box5"
    box5.style.display = "block";
  } else {
    // Cacher la div "box5"
    box5.style.display = "none";
  }
});