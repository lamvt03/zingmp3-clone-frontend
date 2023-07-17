import { Audio } from  'react-loader-spinner'

function AudioLoading() {
    return ( 
        <Audio
            height="25"
            width="25"
            color="#fff"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
        />
    );
}

export default AudioLoading;