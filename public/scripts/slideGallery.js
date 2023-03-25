const heroImage = document.getElementById("heroImage");
const images = document.getElementsByClassName("imgPicks");
const imagePickerSize = 5;
let oldImage = imagePickerSize;
let curImage = 0;
let activeImg = document.getElementsByClassName
let maxImages = images.length;

function changeSlides(amt) {
    oldImage = curImage;
    curImage += amt;
    if (curImage < 0)
        curImage = 0;
    if (curImage >= maxImages)
        curImage = maxImages - 1;
    updateImages();
}

function scrollImages(amt) {
    oldImage = curImage;
    curImage += imagePickerSize*amt - (curImage % imagePickerSize);
    if (curImage >= 0 && curImage < maxImages) 
        updateImages()
    else
        curImage = oldImage

}
function setImage(element){
    var index = Array.prototype.indexOf.call(images, element);
    if (curImage!=index) {
        oldImage = curImage;
        curImage = index;
        updateImages();
    }
}

function updateImages() {
    heroImage.src = images[curImage].src;
    images[oldImage].style.filter = "brightness(0.5)";
    images[curImage].style.filter = "brightness(1)";
    var oldStartOfChain = oldImage - oldImage % imagePickerSize;
    var curStartOfChain = curImage - curImage % imagePickerSize;
    if(oldStartOfChain!=curStartOfChain)
        for (let index = 0; index < imagePickerSize; index++) {
            if (index + oldStartOfChain < maxImages)
                images[oldStartOfChain + index].style.display = "none";
            if (index + curStartOfChain < maxImages)
                images[curStartOfChain + index].style.display = "inline-block";
        }
}
window.onresize = updateImages;

updateImages();