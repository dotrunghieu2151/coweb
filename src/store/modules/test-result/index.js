import { BaseModuleBuilder } from '../base';

const state = {
  testResult: {
    result: [],
    score: 0,
    total: 0,
  }
}

const getters = {
  testResult: state => state.testResult,
  hasTestResult: state => state.testResult.result.length > 0
}

const actions = {
}

const mutations = {
  clearTestResult(state) {
    state.testResult = {
      result: [],
      score: 0,
      total: 0,
    };
  }
}

const module = BaseModuleBuilder.buildModule({
  state,
  getters,
  actions,
  mutations
})

export default module;

export const { testResultGetters, testResultMutations, testResultActions } = BaseModuleBuilder.buildComputedNameMaps('testResult');

