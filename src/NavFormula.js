        // Function to calculate destination point given starting point, course, and distance
export function calculateDestinationPoint(startPoint, course, distance) {
    //var R = 6371; // Earth's radius in kilometers
    var R = 3440.0647948; // Earth's radius in nautical miles
    
    var φ1 = startPoint.lat * Math.PI / 180; // Convert latitudes to radians
    var λ1 = startPoint.lng * Math.PI / 180; // Convert longitudes to radians
    var θ = course * Math.PI / 180; // Convert course to radians

    var Δ = distance / R; // Angular distance in radians

    var φ2 = Math.asin(Math.sin(φ1) * Math.cos(Δ) +
                       Math.cos(φ1) * Math.sin(Δ) * Math.cos(θ));
    var λ2 = λ1 + Math.atan2(Math.sin(θ) * Math.sin(Δ) * Math.cos(φ1),
                             Math.cos(Δ) - Math.sin(φ1) * Math.sin(φ2));

    // Convert back from radians to degrees
    φ2 = φ2 * 180 / Math.PI;
    λ2 = λ2 * 180 / Math.PI;

    return { lat: φ2, lng: λ2 };
}

// Example usage
//var startPoint = { lat: 40.7128, lng: -74.0060 }; // New York City coordinates
//var course = 45; // Course in degrees (north is 0, east is 90)
//var distance = 111.12; // Distance in kilometers
//var distance = 60; // Distance in nautical miles

//var nextPosition = calculateDestinationPoint(startPoint, course, distance);
//console.log("Next position:", nextPosition);
   
 