export default class Station {
  private id: number
  private name: string
  private connectedTo: Array<string>

  constructor(id: number, name: string, connectedTo: Array<string>) {
    this.name = name
    this.id = id
    this.connectedTo = connectedTo
  }

  public getName(): string {
    return this.name
  }

  public getId(): number {
    return this.id
  }

  public setName(name: string): void {
    this.name = name
  }

  public setId(id: number): void {
    this.id = id
  }

  public setLines(connectedTo: Array<string>): void {
    this.connectedTo = connectedTo
  }

  public getLines(): Array<string> {
    return this.connectedTo
  }

  public toString(): string {
    return `id: ${this.id}, name: ${this.name}, connectedTo: ${this.connectedTo}`
  }
}
