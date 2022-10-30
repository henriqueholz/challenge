class ConfirmationDialog {
  constructor() {}

  showDialog = () => {
    var overlayme = document.getElementById('dialog-container')
    overlayme.style.display = 'block'
  }
}

const confirmationLog = new ConfirmationDialog()
