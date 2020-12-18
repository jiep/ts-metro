// import Metro from './Metro'
// import WeightedGraph from '../graphs/WeightedGraph'
// import GraphClass from '../graphs/GraphClass'
// import Station from './Station'
// import * data from '../public/data/stations.json'
// import * as distances from '../public/data/distances.json'
//
// export default class MetroMadrid extends Metro {
//   private distancesGraph: WeightedGraph;
//
//   constructor () {
//     const stations: Array<Station> = []
//     data.forEach((s: any) => stations.push(new Station(s.id, s.name)))
//     super(stations)
//     const n = data.length
//     this.distancesGraph = new WeightedGraph(GraphClass.UNDIRECTED, n)
//     distances.forEach((distance: any) => {
//       this.distancesGraph.connect(distance.source, distance.destination, distance.distance)
//     })
//   }
//
//   public getShortestPath (source: Station, destination: Station): Array<any> {
//     let stationsAndDistance: Array<any> = []
//     if (source.getId !== destination.getId) {
//       stationsAndDistance = this.distancesGraph.shortestPath(source.getId, destination.getId)
//       const stations = stationsAndDistance[0]
//       const distance = stationsAndDistance[1]
//       const a: any = []
//       stations.forEach((stationId: number) => a.push(this.getStationById(stationId)))
//     } else {
//       return [source, 0]
//     }
//
//     return [a, distance]
//   }
// }
