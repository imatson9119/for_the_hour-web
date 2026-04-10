<script>
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section class="overflow-hidden bg-charcoal py-20 md:py-28">
	<div class="marquee mb-12">
		<div class="marquee-track">
			{#each { length: 4 } as _, i (i)}
				<span class="marquee-item">Pop the tab</span>
				<span class="marquee-dot">·</span>
				<span class="marquee-item">Pour a drink</span>
				<span class="marquee-dot">·</span>
				<span class="marquee-item">Slow down</span>
				<span class="marquee-dot">·</span>
				<span class="marquee-item">Repeat</span>
				<span class="marquee-dot">·</span>
			{/each}
		</div>
	</div>

	<div class="mx-auto max-w-xl px-6 text-center md:px-8" use:reveal>
		<p class="font-body text-base leading-relaxed text-cream/50 italic md:text-lg">
			The aperitivo hour isn't really about the drink. It's about the transition —
			from doing to being, from busy to present. All you need is something worth
			opening and someone worth sharing it with. Or honestly, just yourself.
		</p>
	</div>
</section>

<style>
	.marquee {
		width: 100%;
		overflow: hidden;
	}

	.marquee-track {
		display: flex;
		gap: 0;
		width: max-content;
		animation: scroll 30s linear infinite;
	}

	.marquee-item {
		font-family: var(--font-display);
		font-size: clamp(2rem, 5vw, 4rem);
		font-weight: 400;
		color: var(--color-cream);
		white-space: nowrap;
		padding: 0 0.4em;
	}

	.marquee-dot {
		font-family: var(--font-display);
		font-size: clamp(2rem, 5vw, 4rem);
		color: var(--color-terracotta);
		display: flex;
		align-items: center;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee-track {
			animation: none;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
