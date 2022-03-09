console.log("I am index.js");
var pagemap=new Map([
    ["csk","html/csk.html"],
    ["dc","html/dc.html"],
    ["kkr","html/kkr.html"],
    ["mi","html/mi.html"],
    ["pbks","html/pbks.html"],
    ["rcb","html/rcb.html"],
    ["rr","html/rr.html"],
    ["srh","html/srh.html"]
]);
function preview() {
    var frame=document.getElementById("frame");
    frame.src = URL.createObjectURL(event.target.files[0]);
    var prev=document.getElementById("prev");
    prev.src = URL.createObjectURL(event.target.files[0]);
}
function clearImage() {
    var frame=document.getElementById("frame");
    var prev=document.getElementById("prev");
    document.getElementById('imageFile').value = null;
    frame.src = "";
    prev.src="";
}
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
function storePlayerData(){
    let playername = document.getElementById("playername").value;
    let price = document.getElementById("price").value;
    let teamname = document.getElementById("teamname").value;
    let role = document.getElementById("role").value;
    let playingstatus = document.getElementById("playingstatus").value;

    let playerList = JSON.parse(localStorage.getItem("playerData") || "[]");
    console.log(playerList);

    const player = {
        "playerName": playername,
        "photo":getBase64Image(document.getElementById("frame")),
        "from": teamname,
        "price": price,
        "description": role,
        "isPlaying": playingstatus
    }
    console.log("#######Player ========"+ player);

    playerList.push(player);

    localStorage.setItem("playerData", JSON.stringify(playerList));
    alert("Player Data has been Added Successfully!!")
    document.getElementById("playerForm").reset();
}
function search() {
    let valt=document.getElementById("searchBar").value.toLowerCase();
    pagemap.forEach(function(value, key) {
        if(valt.includes(key)||key.includes(valt)) {
            window.location=value;
        }
    });
}
