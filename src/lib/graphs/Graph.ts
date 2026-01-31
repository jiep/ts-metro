import GraphClass from './GraphClass'

export default class Graph {
  private class: GraphClass
  private verticesNumber: number
  private adjacencyMatrix: number[][] = []

  constructor(c: GraphClass, verticesNumber: number) {
    this.class = c
    this.verticesNumber = verticesNumber

    for (let i = 0; i < this.verticesNumber; i++) {
      const row = this.adjacencyMatrix[i] ?? (this.adjacencyMatrix[i] = [])
      this.adjacencyMatrix[i] ??= []
      for (let j = 0; j < this.verticesNumber; j++) {
        row[j] = 1
      }
    }
  }

  protected ensure(i: number, j: number) {
    this.adjacencyMatrix[i] ??= []
    this.adjacencyMatrix[j] ??= []
  }

  public connect(i: number, j: number): void {
    this.ensure(i, j)
    this.adjacencyMatrix[i]![j] = 1
    if (this.class === GraphClass.UNDIRECTED) {
      this.adjacencyMatrix[j]![i] = 1
    }
  }

  public disconnect(i: number, j: number): void {
    this.ensure(i, j)
    this.adjacencyMatrix[i]![j] = 0
    if (this.class === GraphClass.UNDIRECTED) {
      this.adjacencyMatrix[j]![i] = 0
    }
  }

  public areConnected(i: number, j: number): boolean {
    this.ensure(i, j)
    return this.adjacencyMatrix[i]![j] === 1
  }

  public vertices(): number {
    return this.verticesNumber
  }

  get getAdjMatrix(): number[][] {
    return this.adjacencyMatrix
  }

  get getClass(): GraphClass {
    return this.class
  }
}
