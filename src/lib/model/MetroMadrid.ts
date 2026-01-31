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
    path: Array<{
      station: Station
      segment: { line: string; from: Station; to: Station } | null
      transfer: { fromLine: string; toLine: string } | null
    }>
    distance: number
  } {
    if (source.getId() === destination.getId()) {
      return {
        path: [{ station: source, segment: null, transfer: null }],
        distance: 0,
      }
    }

    const [stationIds, distance] = this.distancesGraph.shortestPath(
      source.getId(),
      destination.getId(),
    )
    const path: Array<{
      station: Station
      segment: { line: string; from: Station; to: Station } | null
      transfer: { fromLine: string; toLine: string } | null
    }> = []

    let currentLine: string | null = null

    for (let i = 0; i < stationIds.length; i++) {
      const currentStation = this.getStationById(stationIds[i])
      let transferInfo: { fromLine: string; toLine: string } | null = null

      if (i < stationIds.length - 1) {
        const nextStation = this.getStationById(stationIds[i + 1])
        const commonLines = this.findCommonLines(currentStation, nextStation)
        if (commonLines.length === 0) {
          throw new Error(
            `No line connects stations ${currentStation.getName()} and ${nextStation.getName()}`,
          )
        }

        const line = commonLines[0]!

        if (currentLine && currentLine !== line) {
          transferInfo = { fromLine: currentLine, toLine: line }
        }

        currentLine = line

        path.push({
          station: currentStation,
          segment: { line, from: currentStation, to: nextStation },
          transfer: transferInfo,
        })
      } else {
        path.push({
          station: currentStation,
          segment: { line: currentLine!, from: currentStation, to: currentStation },
          transfer: null,
        })
      }
    }

    return { path, distance }
  }

  private findCommonLines(station1: Station, station2: Station): Array<string> {
    const lines1 = station1.getLines()
    const lines2 = station2.getLines()
    return lines1.filter((line) => lines2.includes(line))
  }
}
