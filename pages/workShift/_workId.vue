<template>
  <v-container fluid>
    <h2>ワークシフト画面</h2>
    <v-divider class="mb-3" />
    <v-row>
      <v-col cols="12" sm="12">
        <v-img
          :src="`${$config.STATIC_URL}image/sample2.jpg`"
          width="100%"
          class="mx-auto"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">ワークID</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">ワーク名称</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field readonly outlined :value="workId" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field readonly outlined :value="productName" />
      </v-col>
    </v-row>
    <WorkShiftForm v-model="form" />
  </v-container>
</template>

<script lang="ts">
// import { Context } from '@nuxt/types'
import { Component, Vue } from 'nuxt-property-decorator'
import { ErrorDict } from '~/types'
import { initForm } from '~/components/WorkShiftForm.vue'

@Component
export default class WorkShiftPage extends Vue {
  workId = this.$route.params.workId
  productName = 'ABCDEF'
  form = initForm()
  errors: ErrorDict = {}
  loading = false
}
</script>
