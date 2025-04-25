import Metro from './Metro'
import WeightedGraph from '../graphs/WeightedGraph'
import GraphClass from '../graphs/GraphClass'
import Station from './Station'
import Line from './Line'

export default class MetroMadrid extends Metro {
  public distancesGraph: WeightedGraph

  /* eslint-disable @typescript-eslint/no-explicit-any */
  constructor(distances: Array<any>, stations: Array<Station>, lines: Array<Line>) {
    super(stations, lines)
    const n = stations.length
    this.distancesGraph = new WeightedGraph(GraphClass.UNDIRECTED, n)
    distances.forEach((distance: any) => {
      this.distancesGraph.connect(distance.source, distance.destination, distance.distance)
    })
  }

  public getShortestPath(
    source: Station,
    destination: Station,
  ): {
    path: Array<Station>
    distance: number
    segments: Array<{ line: string; from: Station; to: Station }>
    transfers: Array<{ at: Station; fromLine: string; toLine: string }>
  } {
    if (source.getId() === destination.getId()) {
      return {
        path: [source],
        distance: 0,
        segments: [],
        transfers: [],
      }
    }

    const [stationIds, distance] = this.distancesGraph.shortestPath(
      source.getId(),
      destination.getId(),
    )
    const path: Array<Station> = stationIds.map((stationId: number) =>
      this.getStationById(stationId),
    )
    const segments: Array<{ line: string; from: Station; to: Station }> = []
    const transfers: Array<{ at: Station; fromLine: string; toLine: string }> = []

    let currentLine: string | null = null

    for (let i = 0; i < path.length - 1; i++) {
      const currentStation = path[i]
      const nextStation = path[i + 1]

      const commonLines = this.findCommonLines(currentStation, nextStation)
      if (commonLines.length === 0) {
        throw new Error(
          `No line connects stations ${currentStation.getName()} and ${nextStation.getName()}`,
        )
      }

      const line = commonLines[0]

      if (currentLine && currentLine !== line) {
        transfers.push({
          at: currentStation,
          fromLine: currentLine,
          toLine: line,
        })
      }

      currentLine = line
      segments.push({ line, from: currentStation, to: nextStation })
    }

    return { path, distance, segments, transfers }
  }

  private findCommonLines(station1: Station, station2: Station): Array<string> {
    const lines1 = station1.getLines()
    const lines2 = station2.getLines()
    return lines1.filter((line) => lines2.includes(line))
  }
}
