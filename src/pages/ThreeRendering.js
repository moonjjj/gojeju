import React,{useEffect, useRef} from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function ThreeRendering() {
    let canvasDom = useRef();
    useEffect(()=>{
        let scene = new THREE.Scene();
        let renderer = new THREE.WebGLRenderer({
          // canvas : document.querySelector('#canvas'),
          canvas : canvasDom.current,
          antialias: true
        });
        renderer.outputEncoding = THREE.sRGBEncoding;
      
        let camera = new THREE.PerspectiveCamera(33, 1);
        
        camera.position.set(0,0,30);
      
        scene.background = new THREE.Color('#9eb9d1');
        // let light2 = new THREE.DirectionalLight(0xffff00, 12312323.5);
        // light2.position.set(2,2,2);
        // scene.add(light2);
      
        let hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 3); scene.add(hemiLight);
      
        let light = new THREE.SpotLight(0xffa95c,5); light.position.set(-0,50,50); 
        light.castShadow = true; 
        scene.add( light );
      
      
        const pointLight = new THREE.PointLight( 0xff0000, 1, 100 );
        pointLight.position.set( 10, 10, 10 );
        scene.add( pointLight );
        
        const sphereSize = 1;
        const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
        scene.add( pointLightHelper );
      
        let loader = new GLTFLoader();
        // loader.load('../jeju-airplane/scene.gltf', function(gltf){ //이미지경로를 public에 두니 문제해결!
        loader.load('https://moonjjj.github.io/gojeju/jeju-airplane/scene.gltf', function(gltf){ //이미지경로를 public에 두니 문제해결!
          scene.add(gltf.scene);
          


          function animate(){
            requestAnimationFrame(animate)
            gltf.scene.rotation.y += 0.02;
            // gltf.scene.scale += 1.1;
      
            // gltf.scene.translateX(-0.3);
            gltf.scene.rotation.x = 0.3;
            
            renderer.render(scene,camera);
          }
          animate();
        })
    },[])


    return(
        <div className="first_section sections">
            <canvas ref={canvasDom} id="canvas"></canvas>
            <span>LET'S GO <br/>제주도💭</span>
        </div>
    );
}