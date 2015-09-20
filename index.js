export function async(generatorFunction) {
	let generatorItr = this::generatorFunction(
		function resume(...args) {
			setImmediate(() => generatorItr.next(args) );
		}
	);

	// Start
	generatorItr.next();
};