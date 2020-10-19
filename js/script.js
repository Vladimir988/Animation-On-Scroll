const animItems = document.querySelectorAll('._anim-items');

if( animItems.length ) {

	window.addEventListener( 'scroll', animOnScroll );

	function animOnScroll() {
		for( let i = 0; i < animItems.length; i++ ) {
			const animItem       = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart      = 4;

			let animItemPoint    = window.innerHeight - animItemHeight / animStart;
			// console.log(animItemPoint);
			if( animItemHeight > window.innerHeight ) {
				animItemPoint    = window.innerHeight - window.innerHeight / animStart;
			}


			if( ( window.pageYOffset > animItemOffset - animItemPoint ) && window.pageYOffset < ( animItemOffset + animItemHeight ) ) {
				animItem.classList.add('_active');
			}/* else {
				animItem.classList.remove('_active');
			}*/
		}
	}

	function offset( elem ) {
		const rect       = elem.getBoundingClientRect(),
			  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			  scrollTop  = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}