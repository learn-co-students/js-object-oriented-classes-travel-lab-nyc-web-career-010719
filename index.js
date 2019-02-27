class Driver{
  constructor(name, joined){
    this.name = name
    this.joined = joined
    this.startDate = new Date(joined)
  }
  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear()
  }
}

class Route{
  constructor(begginingLocation, endingLocation){
    this.begginingLocation = begginingLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled(){
    let vertical = this.endingLocation.vertical - this.begginingLocation.vertical
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];

    let y = 1
    for (let x = 0; x < eastWest.length; x++){
      if (eastWest[x] === this.begginingLocation.horizontal){
        y += x
      }
    }
    let z = 1
    for (let x = 0; x < eastWest.length; x++){
      if (eastWest[x] === this.endingLocation.horizontal){
        z += x
      }
    }
    let horizontal = z - y
    return vertical + horizontal
  }

  estimatedTime(peak){
    let blocks = this.blocksTravelled()
    if (peak){
      let seconds = blocks * 30
      return seconds / 60
    }
    else{
      let seconds = blocks * 20
      return seconds / 60
    }

  }


}
