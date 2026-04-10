<script>
  import { onMount } from 'svelte';
  import EmailForm from './EmailForm.svelte';

  let visible = $state(false);

  onMount(() => {
    requestAnimationFrame(() => {
      visible = true;
    });
  });
</script>

<section
  class="relative flex min-h-screen flex-col items-center justify-center bg-charcoal px-6 pt-20 pb-16 md:px-8"
>
  <div
    class={[
      'mx-auto flex w-full max-w-4xl flex-col items-center text-center transition-all duration-1000',
      visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
    ]}
  >
    <p
      class="mb-6 font-body text-xs tracking-[0.3em] font-medium text-gold uppercase md:text-sm"
    >
      Arriving 2026
    </p>

    <div class="mb-8 w-full max-w-lg overflow-hidden rounded-2xl">
      <img
        src="/og-image.jpg"
        alt="For The Hour tinned olives — a gold sardine-format tin on a stone ledge at golden hour"
        class="h-auto w-full object-cover"
        width="1200"
        height="630"
      />
    </div>

    <h1
      class="mb-5 font-display text-4xl leading-tight font-medium text-cream md:text-6xl lg:text-7xl"
    >
      Olives worth<br />slowing down for.
    </h1>

    <p
      class="mb-10 max-w-lg font-body text-base leading-relaxed text-cream/60 md:text-lg"
    >
      Single-varietal European olives in art-forward tins. Born from the
      aperitivo hour tradition.
    </p>

    <EmailForm variant="hero" />
  </div>
</section>
