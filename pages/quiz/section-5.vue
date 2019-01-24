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
                  <h2 clas="section-title">Pembahasan 5</h2>
                  <hr>
                  <p class="section-question">
                    Ibu membeli 1 karung beras di pasar seberat 40 kg dengan tara 2%.<br>
                    Tentukan berat bersih (neto) beras yang dibeli Ibu!
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
                  <label class="section-answer">36,2 kg</label>
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
                  <label class="section-answer">39,2 kg</label>
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
                  <label class="section-answer">38,4 kg</label>
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
                  <label class="section-answer">36,4 kg</label>
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
                  <b>Bruto</b> = 40 kg<br>
                  <b>Tara</b> = 2%<br>
                  <br>
                  <b>Rumus Tara, Neto dan Bruto </b>
                  $$Neto\ =\ Bruto\ - Tara$$
                  $$Tara\ =\ \%Tara\ \times Bruto$$

                  $$Tara\ =\ \frac {2}{100} \times 40Kg =\ 8Kg$$
                  $$Neto\ =\ 40Kg\ - 0.8Kg\ =\ 39,2Kg$$
                  <hr>
                  <nuxt-link to="/quiz/section-6" class="btn btn-success">Got it!</nuxt-link>
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
      <nuxt-link to="/quiz/section-6" class="btn btn-success">Got it!</nuxt-link>
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
      if(this.section_answer!='2') {
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
