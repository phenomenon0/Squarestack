import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

//add a  cube to the scene

const geometry =  new THREE.BoxGeometry(3,1,3);
const material = new THREE.MeshLambertMaterial({color:0xfbe800})