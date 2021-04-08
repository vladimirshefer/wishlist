<template>
  <div>
    <div>
      <UserWishlist :user-id="$route.params.userId"/>
    </div>
  </div>
</template>

<script>
import UserWishlist from "@/components/UserWishlist";
export default {
  name: "User",
  components: {UserWishlist}
}
</script>

<style scoped>

</style>
