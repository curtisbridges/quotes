import fs from 'fs'

export default class Quotes {
  constructor(filename) {
    // console.log('filename', filename)
    this.filename = filename

    this.contents = readFile(this.filename)
    // console.log('contents', this.contents)
  }

  toString() {
    return this.contents.toString()
  }

  toJSON() {
    return JSON.parse(this.contents)
  }
}

function readFile(filename) {
  if (!filename) {
    return filename
  }

  return fs.readFileSync(filename, { encoding: 'UTF8' })
}

// module.exports = Quotes
