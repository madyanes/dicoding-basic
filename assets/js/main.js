const date = new Date()
document.querySelector('footer #copyright').innerHTML = 'Copyright &copy; ' + date.getFullYear()

const inDevlepmentMessage = (e) => {
  e.preventDefault()
  alert('Mohon maaf! Fitur ini dalam tahap pengembangan, belum dapat digunakan.')
}

const buttonElement = document.querySelectorAll('.button')
buttonElement.forEach((element) => {
  element.addEventListener('click', inDevlepmentMessage)
})
