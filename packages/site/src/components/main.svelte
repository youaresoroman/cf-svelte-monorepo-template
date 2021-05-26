<script>
  import router from "page";
  import { onMount } from "svelte";
  export let routes = [];
  let params = null;
  let page = null;

  onMount(() => {
    routes.forEach((route) => {
      router(
        route.path,
        (ctx, next) => {
          params = ctx.params;
          next();
        },

        async () => {
          page = route.component;
        }
      );
    });
    router.start();
  });
</script>

<div class="main">
  <svelte:component this={page} {params} />
</div>

<style lang="scss">
  @import "../theme/variables.scss";
</style>
