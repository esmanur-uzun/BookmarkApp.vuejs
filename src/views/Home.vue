<template >  
    <div>
        <app-header></app-header>
        <div class="flex flex-row">
            <sidebar></sidebar>
            <app-bookmark-list></app-bookmark-list>
        </div>  
    </div>
</template>
<script>
import Sidebar from '../components/Home/sidebar.vue'
import appHeader from '../components/shared/appHeader.vue'
export default {
  components: { appHeader, Sidebar }
   
}
</script>

<style>

</style>