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
    4: "doorGltf2",
    5: "windowGltf",
  };

  const { nodes, materials } = useGLTF(`/${furniture[data.id]}.gltf`);

  // Reduce furniture size relative to walls and floor
  const scaleFactor = Math.min(data.width, data.depth) * 0.06; // Smaller scale

  return (
    <mesh
      scale={[scaleFactor, scaleFactor, scaleFactor]} // Shrink furniture
      position={[
        ((data.coordinate[0] + data.coordinate[2]) / 2 - data.centerX) / 10.2, // Move closer to center
        -3.2, // Ensure it sits on the floor
        ((data.coordinate[1] + data.coordinate[3]) / 2 - data.centerZ) / 10.2, // Move closer to center
      ]}
      rotation={[0, 0, 0]}
      geometry={nodes[Object.keys(nodes)[1]].geometry}
      material={materials[Object.keys(materials)[0]]}
    />
  );
}

{
  /* <boxGeometry args={[10, 70, 6]} />
      <meshStandardMaterial
        color={hovered ? "hotpink" : "orange"}
        map={colorMap}
      /> */
}
