// THREE.JS SCRIPT___________________________________________________________________
// renderer
var renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight); //set size of renderer to window size
  renderer.setClearColor(0xffffff, 0) //set renderer color to alpha
  document.body.appendChild(renderer.domElement); //create canvas
  
  // scene
  var scene = new THREE.Scene();
  
  // camera
  var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  // controls
  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.autoRotateSpeed = 5;
  controls.enablePan = true;
  controls.enableZoom = false;
  controls.enableDamping = true;
  controls.minPolarAngle = 0.8;
  controls.maxPolarAngle = 0.4;
  controls.dampingFactor = 0.07;
  controls.rotateSpeed = 0.8;
  
  
  // manual camera adjust
  camera.position.set(0, 0, -9);
  controls.update(); //controls.update() must be called after any manual changes to the camera's transform
  
  // object1
  var geometry1 = new THREE.TetrahedronGeometry(1, 0); //object1 geometry
  var material1 = new THREE.MeshNormalMaterial(); //object1 material
  // var mesh1 = new THREE.Mesh(geometry1, material1); //object1 mesh
  // scene.add(mesh1); //add object1 to scene
  
  // cloner
  var objArray = [];
  for (let i = 0; i < 20; i++) {
    var meshes = new THREE.Mesh(geometry1, material1);
    meshes.position.set(i - 3.5, i, i);
    
    //mysterious algorithm, should ask Mr.Chris again to explain 
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
  
    // golden ratio animation
    for (var x = 0; x < objArray.length; x++) {
      objArray[x].rotation.x += Math.PI / 512;
      objArray[x].rotation.y += Math.PI / 1024;
      objArray[x].rotation.z += Math.PI / 1024;
    }
  
    renderer.render(scene, camera);
  };
  
  animate();
  
  console.log(scene);