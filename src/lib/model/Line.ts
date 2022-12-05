export default class Line {
  name: string
  bgColor: string
  textColor: string
  borderColor: string

  constructor (name: string, bgColor: string, textColor: string, borderColor: string) {
    this.name = name
    this.bgColor = bgColor
    this.textColor = textColor
    this.borderColor = borderColor
  }

  getName (): string {
    return this.name
  }

  getBgColor (): string {
    return this.bgColor
  }

  getTextColor (): string {
    return this.textColor
  }

  getBorderColor (): string {
    return this.borderColor
  }
}
