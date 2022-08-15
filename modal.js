var img = document.getElementsByClassName('modal_trigger');
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("modal-img");

//put the image data of the clicked image into the modal div
var showModal = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showModal);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//close modal
span.onclick = function() { 
    modal.style.display = "none";
}