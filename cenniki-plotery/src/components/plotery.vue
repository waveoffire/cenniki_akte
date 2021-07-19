<template>
  <div class="hello">
    <div class="cennikczesci">
      <div class="row naglowek">
        <div class="col-3 colnaglowek"><span>Model</span></div>
        <div class="col-2 colnaglowek">
          Stacja serwisowa nowa <br />
          (dostępność 7-14 dni)
        </div>
        <div class="col-2 colnaglowek">
          Stacja serwisowa regenerowana <br />
          (dostępność 1-3 dni)
        </div>
        <div class="col-1 colnaglowek">Pasek napędowy karetki</div>
        <div class="col-1 colnaglowek">Karetka</div>
        <div class="col-1 colnaglowek">Encoder strip</div>
        <div class="col-1 colnaglowek">Taśma sygnałowa karetki</div>
        <div class="col-1 colnaglowek">Głowica</div>
      </div>
      <div v-for="row in dataczesci" :key="row.id" class="row lista">
        <div class="col-3 model">
          <span v-if="row.model">{{ row.model }}</span>
        </div>
        <div class="col-2">
          <span v-if="row.stacja_nowa">{{ row.stacja_nowa }} zł</span>
        </div>
        <div class="col-2">
          <span v-if="row.stacja_regenerowana"
            >{{ row.stacja_regenerowana }} zł</span
          >
        </div>
        <div class="col-1">
          <span v-if="row.pasek">{{ row.pasek }} zł</span>
        </div>
        <div class="col-1">
          <span v-if="row.karetka">{{ row.karetka }} zł</span>
        </div>
        <div class="col-1">
          <span v-if="row.encoder">{{ row.encoder }} zł</span>
        </div>
        <div class="col-1">
          <span v-if="row.trailing_cable">{{ row.trailing_cable }} zł</span>
        </div>
        <div class="col-1">
          <span v-if="row.glowica">{{ row.glowica }} zł</span>
        </div>
      </div>
    </div>

    <div class="cenniknaprawa">
      <div class="row naglowek">
        <div class="col-3 colnaglowek"><span>Model</span></div>
        <div class="col-1 colnaglowek">Kalibracja</div>
        <div class="col-1 colnaglowek">Czyszczenie i konserwacja</div>
        <div class="col-2 colnaglowek">Wymiana paska napędowego karetki</div>
        <div class="col-2 colnaglowek">Wymiana stacji serwisowej</div>
        <div class="col-2 colnaglowek">Wymiana taśmy sygnałowej karetki</div>
        <div class="col-1 colnaglowek">Wymiana encoder strip</div>
      </div>
      <div v-for="row in datanaprawa" :key="row.id" class="row lista">
        <div class="col-3 model">
          <span v-if="row.model">{{ row.model }}</span>
        </div>
        <div class="col-1">
          <span v-if="row.kalibracja">{{ row.kalibracja }} zł</span>
        </div>
        <div class="col-1">
          <span v-if="row.czyszczenie">{{ row.czyszczenie }} zł</span>
        </div>
        <div class="col-2">
          <span v-if="row.wymianapasek">{{ row.wymianapasek }} zł</span>
        </div>
        <div class="col-2">
          <span v-if="row.wymianastacji">{{ row.wymianastacji }} zł</span>
        </div>
        <div class="col-2">
          <span v-if="row.wymianatrailing">{{ row.wymianatrailing }} zł</span>
        </div>
        <div class="col-1">
          <span v-if="row.wymianaencoder">{{ row.wymianaencoder }} zł</span>
        </div>
      </div>
    </div>

    <div class="cennikdodatkowe">
      <div class="row naglowek">
        <div class="col-3 colnaglowek"><span>Model</span></div>
        <div class="col-2 colnaglowek">Nazwa</div>
        <div class="col-2 colnaglowek">Cena</div>
      </div>
      <div v-for="row in datadodatkowe" :key="row.id" class="row lista">
        <div class="col-3 model">
          <span v-if="row.model">{{ row.model }}</span>
        </div>
        <div class="col-2">
          <span v-if="row.nazwa">{{ row.nazwa }} zł</span>
        </div>
        <div class="col-2">
          <span v-if="row.cena">{{ row.cena }} zł</span>
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
      dataczesci: {},
      datanaprawa: {},
      datadodatkowe: {},
      loading: true,
    };
  },

  methods: {
    getczesci() {
      this.$http
        .post("plotery/czescilist", JSON.stringify({}), {})
        .then((response) => {
          this.dataczesci = response.body;
          this.loading = false;
        });
    },
    getnaprawa() {
      this.$http
        .post("plotery/naprawalist", JSON.stringify({}), {})
        .then((response) => {
          this.datanaprawa = response.body;
          this.loading = false;
        });
    },
    getdodatkowe() {
      this.$http
        .post("plotery/dodatkowelist", JSON.stringify({}), {})
        .then((response) => {
          this.datadodatkowe = response.body;
          this.loading = false;
        });
    },
  },
  created() {
    this.getczesci();
    this.getnaprawa();
    this.getdodatkowe();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  overflow-x: scroll;
}
.cennikczesci {
  min-width: 1300px;
}
.cenniknaprawa {
  min-width: 1300px;
}
.cennikdodatkowe {
  min-width: 1300px;
}
.naglowek {
  text-align: center;

  .colnaglowek {
    height: 120px;
    background-color: #00a3de;
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

  align-items: center;
  height: 70px;
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
  text-align: left;
}
</style>
