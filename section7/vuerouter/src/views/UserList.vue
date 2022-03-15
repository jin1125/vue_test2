<template>
  <div>
    user<br>
     <router-link to="profile">UserProfile</router-link> |
     <router-link to="post">UserPost</router-link> |
    <div class="green-b">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.green-b {
  border:1px solid green;
}
</style>