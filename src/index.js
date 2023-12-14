console.log('%c HI', 'color: firebrick')
let breeds = []
document.addEventListener('DOMContentLoaded', function() {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    const breedList = document.getElementById('dog-breeds')
    const listItems = document.querySelectorAll('li')
    const breedFilter = document.getElementById('breed-dropdown')

    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        const imageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          imageContainer.appendChild(img);
        })
    })
    
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        breeds = Object.keys(data.message)

        breeds.forEach(breed => {
            const listItem = document.createElement('li');
            listItem.innerText = breed;
            breedList.appendChild(listItem);
        })
    })

    listItems.forEach((item) => {
        item.addEventListener('click', (e) => {
          e.target.style.color = 'red'
        })
      })
  
      breedFilter.addEventListener('change', handleFilterChange)
      function handleFilterChange() {
      const selectedLetter = breedFilter.value;
      const filteredBreeds = breeds.filter(breed => breed.startsWith(selectedLetter))
      
      displayBreeds(filteredBreeds);
      }
      function displayBreeds(filteredBreeds) {
        breedList.innerHTML = ''
        filteredBreeds.forEach(breed => {
          const listItem = document.createElement('li');
          listItem.innerText = breed;
          breedList.appendChild(listItem);
        });
      }
  })