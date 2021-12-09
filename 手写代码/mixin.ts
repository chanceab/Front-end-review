export default function initMixin(Vue) {
  Vue.mixin = function (mixin) {
    // 合并对象
    this.options = mergeOptions(this.options, mixin);
  };
}

// 定义生命周期
export const LIFECYCLE_HOOKS = [
  "beforeCreate",
  "created",
  "beforeMount",
  "mounted",
  "beforeUpdete",
  "updated",
  "beforDestroy",
  "destroyed",
];

// 合并策略
const strats = {};

// mixin核心方法
export function mergeOptions(parent, child) {
  const options = {};
  // 遍历父亲

  for (let k in child) {
    if (!parent.hasOwnProperty(k)) {
      mergeFiled(k);
    }
  }

  // 真正合并字段方法
  function mergeFiled(k) {
    if (strats[k]) {
      options[k] = strats[k](parent[k], child[k]);
    } else {
      // 默认策略
      options[k] = child[k] ? child[k] : parent[k];
    }
  }

  return options;
}

export {}