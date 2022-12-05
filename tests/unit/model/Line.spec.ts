import Line from '@/lib/model/Line'

import { expect } from 'chai'

describe('Line', () => {
  let line: Line

  describe('Constructor', () => {
    it('should create a new `Line`', () => {
      line = new Line('1', '#FFFFFF', '#AAAAAA', '#123456')
      const name = line.getName()
      const bgColor = line.getBgColor()
      const textColor = line.getTextColor()
      const borderColor = line.getBorderColor()
      expect(name).to.equal('1')
      expect(bgColor).to.equal('#FFFFFF')
      expect(textColor).to.equal('#AAAAAA')
      expect(borderColor).to.equal('#123456')
    })
  })

  describe('Getters', () => {
    beforeEach(function () {
      line = new Line('1', '#FFFFFF', '#AAAAAA', '#123456')
    })

    it('should return the correct `name`', () => {
      const name: string = line.getName()
      expect(name).to.equal('1')
    })

    it('should return the correct `background color`', () => {
      const bgColor: string = line.getBgColor()
      expect(bgColor).to.equal('#FFFFFF')
    })

    it('should return the correct `text color`', () => {
      const textColor: string = line.getTextColor()
      expect(textColor).to.equal('#AAAAAA')
    })

    it('should return the correct `border color`', () => {
      const borderColor: string = line.getBorderColor()
      expect(borderColor).to.equal('#123456')
    })
  })
})
