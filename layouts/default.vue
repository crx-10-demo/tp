<template>
  <v-app>
    <div>
      <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        height="61px"
        :clipped-left="clipped"
        fixed
        app
        color="#2c2f34"
        dark
        flat
        class="pl-0"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-card
          flat
          tile
          height="61px"
          width="61px"
          color="#ff0040"
          class="ml-0"
        >
          <v-container fluid>
            <v-layout justify-center align-content-center>
              <v-icon large>mdi-bell-outline</v-icon>
            </v-layout>
          </v-container>
        </v-card>
        <v-spacer />
        <v-menu bottom left>
          <template #activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon large>mdi-cog</v-icon>
            </v-btn>
          </template>
          <!-- <v-list>
            <v-list-item>
              <v-list-item-title>...</v-list-item-title>
            </v-list-item>
          </v-list> -->
        </v-menu>
      </v-app-bar>
      <v-main>
        <v-card flat tile height="20px" color="#8f9fa" />
        <v-container>
          <nuxt />
        </v-container>
      </v-main>
      <v-footer color="#e4e7e" height="61px" :absolute="!fixed" app>
        <v-spacer />
        <v-btn
          color="#29a0ff"
          rounded
          dark
          style="text-transform: none; font-size: 18px"
          class="mx-1"
          >Edit</v-btn
        >
        <v-btn
          color="#29a0ff"
          rounded
          dark
          style="text-transform: none; font-size: 18px"
          class="mx-1"
          @click="backTo"
          >Back</v-btn
        >
      </v-footer>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class layoutPage extends Vue {
  loading = true
  clipped: boolean = false
  drawer: boolean = false
  fixed: boolean = false
  items: object[] = [
    {
      icon: 'mdi-apps',
      title: 'メイン',
      to: '/',
    },
    {
      icon: 'mdi-bell-outline',
      title: 'アラーム',
      to: '/alarm',
    },
  ]

  backTo() {
    this.$router.go(-1)
  }
}
</script>

<style lang="scss">
.v-data-table th {
  background: #c7cbd1;
}
.v-data-table thead th {
  font-size: 18px !important;
}
.v-data-table tbody td {
  font-size: 18px !important;
}
h2 {
  font-size: 20px;
}
</style>
