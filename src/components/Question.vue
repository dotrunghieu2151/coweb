  <template>
  <div :id="question.id">
    <h5 class="question--header">
      {{ `Q${questionIndex}. ${question.text}` }}
    </h5>
    <div class="question--answer-group mt-7">
      <validator
        rules="required"
        :label="question.id"
        :customMessages="CustomMessObj"
        v-slot="props"
      >
        <div v-if="question.type === 'multi-checkbox'">
          <v-checkbox
            class="mt-n6"
            v-for="option in question.options"
            :key="`${question.id}_${option.value}`"
            :value="option.value"
            :error="props.hasErrors"
            v-model="answerChoices"
          >
            <template v-slot:label>
              <span class="question--answers">{{ option.text }}</span>
            </template>
          </v-checkbox>
        </div>
        <div v-else>
          <v-radio-group v-model="answerChoices" :error="props.hasErrors">
            <v-radio
              class="mt-n2"
              :value="option.value"
              v-for="option in question.options"
              :key="`${question.id}_${option.value}`"
            >
              <template v-slot:label>
                <span class="question--answers">{{ option.text }}</span>
              </template>
            </v-radio>
          </v-radio-group>
        </div>
      </validator>
    </div>
  </div>
</template>

<script>
import Validator from "./validation/Validator.vue";
export default {
  components: { Validator },
  name: "Question",
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
    value: {
      required: true,
    },
  },
  computed: {
    questionIndexString() {
      return this.questionIndex ? this.questionIndex.toString() : "";
    },
    CustomMessObj() {
      return {
        required: `Q${this.questionIndex} is required.`,
      };
    },
    answerChoices: {
      get() {
        return this.value ? this.value.value : null;
      },
      set(val) {
        if (this.question.type === "multi-checkbox") {
          val = Array.isArray(val) ? val : [val];
        }
        const userAnswer = {
          value: val,
          for: this.question.id,
        };
        this.$emit("input", userAnswer);
      },
    },
  },
  methods: {},
};
</script>
