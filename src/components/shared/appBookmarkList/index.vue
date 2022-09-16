<template>
    <div>
        <div>
            <div class="p-2 grid grid-cols-8 gap-4">
                <bookmark-list-item  v-for="i in 10" :key="i"></bookmark-list-item>
            </div>
          
        </div>
    </div>
</template>
<script>
import BookmarkListItem from "./BookmarkListItem"
export default {
  components: { BookmarkListItem },
    
}
</script>
<style scoped>

</style>