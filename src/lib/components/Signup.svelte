<script>
	import { reveal } from '$lib/actions/reveal.js';
	import EmailForm from './EmailForm.svelte';
</script>

<section id="signup" class="bg-terracotta px-6 py-24 md:px-8 md:py-32">
	<div class="mx-auto max-w-2xl text-center" use:reveal>
		<h2 class="mb-4 font-display text-3xl leading-tight font-medium text-cream md:text-4xl lg:text-5xl">
			Be the first to<br />crack one open.
		</h2>

		<p class="mb-10 font-body text-base text-cream/70 md:text-lg">
			Sign up and we'll let you know the moment we're ready.
		</p>

		<div class="flex justify-center">
			<EmailForm variant="signup" />
		</div>
	</div>
</section>
