let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];


class Driver {
  constructor(name, date) {
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 0, 1)
    let diff = (endDate - this.startDate)/(365 * 24 * 60 * 60 * 1000)
    return parseInt(diff)
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let vertical = Math.abs(this.endingLocation["vertical"] - this.beginningLocation["vertical"])
    let index1 = eastWest.findIndex(element => {return element === this.endingLocation["horizontal"]})
    let index2 = eastWest.findIndex(element => {return element === this.beginningLocation["horizontal"]})

    let horizontal = Math.abs(index1 - index2)
    return horizontal + vertical
  }

  estimatedTime(peak) {
    if (peak) {
      return (this.blocksTravelled() / 2)
    }
    else {
      return (this.blocksTravelled() / 3)
    }
  }
}
