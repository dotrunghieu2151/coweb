  <template>
  <div>
    <Question
      v-for="(question, index) in questions"
      :key="question.id"
      :question="question"
      :question-index="index + 1"
      v-model="userAnswers[index]"
    />
  </div>
</template>

<script>
import Question from "./Question.vue";
export default {
  components: { Question },
  name: "QuestionGroup",
  data() {
    return {};
  },
  props: {
    questions: {
      type: Array,
      required: true,
    },
    value: {
      required: true,
    },
  },
  computed: {
    userAnswers: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  methods: {},
};
</script>
