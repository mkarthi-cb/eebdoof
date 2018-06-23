import Vue from 'vue';
export default {
    inserted: function(el, binding, vnode) {
        new Handler(vnode,binding);
    }
}


class Handler {
    vnode;
    binding;
    constructor(vnode, binding) {
        this.vnode = vnode;
        this.binding = binding;
        this.registerEvents();
    }

    registerEvents() {
        window.setTimeout(() => {
            document.addEventListener('click', this.closeDropDown);
        });
    }

    closeDropDown = (event) => {
        if(this.vnode && this.vnode.context && !this.vnode.context.showPopup){
            return;
        }
        this.vnode.context.showPopup = false;
        document.removeEventListener('click', this.closeDropDown);
    }
}