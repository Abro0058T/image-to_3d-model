import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as tf from "@tensorflow/tfjs";
import { useGLTF } from "@react-three/drei";

export default function BuildFurniture({ data }) {
  console.log(data);
  console.log(data["name"]);
  const furniture = {
    0: "bedGltf2",
    1: "doorGltf2",
    2: "sofaGltf2",
    3: "sofaGltf",
    // '4': 'stairs',
    4: "doorGltf2",
    5: "windowGltf",
  };
  const { nodes, materials } = useGLTF(`/${furniture[1]}.gltf`);
  console.log(nodes[Object.keys(nodes)[1]])
  return (
    <mesh
      scale={[.1, .1, .1]}
      position={
        [
          data.coordinate[0] == data.coordinate[2]
          ? (data.coordinate[0] - 370)/10
          : (data.coordinate[2] + data.coordinate[0] - 740) / 20,
          0,
          data.coordinate[1] == data.coordinate[3]
          ? (data.coordinate[1] - 370/10)
          : (data.coordinate[1] + data.coordinate[3] - 740) / 20,
        ]
      }
      rotation={[0, 0, 0]}
      // ref={meshRef}
      geometry={nodes[Object.keys(nodes)[1]].geometry}
      material={materials[Object.keys(materials)[0]]}
    >
      {/* <boxGeometry args={[10, 70, 6]} />
      <meshStandardMaterial
        color={hovered ? "hotpink" : "orange"}
        map={colorMap}
      /> */}
    </mesh>
  );
}
