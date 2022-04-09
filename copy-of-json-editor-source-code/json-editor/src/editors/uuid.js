import { StringEditor } from './string.js'

export class UuidEditor extends StringEditor {
  preBuild () {
    super.preBuild()

    /* Use Schema "default" for setting autogenerated uuid */
    this.schema.default = this.uuid = this.getUuid()

    /* Set cleave options if no existing options is present */
    if (!this.schema.options) this.schema.options = {}
    if (!this.schema.options.cleave) {
      this.schema.options.cleave = {
        delimiters: ['-'],
        blocks: [8, 4, 4, 4, 12]
      }
    }
  }

  build () {
    super.build()
    /* Set field to readonly */
    this.disable(true)
    this.input.setAttribute('readonly', 'true')
  }

  sanitize (value) {
    if (!this.testUuid(value)) value = this.uuid
    return value
  }

  setValue (value, initial, fromTemplate) {
    if (!this.testUuid(value)) value = this.uuid
    this.uuid = value
    super.setValue(value, initial, fromTemplate)
  }

  getUuid () {
    /* https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript */
    let d = new Date().getTime()

    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now() /* use high-precision timer if available */
    }

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
  }

  testUuid (value) {
    return (/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value))
  }
}