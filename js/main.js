// OVERLAY SCRIPT___________________________________________________________________
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// THREE.JS SCRIPT___________________________________________________________________
// renderer
var renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight); //set size of renderer to window size
renderer.setClearColor(0xffffff, 0) //set renderer color to alpha
document.body.appendChild(renderer.domElement); //create canvas with renderer

// scene
var scene = new THREE.Scene();

// camera
var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);

// controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.enableZoom = false;

// manual camera adjust
camera.position.set(0, 0, 5);
controls.update(); //controls.update() must be called after any manual changes to the camera's transform

// object1
var geometry1 = new THREE.TetrahedronGeometry(1, 0); //object1 geometry
var material1 = new THREE.MeshNormalMaterial(); //object1 material
// var mesh1 = new THREE.Mesh(geometry1, material1); //object1 mesh
// scene.add(mesh1); //add object1 to scene

// CLONER
var objArray = [];
for (let i = 0; i < 10; i++) {
  var meshes = new THREE.Mesh(geometry1, material1);
  meshes.position.set(i - 3.5, i, i);
  // mesh1.material1.opacity=0.6;
  if (i == 0) {
    scene.add(meshes);
    var primeMesh = meshes;
    objArray.push(meshes);
  } else {
    primeMesh.add(meshes);
    primeMesh = meshes;
    objArray.push(meshes);
  }
}

// auto resize canvas by listening to window resize event
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})

// animate function
function animate() {
  requestAnimationFrame(animate);

  controls.update(); //controls.update() must be called after any manual changes to the camera's transform

  // animation
  for (var x = 0; x < objArray.length; x++) {
    objArray[x].rotation.x += 0.001;
    objArray[x].rotation.y += 0.001;
    objArray[x].rotation.z += 0.001;
  }

  renderer.render(scene, camera);
};

animate();

console.log(scene);