import * as THREE from "three";
// 导入轨道控制器
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

// console.log(THREE);

// 目标：控制3d物体移动

// 1、创建场景
const scene = new THREE.Scene();

// 2、创建相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// 设置相机位置
camera.position.set(0, 0, 10);
scene.add(camera);

// 添加物体
// 创建几何体
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: 0xffff00});
// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

// 修改物体的位置
// cube.position.set(5, 0, 0);
// cube.position.x = 3;

// 将几何体添加到场景中
scene.add(cube);

console.log(cube);

// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);
// console.log(renderer);
// 将webgl渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement);

// // 使用渲染器，通过相机将场景渲染进来
// renderer.render(scene, camera);

// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);

const dir = new THREE.Vector3(10, 10, 10); // 基于箭头原点的方向. 必须为单位向量.

//normalize the direction vector (convert to vector of length 1)
dir.normalize();

const origin = new THREE.Vector3(0, 0, 0); //  箭头的原点.

const length = 6; // 线长度
const hex = "red";

const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
scene.add(arrowHelper);

// // 添加坐标轴辅助器
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

let x = 0;
function render() {
  // x += 0.01;
  // cube.position.set(x, 0, 0);

  // 或者直接设置
  // cube.position.x += 0.01;
  // cube.position.y += 0.01;
  // if (cube.position.x > 5) {
  //   cube.position.x = 0;
  // }
  renderer.render(scene, camera);
  //   渲染下一帧的时候就会调用render函数
  requestAnimationFrame(render);
}

render();
