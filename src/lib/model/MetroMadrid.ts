import Metro from './Metro'
import WeightedGraph from '../graphs/WeightedGraph'
import GraphClass from '../graphs/GraphClass'
import Station from './Station'

export default class MetroMadrid extends Metro {
  public distancesGraph: WeightedGraph

  /* eslint-disable @typescript-eslint/no-explicit-any */
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
    if (source.getId() !== destination.getId()) {
      stationsAndDistance = this.distancesGraph.shortestPath(source.getId(), destination.getId())
      const [stations, distance] = stationsAndDistance
      const a: Array<Station> = stations.map((stationId: number) => this.getStationById(stationId))
      return [a, distance]
    } else {
      return [source, 0]
    }
  }
}
