import GraphClass from './GraphClass'

export default class Graph {
  private class: GraphClass;
  private verticesNumber: number;
  private adjacency_matrix: number[][] = [[]];

  constructor (c: GraphClass, verticesNumber: number) {
    this.class = c
    this.verticesNumber = verticesNumber

    for (let i = 0; i < this.verticesNumber; i++) {
      this.adjacency_matrix[i] = []
      for (let j = 0; j < this.verticesNumber; j++) {
        this.adjacency_matrix[i][j] = 1
      }
    }
  }

  public connect (i: number, j: number) {
    this.adjacency_matrix[i][j] = 1
    if (this.class === GraphClass.UNDIRECTED) {
      this.adjacency_matrix[j][i] = 1
    }
  }

  public disconnect (i: number, j: number) {
    this.adjacency_matrix[i][j] = 0
    if (this.class === GraphClass.UNDIRECTED) {
      this.adjacency_matrix[j][i] = 0
    }
  }

  public areConnected (i: number, j: number): boolean {
    return this.adjacency_matrix[i][j] === 1
  }

  public vertices (): number {
    return this.verticesNumber
  }

  get getAdjMatrix (): number[][] {
    return this.adjacency_matrix
  }

  get getClass (): GraphClass {
    return this.class
  }
}
