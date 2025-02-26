import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import Walls from "../walls/Walls";
import { OrbitControls } from "@react-three/drei";
import FormInterface from "./FormInterface";
import BuildFurniture from "./BuildFurniture";
import Floor from "../walls/Floor";

function BuildingModel() {
  const [wall, setWall] = useState(null);
  const [furniture, setFurniture] = useState(null);

  const calculateBounds = (walls) => {
    if (!walls || walls.length === 0)
      return { centerX: 0, centerZ: 0, width: 10, depth: 10 };

    let minX = Infinity,
      maxX = -Infinity,
      minZ = Infinity,
      maxZ = -Infinity;

    walls.forEach((wall) => {
      minX = Math.min(minX, wall[0], wall[2]);
      maxX = Math.max(maxX, wall[0], wall[2]);
      minZ = Math.min(minZ, wall[1], wall[3]);
      maxZ = Math.max(maxZ, wall[1], wall[3]);
    });

    return {
      centerX: (minX + maxX) / 2,
      centerZ: (minZ + maxZ) / 2,
      width: (maxX - minX) / 10,
      depth: (maxZ - minZ) / 10,
    };
  };

  const bounds = wall
    ? calculateBounds(wall)
    : { centerX: 0, centerZ: 0, width: 10, depth: 10 };
  const { centerX, centerZ, width, depth } = bounds;

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <div className="w-full h-[90vh]">
        <Canvas className="w-full h-full">
          <OrbitControls />
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />

          {wall?.length > 0 && (
            <Floor position={[0, -3.8, 0]} size={[width, depth]} />
          )}

          {wall?.length > 0 &&
            wall.map((wall, index) => (
              <Walls
                key={index}
                position={[
                  wall[0] === wall[2]
                    ? (wall[0] - centerX) / 10
                    : (wall[2] + wall[0] - 2 * centerX) / 20,
                  0,
                  wall[1] === wall[3]
                    ? (wall[1] - centerZ) / 10
                    : (wall[1] + wall[3] - 2 * centerZ) / 20,
                ]}
                size={wall[4]}
                rotation={[wall[0] === wall[2] ? Math.PI / 2 : 0]}
              />
            ))}
          {furniture?.length > 0 &&
            furniture.map((furni, index) => (
              <BuildFurniture
                key={index}
                data={{
                  ...furni,
                  centerX, // Ensure furniture stays in bounds
                  centerZ,
                  width: width * 0.8, // Reduce floor area
                  depth: depth * 0.8, // Reduce floor area
                  id: furni.id || 0,
                }}
              />
            ))}
        </Canvas>
      </div>

      <div className="w-full flex justify-center py-2 text-white">
        <FormInterface setData={setWall} setFurniture={setFurniture} />
      </div>
    </div>
  );
}

export default BuildingModel;
