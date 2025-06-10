const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('top-[9%]')
}


const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categoryContainer');
    
    categories.forEach(item => {
        //const buttonContainer = document.createElement('div');
        // buttonContainer.innerHTML = 
        // `
        //     <button class="border-0 btn-white" id="btn-${item.category_id}" onclick="loadCategory(${item.category_id})" class="btn border-0">
        //         ${item.category}
        //     </button>
        // `;
        const li = document.createElement('li');
        li.innerHTML = 
        `
            <li><a href="#" class="btn btn-white px-10 py-5 rounded-full text-[18px] " id="btn-${item.id}">${item.category}
                <img src="${item.category_icon}" alt="" class="w-6">
            </a></li>
        `;
        categoryContainer.append(li);
    });
}
loadCategories();


//<ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8" id="categoryContainer"></ul>

const loadPets = async () => {
    const url = `https://openapi.programming-hero.com/api/peddy/pets`;
    const res = await fetch(url);
    const data = await res.json();
    displayPets(data.pets)
}
loadPets();

const displayPets = (pets) => {
    const petContaier = document.getElementById('petContaier');
    petContaier.innerHTML = "";

    pets.forEach(item => {
        const card = document.createElement('div');
        card.classList = "card";
        card.innerHTML = 
        `
            <figure class="w-250px">
                <img
                    src="${item.image}"
                alt="Album" class="object-conver rounded"/>
            </figure>
            <div class="card-body pl-0 pt-1">
                <h1 class="font-bold text-[18px]">${item.pet_name}</h1>
                <p class="text-stone-400">
                    Breed : ${item.breed}
                </p>
                <p class="text-stone-400">Birth : ${item.date_of_birth}</p>
                <p class="text-stone-400">Gender : ${item.gender}</p>
                <p class="text-stone-400">Price : ${item.price}</p>

                <div class="flex justify-between">
                    <ion-icon name="thumbs-up"></ion-icon>
                    <a class="cursor-pointer text-cyan-600 font-bold">Adopt</a>
                    <a class="cursor-pointer text-cyan-600 font-bold">Details</a>
                </div>
            </div>
        `;
        petContaier.append(card);
    });

}