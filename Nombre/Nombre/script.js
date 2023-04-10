
let illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    zoom: 3,
    dragRotate: true,
});


new Zdog.Shape({
  addTo: illo,
  path: [
    { x: -50, y: -50 }, // Inicio de la linea
    { x: -50, y: -10 }, // Punto intermedio
    { x: -65, y:-10 }, // Punto intermedio
    { x: -65, y: -15 }, // Fin de la linea
  ],
 closed: false,
  stroke: 5,
  color: '#636',
});

new Zdog.Shape({
  addTo: illo,
  path: [
    { x: -65, y: -50 }, // Inicio de la linea
    { x: -35, y:-50 }, // Fin de la linea
  ],
 closed: false,
  stroke: 5,
  color: '#636',
});




function animate() {
    
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();