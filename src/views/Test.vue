<template>
  <v-container style="max-width: 700px; margin: 10px auto">
    <ValidatorObserver ref="formObs" v-slot="props">
      <QuestionGroup :questions="test" v-model="userAnswers" />
      <!-- error -->
      <div class="alert alert-danger" role="alert" v-if="props.invalid">
        <h4 class="alert-heading mt-5 mb-2">
          Please satisfy these requirements before proceeding:
        </h4>
        <ul class="errors learning-error ml-3">
          <!-- show errors for questiosn -->
          <div
            v-for="(error, validatorId) in props.errors"
            :key="'error_' + validatorId"
          >
            <li v-if="error[0]">
              <a @click="$jumpTo(`#${validatorId}`, -60)" class="alert-link">{{
                error[0]
              }}</a>
            </li>
          </div>
          <!-- show errors for salesname and personname -->
        </ul>
      </div>
      <!-- submit btn -->
      <v-btn
        :disabled="props.invalid"
        color="primary"
        width="100%"
        height=""
        class="mt-2 mb-2 submit-btn"
        @click="props.passes(submitAnswer)"
      >
        Submit
      </v-btn>
    </ValidatorObserver>
  </v-container>
</template>

<script>
import QuestionGroup from "../components/QuestionGroup.vue";
import ValidatorObserver from "../components/validation/ValidatorObserver.vue";
import jumpTo from "@/mixins/jump-to";
import { markTest } from "@/services/test.service";
import { testResultMutations } from "@/store/modules/test-result";

export default {
  components: { QuestionGroup, ValidatorObserver },
  mixins: [jumpTo],
  name: "Test",
  page: {
    title: "Tests",
    meta: [{ name: "description", content: "Coweb test" }],
  },
  props: {
    test: {
      type: Array,
      isRequired: true,
    },
  },
  data: () => ({
    userAnswers: [],
  }),
  mounted() {
    this.$refs?.formObs?.$refs?.obs.validate();
  },
  methods: {
    ...testResultMutations(["setTestResult"]),
    submitAnswer() {
      const testResults = markTest(this.userAnswers);
      this.setTestResult(testResults);
      this.$router.push({ name: "testResult" });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/test";
</style>
