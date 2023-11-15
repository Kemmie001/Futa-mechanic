<template>
  <header class="md:px-20 px-5 overflow-hidden header flex justify-center">
    <nav class="w-full bg-white flex justify-between items-center">
      <div class="flex gap-8 items-center">
        <router-link to="/" class="flex items-center gap-2"> Futa </router-link>
        <!-- <router-link to="/" class="text-sm">Home</router-link> -->
        <router-link to="/dashboard" class="text-sm">Maintenance</router-link>
        <!-- <router-link to="/" class="text-sm">FAQ</router-link> -->
        <!-- <router-link to="/" class="text-sm">Contact us</router-link> -->
      </div>

      <div class="flex items-center gap-4">
        <router-link
          to="/login"
          v-show="!loggedIn"
          class="text-sm border rounded-md text-primary6 border-primary6 py-2 px-4"
          >Log In</router-link
        >
        <router-link
          to="/register-as"
          v-show="!loggedIn"
          class="btn-primary py-2 px-4"
        >
          Register
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false,
    };
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  height: 70px;
  z-index: 999;
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1); */
}

.search {
}
.search-bar {
  border-radius: 6px 0px 0px 6px;
  border: 1px solid #b0b0b0;
  padding: 10px 20px;
}
.search-icon {
  border-radius: 0px 6px 6px 0px;
}
input {
  border: none;
  outline: none;
  background: none;
}
.divider {
  width: 1px;
  height: 24px;
  background: #b0b0b0;
}
</style>
