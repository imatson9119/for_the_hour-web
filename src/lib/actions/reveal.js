/**
 * Scroll-reveal action using IntersectionObserver.
 * Adds a 'revealed' class when the element enters the viewport.
 */
export function reveal(node, options = {}) {
	const { threshold = 0.15, rootMargin = '0px 0px -40px 0px' } = options;

	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReducedMotion) {
		node.classList.add('revealed');
		return { destroy() {} };
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('revealed');
					observer.unobserve(entry.target);
				}
			}
		},
		{ threshold, rootMargin }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
