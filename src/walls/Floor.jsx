import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Floor = ({ position = [0, 0, 0], size = [10, 10] }) => {
  const floorRef = useRef();

  return (
    <mesh ref={floorRef} position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={size} />
      <meshStandardMaterial color="gray" side={2} />
    </mesh>
  );
};

export default Floor;
