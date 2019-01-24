<template>
  <div>
    <headernav/>
    <div class="container-fluid page-body-wrapper">
      <sidebarnav/>
      
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <passingscore/>
            <div class="col-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h2 clas="section-title">Pembahasan 3</h2>
                  <hr>
                  <p class="section-question">
                    Seseorang membeli sepeda motor bekas seharga rp 12.000.000,00 dan mengeluarkan biaya perbaikan Rp 500.00,00.<br>
                    Setelah beberapa waktu sepeda motor itu dijual dengan harga Rp 15.000.000,00<br>
                    Tentukan persentase keuntungan dari penjualan tersebut!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6 grid-margin">
              <div class="card">
                <div class="card-body">
                  <input
                  type="radio"
                  name="section-answer"
                  class="sectin-answer"
                  v-bind:value="1"
                  v-model="section_answer">
                  <label class="section-answer">18%</label>
                </div>
              </div>
            </div>
            <div class="col-6 grid-margin">
              <div class="card">
                <div class="card-body">
                  <input
                  type="radio"
                  name="section-answer"
                  class="sectin-answer"
                  v-bind:value="2"
                  v-model="section_answer">
                  <label class="section-answer">25%</label>
                </div>
              </div>
            </div>
            <div class="col-6 grid-margin">
              <div class="card">
                <div class="card-body">
                  <input
                  type="radio"
                  name="section-answer"
                  class="sectin-answer"
                  v-bind:value="3"
                  v-model="section_answer">
                  <label class="section-answer">15%</label>
                </div>
              </div>
            </div>
            <div class="col-6 grid-margin">
              <div class="card">
                <div class="card-body">
                  <input
                  type="radio"
                  name="section-answer"
                  class="sectin-answer"
                  v-bind:value="4"
                  v-model="section_answer">
                  <label class="section-answer">20%</label>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <button class="section-submit btn btn-success" @click="setSectionAnswer">Confirm!</button>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 grid-margin" v-bind:class="{ 'section-answer-clue': hidePembahasan }">
              <div class="card">
                <div class="card-body">
                  <h2 clas="section-title">Penjelasan</h2>
                  <hr>
                  <b>Harga beli = Rp 12.000.000,00 + Rp 500.000,00</b><br>
                  <b>Harga beli</b> = Rp 12.500.000,00<br>
                  <br>

                  <b>Keuntungan = Rp 15.000.000,00 + Rp 12.500.000,00</b><br>
                  <b>Keuntungan</b> = Rp 2.500.000,00<br>
                  <br>
                  $$Persentase\ keuntungan\ =\ \frac {Untung}{Harga\ beli} \times 100\%$$<br>
                  $$Persentase\ keuntungan\ =\ \frac {Rp\ 2.500.000,00}{Rp\ 12.500.000,00} \times 100\%$$<br>
                  $$Persentase\ keuntungan\ =\ 20\%$$<br>
                  <hr>
                  <nuxt-link to="/quiz/section-4" class="btn btn-success">Got it!</nuxt-link>
                </div>
              </div>
            </div>
          </div>

          <footerbar/>
        </div>
      </div>

    </div>

    <b-modal ref="successModal" hide-footer title="Gothca!">
      <div class="d-block text-center">
        <span class="oi success-icon-modal" data-glyph="check"></span>
        <h3>Yo're Done!</h3>
      </div>
      <nuxt-link to="/quiz/section-4" class="btn btn-success">Got it!</nuxt-link>
    </b-modal>
    <b-modal ref="failedModal" hide-footer title="Gothca!">
      <div class="d-block text-center">
        <span class="oi failed-icon-modal" data-glyph="x"></span>
        <h3>Yo're Wrong!</h3>
      </div>
      <button class="btn btn-danger" @click="hideModal">Got it!</button>
    </b-modal>
  </div>
</template>

<script>
import Sidebarnav from '~/components/Sidebarnav.vue'
import Headernav from '~/components/Headernav.vue'
import Footerbar from '~/components/Footerbar.vue'
import Passingscore from '~/components/Passingscore.vue'

export default {
  components: {
    Sidebarnav,
    Headernav,
    Footerbar,
    Passingscore
  },
  data: function() {
    return {
      section_answer: 0,
      hidePembahasan: true,
    }
  },
  methods: {
    setSectionAnswer() {
      this.$refs.successModal.hide();
      this.$refs.failedModal.hide();

      let _section = 'answer_section1';
      this.hidePembahasan = true;
      if(this.section_answer!='4') {
        this.hidePembahasan = false;
        this.$refs.failedModal.show();
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        this.addDataScore(0);
      } else {
        this.$refs.successModal.show();
        this.addDataScore(1);
      }
    },
    hideModal () {
      this.$refs.successModal.hide();
      this.$refs.failedModal.hide();
      this.$store.dispatch('addScoreValue');
    },
    addDataScore (value) {
      this.$store.commit('addDataScore', value);
    }
  },
}
</script>
