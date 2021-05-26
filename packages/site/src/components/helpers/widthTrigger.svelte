<script>
  export let trigger = 769;
  let scrollY;
  let outerHeight;
  let outerWidth;
</script>

<svelte:window bind:scrollY bind:outerWidth bind:outerHeight />

{#if outerWidth < trigger}
  <slot name="mobile" />
{:else}
  <slot name="desktop" />
{/if}
