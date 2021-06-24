<template>
  <v-card flat tile outlined>
    {{ value }}
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class WorkCard extends Vue {
  @Prop({ type: String, required: true }) items!: Object
}
</script>
