// import Station from '../../src/lib/model/Station'
// import MetroMadrid from '../../src/lib/model/MetroMadrid'
//
// import * as mocha from 'mocha'
// import { expect } from 'chai'
// import * as stations from '../public/data/stations.json'
//
// describe('Metro Madrid', () => {
//   const metro: MetroMadrid = new MetroMadrid()
//
//   describe('Contructor', () => {
//     it('should create the Madrid metro with 274 stations', () => {
//       expect(metro.getStations.length).to.equal(274)
//     })
//
//     it('should create the metro with the specific stations', () => {
//       expect(metro.getStations).to.eql(stations)
//     })
//   })
//
//   describe('Find the station by id', () => {
//     it('should return the the station given the id', () => {
//       const s1: Station = metro.getStationById(1)!
//       const station = new Station(1, 'Acacias')
//       expect(s1).to.eql(station)
//     })
//   })
//
//   describe('Shortest path', () => {
//     let stationsAndDistance
//     before((done) => {
//       const station1: Station = metro.getStationById(1)
//       const station2: Station = metro.getStationById(2)
//       const expected = [1, 214, 136, 179, 50, 110, 254, 10, 111, 175, 72, 194, 159, 52, 2]
//       // var stationsAndDistance = metro.getShortestPath(station1, station2);
//       done()
//     })
//
//     it('should return the shortest path between the two given stations', () => {
//
//       // let distance = stations_and_distance[1];
//       // expect(distance).to.equal(18041);
//     })
//   })
// })
