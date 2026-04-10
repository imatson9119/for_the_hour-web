<script>
	import { reveal } from '$lib/actions/reveal.js';

	const olives = [
		{
			name: 'Castelvetrano',
			origin: 'Sicily, Italy',
			note: 'Buttery, mild, bright green. The olive that converts olive skeptics.'
		},
		{
			name: 'Gordal',
			origin: 'Seville, Spain',
			note: 'Meaty, bold, the size of your thumb. The queen of the aperitivo spread.'
		},
		{
			name: 'Lucques',
			origin: 'Languedoc, France',
			note: "Delicate, nutty, crescent-shaped. France's best-kept secret."
		},
		{
			name: 'Kalamata',
			origin: 'Messinia, Greece',
			note: 'Rich, fruity, deep purple. The one you already love.'
		}
	];

	let showOlives = false;
</script>

{#if showOlives}
	<section class="bg-stone px-6 py-24 md:px-8 md:py-32">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 text-center" use:reveal>
				<p class="mb-4 font-body text-xs tracking-[0.3em] font-medium text-olive uppercase">
					The Collection
				</p>
				<h2 class="font-display text-3xl leading-tight font-medium text-espresso md:text-4xl lg:text-5xl">
					Single-varietal. Single-origin.<br />Seriously good.
				</h2>
			</div>

			<div class="grid gap-6 sm:grid-cols-2 lg:gap-8">
				{#each olives as olive (olive.name)}
					<div
						class="group overflow-hidden rounded-xl border border-terracotta/20 bg-cream transition-shadow duration-300 hover:shadow-lg"
						use:reveal={{ threshold: 0.1 }}
					>
						<div class="flex aspect-square items-center justify-center border-b border-terracotta/10 bg-stone/30">
							<div class="flex flex-col items-center gap-2 text-center">
								<svg class="h-8 w-8 text-espresso/12" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1">
									<rect x="3" y="3" width="18" height="18" rx="3" />
									<circle cx="8.5" cy="8.5" r="1.5" />
									<path d="m21 15-5-5L5 21" />
								</svg>
								<span class="font-body text-xs text-espresso/20">Photo</span>
							</div>
						</div>
						<div class="p-6">
							<h3 class="mb-1 font-display text-xl font-semibold text-espresso">{olive.name}</h3>
							<p class="mb-3 font-body text-xs tracking-wider text-terracotta uppercase">{olive.origin}</p>
							<p class="font-body text-sm leading-relaxed text-espresso/60">{olive.note}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}
