let perros = [
	{
		img: './img/perro_1.jpg',
		name: 'Cobu',
		telefono: '55533300 | Correo',
		pais: 'Perú',
		descripcion: 'hola',
		id: 01,
	},
	{
		img: './img/perro_2.jpg',
		name: 'Hachi',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 02,
	},
	{
		img: './img/perro_3.jpg',
		name: 'Manchas',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 03,
	},
	{
		img: './img/perro_4.jpg',
		name: 'Doby',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 04,
	},
	{
		img: './img/perro_5.jpg',
		name: 'Chester',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 05,
	},
	{
		img: './img/perro_6.jpg',
		name: 'Harry',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 06,
	},
	{
		img: './img/perro_7.jpg',
		name: 'Marley',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 07,
	},
	{
		img: './img/perro_8.jpg',
		name: 'Benji',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 08,
	},
];

function crearTarjetas(dogs){
  let container2 = document.querySelector('.container2')
  dogs.forEach(dog => {
    container2.innerHTML += `
    <div class="card">
        <img src="${dog.img}" alt="dog" class="img">
        <h2 class="name">${dog.name}</h2>
        <h3 class="data">${dog.telefono} | Correo</h3>
        <h4 class="country">${dog.pais}</h4>
        <p class="text">${dog.descripcion}</p>
      </div>
    </div> 
    `
  });
}

crearTarjetas(perros);