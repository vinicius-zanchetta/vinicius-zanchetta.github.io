let lastScrollTop = 0;
navbar = document.getElementById("navbar")
window.addEventListener("scroll", function () {
	let scrollTop = window.scrollY || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		navbar.classList.add('active');
		if (this.window.innerWidth < 700) {
			closeNavbar();
		}
	} else {
		navbar.classList.remove('active')
	}
	lastScrollTop = scrollTop;
})

document.addEventListener('click', (event) => {
	if (!navbar.contains(event.target)) {
		
		if (this.window.innerWidth < 700)
		closeNavbar();
	}})

home = document.getElementById("nav-home")
sobreMim = document.getElementById("nav-sobre-mim")
portfolio = document.getElementById("nav-portfolio")
contato = document.getElementById("nav-contato")
hamburguer = document.getElementById("hamburguer")

let mobileMenuVisible = false;
hamburguer.addEventListener("click", () => {
	if (!mobileMenuVisible) {
		openNavbar();
		mobileMenuVisible = true;
	} else {
		closeNavbar();
	}
})

window.addEventListener("resize", function () {
	if (window.innerWidth > 700) {
		sobreMim.style.display = "block";
		portfolio.style.display = "block";
		contato.style.display = "block";
		hamburguer.classList.remove("rotate")
		mobileMenuVisible = false;
	} else {
		closeNavbar();
	}
})

const links = document.querySelectorAll('#navbar a');

links.forEach(link => {
    link.addEventListener('click', () => {
			closeNavbar();
    });
});

function closeNavbar() {
	if (this.window.innerWidth < 700) {
		sobreMim.style.display = "none";
		portfolio.style.display = "none";
		contato.style.display = "none";
	}
	mobileMenuVisible = false;
	hamburguer.classList.remove("rotate");
}

function openNavbar() {
	sobreMim.style.display = "block";
	portfolio.style.display = "block";
	contato.style.display = "block";
	hamburguer.classList.add("rotate")

}