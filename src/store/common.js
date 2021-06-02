function getTime() {
  return Promise.resolve(Date.now());
}
export default {
  namespace: 'common',
  state: {
    record: 0,
    current: 10,
  },
  reducers: {
    add(state) {
      const newCurrent = state.current + 1;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state) {
      return { ...state, current: state.current - 1 };
    },
    otherAdd(state, payload) {
      return {
        ...state,
        current: payload
      }
    }
  },
  effects: {
    *addAction(action, { call, put }) {
      const r = yield call(getTime);
      console.log(r);
      yield put({type: 'otherAdd', payload: r})
    }
  }
}