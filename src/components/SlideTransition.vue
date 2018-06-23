<template>
  <transition mode="out-in" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @after-leave="afterLeave" @leave="leave" @before-leave="beforeLeave" v-if="!isList">
    <slot></slot>
  </transition>
  <transition-group mode="out-in" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @after-leave="afterLeave" @leave="leave" @before-leave="beforeLeave" v-else>
    <slot></slot>
  </transition-group>
</template>
<script type="text/javascript">
export default {
  props: ['isList'],
  methods: {

    beforeEnter(el) {
      el.style.opacity = 0;
    },

    //------------------------------------------------------------------------------
    //  Animate div from 0px to its height
    //------------------------------------------------------------------------------
    enter(el){
      let elHeightTemp = el.clientHeight;
      this.elHeight = elHeightTemp;
      el.style['height'] = '0';
      el.style.transition = "opacity 0.3s, height 0.3s";
      window.setTimeout(() => {
        el.style['height'] = elHeightTemp + "px";
      });
    },

    //------------------------------------------------------------------------------
    //  Reset values
    //------------------------------------------------------------------------------
    afterEnter(el) {
      el.style.opacity = 1;
      window.setTimeout(() => {
        el.style.height = 'auto';
      },400);
    },

    beforeLeave(el) {
      el.style.opacity = 0;
      el.style.transition = "opacity 0.3s, height 0.3s 0.2s";
    },

    leave(el){
      el.style.height = el.clientHeight + "px"
      window.setTimeout(() => {
        el.style.height = '0';
      });
    },

    //------------------------------------------------------------------------------
    //  Reset values
    //------------------------------------------------------------------------------
    afterLeave(el) {
      window.setTimeout(() => {
        el.style.height = 'auto';
        el.style.opacity = 0;
      });
    }
  },
  data(){
    return {
      elHeight: 0,
    }
  }
}
</script>
