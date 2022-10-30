class ConfirmationDialog {
  popup = document.createElement('div')

  showDialog = () => {
    document.body.appendChild(this.popup)
    this.popup.id = 'popup'
    this.popup.style.display = 'block'

    this.addText('Are you sure you want to continue?')
    this.addButton('yes', 'dialog-btn btn-yes', this.showNotification)
    this.addButton('cancel', 'dialog-btn btn-cancel', this.showNotification)
  }

  showNotification = () => {
    let displayMessage = document.getElementById('display_notification')
    displayMessage.innerHTML = `You just clicked "${event.target.innerHTML}".`
    this.hideDialog(this.popup, this.overlay)
  }

  hideDialog = (node, overlayNode) => {
    while (node.lastChild) {
      node.removeChild(node.lastChild)
    }
    document.body.removeChild(node)
    document.body.removeChild(overlayNode)
  }

  addText = text => {
    let popupText = document.createElement('p')
    popupText.innerHTML = text
    this.popup.appendChild(popupText)
  }

  addButton = (label, id, clickFunction) => {
    let newButton = document.createElement('button')
    newButton.innerHTML = label
    newButton.id = id
    newButton.onclick = clickFunction
    this.popup.appendChild(newButton)
  }
}

const confirmationLog = new ConfirmationDialog()
