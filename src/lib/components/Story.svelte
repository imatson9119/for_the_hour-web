<script>
  import { reveal } from '$lib/actions/reveal.js';
</script>

<section class="bg-cream px-6 py-24 md:px-8 md:py-32">
  <div class="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
    <div class="flex flex-col justify-center" use:reveal>
      <p
        class="mb-4 font-body text-xs tracking-[0.3em] font-medium text-olive uppercase"
      >
        The Tradition
      </p>

      <h2
        class="mb-6 font-display text-3xl leading-tight font-medium text-espresso md:text-4xl lg:text-5xl"
      >
        Every day has<br />a golden hour.
      </h2>

      <div
        class="space-y-5 font-body text-base leading-relaxed text-espresso/70 md:text-lg"
      >
        <p>
          In Italy, they call it aperitivo. In Spain, it's the vermut hour.
          Across Europe, there's a sacred window in the evening when everything
          slows down. You pour something cold, crack something open, and let the
          day catch up with you.
        </p>
        <p>
          It's not about the occasion. It's about the pause. A tin of perfect
          olives, a good drink, and nowhere you need to be for the next hour.
        </p>
      </div>

      <blockquote
        class="mt-8 border-l-2 border-terracotta pl-6 font-display text-xl italic text-espresso/80 md:text-2xl"
      >
        The best hour of the day.
      </blockquote>
    </div>

    <div
      class="flex items-center justify-center"
      use:reveal={{ threshold: 0.1 }}
    >
      <div class="w-full max-w-sm overflow-hidden rounded-2xl">
        <img
          src="/lifestyle.JPG"
          alt="Couple enjoying olives and vermouth at a sidewalk table during golden hour in a European city"
          class="h-auto w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>

<style>
  :global([use\:reveal]) {
    opacity: 0;
    transform: translateY(24px);
    transition:
      opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1),
      transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }
  :global(.revealed) {
    opacity: 1;
    transform: translateY(0);
  }
</style>
