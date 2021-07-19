<template>
  <div class="hello">
    <div class="cennikkorner">
      <div class="row naglowek">
        <div class="col-3 colnaglowek">TYP OGRODZENIA</div>
        <div class="col-3 colnaglowek">RYSUNEK</div>
        <div class="col-2 colnaglowek">KOD</div>
        <div class="col-1 colnaglowek">KOLOR</div>
        <div class="col-1 colnaglowek">WYMIARY</div>
        <div class="col-2 colnaglowek">CENA</div>
      </div>
      <div v-for="row in dataakustyczne" :key="row.id" class="row lista">
        <div class="col-3 model">
          <span v-if="row.nazwa"><span v-html="row.nazwa"></span></span>
        </div>
        <div class="col-3">
          <span v-if="row.rysunek">
            <a target="_blank" :href="row.rysunek">
              <img :src="row.rysunek" alt="" srcset="" /></a
          ></span>
        </div>
        <div class="col-2">
          <span v-if="row.kod"><span v-html="row.kod"></span> </span>
        </div>
        <div class="col-1">
          <span v-if="row.kolor"><span v-html="row.kolor"></span> </span>
        </div>
        <div class="col-1">
          <span v-if="row.wymiary"><span v-html="row.wymiary"></span></span>
        </div>
        <div class="col-2">
          <span v-if="row.netto">Netto: {{ row.netto }} zł</span><br />
          <span v-if="row.netto"
            >Brutto: {{ (row.netto * 1.23).toFixed(2) }} zł</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

export default {
  components: {},

  data() {
    return {
      object: {},
      dataakustyczne: {},
      loading: true,
    };
  },

  methods: {
    getakustyczne() {
      this.$http
        .post("ogrodzenia/akustyczne", JSON.stringify({}), {})
        .then((response) => {
          this.dataakustyczne = response.body;
          this.loading = false;
        });
    },
  },
  created() {
    this.getakustyczne();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  overflow-x: scroll;
}
.cennikkorner {
  min-width: 1300px;
}
.naglowek {
  text-align: center;

  .colnaglowek {
    height: 120px;
    background-color: #6c2424;
    color: #fff;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 20px;
    font-weight: 400;
    padding: 15px;
    line-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.lista {
  text-align: center;
  display: flex;
  background-color: white;
  align-items: center;
  height: 200px;
}
.lista:hover {
  background-color: #d6d6d6;
}
.lista:nth-child(2n) {
  background-color: #f9f9f9;
}
.lista:nth-child(2n):hover {
  background-color: #d6d6d6;
}
.model {
  text-align: center;
}
img {
  padding: 10px;
  height: 200px;
}
</style>
