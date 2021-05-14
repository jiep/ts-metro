import Station from '@/lib/model/Station'
import Metro from '@/lib/model/Metro'

import { expect } from 'chai'

describe('Metro', () => {
  let metro: Metro
  let stations: Array<Station>
  const station1: Station = new Station(1, 'Sol')
  const station2: Station = new Station(2, 'Atocha')

  before(() => {
    const station3: Station = new Station(3, 'Chamartín')
    stations = [station1, station2, station3]
  })

  describe('Constructor', () => {
    it('should create a new `Metro`', () => {
      const metro = new Metro(stations)
      expect(metro.getStations().length).to.equal(3)
    })
  })

  describe('Getters and setters', () => {
    const sol = new Station(1, 'Sol')
    const atocha = new Station(2, 'Atocha')
    const chamartin = new Station(3, 'Chamartín')

    beforeEach(() => {
      metro = new Metro(stations)
    })

    it('should return the correct `stations`', () => {
      const stations: Array<Station> = metro.getStations()
      const station1: Station = stations[0]
      const station2: Station = stations[1]
      const station3: Station = stations[2]

      expect(station1).to.eql(sol)
      expect(station2).to.eql(atocha)
      expect(station3).to.eql(chamartin)
    })

    it('should be able to change the `stations`', () => {
      const newStation = new Station(4, 'Nuevos Ministerios')
      metro.setStations([newStation])
      expect(metro.getStations().length).to.equal(1)
    })
  })

  describe('Get stations number', () => {
    before(() => {
      metro = new Metro([])
    })

    it('should return the number of stations', () => {
      const stationsNumbers = metro.getStationsNumber()
      expect(stationsNumbers).to.equal(0)
    })
  })

  describe('Add new station', () => {
    before(() => {
      metro = new Metro([])
    })

    it('should add a new station to the metro', () => {
      const station: Station = new Station(1, 'Sol')
      metro.addStation(station)
      expect(metro.getStationsNumber()).to.equal(1)
      expect(metro.getStations()[0].getName()).to.equal('Sol')
      expect(metro.getStations()[0].getId()).to.equal(1)
      /* eslint-disable no-unused-expressions */
      expect(metro.getStations()[1]).to.be.undefined
    })
  })

  describe('Get station by id', () => {
    before(() => {
      metro = new Metro(stations)
    })

    it('should return the station with the specific id', () => {
      const expectedStation = metro.getStationById(1)
      expect(expectedStation).to.eql(station1)

      const expectedStation2 = metro.getStationById(2)
      expect(expectedStation2).to.eql(station2)
    })
  })
})
