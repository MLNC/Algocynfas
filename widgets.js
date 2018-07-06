
function getHTML(id){
  return document.getElementById(id);
}



function splitInput(input,space = false){
  if (space){
    return (input.split(" ").join("")).split(",");
  }
  return input.split(",");

}

function letterNumConvert(key){
    if(Number.isInteger(key)){
      var aAlph = {
        0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", 6: "g", 7: "h",
        8: "i", 9: "j", 10: "k", 11: "l", 12: "m", 13: "n", 14: "o", 15: "p"}
        return aAlph[key];

      }
    
    var aNum={
        a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, 
        l: 11, m: 12, n: 13,o: 14, p: 15
    }
    return aNum[key];
}

function check_and_Delay(){
    if(getHTML('Fast').checked)
    {
       return 200;
    }
    else if(getHTML('Medium').checked)
    {
       return 500;
    }
    else
    {
       return 1000;
    }
    
}

function noticeErr(message,id="") {
  if(id!=""){
      getHTML(id).style.background="red";
   }
   alert(message);
}

function correctErr(id) {
    getHTML(id).style.background="#FCF5DB";
}


function drawListOnScreen(currentNumbersList) {
    canvas.clear();
    fList = window.createList(canvas, currentNumbersList);
}

function stopAnime() {
    animeRunning = false;
    }




function create_legend(title1, title2 , c1, c2) {
    const legend = {    
        "data": [{
                    "title": title1,
                    "color": c1,
                },
                {
                    "title": title2,
                    "color": c2,
                        },]
    };
    return legend;
}

function display_legend(title1, title2, c1= '#ffb380', c2 = '#99ccff') {
  var legend = create_legend(title1, title2, c1, c2);
  return getHTML("legend").innerHTML =
  `<div class='list-group col-3'>
    <div class='list-group-item' style = background-color:${legend.data[0].color}>
    ${legend.data[0].title}
    </div>
    <div class='list-group-item' style = background-color:${legend.data[1].color}>
    ${legend.data[1].title}
    </div>
  </div>`;
}