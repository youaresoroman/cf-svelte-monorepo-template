<script>
  import { Route, router } from "tinro";
  import Index from "./routes/Index.svelte";
  import Meta from "./routes/Meta.svelte";
  import Error from "./routes/404.svelte";
</script>

<svelte:head>
  <style lang="scss">
    @import "./theme/global.scss";
  </style>
</svelte:head>

<Route path="/"><Index /></Route>
<Route path="/meta/:meta" let:meta><Meta data={meta.params.meta} /></Route>

<Route fallback><Error /></Route>
