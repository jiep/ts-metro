import Station from '@/lib/model/Station'
import MetroMadrid from '@/lib/model/MetroMadrid'

import { expect } from 'chai'
import data from '../../../public/data/stations.json'
import distances from '../../../public/data/distances.json'
import linesData from '../../../public/data/lines.json'
import Line from '@/lib/model/Line'

describe('Metro Madrid', () => {
  const stations = data.map(x => new Station(x.id, x.name, x.lines))
  const lines = linesData.map(x => new Line(x.name, x.bgColor, x.textColor, x.borderColor))
  const metro: MetroMadrid = new MetroMadrid(distances, stations, lines)

  describe('Contructor', () => {
    it('should create the Madrid metro with 276 stations', () => {
      expect(metro.getStations().length).to.equal(276)
    })

    it('should create the metro with the specific stations', () => {
      expect(metro.getStations()).to.eql(stations)
    })

    it('should create the metro with the specific lines', () => {
      expect(metro.getLinesNumber()).to.equal(16)
    })
  })

  describe('Find the station by id', () => {
    it('should return the the station given the id', () => {
      const s1: Station = metro.getStationById(1)
      const station = new Station(1, 'Acacias', ['3', '5'])
      expect(s1).to.eql(station)
    })
  })

  describe('Shortest path', () => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    let stationsAndDistance: Array<any>
    before((done) => {
      const station1: Station = metro.getStationById(1)
      const station2: Station = metro.getStationById(2)
      stationsAndDistance = metro.getShortestPath(station1, station2)
      done()
    })

    it('should return the shortest path between two given stations', () => {
      const expected = [1, 214, 136, 179, 50, 110, 254, 10, 111, 175, 72, 194, 159, 52, 2]
      const [path, distance] = stationsAndDistance
      const stations = path.map((x: Station) => x.getId())
      expect(stations).to.deep.equal(expected)
      expect(distance).to.equal(18041)
    })
  })
})
