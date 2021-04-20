import Loader from "react-loader-spinner";


const Spinner=({type, color, height, width})=> {
  return (
      <Loader
        type={type}
        color={color}
        height={height}
        width={width}
        timeout={5000} 
      />
    );
  }

export default Spinner;