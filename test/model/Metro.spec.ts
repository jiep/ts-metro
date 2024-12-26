import Station from '@/lib/model/Station'
import Metro from '@/lib/model/Metro'
import Line from '@/lib/model/Line'

import { describe, it, expect, beforeEach } from 'vitest'

describe('Metro', () => {
  let metro: Metro
  let stations: Array<Station>
  let lines: Array<Line>
  const station1: Station = new Station(1, 'Sol', ['1', '2', '3'])
  const station2: Station = new Station(2, 'Atocha', ['1'])

  beforeEach(() => {
    const station3: Station = new Station(3, 'Chamartín', ['1', '10'])
    stations = [station1, station2, station3]
    const line: Line = new Line('1', '#FFFFFF', '#AAAAAA', '#123456')
    lines = [line]
  })

  describe('Constructor', () => {
    it('should create a new `Metro`', () => {
      const metro = new Metro(stations, lines)
      expect(metro.getStations().length).to.equal(3)
    })
  })

  describe('Getters and setters', () => {
    const sol = new Station(1, 'Sol', ['1', '2', '3'])
    const atocha = new Station(2, 'Atocha', ['1'])
    const chamartin = new Station(3, 'Chamartín', ['1', '10'])

    beforeEach(() => {
      metro = new Metro(stations, lines)
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
      const newStation = new Station(4, 'Nuevos Ministerios', ['10'])
      metro.setStations([newStation])
      expect(metro.getStations().length).to.equal(1)
    })
  })

  describe('Get stations number', () => {
    beforeEach(() => {
      metro = new Metro([], [])
    })

    it('should return the number of stations', () => {
      const stationsNumbers = metro.getStationsNumber()
      expect(stationsNumbers).to.equal(0)
    })
  })

  describe('Get lines number', () => {
    beforeEach(() => {
      metro = new Metro([], [])
    })

    it('should return the number of lines', () => {
      const linesNumbers = metro.getLinesNumber()
      expect(linesNumbers).to.equal(0)
    })
  })

   
  describe('Add new station', () => {
    beforeEach(() => {
      metro = new Metro([], [])
    })

    it('should add a new station to the metro', () => {
      const station: Station = new Station(1, 'Sol', ['1', '2', '3'])
      metro.addStation(station)
      expect(metro.getStationsNumber()).to.equal(1)
      expect(metro.getStations()[0].getName()).to.equal('Sol')
      expect(metro.getStations()[0].getId()).to.equal(1)
    })
  })

  describe('Get station by id', () => {
    beforeEach(() => {
      metro = new Metro(stations, lines)
    })

    it('should return the station with the specific id', () => {
      const expectedStation = metro.getStationById(1)
      expect(expectedStation).to.eql(station1)

      const expectedStation2 = metro.getStationById(2)
      expect(expectedStation2).to.eql(station2)
    })
  })
})
