const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeyStartArray = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return journeyStartArray;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeyEndArray = this.journeys.map((journey) =>{
    return journey.endLocation;
  });
  return journeyEndArray;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const resultArray = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
  return resultArray
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = this.journeys.reduce((sum, journey) => {
    return sum + journey.distance;
  }, 0);
  return total
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  
};


module.exports = Traveller;
