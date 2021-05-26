<script>
  import routes from "./routes";
  import Main from "./components/main.svelte";
</script>

<Main
  {routes}
/>

<svelte:head>
  <style lang="scss">
    @import "./theme/global.scss";
  </style>
</svelte:head>