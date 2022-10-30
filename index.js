class ConfirmationDialog {
  constructor() {}

  showDialog = () => {
    var overlayme = document.getElementById('dialog-container')
    overlayme.style.display = 'block'
  }

  hideDialog = () => {
    document.getElementById('yes').onclick = function () {
      confirm()
    }
    function confirm() {
      var overlayme = document.getElementById('dialog-container')
      overlayme.style.display = 'none'
      showNotification()
    }
    function showNotification() {
      let displayMessage = document.getElementById('notification')
      console.log(displayMessage)
      displayMessage.innerHTML = `You just clicked "yes".`
    }
  }
}

const confirmationLog = new ConfirmationDialog()
