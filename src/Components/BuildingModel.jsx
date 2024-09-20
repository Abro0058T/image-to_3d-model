import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import Walls from "../walls/Walls";
import { OrbitControls } from "@react-three/drei";
import FormInterface from "./FormInterface";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import BuildFurniture from "./BuildFurniture";
import axios from "axios";


function BuildingModel({ data }) {
  const [count, setCount] = useState(0)
  const [wall ,setWall] = useState(null)
  const [haveWalls,setWalls] = useState(false)
  const [furniture,setFurniture] = useState(null)
  console.log(wall)


  const gltf = useLoader(GLTFLoader, '/bedGltf.gltf')
  // useEffect(()=>{
  //   const getFurniture =async ()=>{
  //     const data =await axios.post("http://localhost:5000/furniture",{"file[0]":"1_png.rf.0505a1ffd1d3e0647c1ba5ae789299a6.jpg"},
  //       {
  //         headers: {
  //           'Content-Type':"multipart/form-data",
  //           'Access-Control-Allow-Origin':"*"
  //         }
  //       }
  //     )
  //     setFurniture(data)
  //   }
  //   getFurniture()
  // },[])
  return (
    <>
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
      {wall?.map((wall, index) => {
        return (
          <Walls
          position={[
            wall[0] == wall[2]
            ? (wall[0] - 370)/10
            : (wall[2] + wall[0] - 740) / 20,
            0,
            wall[1] == wall[3]
            ? (wall[1] - 370)/10
            : (wall[1] + wall[3] - 740) / 20,
          ]}
          size={wall[4]}
          rotation={[wall[0] == wall[2] ? Math.PI / 2 : 0]}
          />
        );
      })}
      {
        furniture && furniture?.map((furni,index)=>{ return (<BuildFurniture key={index} data={furni}/>)})
      }
      
    </Canvas>
    <FormInterface className="formInterface" setData={
      setWall
    } setFurniture={setFurniture}/>
      </>
  
  );
}

export default BuildingModel;
