const loadPhones = async () => {
  const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
  const res = await fetch(url);
  const data = await res.json();
  showPhones(data.data);
};

showPhones = (phones) => {
  const phoneParentContainer = document.getElementById("phone-card-container");
  phones.forEach((phone) => {
    console.log(phone);
    const phoneChildContainer = document.createElement("div");
    phoneChildContainer.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src="${phone.image}" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        `;
        phoneParentContainer.appendChild(phoneChildContainer);
  });
};

loadPhones();
