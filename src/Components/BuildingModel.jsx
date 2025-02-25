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

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      {/* Canvas takes most of the screen */}
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
          {/* <Floor wallData={wall} /> */}
          {wall?.map((wall, index) => (
            <Walls
              key={index}
              position={[
                wall[0] === wall[2]
                  ? (wall[0] - 370) / 10
                  : (wall[2] + wall[0] - 740) / 20,
                0,
                wall[1] === wall[3]
                  ? (wall[1] - 370) / 10
                  : (wall[1] + wall[3] - 740) / 20,
              ]}
              size={wall[4]}
              rotation={[wall[0] === wall[2] ? Math.PI / 2 : 0]}
            />
          ))}

          {furniture &&
            furniture?.map((furni, index) => (
              <BuildFurniture key={index} data={furni} />
            ))}
        </Canvas>
      </div>

      {/* File Upload Below the Canvas */}
      <div className="w-full flex justify-center py-2 text-white">
        <FormInterface setData={setWall} setFurniture={setFurniture} />
      </div>
    </div>
  );
}

export default BuildingModel;
