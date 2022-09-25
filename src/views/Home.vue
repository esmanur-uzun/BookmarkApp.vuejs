<template >  
    <div>
        <app-header></app-header>
        <div class="flex flex-row">
            <sidebar @category-changed="updateBookmarkList"></sidebar>
            <app-bookmark-list :items = "bookmarkList"></app-bookmark-list>
        </div>  
    </div>
</template>
<script>
import Sidebar from '../components/Home/sidebar.vue'
import appHeader from '../components/shared/appHeader.vue'
export default {
  components: { appHeader, Sidebar },
  data(){
    return {
        bookmarkList: []
    }
  },
  created() {
    this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response => {
      console.log(bookmark_list_response)
      this.bookmarkList = bookmark_list_response?.data || []
    })
    
  },
  methods:{
    updateBookmarkList(categoryId){
      const url = categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}` : `/bookmarks?_expand=category&_expand=user`
      this.$appAxios.get(url).then((res)=>{
        this.bookmarkList = res?.data || []
      })
    }
  }
   
}
</script>

<style>

</style>