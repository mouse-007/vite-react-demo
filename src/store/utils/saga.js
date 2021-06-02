import * as sageEffects from 'redux-saga/effects'
const { all, takeEvery } = sageEffects;

export default function createEffects(effects) {
  const allEffects = [];
  // 展开各个模块
  const effectsArray = Object.entries(effects);
  for (let [namespace, effs] of effectsArray) {
    if (!effs) continue;
    // 取出各个模块的effects 合并到 allEffects
    for (let [name, fn] of Object.entries(effs)) {
      allEffects.push(function* () {
        // 添加saga的监听
        yield takeEvery(`${namespace}/${name}`, (action) => {
          // 修改saga的put方法，没有命名空间前缀时默认寻找当前模块的reducers
          const put = (action) => {
            const names = action.type.split("/");
            // 只有reducers名没有模块名
            if (names.length === 1) {
              action.type = `${namespace}/${names[0]}`
            }
            return sageEffects.put(action);
          }
          // 返回一个新的冻结的对象
          const newSageEffects = Object.freeze({...sageEffects, put})
          return fn(action, newSageEffects );
        })
      })
    }
  }
  return function* () {
    // 启动saga监听
    yield all(allEffects.map(fn=>fn()))
  }
}