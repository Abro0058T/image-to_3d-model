import { Canvas } from "@react-three/fiber";
import React from "react";
import Walls from "../walls/Walls";
import { OrbitControls } from "@react-three/drei";

function BuildingModel({ data }) {
  return (
    <Canvas className="canvas">
      <OrbitControls />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      {data.map((wall, index) => {
        return (
          <Walls
            position={[
              wall[0] == wall[2]
                ? wall[0] - 370
                : (wall[2] + wall[0] - 740) / 2,
              0,
              wall[1] == wall[3]
                ? wall[1] - 370
                : (wall[1] + wall[3] - 740) / 2,
            ]}
            size={wall[4]}
            rotation={[wall[0] == wall[2] ? Math.PI / 2 : 0]}
          />
        );
      })}
    </Canvas>
  );
}

export default BuildingModel;
