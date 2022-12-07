const carrito = document.querySelector('#carrito');
const botones = document.querySelectorAll('.btn-primary');
const template = document.querySelector('#template');
const fragment = document.createDocumentFragment();

const carritoObjeto = {};

const agregarProductoCarrito = (e) => {
	const producto = {
		titulo: e.target.dataset.fruta,
		id: e.target.dataset.fruta,
		cantidad: 1,
	};

	if (carritoObjeto.hasOwnProperty(producto.id)) {
		producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
	}

	carritoObjeto[producto.titulo] = producto;

	mostrarCarrito();
};

const mostrarCarrito = () => {
	carrito.textContent = '';

	Object.values(carritoObjeto).forEach((item) => {
		const clone = template.content.firstElementChild.cloneNode(true);

		clone.querySelector('.lead').textContent = item.titulo;
		clone.querySelector('.badge').textContent = item.cantidad;

		fragment.appendChild(clone);
	});

	carrito.appendChild(fragment);
};

botones.forEach((item) => {
	item.addEventListener('click', agregarProductoCarrito);
});
