<template>
  <div id="html-titles" :style="`transform: translateX(-50%) translateY(-50%)`">
    <div id="title-mover" :style="`transform: translateX(${title.x}px) translateY(${title.y}px) `">
      <component
        :is="title"
        v-for="(title, index) in titles"
        :key="`title-${index}`"
        :style="`opacity: 0; transform: scale(0); height: 0;`"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import financialFuture from "~/components/intro/elements/titles/financial-future.vue";
import winnersPass from "~/components/intro/elements/titles/winners-pass.vue";
import cheapDiversific from "~/components/intro/elements/titles/cheap-diversific.vue";
import diversific from "~/components/intro/elements/titles/diversific.vue";
import fundConcept from "~/components/intro/elements/titles/fund-concept.vue";
import getToVote from "~/components/intro/elements/titles/get-to-vote.vue";
import haytackTitle from "~/components/intro/elements/titles/haytack-title.vue";
import householdEquivalent from "~/components/intro/elements/titles/household-equivalent.vue";
import howUsingInfluence from "~/components/intro/elements/titles/how-using-influence.vue";
import managing from "~/components/intro/elements/titles/managing.vue";
import passiveGrowth from "~/components/intro/elements/titles/passive-growth.vue";
import shareOfComps from "~/components/intro/elements/titles/share-of-comps.vue";
import whyPassWork from "~/components/intro/elements/titles/why-pass-work.vue";
import winnersPassTwo from "~/components/intro/elements/titles/winners-pass-two.vue";
import majority from "~/components/intro/elements/titles/majority.vue";

export default {
  components: {
    financialFuture,
    winnersPass,
    cheapDiversific,
    diversific,
    fundConcept,
    getToVote,
    haytackTitle,
    householdEquivalent,
    howUsingInfluence,
    managing,
    passiveGrowth,
    shareOfComps,
    whyPassWork,
    winnersPassTwo,
    majority
  },
  data() {
    return {
      titles: [
        "financialFuture",
        "winnersPass",
        "cheapDiversific",
        "diversific",
        "fundConcept",
        "getToVote",
        "haytackTitle",
        "householdEquivalent",
        "howUsingInfluence",
        "managing",
        "passiveGrowth",
        "shareOfComps",
        "whyPassWork",
        "winnersPassTwo",
        "majority"
      ]
    };
  },
  computed: {
    ...mapState({
      title: state => state.timeline.currentTitle
    })
  }
};
</script>
