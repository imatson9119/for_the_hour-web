<script>
	let scrolled = $state(false);

	function onScroll() {
		scrolled = window.scrollY > 50;
	}
</script>

<svelte:window onscroll={onScroll} />

<nav
	class={[
		'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
		scrolled
			? 'bg-cream/95 backdrop-blur-sm shadow-sm'
			: 'bg-transparent'
	]}
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
		<a
			href="/"
			class={[
				'font-display text-sm tracking-[0.25em] font-semibold uppercase transition-colors duration-300 md:text-base',
				scrolled ? 'text-espresso' : 'text-cream'
			]}
		>
			For The Hour
		</a>

		<a
			href="#signup"
			class={[
				'rounded-full border px-5 py-2 font-body text-xs tracking-wider uppercase transition-all duration-300 md:text-sm',
				scrolled
					? 'border-espresso/30 text-espresso hover:bg-espresso hover:text-cream'
					: 'border-cream/40 text-cream hover:bg-cream/10'
			]}
		>
			Get Notified
		</a>
	</div>
</nav>
