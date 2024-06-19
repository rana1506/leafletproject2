import React from 'react'
import {calculateDestinationPoint}  from '../NavFormula'

const ForExercise = () => {
  // Example usage
var startPoint = { lat: 0, lng: 0 }; // New York City coordinates
var course = 90; // Course in degrees (north is 0, east is 90)
//var distance = 111.12; // Distance in kilometers
var distance = 60; // Distance in nautical miles

var nextPosition = calculateDestinationPoint(startPoint, course, distance);
console.log("Next position:", nextPosition);
    

  return (
    <div>
      
    </div>
  )
}

export default ForExercise
