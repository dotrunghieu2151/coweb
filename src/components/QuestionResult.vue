  <template>
  <div
    :class="
      isQuestionCorrect
        ? 'mt-5 context learning-ok'
        : 'mt-5 context learning-ng'
    "
  >
    <h5 class="question--header">
      {{ `Q${questionIndex}. ${question.text}` }}
    </h5>
    <div class="mt-6 pb-1">
      <p
        :class="getAnswerClass(answer) + 'ml-3 mt-n3'"
        v-for="answer in question.options"
        :key="`${question.id}_${answer.value}`"
      >
        {{ answer.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionResult",
  data() {
    return {};
  },
  props: {
    question: {
      type: Object,
      required: true,
    },
    questionIndex: {
      type: Number,
    },
  },
  computed: {
    questionIndexString() {
      return this.questionIndex ? this.questionIndex.toString() : "";
    },
    isQuestionCorrect() {
      return this.question.isCorrect;
    },
  },
  methods: {
    getAnswerClass(answer) {
      const isAnswerMatch = Array.isArray(this.question.userAnswer)
        ? this.question.userAnswer.includes(answer.value)
        : answer.value == this.question.userAnswer;
      return isAnswerMatch
        ? this.isQuestionCorrect
          ? "green--text "
          : "red--text "
        : "";
    },
  },
};
</script>
