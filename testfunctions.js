/**
 * Created by Varun on 15/08/17.
 */
var canvas = new fabric.Canvas('canvas');
var height = parseInt(document.getElementById('canvas').getAttribute('height'));
var width = parseInt(document.getElementById('canvas').getAttribute('width'));
var distance = 200;
var radius = 20;
var linelimit = 180;
var delaytime = 1000;

 async function delay (time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}


async function addRoot (value) {
    var value = String(value);
    var x = new fabric.Circle({ radius: radius, left: width / 2, fill: 'red', top: radius, originX: 'center', originY: 'center', fill: 'red'});
    var text = new fabric.Text(value, {fontSize: 10, originX: 'center', originY: 'center', left: width / 2, top: radius});
    await delay(1000);
    canvas.add(x);
    canvas.add(text);
    return x
}

function addline (x1, y1, x2, y2) {
  console.log("In addline");
  var line = new fabric.Line([x1, y1, x2, y2], {stroke: 'black', originX: 'center', originY: 'center'});
  canvas.add(line)
}


 async function  addNode (node1, node2, angle) {
  var intialx = parseInt(node1.left);

  var initialy = parseInt(node1.top);

   console.log("addNode");

  if (angle > 0 && angle <= 90) {
    var pointx = Math.abs(Math.abs(Math.cos(angle * Math.PI / 180) * distance) + intialx);
    var pointy = Math.abs(Math.abs(Math.sin(angle * Math.PI / 180) * distance) - initialy);

    var initiallinex = Math.abs(Math.abs(Math.cos(angle * Math.PI / 180) * radius) + intialx);
    var initialliney = Math.abs(Math.abs(Math.sin(angle * Math.PI / 180) * radius) - initialy);
    var finallinex = Math.abs(Math.abs(Math.cos(angle * Math.PI / 180) * linelimit) + intialx);
    var finalliney = Math.abs(Math.abs(Math.sin(angle * Math.PI / 180) * linelimit) - initialy)
  }
  if (angle > 90 && angle <= 180) {
    var pointx = Math.abs(Math.cos(angle * Math.PI / 180) * distance + intialx);
    var pointy = Math.abs(Math.sin(angle * Math.PI / 180) * distance - initialy);

    var initiallinex = Math.abs(Math.cos(angle * Math.PI / 180) * radius + intialx);
    var initialliney = Math.abs(Math.sin(angle * Math.PI / 180) * radius - initialy);
    var finallinex = Math.abs(Math.cos(angle * Math.PI / 180) * linelimit + intialx);
    var finalliney = Math.abs(Math.sin(angle * Math.PI / 180) * linelimit - initialy)
  }
  if (angle > 180 && angle <= 270) {
    if (angle == 270) {
      var pointx = Math.abs(Math.cos(angle * Math.PI / 180) * distance + intialx);
      var pointy = Math.abs(Math.sin(angle * Math.PI / 180) * distance - initialy);
      var initiallinex = Math.abs(Math.cos(angle * Math.PI / 180) * radius + intialx);
      var initialliney = Math.abs(Math.sin(angle * Math.PI / 180) * radius - initialy);
      var finallinex = Math.abs(Math.cos(angle * Math.PI / 180) * linelimit + intialx);
      var finalliney = Math.abs(Math.sin(angle * Math.PI / 180) * linelimit - initialy)
    } else {
      var pointx = Math.abs(Math.cos(angle * Math.PI / 180) * distance + intialx);
      var pointy = Math.abs(Math.sin(angle * Math.PI / 180) * distance - initialy);
      var initiallinex = Math.abs(Math.cos(angle * Math.PI / 180) * radius + intialx);
      var initialliney = Math.abs(Math.sin(angle * Math.PI / 180) * radius - initialy);
      var finallinex = Math.abs(Math.cos(angle * Math.PI / 180) * linelimit + intialx);
      var finalliney = Math.abs(Math.sin(angle * Math.PI / 180) * linelimit - initialy)
    }
  } else {
    var pointx = Math.abs(Math.cos(angle * Math.PI / 180) * distance + intialx);
    var pointy = Math.abs(Math.sin(angle * Math.PI / 180) * distance - initialy);
    var initiallinex = Math.abs(Math.cos(angle * Math.PI / 180) * radius + intialx);
    var initialliney = Math.abs(Math.sin(angle * Math.PI / 180) * radius - initialy);
    var finallinex = Math.abs(Math.cos(angle * Math.PI / 180) * linelimit + intialx);
    var finalliney = Math.abs(Math.sin(angle * Math.PI / 180) * linelimit - initialy)
  }

  var x = new fabric.Circle({ radius: radius, originX: 'center', originY: 'center', fill: 'red', left: pointx, top: pointy});
  var value1 = String(node2);
  var text = new fabric.Text(value1, {fontSize: 10, originX: 'center', originY: 'center', left: pointx, top: pointy});
  await delay(1000);
  canvas.add(x);
  canvas.add(text);
  await delay(1000);
  console.log("Executed");
  addline(initiallinex, initialliney, finallinex, finalliney);
  return x;
}
