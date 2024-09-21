import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
export default function Walls(props) {
  console.log(props);
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const colorMap = useLoader(TextureLoader, "brickTexture.jpg");

  return (
    <mesh
      //   {...props}
      position={props.position}
      rotation={[0, props.rotation ? props.rotation : 0, 0]}
      ref={meshRef}
    >
      <boxGeometry args={[props.size/10, 7, 2]} />
      <meshStandardMaterial
        color={hovered ? "hotpink" : "orange"}
        map={colorMap}
      />
    </mesh>
  );
}
