import { RotatingLines } from "react-loader-spinner";

function AudioSourceLoading({ size }) {
    return ( 
        <RotatingLines
            strokeColor="black"
            strokeWidth="5"
            animationDuration="0.75"
            width={size}
            visible={true}
        />
    );
}

export default AudioSourceLoading;