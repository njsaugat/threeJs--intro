import * as THREE from 'three';
import './style.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
console.log('hello ');
const scene = new THREE.Scene();
//Create our sphere
const geometry = new THREE.SphereGeometry(3, 64, 64); //just like clay
const material = new THREE.MeshStandardMaterial({
  color: '#00ff83',
}); //give it proper shape
const mesh = new THREE.Mesh(geometry, material); //combination of material and geometry
scene.add(mesh); //adding to scene

// sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

//light
const light = new THREE.PointLight(0xfffaea, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

//camera
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
); //size--> 800*600
camera.position.z = 20;
scene.add(camera);
//wide angle camera-->distored edges

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGL1Renderer({ canvas });

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

//if mesh and camera at same place nth seen

//controls

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
//resize
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  //also have to change camera and render size
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

const loopAnimation = () => {
  // mesh.position.z += 0.01;
  // mesh.position.x += 0.01;
  // mesh.position.y += 0.01;

  renderer.render(scene, camera);
  window.requestAnimationFrame(loopAnimation); //this is kinda like re-rendering the stuff;passing own referene
};
//renders it everytime
loopAnimation();
console.log(Math.fround(1.5));
console.log(Math.log(1.5));
console.log(Math.log1p(1.5));
