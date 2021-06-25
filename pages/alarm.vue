<template>
  <v-container>
    <h2>アラーム画面</h2>
    <v-divider class="mb-3" />
    <p>アラーム内容</p>
    <v-card outlined>
      <v-container>
        <div v-if="occurring.length == 0">
          <p>現在発生しているアラームはありません。</p>
        </div>
        <div v-else>
          <p>{{ occurring.length }}件のアラームが発生しています。</p>
        </div>
        <v-virtual-scroll :items="occurring" item-height="100px" height="400">
          <template #default="{ item }">
            <AlarmCard :item="item" />
          </template>
        </v-virtual-scroll>
      </v-container>
    </v-card>
    <p class="pt-5">アラーム履歴</p>
    <v-data-table
      dense
      :headers="headers"
      :items="histories"
      :items-per-page="10"
      class="my-5"
    >
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
// import { Context } from '@nuxt/types'
import { Component, Vue } from 'nuxt-property-decorator'
import { Alarm } from '~/types'

@Component
export default class AlarmPage extends Vue {
  next!: null | string
  previous!: null | string

  headers = [
    {
      text: 'アラームNo.',
      value: 'alarmNum',
      width: 150,
      sortable: false,
    },
    {
      text: 'アラーム内容',
      value: 'alarmText',
      sortable: false,
    },
    {
      text: '日時',
      value: 'created',
      width: 200,
      sortable: false,
    },
  ]

  occurring: Alarm[] = [
    {
      alarmNum: 19,
      alarmText: '装置を起動します。',
      created: '2021/06/22 05:38',
    },
    {
      alarmNum: 18,
      alarmText: '装置が停止しました。',
      created: '2021/06/22 05:37',
    },
    {
      alarmNum: 17,
      alarmText: '異常を検知しました。',
      created: '2021/06/22 05:37',
    },
    {
      alarmNum: 16,
      alarmText: '異常を検知しました。',
      created: '2021/06/22 05:36',
    },
    {
      alarmNum: 15,
      alarmText: '装置を起動します。',
      created: '2021/06/22 05:32',
    },
    {
      alarmNum: 14,
      alarmText: '装置が停止しました。',
      created: '2021/06/22 05:34',
    },
    {
      alarmNum: 13,
      alarmText: '装置が停止しました。',
      created: '2021/06/22 05:34',
    },
    {
      alarmNum: 12,
      alarmText: '異常を検知しました。',
      created: '2021/06/22 05:33',
    },
    {
      alarmNum: 11,
      alarmText: '異常を検知しました。',
      created: '2021/06/22 05:32',
    },
  ]

  histories = [
    {
      alarmNum: 9,
      alarmText: '装置を起動します。',
      created: '2021/06/21 04:32',
    },
    {
      alarmNum: 8,
      alarmText: '装置が停止しました。',
      created: '2021/06/20 21:55',
    },
    {
      alarmNum: 7,
      alarmText: '異常を検知しました。',
      created: '2021/06/20 21:55',
    },
    {
      alarmNum: 6,
      alarmText: '異常を検知しました。',
      created: '2021/06/20 21:54',
    },
    {
      alarmNum: 5,
      alarmText: '装置を起動します。',
      created: '2021/06/20 20:32',
    },
    {
      alarmNum: 4,
      alarmText: '装置が停止しました。',
      created: '2021/06/20 19:50',
    },
    {
      alarmNum: 3,
      alarmText: '装置が停止しました。',
      created: '2021/06/20 19:50',
    },
    {
      alarmNum: 2,
      alarmText: '異常を検知しました。',
      created: '2021/06/20 19:48',
    },
    {
      alarmNum: 1,
      alarmText: '異常を検知しました。',
      created: '2021/06/20 19:46',
    },
  ]
}
</script>
