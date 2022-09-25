<template>
    <div>
        <div class= "w-full">
            <div class="p-2 grid 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 xs:grid-cols-3 gap-4">
                <bookmark-list-item  v-for="item in items" :key="item.id" :item="item"></bookmark-list-item>
            </div>
          
        </div>
    </div>
</template>
<script>
import BookmarkListItem from "./BookmarkListItem"
export default {
  components: { BookmarkListItem },
  props : {
    items: Array
  }
    
}
</script>
<style scoped>

</style>