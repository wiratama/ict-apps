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
                  <h2 clas="section-title">Pembahasan 7</h2>
                  <hr>
                  <p class="section-question">
                    Ihwan menabung di suatu bank sebesar Rp.200.000,00 dengan bunga 15% setahun.<br>
                    Besar tabungan Ihwan setelah 8 bulan adalah
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
                  <label class="section-answer">201 kuintal</label>
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
                  <label class="section-answer">117 kuintal</label>
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
                  <label class="section-answer">115 kuintal</label>
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
                  <label class="section-answer">113 kuintal</label>
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
                  <b>Tabungan awal</b> : M = Rp. 200.000,00<br>
                  <b>Persentase</b>    : p = 15 % setahun<br>
                  <b>Lama nabung</b>   : n = 8 bulan = 8/12 tahun<br>

                  <P>
                    Perlu diingat lama menabung dan bunga harus sama, artinya jika bunganya per tahun maka lama menabung juga harus diubah ke satuan tahun.<br>
                    Begitu juga sebaliknya jika bunganya per bulan maka lama menabung juga harus diubah ke bulan
                  </P>
                  $$Bunga\ tungal\ =\ \frac {M\ \times b\ \times n}{100}$$
                  $$Bunga\ tungal\ =\ Rp\ 200.000 \times \frac {15}{100} \times \frac {8}{12} \times \frac{100}{1}$$
                  $$Bunga\ tungal\ =\ Rp\ 20.000$$

                  <b>Jadi tabungan akhir setelah 8 bulan adalah</b>
                  $$200.000\ + 20.000\ =\ Rp\ 220.000,00$$
                  <hr>
                  <nuxt-link to="/quiz/section-7" class="btn btn-success">Got it!</nuxt-link>
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
      <nuxt-link to="/" class="btn btn-success">Got it!</nuxt-link>
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
