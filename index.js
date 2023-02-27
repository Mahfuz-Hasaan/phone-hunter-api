const loadPhones = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  showPhones(data.data);
};

showPhones = (phones) => {
  const phoneParentContainer = document.getElementById("phone-card-container");
  phoneParentContainer.innerText = '';
  phones = phones.slice(0,20);
  const noPhone = document.getElementById('hidden-msg');
  if(phones.length ===  0){
    noPhone.classList.remove('hidden');
  }
  else{
    noPhone.classList.add('hidden');
  }
  phones.forEach((phone) => {
    // console.log(phone);
    const phoneChildContainer = document.createElement("div");
    phoneChildContainer.innerHTML = `
        <div class="card lg:w-96 bg-base-100 shadow-xl bg-sky-500 ">
        <figure class="px-10 pt-10 ">
          <img src="${phone.image}" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button class="btn btn-primary hover:bg-purple-900">Buy Now</button>
          </div>
        </div>
      </div>
        `;
        phoneParentContainer.appendChild(phoneChildContainer);
  });
};

document.getElementById('search-btn').addEventListener('click',function(){
    const searchFieldValue = document.getElementById('search-field').value;
    loadPhones(searchFieldValue);
    document.getElementById('search-field').value = '';

})

loadPhones();


