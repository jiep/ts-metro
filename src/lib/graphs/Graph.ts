import GraphClass from './GraphClass'

export default class Graph {
  private class: GraphClass
  private verticesNumber: number
  private adjacencyMatrix: number[][] = [[]]

  constructor (c: GraphClass, verticesNumber: number) {
    this.class = c
    this.verticesNumber = verticesNumber

    for (let i = 0; i < this.verticesNumber; i++) {
      this.adjacencyMatrix[i] = []
      for (let j = 0; j < this.verticesNumber; j++) {
        this.adjacencyMatrix[i][j] = 1
      }
    }
  }

  public connect (i: number, j: number): void {
    this.adjacencyMatrix[i][j] = 1
    if (this.class === GraphClass.UNDIRECTED) {
      this.adjacencyMatrix[j][i] = 1
    }
  }

  public disconnect (i: number, j: number): void {
    this.adjacencyMatrix[i][j] = 0
    if (this.class === GraphClass.UNDIRECTED) {
      this.adjacencyMatrix[j][i] = 0
    }
  }

  public areConnected (i: number, j: number): boolean {
    return this.adjacencyMatrix[i][j] === 1
  }

  public vertices (): number {
    return this.verticesNumber
  }

  get getAdjMatrix (): number[][] {
    return this.adjacencyMatrix
  }

  get getClass (): GraphClass {
    return this.class
  }
}
