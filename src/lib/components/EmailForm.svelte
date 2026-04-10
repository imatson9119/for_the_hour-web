<script>
	/** @type {{ variant?: 'hero' | 'signup' }} */
	let { variant = 'hero' } = $props();

	let email = $state('');
	let status = $state('idle');

	const isHero = $derived(variant === 'hero');

	async function handleSubmit(e) {
		e.preventDefault();
		status = 'sending';

		try {
			const res = await fetch('https://submit-form.com/cqNWcOvMU', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({ email })
			});

			if (res.ok) {
				status = 'success';
				email = '';
			} else {
				status = 'error';
			}
		} catch {
			status = 'error';
		}
	}
</script>

{#if status === 'success'}
	<div
		class={[
			'flex items-center gap-2 font-body text-sm',
			isHero ? 'text-cream/80' : 'text-cream/90'
		]}
	>
		<svg class="h-5 w-5 text-olive-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
		</svg>
		You're on the list — we'll be in touch.
	</div>
{:else}
	<form
		onsubmit={handleSubmit}
		class={[
			'flex w-full max-w-md flex-col items-center gap-3 sm:flex-row',
			isHero ? '' : ''
		]}
	>
		<input
			type="email"
			name="email"
			bind:value={email}
			placeholder="your@email.com"
			required
			autocomplete="email"
			aria-label="Email address"
			class={[
				'w-full flex-1 rounded-full border px-5 py-3 font-body text-sm outline-none transition-colors duration-200 sm:w-auto',
				isHero
					? 'border-cream/20 bg-cream/10 text-cream placeholder:text-cream/30 focus:border-cream/40'
					: 'border-cream/30 bg-cream/15 text-cream placeholder:text-cream/40 focus:border-cream/50'
			]}
		/>
		<button
			type="submit"
			disabled={status === 'sending'}
			class={[
				'w-full cursor-pointer rounded-full px-7 py-3 font-body text-sm font-medium tracking-wider uppercase transition-all duration-200 sm:w-auto',
				isHero
					? 'bg-terracotta text-cream hover:bg-terracotta-dark disabled:opacity-60'
					: 'bg-cream text-terracotta hover:bg-cream-dark disabled:opacity-60'
			]}
		>
			{status === 'sending' ? 'Sending…' : 'Join the List'}
		</button>
	</form>
	{#if status === 'error'}
		<p class="mt-2 font-body text-sm text-terracotta">
			Something went wrong — please try again.
		</p>
	{/if}
{/if}
