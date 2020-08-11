var cakeImg = document.getElementById('cakeImg');
var smallImg = document.getElementsByClassName('small-img');

smallImg[0] .onclick = function() {
    cakeImg.src = smallImg[0].src;
}
smallImg[1] .onclick = function() {
    cakeImg.src = smallImg[1].src;
}
smallImg[2] .onclick = function() {
    cakeImg.src = smallImg[2].src;
}
smallImg[3] .onclick = function() {
    cakeImg.src = smallImg[3].src;
}