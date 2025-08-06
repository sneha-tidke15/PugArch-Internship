const modal = document.getElementById('modal')
const modalImg = document.getElementById('modalImg')
const closeBtn = document.getElementById('closeBtn')
const images = document.querySelectorAll('.gallery-grid img')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let currentIndex = 0

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex'
    modalImg.src = img.src
    currentIndex = index
  })
})

closeBtn.onclick = () => {
  modal.style.display = 'none'
}

prev.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length
  modalImg.src = images[currentIndex].src
}

next.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length
  modalImg.src = images[currentIndex].src
}

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none'
  }
}
