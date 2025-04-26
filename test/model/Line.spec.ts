import Line from '@/lib/model/Line'

import { describe, it, expect, beforeEach } from 'vitest'

describe('Line', () => {
  let line: Line

  describe('Constructor', () => {
    it('should create a new `Line`', () => {
      line = new Line('1', '#FFFFFF', '#AAAAAA', '#123456')
      expect(line).to.be.an.instanceOf(Line)
      expect(line.name).to.equal('1')
      expect(line.bgColor).to.equal('#FFFFFF')
      expect(line.textColor).to.equal('#AAAAAA')
      expect(line.borderColor).to.equal('#123456')
    })
  })

  describe('Equality', () => {
    it('should consider two lines with the same properties as equal', () => {
      const line1 = new Line('1', '#FFFFFF', '#AAAAAA', '#123456')
      const line2 = new Line('1', '#FFFFFF', '#AAAAAA', '#123456')
      expect(line1).to.eql(line2)
    })

    it('should consider two lines with different properties as not equal', () => {
      const line1 = new Line('1', '#FFFFFF', '#AAAAAA', '#123456')
      const line2 = new Line('2', '#000000', '#BBBBBB', '#654321')
      expect(line1).to.not.eql(line2)
    })
  })

  describe('Getters', () => {
    beforeEach(() => {
      line = new Line('1', '#FFFFFF', '#AAAAAA', '#123456')
    })

    it('should return the correct name', () => {
      expect(line.name).to.equal('1')
    })

    it('should return the correct background color', () => {
      expect(line.bgColor).to.equal('#FFFFFF')
    })

    it('should return the correct text color', () => {
      expect(line.textColor).to.equal('#AAAAAA')
    })

    it('should return the correct border color', () => {
      expect(line.borderColor).to.equal('#123456')
    })
  })

  describe('Setters', () => {
    beforeEach(() => {
      line = new Line('1', '#FFFFFF', '#AAAAAA', '#123456')
    })

    it('should allow changing the name', () => {
      line.name = '2'
      expect(line.name).to.equal('2')
    })

    it('should allow changing the background color', () => {
      line.bgColor = '#000000'
      expect(line.bgColor).to.equal('#000000')
    })

    it('should allow changing the text color', () => {
      line.textColor = '#BBBBBB'
      expect(line.textColor).to.equal('#BBBBBB')
    })

    it('should allow changing the border color', () => {
      line.borderColor = '#654321'
      expect(line.borderColor).to.equal('#654321')
    })
  })
})
