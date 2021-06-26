<template>
  <div id="app">
    <router-link tag="h1" to="/"><a>Switter</a></router-link>
    <div id="nav">
      <router-link to="/tweet">タイムライン</router-link> |
      <router-link to="/search">検索</router-link> |
      <router-link to="/dm">DM</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
