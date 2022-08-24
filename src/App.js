import { Suspense, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Loader , Html} from "@react-three/drei";
import { FPSControls } from "react-three-fpscontrols";


import MainStage from "./MainStage";
//import url from "./almost.mp4";

const TV = () => {
  
  
  return (

    <>
    <mesh rotation={[0, 0, 0]} position={[0, 2.33, -5.54]}>
      <planeGeometry args={[5.55, 2.26]} />

       
<group>
<Html transform >
  <iframe  src	= "https://mainchatapp.herokuapp.com/join/ahmad" allow = 'camera; microphone' />
</Html>


</group>
    </mesh>

</>
  );
};

export default function Viewer() {
  return (
    <>
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <pointLight position={[10, 10, 10]} />
          <MainStage />
          <FPSControls
            camProps={{
              makeDefault: true,
              fov: 55,
              position: [0, 2.537, 0.7]
            }}
            orbitProps={{
              target: [0, 2.537, 0]
            }}
            enableJoystick
            enableKeyboard
          />
          <TV />
        </Suspense>
      </Canvas>

      <Loader />
    </>
  );
}
