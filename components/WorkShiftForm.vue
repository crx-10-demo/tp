<template>
  <v-form>
    <v-row>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">a.素材直径(mm)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">b.素材長さ(mm)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">c.素材重量(kg)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">d.完成品直径(mm)</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.a" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.b" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.c" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.d" type="number" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">e.完成品長さ(mm)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">f.完成品重量(kg)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">g.ﾊﾝﾄﾞ1爪高さ(mm)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">h.ﾊﾝﾄﾞ1掴み深さ(mm)</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.e" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.f" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.g" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.h" type="number" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">i.ﾊﾝﾄﾞ1直径(最小)(mm)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">j.ﾊﾝﾄﾞ1直径(最大)(mm)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">k.ﾊﾝﾄﾞ1重量(kg)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">l.ﾊﾝﾄﾞ1ﾊﾝﾄﾞ中心距離(mm)</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.i" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.j" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.k" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.l" type="number" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">m.ﾊﾝﾄﾞ2爪高さ(mm)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">n.ﾊﾝﾄﾞ2掴み深さ(mm)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">o.ﾊﾝﾄﾞ2直径(最小)(mm)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">p.ﾊﾝﾄﾞ2直径(最大)(mm)</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.m" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.n" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.o" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.p" type="number" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">q.ﾊﾝﾄﾞ2ﾊﾝﾄﾞ中心距離(mm)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">r.SP1ｱﾌﾟﾛｰﾁ距離(mm)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">s.SP1ﾁｬｯｸ爪高さ(mm)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">t.SP1ﾁｬｯｸ掴み深さ1(mm)</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.q" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.r" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.s" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.t" type="number" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">u.SP1ﾁｬｯｸ掴み深さ2(mm)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">v.SP2ｱﾌﾟﾛｰﾁ距離(mm)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">w.SP2ﾁｬｯｸ爪高さ(mm)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">x.SP2ﾁｬｯｸ掴み深さ1(mm)</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.u" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.v" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.w" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.x" type="number" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">y.SP2ﾁｬｯｸ掴み深さ2(mm)</p>
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <p class="my-1">z.予備</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.y" type="number" />
      </v-col>
      <v-col cols="12" sm="3" class="my-0 py-0">
        <v-text-field outlined :value="form.productSpec.z" type="number" />
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { ErrorDict, WorkShift } from '~/types'

export const initForm = () => ({
  productName: '',
  productSpec: {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  },
})

@Component
export default class WorkShiftForm extends Vue {
  @Prop({ type: Object, default: null }) value!: WorkShift | null
  @Prop({ type: Object, default: () => ({}) }) errors!: ErrorDict

  form = initForm()
  headers: string[] = [
    'a.素材直径(mm)',
    'b.素材長さ(mm)',
    'c.素材重量(kg)',
    'd.完成品直径(mm)',
    'd.完成品長さ(mm)',
    'e.完成品重量(kg)',
    'f.ﾊﾝﾄﾞ1爪高さ(mm)',
    'g.ﾊﾝﾄﾞ1掴み深さ(mm)',
    'h.ﾊﾝﾄﾞ1直径(最小)(mm)',
    'i.ﾊﾝﾄﾞ1直径(最大)(mm)',
    'j.ﾊﾝﾄﾞ1重量(kg)',
    'k.ﾊﾝﾄﾞ1ﾊﾝﾄﾞ中心距離(mm)',
    'l.ﾊﾝﾄﾞ2爪高さ(mm)',
    'm.ﾊﾝﾄﾞ2掴み深さ(mm)',
    'n.ﾊﾝﾄﾞ2直径(最小)(mm)',
    'o.ﾊﾝﾄﾞ2直径(最大)(mm)',
    'p.ﾊﾝﾄﾞ2ﾊﾝﾄﾞ中心距離(mm)',
    'q.SP1ｱﾌﾟﾛｰﾁ距離(mm)',
    'r.SP1ﾁｬｯｸ爪高さ(mm)',
    's.SP1ﾁｬｯｸ掴み深さ1(mm)',
    't.SP1ﾁｬｯｸ掴み深さ2(mm)',
    'u.SP2ｱﾌﾟﾛｰﾁ距離(mm)',
    'v.SP2ﾁｬｯｸ爪高さ(mm)',
    'w.SP2ﾁｬｯｸ掴み深さ1(mm)',
    'x.SP2ﾁｬｯｸ掴み深さ2(mm)',
    'y.予備',
    'z.予備',
  ]

  @Watch('value', { immediate: true })
  onValueChanged(value: any) {
    if (!value) {
      this.form = initForm()
    } else {
      Object.keys(this.form).forEach((k) => {
        // @ts-ignore
        this.form[k] = value[k]
      })
    }
  }

  onChange() {
    this.$emit('input', Object.assign(this.form))
  }
}
</script>
