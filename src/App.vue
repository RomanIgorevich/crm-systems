<template>
  <div>
    <div>
      <router-link to="/">Главная</router-link>
      <router-link to="/v2">Ссылка 2</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
