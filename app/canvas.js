const burst = new mojs.Burst({
  left: 0, top: 0,
  radius: {0: 100},
  count: 20,
  children:{
    shape: 'cross',
    stroke:'teal',
    strokeWidth: {6:0},
    angle:{360:0},
    radius:{30:5},
    duration: 1500
  }
});
const burst2 = new mojs.Burst({
  left: 0, top: 0,
  radius: {0: 200},
  count: 10,
  children:{
    shape: 'zigzag',
    points: 10,
    stroke:{'magenta': 'pink'},
    strokeWidth: {6:0},
    angle:{'-360':0},
    radius:{30:5},
    opacity:{1:0},
    duration: 1500
  }
});
const burst3 = new mojs.Burst({
  left: 0, top: 0,
  radius: {0: 200},
  count: 5,
  children:{
    color:'purple',
    points: 7,
    angle:{'-360':0},
    radius:{10:5},
    opacity:{1:0},
    duration: 1500
  }
});
const circ_opt ={
  left: 0, top: 0,
  radius:{0:200},
  fill: 'none',
  stroke: 'yellow',
  opacity:{1:0},
  duration: 2000

};
const circ = new mojs.Shape({
  ...
  circ_opt
});
const circ2 = new mojs.Shape({
  ...
  circ_opt,
  delay: 500
});
const burst4 = new mojs.Burst({
  left: 0, top: 0,
  radius: {0: 200},
  count: 5,
  children:{
    shape: 'zigzag',
    color:{'magenta': 'teal'},
    points: 1,
    angle: 360,
    radius:{10:5},
    opacity:{1:0},
    duration: 1500
}});

document.addEventListener('click', function(e){
  burst
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
  burst2
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
  burst3
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
  circ
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
  circ2
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
  burst4
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
});
