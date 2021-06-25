<template>
  <v-container fluid>
    <h2>ジョブ画面</h2>
    <v-divider class="mb-3" />
    <v-row>
      <v-spacer />
      <v-col cols="12" sm="2" class="mb-0 pb-0">
        <Label value="ワークID" />
      </v-col>
      <v-col cols="6" sm="3" class="mb-0 pb-0">
        <v-text-field
          style="font-size: 18px"
          :value="workId"
          outlined
          readonly
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" class="my-0 py-0">
        <Label value="パレットID" />
      </v-col>
      <v-col cols="6" sm="3" class="my-0 py-0">
        <v-text-field
          v-model="form.paletteId"
          style="font-size: 18px"
          type="number"
          outlined
          min="0"
          max="9999"
        ></v-text-field>
      </v-col>
      <v-spacer />
      <v-col cols="6" sm="3" class="my-0 py-0">
        <v-btn
          color="#add8e6"
          block
          height="56px"
          :to="`/palette/${form.paletteId}/`"
          style="font-size: 18px"
          >パレット<br />作成ボタン</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" class="mb-0 py-0">
        <Label value="ロボットプログラムNo." />
      </v-col>
      <v-col cols="6" sm="3" class="mb-0 py-0">
        <v-text-field
          v-model="form.robotPgmId"
          style="font-size: 18px"
          type="number"
          outlined
          min="0"
          max="9999"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" class="mb-0 py-0">
        <Label value="加工機プログラムNo.1" />
      </v-col>
      <v-col cols="6" sm="3" class="mb-0 py-0">
        <v-text-field
          v-model="form.machinePgmId1"
          style="font-size: 18px"
          type="number"
          outlined
          min="0"
          max="9999"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" class="mb-0 py-0">
        <Label value="加工機プログラムNo.2" />
      </v-col>
      <v-col cols="6" sm="3" class="mb-0 py-0">
        <v-text-field
          v-model="form.machinePgmId2"
          style="font-size: 18px"
          type="number"
          outlined
          min="0"
          max="9999"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" class="mb-0 py-0">
        <Label value="加工機プログラムNo.3" />
      </v-col>
      <v-col cols="6" sm="3" class="mb-0 py-0">
        <v-text-field
          v-model="form.machinePgmId3"
          style="font-size: 18px"
          type="number"
          outlined
          min="0"
          max="9999"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" class="mb-0 py-0">
        <Label value="加工機プログラムNo.4" />
      </v-col>
      <v-col cols="6" sm="3" class="mb-0 py-0">
        <v-text-field
          v-model="form.machinePgmId4"
          style="font-size: 18px"
          type="number"
          outlined
          min="0"
          max="9999"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" class="mb-0 py-0">
        <Label value="素材数" />
      </v-col>
      <v-col cols="6" sm="3" class="mb-0 py-0">
        <v-text-field
          v-model="form.materialCount"
          style="font-size: 18px"
          type="number"
          outlined
          min="0"
          max="9999"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-0 pt-0">
      <v-spacer />
      <v-col cols="6" sm="3" class="my-1 py-0">
        <v-btn
          :to="`/workShift/${workId}/`"
          color="#c7cbd1"
          height="56px"
          block
          class="mr-4 mt-4"
          style="font-size: 18px"
          >詳細ボタン</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
// import { Context } from '@nuxt/types'
import { Component, Vue } from 'nuxt-property-decorator'
// import {} from '~/types'

@Component
export default class JobPage extends Vue {
  workId = this.$route.params.workId
  form = {
    paletteId: 0,
    robotPgmId: 0,
    machinePgmId1: 0,
    machinePgmId2: 0,
    machinePgmId3: 0,
    machinePgmId4: 0,
    materialCount: 0,
  }
}
</script>
