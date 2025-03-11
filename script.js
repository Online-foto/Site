// 1) Pop-up de aviso (abre automaticamente ao carregar)
window.onload = function() {
  openPopupAviso();
};

function openPopupAviso() {
  document.getElementById('popupAviso').style.display = 'flex';
}

function closePopupAviso() {
  document.getElementById('popupAviso').style.display = 'none';
}

// 2) Pop-up do Facebook
function openPopupFacebook() {
  document.getElementById('popupFacebook').style.display = 'flex';
}

function closePopupFacebook() {
  document.getElementById('popupFacebook').style.display = 'none';
}

window.onclick = function(event) {
  const popupAviso = document.getElementById('popupAviso');
  if (event.target === popupAviso) {
    popupAviso.style.display = 'none';
  }
  const popupFacebook = document.getElementById('popupFacebook');
  if (event.target === popupFacebook) {
    popupFacebook.style.display = 'none';
  }
};

