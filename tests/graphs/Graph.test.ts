import Graph from '../../src/lib/graphs/Graph'
import GraphClass from '../../src/lib/graphs/GraphClass'

import { expect } from 'chai'

describe('Graph', () => {
  let graph: Graph
  let directedGraph: Graph
  const adjacencyMatrix: number[][] = [[0, 1, 1], [1, 0, 1], [1, 1, 0]]

  describe('Constructor', () => {
    it('should create a new UNDIRECTED `Graph`', () => {
      graph = new Graph(GraphClass.UNDIRECTED, 3)
      expect(graph.getAdjMatrix).to.eql([[1, 1, 1], [1, 1, 1], [1, 1, 1]])
      expect(graph.getClass).to.equal(GraphClass.UNDIRECTED)
    })

    it('should create a new DIRECTED `Graph`', () => {
      directedGraph = new Graph(GraphClass.DIRECTED, 3)
      expect(directedGraph.getAdjMatrix).to.eql([[1, 1, 1], [1, 1, 1], [1, 1, 1]])
      expect(directedGraph.getClass).to.equal(GraphClass.DIRECTED)
    })
  })

  describe('Connect', () => {
    before(() => {
      directedGraph = new Graph(GraphClass.DIRECTED, 3)
    })

    it('should create a new edge between the two given nodes in a directed graph', () => {
      directedGraph.connect(1, 2)
      expect(directedGraph.getAdjMatrix).to.eql([[1, 1, 1], [1, 1, 1], [1, 1, 1]])
    })

    before(() => {
      graph = new Graph(GraphClass.UNDIRECTED, 3)
    })

    it('should create a new edge between the two given nodes in an undirected graph', () => {
      graph.connect(1, 2)
      expect(graph.getAdjMatrix).to.eql([[1, 1, 1], [1, 1, 1], [1, 1, 1]])
    })
  })

  describe('Disconnect', () => {
    before(() => {
      directedGraph = new Graph(GraphClass.DIRECTED, 3)
    })

    it('should remove the edge between the two given nodes in a directed graph', () => {
      directedGraph.disconnect(1, 2)
      expect(directedGraph.getAdjMatrix).to.eql([[1, 1, 1], [1, 1, 0], [1, 1, 1]])
    })

    before(() => {
      graph = new Graph(GraphClass.UNDIRECTED, 3)
    })

    it('should remove the edge between the two given nodes in an undirected graph', () => {
      graph.disconnect(1, 2)
      expect(graph.getAdjMatrix).to.eql([[1, 1, 1], [1, 1, 0], [1, 0, 1]])
    })
  })

  describe('Number of vertices', () => {
    it('should return the number of nodes of the graph', () => {
      expect(graph.vertices()).to.equal(3)
    })
  })

  describe('Is connected', () => {
    it('should return if the nodes are connected', () => {
      expect(graph.areConnected(1, 2)).to.equal(false)
    })
  })
})
