import './css/style.css'

// TEMP TEST — REMOVE BEFORE DESIGN PHASE
const btn = document.getElementById('test-btn')
const statusText = document.getElementById('status-text')

btn.addEventListener('click', () => {
  console.log('✓ JS is running')
  statusText.textContent = '✓ DOM updated by JS'
  statusText.classList.toggle('test-active')
  console.log('✓ CSS class toggled:', statusText.classList.contains('test-active'))
})
// END TEMP TEST
