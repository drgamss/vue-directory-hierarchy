<template>
  <div id="master-container">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <tree-menu 
                :label="data.label" 
                :nodes="data.nodes"
                :depth="0"
                :parentIsOpen="false">
            </tree-menu>
        </div>         
      </div>
    </div>
  </div>
</template>

<script>
import data from './data.js';
import treeMenu from './treeList';
export default {
  name: 'App',
  components: {treeMenu},
  data: function () {
    return {
        title: 'Dynamic Directory Tree',
        data: data
      }
  }
}
</script>

<style lang="scss">
#master-container {

  padding-top: 30px;

  h2 {
    font-size: 2rem; 
  }

}

</style>