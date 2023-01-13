import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";
import { useStore } from "../hooks/useStore"


export function Ground() {
    const [ref] = usePlane(() => ({
        rotation: [ -Math.PI / 2,0,0],
        position: [0,-0.5,0]
    }));

    const addCube = useStore(state => state.addCube)


    const handleClick = event => {
        event.stopPropagation();
        const [x,y,z] = Object.values(event.point).map(coord => Math.ceil(coord))
        
        addCube(x,y,z)
    }

    groundTexture.repeat.set(100,100)


    return (
        <mesh onClick={handleClick} ref={ref}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" map={groundTexture} />
        </mesh>
    )


}