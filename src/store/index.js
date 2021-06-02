import { isFunction } from 'lodash';
import createEffects from './utils/saga'
import allStore from './store'

const allReducers = {}
const allStates = {}
const allEffects = {}
allStore.map(item => {
  const namespace = item.namespace;
  const initailState = item.state || null;
  const reducers = item.reducers || null;
  const effects = item.effects || null;
  // 收集 state
  allStates[namespace] = initailState;
  // 收集 effects
  allEffects[namespace] = effects;
  // reducers 处理
  allReducers[namespace] = function (state = initailState, action) {
    const fn = reducers[action.type];
    if (isFunction(fn)) {
      const ns = fn(state, action.payload) || null;
      return { ...state, ...ns }
    }
    return state;
  }
})

/**
 * Reducers 统一入口
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
function mainReducers(state = allStates, action) {
  // action.type 为  [namespace]/[reducername]
  const [namespace, fname] = action.type.split("/");
  const fn = allReducers[namespace];
  if (isFunction(fn)) {
    const rest = {
      state: state[namespace], // 去除对应模块的state
      action: {
        ...action,
        type: fname
      }
    }
    const ns = fn(rest.state, rest.action);
    // 执行对应模块的reducer
    return Object.assign({}, state, {[namespace]: ns} );
  }
  return state;
}
// 输出sagas
export const rootSaga = createEffects(allEffects)
// 输入store
export default mainReducers
