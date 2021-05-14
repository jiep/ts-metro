export default class Station {
    private id: number;
    private name: string;

    constructor (id: number, name: string) {
      this.name = name
      this.id = id
    }

    public getName (): string {
      return this.name
    }

    public getId (): number {
      return this.id
    }

    public setName (name: string) {
      this.name = name
    }

    public setId (id: number) {
      this.id = id
    }

    public toString (): string {
      return `id: ${this.id}, name: ${this.name}`
    }
}
