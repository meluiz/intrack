import { app } from 'electron'
import * as fs from 'fs'
import * as path from 'path'

export default class Database<T> {
  public data: T
  private file: string
  private appUserData: string
  private dirname: string
  private path: string

  constructor(file: string) {
    this.file = file
    this.appUserData = app.getPath('userData')
    this.dirname = path.join(this.appUserData, 'database')
    this.path = path.join(this.dirname, `${file}.json`)

    if (!this.valid(path.join(this.path))) {
      if (!this.valid(this.dirname)) fs.mkdirSync(this.dirname)
      fs.writeFileSync(this.path, '[]')
    }

    this.data = this.read()
  }

  private valid(path: string) {
    return fs.existsSync(path)
  }

  public read(): T {
    const data = fs.readFileSync(this.path, { encoding: 'utf-8' })
    return JSON.parse(data)
  }

  public drop() {
    if (this.valid(this.path)) {
      fs.unlinkSync(this.path)
    }
  }

  public write() {
    if (this.valid(path.join(this.path))) {
      fs.writeFileSync(this.path, JSON.stringify(this.data))
    }
  }
}
