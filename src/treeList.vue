<template>
  <transition name="slide">
  <div id="tree-menu" 
  class="vertical-line" :style="marginLeft">
    <div @click="toggleChildren" class="button-holder">
      <span v-if="depth > 0" class='dots'>..........</span>      
      <span class="button" :class="{'empty': !nodes}">{{ label }}</span>
      <i class="fa" 
      :class="{'fa-folder': !showChildren, 'fa-folder-open-o': showChildren }"></i>   
      <span class='empty-notice' v-if='!nodes'>Empty folder</span>  
    </div>
    <file v-for='(file, index) in files'
    :key='index'
    :fileName="file.name"
    :link="file.link"></file>
    <tree-menu 
      v-show="showChildren"      
      v-for="(node, index) in nodes"
      :parentIsOpen="showChildren"
      :key="index" 
      :nodes="node.nodes"
      :label="node.label"
      :files="node.files"
      :depth="depth + 1">
    </tree-menu>
  </div>
  </transition>
</template>
<script>
  import file from './file';
  export default { 
    components: {file},
    props: [ 'label', 'nodes', 'files', 'depth', 'parentIsOpen' ],
    data() {
      return { showChildren: false }
    },
    name: 'tree-menu',
    computed: {
      marginLeft: function(){
        if(this.depth > 1){
          return {'margin-left': '75px'}
        } else {
          return {'margin-left': '30px'}
        }
      }
    },
    methods: {
      toggleChildren() {
        this.showChildren = !this.showChildren;
      }
    }
  }
</script>
<style lang="scss">
#tree-menu{
  .fa {
      font-size: 28px;
  }
  .button-holder {
    position: relative;
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    .empty-notice {
      color: red;
      position: absolute;
      top: 52px;
      font-size: 11px;
      left: 56px;
    }
  }
  span.button {
      cursor: pointer;
      border: #e0dddd solid 1px;
      border-radius: 5px;
      padding: 10px;
      display: inline-block;
      margin: 10px;
      &:hover {
        background: #e2dddd;
      }
      &.empty {
        border-color: #ecafaf;
      }      
  }
  .fa {
    vertical-align: middle;
  }
  .vertical-line {
    background: url(http://vueland.com/images/displayImages/loader_images/GtM4f.gif) 0 0 repeat-y;
    background-position: -8px 0px;
  }
  .push-left {
    margin-left: 75px;    
  }
.dots {
  color: #cccccc;
}  
}


.slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 400px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>
