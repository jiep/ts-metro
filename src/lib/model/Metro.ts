import Station from './Station'

export default class Metro {
  private stations: Array<Station>;

  constructor (stations: Array<Station>) {
    this.stations = stations
  }

  get getStations (): Array<Station> {
    return this.stations
  }

  set setStations (stations: Array<Station>) {
    this.stations = stations
  }

  getStationsNumber (): number {
    return this.getStations.length
  }

  addStation (station: Station) {
    this.stations.push(station)
  }

  public getStationById (id: number): Station {
    return this.getStations.find(x => x.getId === id)!
  }
}
