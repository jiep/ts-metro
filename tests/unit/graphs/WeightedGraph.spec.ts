import WeightedGraph from '@/lib/graphs/WeightedGraph'
import GraphClass from '@/lib/graphs/GraphClass'

import { expect } from 'chai'

describe('WeightedGraph', () => {
  let graph: WeightedGraph
  let directedGraph: WeightedGraph
  const g: WeightedGraph = new WeightedGraph(GraphClass.DIRECTED, 5)

  describe('Constructor', () => {
    it('should create a new `WeightedGraph`', () => {
      graph = new WeightedGraph(GraphClass.DIRECTED, 3)
      expect(graph.getWeightedMatrix).to.eql([
        [0, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
        [Number.POSITIVE_INFINITY, 0, Number.POSITIVE_INFINITY],
        [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, 0]
      ])
    })
  })

  describe('Connect', () => {
    before(() => {
      directedGraph = new WeightedGraph(GraphClass.DIRECTED, 3)
    })

    it('should create a new edge between the two given nodes in a directed graph with some weight', () => {
      directedGraph.connect(1, 2, 5)
      expect(directedGraph.getWeightedMatrix[1][2]).to.equal(5)
    })

    before(() => {
      graph = new WeightedGraph(GraphClass.UNDIRECTED, 3)
    })

    it('should create a new edge between the two given nodes in an undirected graph with some weight', () => {
      graph.connect(1, 2, 6)
      expect(graph.getWeightedMatrix[1][2]).to.equal(6)
      expect(graph.getWeightedMatrix[2][1]).to.equal(6)
    })
  })

  describe('Get weight', () => {
    it('should return the weight between two nodes of the graph', () => {
      expect(graph.getWeight(1, 1)).to.equal(0)
      expect(graph.getWeight(1, 2)).to.equal(6)
    })
  })

  describe('Get shortest path', () => {
    beforeEach(() => {
      g.connect(1, 2, 2)
      g.connect(0, 1, 1)
      g.connect(2, 3, 2)
      g.connect(0, 3, 5)
      g.connect(3, 4, 1)
      g.connect(2, 4, 4)
      g.connect(1, 4, 6)
      g.connect(2, 0, 2)
    })

    it('show return the shortest path', () => {
      const weightedMatrix: number[][] = g.getWeightedMatrix
      const infinity = Number.POSITIVE_INFINITY
      const expectedMatrix: number[][] = [
        [0, 1, infinity, 5, infinity],
        [infinity, 0, 2, infinity, 6],
        [2, infinity, 0, 2, 4],
        [infinity, infinity, infinity, 0, 1],
        [infinity, infinity, infinity, infinity, 0]
      ]
      expect(weightedMatrix).to.have.same.deep.members(expectedMatrix)
      const out = g.shortestPath(0, 4)
      expect(out[0]).to.have.same.deep.members([0, 3, 4])
      expect(out[1]).to.equal(6)

      const out2 = g.shortestPath(1, 2)
      expect(out2[0]).to.deep.equal([1, 2])
      expect(out2[1]).to.equal(2)
    })
  })
})
