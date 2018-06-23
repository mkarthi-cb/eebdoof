import Vue from 'vue';
export default {
    inserted: function(el, binding, vnode) {
        if (!vnode.context.$refs || !vnode.context.$refs['trigger']) {
            return;
        }
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
        let label = this.vnode.context.$refs['trigger'];
        label.addEventListener('click', (event) => {
            document.removeEventListener('click', this.closeDropDown);
            this.vnode.context.showDropDown = true;
            window.setTimeout(() => {
                let focussableEl = this.vnode.context.$refs['x'];
                // focussableEl && focussableEl.constructor != Array && focussableEl.focus();
                focussableEl && ((focussableEl.constructor == Array && focussableEl[0]) ? focussableEl[0].focus() : focussableEl.focus());
                document.addEventListener('click', this.closeDropDown);
                document.addEventListener('keyup', (e) => {
                    return (e.which == 27) ? (this.vnode.context.showDropDown = false) : true;
                });
            });
        });
    }

    closeDropDown = (event) => {
        if(this.binding && this.binding.value && event.target.closest('[data-menu-container]')){
            return;
        }
        this.vnode.context.showDropDown = false;
        document.removeEventListener('click', this.closeDropDown);
    }
}