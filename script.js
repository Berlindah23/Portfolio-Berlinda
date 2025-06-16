document.getElementById('form-contact').onsubmit = function(e) {
  e.preventDefault();

  var inputs = this.querySelectorAll('input, textarea');
  var email = this.querySelector('input[type="email"]');
  var emailVal = email.value.trim();
  var emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  var valide = true;

   if (!emailRegex.test(emailVal)) {
    alert("Veuillez saisir un email valide.");
    email.style.border = '2px solid red';
    valide = false;
  }

  for (var i = 0; i < inputs.length; i++) {
    var champ = inputs[i];
    if (champ.value.trim() === '') {
      champ.style.border = '2px solid red';
      valide = false;
    } else if (champ !== email) {
      champ.style.border = '2px solid green';
    }
  }

  if (valide) {
    document.getElementById('confirmation').style.display = 'block';
    this.reset();

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].style.border = 'none';
    }
  }
};

var cartes = document.getElementsByClassName('carte');

for (var i = 0; i < cartes.length; i++) {
  cartes[i].onmouseover = function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.3s ease';
  };

  cartes[i].onmouseout = function() {
    this.style.transform = 'scale(1)';
  };
}

function animerBarres() {
  var toutesLesBarres = document.getElementsByClassName('barre');

  for (var i = 0; i < toutesLesBarres.length; i++) {
    var largeur = toutesLesBarres[i].getAttribute('data-width');
    toutesLesBarres[i].style.width = largeur;
  }
}

window.onscroll = function() {
  var section = document.getElementById('competences');
  if (!section) return;

  var position = section.offsetTop - 300;

  if (window.scrollY >= position) {
    animerBarres();
  }
};