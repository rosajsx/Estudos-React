import React from 'react';
import Loader from 'react-loader-spinner';
import './styles.css'


interface LoaderProps{
  color: string;
  height: number;
  width: number;
}

const Spinner: React.FC<LoaderProps> = ({ color, height, width}) => {
  return(
    <div className="spinnerContainer">
    <Loader type="TailSpin" color={color} height={height} width={width} />

    </div>
  )
}


export default Spinner;