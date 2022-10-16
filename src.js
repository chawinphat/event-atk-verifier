//initialization
const firstPage = document.getElementById("container1")
const secondPage = document.getElementById("container2")
const thirdPage = document.getElementById("container3")

secondPage.style.display = "none"
thirdPage.style.display = "none"

//first page
const eventCode = document.getElementById("event-code")
const userEmail = document.getElementById("user-email")
const verifyButton = document.getElementById("verify-button");


//second page
const secondPageText1 = document.getElementById("hello-2")
const secondPageText2 = document.getElementById("event-2")
const secondPageUploadButton = document.getElementById("upload-image-button")


verifyButton.addEventListener("click", () => {
    console.log("button1 clicked")
    firstPage.style.display = "none"
    secondPage.style.display = "block"
    secondPageText1.innerHTML = 'Hello ' + userEmail.value + 'USERNAME,'
    secondPageText2.innerHTML = 'Submit an ATK test for ' + eventCode.value + 'EVENTNAME'
  });

secondPageUploadButton.addEventListener("click", ()=> {
  ///ADD SPINNING FOR COMPUTER VISION ALGORITHM
    const uploadedImage = document.getElementById("images")
    secondPage.style.display = "none"
    thirdPage.style.display = "block"


});





