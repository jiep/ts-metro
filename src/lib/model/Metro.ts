import Station from './Station'
import Line from './Line'

export default class Metro {
  private stations: Array<Station>
  private lines: Array<Line>

  constructor (stations: Array<Station>, lines: Array<Line>) {
    this.stations = stations
    this.lines = lines
  }

  getStations (): Array<Station> {
    return this.stations
  }

  setStations (stations: Array<Station>): void {
    this.stations = stations
  }

  getLines (): Array<Line> {
    return this.lines
  }

  getLinesNumber (): number {
    return this.getLines().length
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
