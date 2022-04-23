import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

const SpinningBox = ({ position, color, args, speed }) => {
  const mesh = useRef(null);
  useFrame(() => {
    if (!expand) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    } 
  });

  const [expand, setExpand] = useState(false);
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <a.mesh
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
      position={position}
      ref={mesh}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.6}
      />
    </a.mesh>
  );
};
export default SpinningBox;
