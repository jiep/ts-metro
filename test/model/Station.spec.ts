import Station from '@/lib/model/Station'

import { describe, it, expect, beforeEach, beforeAll } from 'vitest'

describe('Station', () => {
  let station: Station

  describe('Constructor', () => {
    it('should create a new `Station`', () => {
      station = new Station(2, 'Atocha', ['1'])
      const name = station.getName()
      const id = station.getId()
      const lines = station.getLines()
      expect(name).to.equal('Atocha')
      expect(id).to.equal(2)
      expect(lines).to.have.same.deep.members(['1'])
    })


  })

  describe('Getters and setters', () => {
    beforeEach(() => {
      station = new Station(1, 'Sol', ['1', '2'])
    })

    it('should return the correct `id`', () => {
      const id: number = station.getId()
      expect(id).to.equal(1)
    })

    it('should return the correct `name`', () => {
      const name: string = station.getName()
      expect(name).to.equal('Sol')
    })

    it('should return the correct `lines` connected to', () => {
      const lines: Array<string> = station.getLines()
      expect(lines).to.have.same.deep.members(['1', '2'])
    })

    it('should be able to change the `id`', () => {
      station.setId(3)
      const newId = station.getId()
      expect(newId).to.equal(3)
    })

    it('should be able to change the `name`', () => {
      station.setName('Chamartín')
      const newName = station.getName()
      expect(newName).to.equal('Chamartín')
    })

    it('should be able to change the `lines` connected to', () => {
      station.setLines(['4', '5'])
      const lines = station.getLines()
      expect(lines).to.have.same.deep.members(['4', '5'])
    })


  })

  describe('To String', () => {
    beforeAll(() => {
      station = new Station(1, 'Atocha', ['1', '10'])
    })

    it('should return a string with the information of the object', () => {
      expect(station.toString()).to.equal('id: 1, name: Atocha, connectedTo: 1,10')
    })

    it('should update the string when properties change', () => {
      station.setId(2)
      station.setName('Chamartín')
      station.setLines(['2', '3'])
      expect(station.toString()).to.equal('id: 2, name: Chamartín, connectedTo: 2,3')
    })
  })

  describe('Edge cases', () => {
    it('should handle a station with a single line', () => {
      station = new Station(3, 'Nuevos Ministerios', ['10'])
      const lines = station.getLines()
      expect(lines).to.have.length(1)
      expect(lines).to.include('10')
    })

    it('should handle a station with multiple lines', () => {
      station = new Station(4, 'Príncipe Pío', ['6', '10', 'R'])
      const lines = station.getLines()
      expect(lines).to.have.length(3)
      expect(lines).to.have.same.deep.members(['6', '10', 'R'])
    })
  })
})
