<template>
  <v-container style="max-width: 700px; margin: 10px auto">
    <div>Your score: {{ testResult.score }} / {{ testResult.total }}</div>
    <QuestionResultGroup :results="testResult.result" />
  </v-container>
</template>

<script>
import QuestionResultGroup from "../components/QuestionResultGroup.vue";
import { testResultMutations } from "@/store/modules/test-result";

export default {
  components: { QuestionResultGroup },
  name: "TestResult",
  page: {
    title: "Test results",
    meta: [{ name: "description", content: "Coweb test result" }],
  },
  props: {
    testResult: {
      type: Object,
      isRequired: true,
    },
  },
  data: () => ({}),
  methods: {
    ...testResultMutations(["clearTestResult"]),
  },
  destroyed() {
    this.clearTestResult();
  },
};
</script>

<style lang="scss" scoped>
</style>
