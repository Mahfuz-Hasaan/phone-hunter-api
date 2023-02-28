const loadPhones = async (searchText,datalimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  showPhones(data.data,datalimit);
};

showPhones = (phones,datalimit) => {
  const phoneParentContainer = document.getElementById("phone-card-container");
  phoneParentContainer.innerText = '';
  const showMore = document.getElementById('show-more');
  if(datalimit && phones.length >= 10){
    phones = phones.slice(0,10);
    showMore.classList.remove('hidden');
  }
  else{
    showMore.classList.add('hidden');
  }
   
  
  const noPhone = document.getElementById('hidden-msg');
  if(phones.length === 0){
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
  toggoLoader(false)
};

const processSearch = (datalimit) =>{
  toggoLoader(true);
  const searchFieldValue = document.getElementById('search-field').value;
  loadPhones(searchFieldValue,datalimit);
  
}

document.getElementById('search-btn').addEventListener('click',function(){
   processSearch(10)

})

const toggoLoader = (isLoading) =>{
  const loader = document.getElementById('loader');
  if(isLoading === true){
    loader.classList.remove('hidden');
  }
  else if(isLoading === false){
    loader.classList.add('hidden');
  }
}

document.getElementById('show-btn').addEventListener('click',function(){
  processSearch();
})
loadPhones();


