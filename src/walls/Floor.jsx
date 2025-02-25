import React from "react";

export default function Floor({ wallData }) {
  if (!wallData || wallData.length === 0) return null;

  // Find the bounding box (min/max X and Z values)
  const minX = Math.min(...wallData.flatMap((w) => [w[0], w[2]]));
  const maxX = Math.max(...wallData.flatMap((w) => [w[0], w[2]]));
  const minZ = Math.min(...wallData.flatMap((w) => [w[1], w[3]]));
  const maxZ = Math.max(...wallData.flatMap((w) => [w[1], w[3]]));

  // Calculate the center position and size of the floor
  const floorWidth = (maxX - minX) / 10; // Scale down to match your wall scaling
  const floorDepth = (maxZ - minZ) / 10;
  const centerX = (minX + maxX) / 20;
  const centerZ = (minZ + maxZ) / 20;

  return (
    <mesh position={[centerX, -0.01, centerZ]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[floorWidth, floorDepth]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}
