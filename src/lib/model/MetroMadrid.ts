import Metro from './Metro'
import WeightedGraph from '../graphs/WeightedGraph'
import GraphClass from '../graphs/GraphClass'
import Station from './Station'

export default class MetroMadrid extends Metro {
  private distancesGraph: WeightedGraph;

  constructor (distances: Array<any>, stations: Array<Station>) {
    super(stations)
    const n = stations.length
    this.distancesGraph = new WeightedGraph(GraphClass.UNDIRECTED, n)
    distances.forEach((distance: any) => {
      this.distancesGraph.connect(distance.source, distance.destination, distance.distance)
    })
  }

  public getShortestPath (source: Station, destination: Station): Array<any> {
    let stationsAndDistance: Array<any> = []
    if (source.getId !== destination.getId) {
      stationsAndDistance = this.distancesGraph.shortestPath(source.getId, destination.getId)
      const stations = stationsAndDistance[0]
      const distance = stationsAndDistance[1]
      let a: any = []
      stations.forEach((stationId: number) => a.push(this.getStationById(stationId)))
      return [a, distance]
    } else {
      return [source, 0]
    }
  }
}
