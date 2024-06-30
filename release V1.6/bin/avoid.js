const v1 = document.querySelector('.yt-spec-button-shape-next--filled');
const v2 = document.querySelector('button[aria-label="Refresh page"]')
function avoid(){
if (v1){
    document.querySelector('.yt-spec-button-shape-next--filled').click();
}
if (v2){
    document.querySelector('button[aria-label="Refresh page"]').click();
}
}
setInterval(avoid, 100);

document.querySelector('.yt-spec-button-shape-next--filled').click();

document.querySelector('button[aria-label="Refresh page"]').click();
