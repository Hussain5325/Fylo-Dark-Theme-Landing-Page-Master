const btn = document.querySelector('#btn')
const error = document.querySelector('#error')
const email = document.querySelector('#email')

btn.addEventListener('click', () => {
  if (email === '') {
  } else {
    error.style.opacity = 1
  }
})
