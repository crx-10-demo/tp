<template>
  <v-container fluid>
    <h2>パレット画面</h2>
    <v-divider class="mb-3" />
    <v-row>
      <v-col cols="12" sm="6">
        <v-chip
          v-if="chidoriOn == true"
          style="font-size: 24px"
          class="pa-5"
          color="#add8e6"
        >
          千鳥
        </v-chip>
        <v-chip v-else style="font-size: 24px" class="pa-5" color="#add8e6">
          格子
        </v-chip>
      </v-col>
      <v-spacer />
      <v-col cols="12" sm="2" class="mb-0 pb-0">
        <Label value="パレットID" />
      </v-col>
      <v-col cols="6" sm="3" class="mb-0 pb-0">
        <v-text-field
          style="font-size: 18px"
          :value="paletteId"
          outlined
          readonly
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6" class="my-0 py-0">
        <v-row>
          <v-col cols="12" sm="6" class="my-0 py-0">
            <Label value="パレット名" />
          </v-col>
          <v-col cols="6" sm="6" class="mt-2 pt-1">
            <v-text-field
              style="font-size: 18px"
              outlined
              :value="form.paletteName"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="my-0 py-0">
          <v-col cols="12" sm="6" class="my-0 py-0">
            <Label value="行数" />
          </v-col>
          <v-row>
            <v-col cols="2" sm="3" class="ml-3 my-0 py-0">
              <v-icon size="70px">mdi-menu</v-icon>
            </v-col>
            <v-col cols="8" sm="3" class="my-0 py-0">
              <v-text-field
                v-model.number="form.rowCount"
                style="font-size: 18px"
                outlined
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="3" sm="2" class="my-0 py-0 mr-2">
              <v-btn color="#add8e6" block height="56px" @click="rowPlus"
                ><v-icon large>mdi-chevron-up</v-icon></v-btn
              >
            </v-col>
            <v-col cols="3" sm="2" class="my-0 py-0 ml-1">
              <v-btn color="#c7cbd1" block height="56px" @click="rowMinus"
                ><v-icon large>mdi-chevron-down</v-icon></v-btn
              >
            </v-col>
          </v-row>
          <v-row class="mt-1 pt-1">
            <v-col cols="6" sm="3" class="ml-3 mt-1 pt-1">
              <Label value="行間隔" />
            </v-col>
            <v-col cols="12" sm="5" class="my-0 py-0">
              <v-text-field
                outlined
                type="number"
                :value="form.rowInterval"
                style="font-size: 18px"
                min="0"
                max="9999"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-row>
        <v-divider />
        <v-row class="my-1 py-0">
          <v-col cols="12" sm="6" class="my-0 py-0">
            <Label value="列数" />
          </v-col>
          <v-row>
            <v-col cols="2" sm="3" class="ml-3 my-0 py-0">
              <v-icon size="70px">mdi-menu mdi-rotate-90</v-icon>
            </v-col>
            <v-col cols="8" sm="3" class="my-0 py-0">
              <v-text-field
                v-model.number="form.colCount"
                style="font-size: 18px"
                outlined
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="3" sm="2" class="my-0 py-0 mr-2">
              <v-btn color="#add8e6" block height="56px" @click="colPlus"
                ><v-icon large>mdi-chevron-up</v-icon></v-btn
              >
            </v-col>
            <v-col cols="3" sm="2" class="my-0 py-0 ml-1">
              <v-btn color="#c7cbd1" block height="56px" @click="colMinus"
                ><v-icon large>mdi-chevron-down</v-icon></v-btn
              >
            </v-col>
          </v-row>
          <v-row class="mt-1 pt-1">
            <v-col cols="6" sm="3" class="ml-3 mt-1 pt-1">
              <Label value="列間隔" />
            </v-col>
            <v-col cols="12" sm="5" class="my-0 py-0">
              <v-text-field
                outlined
                type="number"
                :value="form.rowInterval"
                style="font-size: 18px"
                min="0"
                max="9999"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" class="my-0 py-0">
        <div v-if="chidoriOn">
          <v-img
            :src="`${$config.STATIC_URL}image/chidori.png`"
            contain
            class="mx-auto my-0 py-0"
          />
        </div>
        <div v-else>
          <v-img
            :src="`${$config.STATIC_URL}image/koushi.png`"
            contain
            class="mx-auto my-0 py-0"
          />
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" sm="3" class="mt-0 pt-0">
        <v-btn
          v-if="chidoriOn == true"
          color="#c7cbd1"
          block
          height="56px"
          style="font-size: 18px"
          @click="chidoriOn = false"
          >格子ボタン</v-btn
        >
        <v-btn
          v-else
          color="#c7cbd1"
          block
          height="56px"
          style="font-size: 18px"
          @click="chidoriOn = true"
          >千鳥ボタン</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="mb-1 py-0">
        <Label value="奇数列＿行数" />
      </v-col>
      <v-col cols="12" sm="3" class="mb-1 py-0">
        <v-text-field
          v-model="form.oddColRowCount"
          min="0"
          max="9999"
          style="font-size: 18px"
          outlined
          type="number"
        />
      </v-col>
      <v-col cols="12" sm="3" class="mb-1 py-0">
        <Label value="偶数列＿行数" />
      </v-col>
      <v-col cols="12" sm="3" class="mb-1 py-0">
        <v-text-field
          v-model="form.evenColRowCount"
          min="0"
          max="9999"
          style="font-size: 18px"
          outlined
          type="number"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="mb-1 py-0">
        <Label value="奇数列＿行の間隔" />
      </v-col>
      <v-col cols="12" sm="3" class="mb-1 py-0">
        <v-text-field
          v-model="form.oddColRowInterval"
          min="0"
          max="9999"
          style="font-size: 18px"
          outlined
          type="number"
        />
      </v-col>
      <v-col cols="12" sm="3" class="mb-1 py-0">
        <Label value="偶数列＿行の間隔" />
      </v-col>
      <v-col cols="12" sm="3" class="mb-1 py-0">
        <v-text-field
          v-model="form.evenColRowInterval"
          min="0"
          max="9999"
          style="font-size: 18px"
          outlined
          type="number"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="mb-1 py-0">
        <Label value="奇数列＿列数" />
      </v-col>
      <v-col cols="12" sm="3" class="mb-1 py-0">
        <v-text-field
          v-model="form.oddColColCount"
          min="0"
          max="9999"
          style="font-size: 18px"
          outlined
          type="number"
        />
      </v-col>
      <v-col cols="12" sm="3" class="mb-1 py-0">
        <Label value="偶数列＿列数" />
      </v-col>
      <v-col cols="12" sm="3" class="mb-1 py-0">
        <v-text-field
          v-model="form.evenColColCount"
          min="0"
          max="9999"
          style="font-size: 18px"
          outlined
          type="number"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="mb-1 py-0">
        <Label value="奇数列＿列の間隔" />
      </v-col>
      <v-col cols="12" sm="3" class="mb-1 py-0">
        <v-text-field
          v-model="form.oddColColInterval"
          min="0"
          max="9999"
          style="font-size: 18px"
          outlined
          type="number"
        />
      </v-col>
      <v-col cols="12" sm="3" class="mb-1 py-0">
        <Label value="偶数列＿列の間隔" />
      </v-col>
      <v-col cols="12" sm="3" class="mb-1 py-0">
        <v-text-field
          v-model="form.evenColColInterval"
          min="0"
          max="9999"
          style="font-size: 18px"
          outlined
          type="number"
        />
      </v-col>
    </v-row>
    <v-row class="mt-0 pt-0">
      <v-spacer />
      <v-col cols="6" sm="3" class="mt-0 pt-0">
        <v-btn
          style="font-size: 18px"
          color="#97afdb"
          height="56px"
          block
          class="mt-4"
          >保存</v-btn
        >
      </v-col>
      <v-col cols="6" sm="3" class="mt-0 pt-0">
        <v-btn
          style="font-size: 18px"
          color="#c7cbd1"
          height="56px"
          block
          class="mr-4 mt-4"
          >キャンセル</v-btn
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
export default class PalettePage extends Vue {
  paletteId = this.$route.params.id
  chidoriOn = false
  form = {
    paletteId: this.paletteId,
    paletteName: '',
    rowCount: 0,
    rowInterval: 0,
    colCount: 0,
    colInterval: 0,
    oddColRowCount: 0,
    oddColRowInterval: 0,
    oddColColCount: 0,
    oddColColInterval: 0,
    evenColRowCount: 0,
    evenColRowInterval: 0,
    evenColColCount: 0,
    evenColColInterval: 0,
    // type:0,
  }

  rowPlus() {
    if (this.form.rowCount < 9999) return (this.form.rowCount += 1)
  }

  rowMinus() {
    if (this.form.rowCount > 0) return (this.form.rowCount -= 1)
  }

  colPlus() {
    if (this.form.colCount < 9999) return (this.form.colCount += 1)
  }

  colMinus() {
    if (this.form.colCount > 0) return (this.form.colCount -= 1)
  }
}
</script>
