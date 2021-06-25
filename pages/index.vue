<template>
  <v-container fluid>
    <h2>メイン画面</h2>
    <v-divider class="mb-3" />
    <v-row>
      <v-col cols="12" sm="2" class="mb-0 pb-0">
        <Label value="ワークID" />
      </v-col>
      <v-col cols="3" sm="1" class="mb-0 pb-0">
        <v-btn
          color="#c7cbd1"
          block
          height="56px"
          style="font-size: 18px"
          @click="workIdMinus"
          >ー</v-btn
        >
      </v-col>
      <v-col cols="6" sm="2" class="mb-0 pr-0 pb-0">
        <v-text-field
          v-model.number="selectWorkId"
          outlined
          type="number"
          max="9999"
          min="1"
          style="font-size: 18px"
        ></v-text-field>
      </v-col>
      <v-col cols="3" sm="1" class="mb-0 pb-0">
        <v-btn
          style="font-size: 18px"
          color="#add8e6"
          block
          height="56px"
          @click="workIdPlus"
          >＋</v-btn
        >
      </v-col>
      <v-spacer />
      <v-col cols="6" sm="2" class="mb-0 pb-0">
        <Label value="ワーク名称" />
      </v-col>
      <v-col cols="6" sm="3" class="mb-0 pb-0">
        <v-text-field :value="workName" readonly outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer />
      <v-col cols="6" sm="3" class="mt-0 pt-0">
        <v-btn
          style="font-size: 18px"
          color="#add8e6"
          height="56px"
          block
          :to="`/job/${selectWorkId}/`"
          >参照ボタン</v-btn
        >
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="10"
      hide-default-footer
      class="my-5"
    >
      <template #[`item.workId`]="{ item }">
        <v-card tile outlined class="ma-1 pa-1" @click="editItem(item)">
          {{ item.workId }}
        </v-card>
      </template>
      <template #[`item.workName`]="{ item }">
        <v-card tile outlined class="ma-1 pa-1" @click="editItem(item)">
          {{ item.workName }}
        </v-card>
      </template>
      <template #[`item.materialCount`]="{ item }">
        <v-card tile outlined class="ma-1 pa-1" @click="editItem(item)">
          {{ item.materialCount }}
        </v-card>
      </template>
      <template #[`item.workStatus`]="{ item }">
        <v-layout justify-center>
          <!-- 段取り未完 -->
          <v-sheet
            v-if="item.workStatus == '0'"
            class="rounded-circle mx-auto"
            color="white"
            elevation="3"
            height="30"
            width="30"
          ></v-sheet>
          <!-- 段取り完了 -->
          <v-sheet
            v-if="item.workStatus == '1'"
            class="rounded-circle mx-auto"
            color="blue"
            elevation="3"
            height="30"
            width="30"
          ></v-sheet>
          <!-- 実行中 -->
          <v-sheet
            v-if="item.workStatus == '2'"
            class="rounded-circle mx-auto"
            color="green"
            elevation="3"
            height="30"
            width="30"
          ></v-sheet>
          <!-- 終了 -->
          <v-sheet
            v-if="item.workStatus == '3'"
            class="rounded-circle mx-auto"
            color="orange"
            elevation="3"
            height="30"
            width="30"
          ></v-sheet>
        </v-layout>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">オーダーを変更する</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="editedItem.workId"
                  label="ワークID"
                  type="number"
                  max="9999"
                  min="1"
                  style="font-size: 18px"
                  class="mx-2"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="editedItem.workName"
                  label="ワーク名称"
                  style="font-size: 18px"
                  max-length="5"
                  class="mx-2"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="editedItem.materialCount"
                  label="素材数"
                  type="number"
                  max="9999"
                  min="1"
                  style="font-size: 18px"
                  class="mx-2"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">キャンセル</v-btn>
          <v-btn color="blue darken-1" text @click="save">保存する</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card outlined class="fill-height my-5">
          <v-container>
            状態ランプ色<br /><br />
            段取り未完：白<br />
            段取り完了：青<br />
            実&nbsp;&nbsp;&nbsp;&nbsp;行&nbsp;&nbsp;&nbsp;&nbsp;中：緑<br />
            終&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了：オレンジ<br />
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-row>
          <v-col cols="12" sm="6" class="mt-5">
            <v-btn color="#97afdb" block height="140px" style="font-size: 18px"
              >ワークストッカ<br />ビジョン補正</v-btn
            >
          </v-col>
          <v-col cols="12" sm="6" class="mt-5">
            <v-btn color="#97afdb" block height="140px" style="font-size: 18px"
              >加工機<br />ビジョン補正</v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-btn color="#97afdb" block height="140px" style="font-size: 18px"
              >ロボット<br />原位置復帰</v-btn
            >
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn color="#c7cbd1" block height="140px" style="font-size: 18px"
              >サイクル<br />停止</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
// import { Context } from '@nuxt/types'
import { Component, Vue } from 'nuxt-property-decorator'
// import { Work } from '~/types'

@Component
export default class TopPage extends Vue {
  selectWorkId = 1
  editedIndex = -1
  editedItem = {
    workId: 0,
    workName: '',
    materialCount: 0,
  }

  dialog = false

  headers = [
    {
      text: 'オーダー',
      value: 'order',
      width: 110,
      sortable: false,
    },
    {
      text: 'ワークID',
      value: 'workId',
      sortable: false,
    },
    {
      text: 'ワーク名称',
      value: 'workName',
      sortable: false,
    },
    {
      text: 'パレットID',
      value: 'paletteId',
      sortable: false,
    },
    {
      text: '素材数',
      value: 'materialCount',
      sortable: false,
    },
    {
      text: '状態ランプ',
      value: 'workStatus',
      width: 150,
      sortable: false,
    },
  ]

  items = [
    {
      order: 1,
      workId: 1,
      workName: 'AAAAA',
      paletteId: '1234',
      materialCount: 42,
      workStatus: '1',
    },
    {
      order: 2,
      workId: 2,
      workName: 'AAAAB',
      paletteId: '1235',
      materialCount: 16,
      workStatus: '1',
    },
    {
      order: 3,
      workId: 3,
      workName: 'AAAAC',
      paletteId: '1236',
      materialCount: 12,
      workStatus: '2',
    },
    {
      order: 4,
      workId: 4,
      workName: 'AAAAD',
      paletteId: '1237',
      materialCount: 24,
      workStatus: '3',
    },
    {
      order: 5,
      workId: 5,
      workName: 'AAAAE',
      paletteId: '1238',
      materialCount: 13,
      workStatus: '3',
    },
    {
      order: 6,
      workId: 6,
      workName: 'AAAAF',
      paletteId: '1239',
      materialCount: 9,
      workStatus: '2',
    },
    {
      order: 7,
      workId: 7,
      workName: 'AAAAG',
      paletteId: '1240',
      materialCount: 5,
      workStatus: '1',
    },
    {
      order: 8,
      workId: 8,
      workName: 'AAAAH',
      paletteId: '1241',
      materialCount: 21,
      workStatus: '1',
    },
    {
      order: 9,
      workId: 9,
      workName: 'AAAAI',
      paletteId: '1242',
      materialCount: 12,
      workStatus: '0',
    },
    {
      order: 10,
      workId: 10,
      workName: 'AAAAJ',
      paletteId: '1244',
      materialCount: 8,
      workStatus: '0',
    },
  ]

  get workName() {
    return this.items.find((x) => x.workId === this.selectWorkId)?.workName
  }

  // onChange() {
  //   const idx = this.items.findIndex((x) => x.workId === this.selectWorkId)
  //   if (idx > -1) {
  //     const item = Object.assign({}, this.items[idx], {
  //       workName: this.workName,
  //     })
  //     console.log('=====', item)
  //     this.items.splice(idx, 1, item)
  //   }
  // }

  workIdPlus() {
    if (this.selectWorkId < 9999) return (this.selectWorkId += 1)
  }

  workIdMinus() {
    if (this.selectWorkId > 0) return (this.selectWorkId -= 1)
  }

  editItem(item: any) {
    this.editedIndex = this.items.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialog = true
  }

  close() {
    this.dialog = false
  }

  save() {
    if (this.editedIndex > -1) {
      Object.assign(this.items[this.editedIndex], this.editedItem)
    }
    this.close()
  }
}
</script>

<style lang="scss">
.div-a {
  border-color: #0096;
  border-style: solid;
  background: #c7cbd1;
}
</style>
