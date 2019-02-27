class Driver {

  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - `${this.startDate}`.match(/\d{4}/);
  };
};

class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled() {
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];

    let endAve = eastWest.findIndex(ave => ave === this.endingLocation.horizontal);

    let startAve = eastWest.findIndex(ave => ave === this.beginningLocation.horizontal);

    return (endAve - startAve) + (this.endingLocation.vertical - this.beginningLocation.vertical);
  };

  estimatedTime(peakTime) {
    return peakTime ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  };
};
