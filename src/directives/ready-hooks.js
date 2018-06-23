export default {
  inserted: function(el, binding, vnode) {
    el.vm = vnode.context;
  }
}