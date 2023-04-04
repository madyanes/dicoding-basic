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

const topButton = document.getElementById('top')

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = 'block'
  } else {
    topButton.style.display = 'none'
  }
}

window.onscroll = () => scrollFunction()
