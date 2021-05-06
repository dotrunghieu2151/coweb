  <template>
  <div>
    <QuestionResult
      v-for="(question, index) in results"
      :key="question.id"
      :question="question"
      :question-index="index + 1"
    ></QuestionResult>
  </div>
</template>

<script>
import QuestionResult from "./QuestionResult.vue";

export default {
  name: "QuestionResultGroup",
  components: { QuestionResult },
  data() {
    return {};
  },
  props: {
    results: {
      type: Array,
      isRequired: true,
    },
  },
  methods: {},
};
</script>
