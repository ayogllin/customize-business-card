const form = document.forms[0]
const nameField = document.querySelector('#nameField')
const photoLinkField = document.querySelector('#photoLink')
const introTextarea = document.querySelector('#introTextarea')
const output = document.querySelector('#outputField')

let outputContent = ``

form.addEventListener('submit', function (event) {
  event.preventDefault()
  let name = nameField.value
  let intro = introTextarea.value
  let photo =photoLinkField.value
  outputContent = `
    <div class="outputContent">
      <h2>${name}</h2>
      <p>${intro}</p>
    </div>
    <div class="outputImage">
      <img src="${photo}" alt="user photo" onError="this.src='https://smart-api.info/static/img/user-default.png';" alt="default user photo" />
    </div>
`
    if (document.getElementById("lightTheme").checked === true) {
    // 套用light
    output.classList.add("useLight")
  } else if (document.getElementById("darkTheme").checked === true) {
    // 套用dark
    output.classList.add("useDark")
  }
  
  output.classList.add("afterSubmit")
  output.innerHTML = outputContent
  console.log(output)
})