// utilize the document.getElementsByClassName() method
function listChange() {
  var trees = ["Jacaranda", "Christmas", "Shoe"]
  var list = document.getElementsByClassName("list")
  for (i = 0; i < list.length; i++) {
    list[i].innerHTML = trees[i]
  }
}

// canvas assignment
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var g = ctx.createRadialGradient(0, 0, 0, 500, 100, 50);
g.addColorStop(0, "seagreen");
g.addColorStop(1, "white");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 500, 100);

// gradient challenge
var bg = document.getElementById("bg")
var bgctx = bg.getContext("2d")
var gr = bgctx.createLinearGradient(0, 0, 1000, 100)
gr.addColorStop(0, "pink")
gr.addColorStop(1, "white")
bgctx.fillStyle = gr
bgctx.fillRect(0, 0, 1000, 100)

