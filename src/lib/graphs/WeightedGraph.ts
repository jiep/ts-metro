import Graph from './Graph'
import GraphClass from './GraphClass'

export default class WeightedGraph extends Graph {
  private weightedMatrix: number[][] = [[]];

  constructor (c: GraphClass, verticesNumber: number) {
    super(c, verticesNumber)

    for (let i = 0; i < verticesNumber; i++) {
      this.weightedMatrix[i] = []
      for (let j = 0; j < verticesNumber; j++) {
        if (i === j) {
          this.weightedMatrix[i][j] = 0
        } else {
          this.weightedMatrix[i][j] = Number.POSITIVE_INFINITY
        }
      }
    }
  }

  public connect (i: number, j: number, weight?: number): void {
    super.connect(i, j)
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    this.weightedMatrix[i][j] = weight!
    if (super.getClass === GraphClass.UNDIRECTED) {
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      this.weightedMatrix[j][i] = weight!
    }
  }

  public getWeight (i: number, j: number): number {
    return this.areConnected(i, j) ? this.weightedMatrix[i][j] : Number.POSITIVE_INFINITY
  }

  get getWeightedMatrix (): number[][] {
    return this.weightedMatrix
  }

  private floyd (): Array<number[][]> {
    const n: number = this.vertices()
    const ans: number[][] = this.getWeightedMatrix.map(a => ([...a]))
    const p: number[][] = WeightedGraph.calculePath(this.getWeightedMatrix)

    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (ans[i][k] + ans[k][j] < ans[i][j]) {
            ans[i][j] = ans[i][k] + ans[k][j]
            p[i][j] = p[k][j]
          }
        }
      }
    }
    const out = []
    out.push(ans)
    out.push(p)
    return out
  }

  private static rPath (i: number, j: number, path: number[][]): Array<number> {
    const r: Array<number> = []

    r.unshift(j)

    while (path[i][j] !== i) {
      r.unshift(path[i][j])
      j = path[i][j]
    }

    r.unshift(i)

    return r
  }

  private static calculePath (ady: number[][]): number[][] {
    const path: number[][] = [[]]

    for (let i = 0; i < ady.length; i++) {
      path[i] = []
      for (let j = 0; j < ady.length; j++) {
        if (ady[i][j] === Number.POSITIVE_INFINITY) {
          path[i][j] = -1
        } else {
          path[i][j] = i
        }
      }
    }

    for (let i = 0; i < ady.length; i++) {
      path[i][i] = i
    }

    return path
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  public shortestPath (i: number, j: number): Array<any> {
    const floyd = this.floyd()
    const [distance, path] = floyd
    const sPath = WeightedGraph.rPath(i, j, path)
    const d = distance[i][j]

    return [sPath, d]
  }
}
