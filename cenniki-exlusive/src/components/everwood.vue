<template>
  <div class="hello">
    <div class="cennikkorner">
      <div class="row naglowek">
        <div class="col-3 colnaglowek">TYP OGRODZENIA</div>
        <div class="col-3 colnaglowek">RYSUNEK</div>
        <div class="col-2 colnaglowek">KOD</div>
        <div class="col-2 colnaglowek">WYMIARY</div>

        <div class="col-2 colnaglowek">CENA</div>
      </div>
      <div v-for="row in dataeverwood" :key="row.id" class="row lista">
        <div style="padding: 30px" class="col-3 model">
          <span v-if="row.nazwa">
            {{ row.nazwa }}
          </span>
        </div>
        <div class="col-3">
          <span v-if="row.obrazek"
            ><a target="_blank" :href="row.obrazek">
              <img :src="row.obrazek" alt="" srcset="" /></a
          ></span>
        </div>

        <div class="col-6 columna">
          <span v-for="(row2, index) in row.wzory" :key="index">
            <div v-if="row2.kod" class="row podlista">
              <div class="col-4">
                <span v-if="row2.kod"><span v-html="row2.kod"></span></span>
              </div>
              <div class="col-4">
                <span v-if="row2.wymiary"
                  ><span v-html="row2.wymiary"></span
                ></span>
              </div>
              <div class="col-4">
                <span v-if="row2.cena">Netto: {{ row2.cena }} zł</span><br />
                <span v-if="row2.cena"
                  >Brutto: {{ (row2.cena * 1.23).toFixed(2) }} zł</span
                >
              </div>
            </div>
          </span>
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
      dataeverwood: {},
      loading: true,
    };
  },

  methods: {
    geteverwood() {
      this.$http
        .post("ogrodzenia/exclusive", JSON.stringify({}), {})
        .then((response) => {
          this.dataeverwood = response.body;
          console.log(this.dataeverwood[0]);
          this.loading = false;
        });
    },
  },
  created() {
    this.geteverwood();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  overflow-x: scroll;
}
.columna {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin: 50px 0;
}
.podlista {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;

  align-items: center;
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
  min-height: 300px;
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
  height: 250px;
}
</style>
