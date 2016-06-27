//GLYCINE MODEL
//DANIEL KERMANY 2015

var scene,
    camera,
    renderer,
    controls,
    light, 
    elements,
    placement,
    materials,
    geometry,
    atom, 
    bond,
    gui;

init();
render();

function animate() {
  requestAnimationFrame(render);
  controls.update();
}

function render() {
  renderer.render(scene, camera);
}

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
  scene.add(camera);
  camera.position.z = 756;
  camera.position.x = 400;
  camera.position.y = 390;

  renderer = new THREE.WebGLRenderer({ antialiasing: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xFFFFFF);
  document.body.appendChild(renderer.domElement);

  //GUI
  var FizzyText = function() {
    this.molecule = 'Glycine';
  };

  var text = new FizzyText();
  var gui = new dat.GUI({
    height : 1 * 32 - 1
  });
  var molecule = gui.add(text, 'molecule', ['Glycine', 'Alanine', 'Leucine', 'Valine']);

  molecule.onChange(function(value) {
    if(value !== document.title) {
      window.location.href = '../' + value.toLowerCase();
    }
  });

  //camera controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.damping = 0.2;
  controls.addEventListener('change', render);

  elements = {
    CARBON: 0,
    OXYGEN: 1,
    HYDROGEN: 2,
    NITROGEN: 3
  };

  placement = {
    POSITION: 0,
    ROTATION: 1
  }

  materials = {
    CARBON: new THREE.MeshLambertMaterial({ color: 0x707070 }),
    OXYGEN: new THREE.MeshLambertMaterial({ color: 0xFF0000 }),
    HYDROGEN: new THREE.MeshLambertMaterial({ color: 0xFFFFFF }),
    NITROGEN: new THREE.MeshLambertMaterial({ color: 0x5400FF })
  };

  geometry = {
    ATOM: new THREE.SphereGeometry(150, 150, 150),
    FULL: new THREE.CylinderGeometry(70, 70, 400, 300), //bonds
    HALF: new THREE.CylinderGeometry(70, 70, 200, 300),
    HBOND: new THREE.CylinderGeometry(70, 70, 50, 300),
    DOUBLE: new THREE.CylinderGeometry(25, 25, 50, 300)
  };

  addAtoms();
  addBonds();

  //light
  light = new THREE.DirectionalLight(0xFFFFFF);
  light.position.set(0, 0, 0);
  light.distance = 0;
  light.intensity = 1;
  camera.add(light);    //connect lights to camera

  window.addEventListener('resize', onWindowResized);
  animate();
}

function addAtoms() {
    for(var element in atoms) {
      for(var i = 0; i < atoms[element].length; i++) {
        setMesh(element);
        for (var j = 0; j < atoms[element][i].length; j++) {
          scene.add(atom);
          switch(j) {
            case 0: 
              atom.position.x = atoms[element][i][j];
              break;
            case 1: 
              atom.position.y = atoms[element][i][j];
              break;
            case 2:
              atom.position.z = atoms[element][i][j];
              break;
          } 
        }
      }
    }
  }

  function setMesh(element, bondType) {
    if(!bondType){
      atom = new THREE.Mesh(geometry.ATOM, materials[element]);
    }
    else{
      bond = new THREE.Mesh(geometry[bondType], materials[element]);
    }
  }

  function addBonds() {
    for(var bondType in bonds) {
      for(var element in bonds[bondType]) {
        for(var i in bonds[bondType][element]) {
          setMesh(element, bondType);
          for (var j in bonds[bondType][element][i]) {
            scene.add(bond);
            switch(parseInt(j, 10)) {
              case 0: 
                bond.position.x = bonds[bondType][element][i][j];
                break;
              case 1: 
                bond.position.y = bonds[bondType][element][i][j];
                break;
              case 2:
                bond.position.z = bonds[bondType][element][i][j];
                break;
              case 3: 
                bond.rotation.x = bonds[bondType][element][i][j];
                break;
              case 4: 
                bond.rotation.y = bonds[bondType][element][i][j];
                break;
              case 5:
                bond.rotation.z = bonds[bondType][element][i][j];
                break;
            } 
          }
        }
      }
    }
  }

function onWindowResized(event) {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.projectionMatrix.makePerspective(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  render();
}