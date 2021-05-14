import Station from '@/lib/model/Station'

import { expect } from 'chai'

describe('Station', () => {
  let station: Station

  describe('Constructor', () => {
    it('should create a new `Station`', () => {
      station = new Station(2, 'Atocha')
      const name = station.getName()
      const id = station.getId()
      expect(name).to.equal('Atocha')
      expect(id).to.equal(2)
    })
  })

  describe('Getters and setters', () => {
    beforeEach(function () {
      station = new Station(1, 'Sol')
    })

    it('should return the correct `id`', () => {
      const id: number = station.getId()
      expect(id).to.equal(1)
    })

    it('should return the correct `name`', () => {
      const name: string = station.getName()
      expect(name).to.equal('Sol')
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
  })

  describe('To String', () => {
    before(() => {
      station = new Station(1, 'Atocha')
    })

    it('should return a string with the information of the object', () => {
      expect(station.toString()).to.equal('id: 1, name: Atocha')
    })
  })
})
