export type Palette = {
  id: number
  name: string
}

export type Work = {
  id: number
  name: string
}

export type Alarm = {
  alarmNum: number
  alarmText: string
  created: string
}

export type WorkShift = {
  workId: number
  productName: string
  productSpec: {
    a: number
    b: number
    c: number
    d: number
    e: number
    f: number
    g: number
    h: number
    i: number
    j: number
    k: number
    l: number
    m: number
    n: number
    o: number
    p: number
    q: number
    r: number
    s: number
    t: number
    u: number
    v: number
    w: number
    x: number
    y: number
    z: number
  }
}
