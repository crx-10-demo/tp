import { Plugin } from '@nuxt/types'

const workStatuses = [
  { text: '段取り未完', value: 0 },
  { text: '段取り完了', value: 1 },
  { text: '実行中', value: 2 },
  { text: '終了', value: 3 },
]

interface workStatusDisctionary {
  [value: string]: string
}

const workStatusDict: workStatusDisctionary = {}
workStatuses.forEach(({ value, text }) => {
  workStatusDict[value] = text
})

function createGetWorkStatusText() {
  return function getWorkStatusText(value: string): string {
    return workStatusDict[value] || '-'
  }
}

const workStatusPlugin: Plugin = (_ctx, inject) => {
  inject('workStatus', {
    getWorkStatusText: createGetWorkStatusText(),
    workStatuses,
  })
}
export default workStatusPlugin
