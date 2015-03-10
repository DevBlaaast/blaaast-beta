// Polyfills:
// - classList

(function (w) {
  var modalButton = document.getElementById('modal-copyright-btn');
  var modal = document.getElementById('modal-copyright');

  modalButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (modal.classList.contains('in')) {
      modal.classList.remove('in');
      modal.style.display = 'none';
    } else {
      modal.classList.add('in');
      modal.style.display = 'block';
    }
  });
})(window);
