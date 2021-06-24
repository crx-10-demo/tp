<template>
  <div>
    <v-card :key="item.alarmNum" tile flat class="px-2 pt-1 pb-2">
      アラームNo.{{ item.alarmNum }}
      <v-card tile flat outlined class="grey lighten-3 pa-2">
        {{ item.alarmText }}
      </v-card>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Alarm } from '~/types/'

@Component
export default class Label extends Vue {
  @Prop({ type: Object, required: true }) item!: Alarm
}
</script>
