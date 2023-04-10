
let illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    zoom: 3,
    dragRotate: true,
});


let pared1= new Zdog.Box({
  addTo: illo,
  width: 10,
  height: 100,
  depth: 80,
  stroke: false,
  color: '#C25', // default face color
  leftFace: '#EA0',
  rightFace: '#E62',
  topFace: '#ED0',
  bottomFace: '#636',
  translate: { z: -90 },
});


let pared2= new Zdog.Box({
  addTo: illo,
  width: 100,
  height: 10,
  depth: 80,
  stroke: false,
  color: '#C25', // default face color
  leftFace: '#EA0',
  rightFace: '#E62',
  topFace: '#ED0',
  bottomFace: '#636',
  translate: { x:-55, y: -45, z: -90 },

});




function animate() {
    
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();