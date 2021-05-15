import Station from './Station'

export default class Metro {
  private stations: Array<Station>;

  constructor (stations: Array<Station>) {
    this.stations = stations
  }

  getStations (): Array<Station> {
    return this.stations
  }

  setStations (stations: Array<Station>): void {
    this.stations = stations
  }

  getStationsNumber (): number {
    return this.getStations().length
  }

  addStation (station: Station): void {
    this.stations.push(station)
  }

  public getStationById (id: number): Station {
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    return this.getStations().find(x => x.getId() === id)!
  }
}
