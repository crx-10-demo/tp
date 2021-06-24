<template>
  <v-card flat tile :width="width">
    <v-container fluid class="ml-0 pl-0">
      <div v-if="position == 'center'">
        <v-layout justify-center> {{ value }} </v-layout>
      </div>
      <div v-else-if="position == 'right'">
        <v-layout justify-end> {{ value }} </v-layout>
      </div>
      <div v-else>
        <v-layout> {{ value }} </v-layout>
      </div>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Label extends Vue {
  @Prop({ type: String, required: true }) value!: String
  @Prop({ type: Number, required: false }) width!: Number
  @Prop({ type: String, required: false }) position!: String
}
</script>
