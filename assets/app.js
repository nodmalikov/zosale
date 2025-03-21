window.addEventListener('DOMContentLoaded', () => {
	// Preloader
	const preloader = document.querySelector('#preloader')
	if (preloader) {
		window.addEventListener('load', () => {
			preloader.remove()
		})
	}

	// Scroll top
	let scrollTop = document.querySelector('.scroll-top')

	function toggleScrollTop() {
		if (scrollTop) {
			window.scrollY > 100
				? scrollTop.classList.add('active')
				: scrollTop.classList.remove('active')
		}
	}
	scrollTop.addEventListener('click', e => {
		e.preventDefault()
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})

	window.addEventListener('load', toggleScrollTop)
	document.addEventListener('scroll', toggleScrollTop)

	function aosInit() {
		AOS.init({
			duration: 600,
			easing: 'ease-in-out',
			once: true,
			mirror: false,
		})
	}
	window.addEventListener('load', aosInit)

	const glightbox = GLightbox({
		selector: '.glightbox',
	})

	// Pricing button
	const monthlyBtn = document.querySelector('.monthly-btn')
	const yearlyBtn = document.querySelector('.yearly-btn')

	const onePricing = document.querySelector('.one-pricing')
	const twoPricing = document.querySelector('.two-pricing')
	const threePricing = document.querySelector('.three-pricing')

	const pricingCards = document.querySelector('.pricing-card')

	monthlyBtn.addEventListener('click', function () {
		if (!monthlyBtn.classList.contains('pricing-btn-active')) {
			onePricing.textContent = '29'
			twoPricing.textContent = '99'
			threePricing.textContent = '79'
			yearlyBtn.classList.remove('pricing-btn-active')
			monthlyBtn.classList.add('pricing-btn-active')
		}
	})

	yearlyBtn.addEventListener('click', function () {
		if (!yearlyBtn.classList.contains('pricing-btn-active')) {
			onePricing.textContent = '218'
			twoPricing.textContent = '874'
			threePricing.textContent = '726'
			monthlyBtn.classList.remove('pricing-btn-active')
			yearlyBtn.classList.add('pricing-btn-active')
		}
	})

	// Header fixed
	window.onscroll = function () {
		if (window.innerWidth > 1001) {
			const navbarNav = document.querySelector('.navbar-nav')
			const offset = navbarNav.offsetHeight
			if (window.scrollY > offset - 20) {
				navbarNav.classList.add('sitenav-bg')
			} else if (window.scrollY < offset - 20) {
				navbarNav.classList.remove('sitenav-bg')
			}
		}
	}

	// FUNCTION TO UPDATE MAIN CONTENT'S MARGIN-TOP BASED ON HEADER'S HEIGHT
	function updateMainContentMargin() {
		const header = document.querySelector('.site-header')
		const mainContent = document.querySelector('.main-content')
		const headerHeight = header.offsetHeight

		if (window.innerWidth < 991) {
			mainContent.style.marginTop = `${headerHeight}px`
		} else {
			mainContent.style.marginTop = '0'
		}
	}

	// UPDATE MAIN CONTENT'S MARGIN INITIALLY
	updateMainContentMargin()

	// WINDOW RESIZE EVENT LISTENER
	window.addEventListener('resize', updateMainContentMargin)

	// OPTIONAL: UPDATE MAIN CONTENT'S MARGIN IF THE HEADER'S HEIGHT CHANGES DYNAMICALLY
	const header = document.querySelector('.site-header')
	new ResizeObserver(updateMainContentMargin).observe(header)

	// DOM elementlarini tanlab olamiz
	const navLinks = document.querySelectorAll('.nav-link') // Barcha nav-link elementlari
	const navbarCollapse = document.querySelector('.navbar-collapse') // navbar-collapse elementi

	navLinks.forEach(navLink => {
		navLink.addEventListener('click', () => {
			if (window.innerWidth < 991) {
				navbarCollapse.classList.remove('show')
			}
		})
	})
})
