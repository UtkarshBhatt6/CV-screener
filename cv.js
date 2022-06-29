const data = [
    {
        name: 'Margot Robbie',
        age: 18,
        city: 'Seattle',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'John Dickinson',
        age: 19,
        city: 'Seattle',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Robert Downey',
        age: 19,
        city: 'Texas',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/74.jpg'
    },
    {
        name: 'Emma Lahana',
        age: 20,
        city: 'Melbourne',
        language: 'Java',
        framework: 'Springboot',
        image: 'https://randomuser.me/api/portraits/women/73.jpg'
    },

]
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                {

                    value: profiles[nextIndex++],
                    done: false,

                } : { done: true }

        }
    };
}
const candidates = cvIterator(data);
nextCV();
const next = document.getElementById('next');
next.addEventListener('click', nextCV);
function nextCV() {
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate)
        image.innerHTML = `
        <div class="row g-0">
    <div class="col-md-4">
        <img src='${currentCandidate.image}' class="card-img-top width="200" 
        height="300"">
        </div></div>`;
    profile.innerHTML = `
    <div class="row g-0">
    <div class="col-md-4">
    <ul class="list-group">
    <li class="list-group-item"> <h4>Name: <span class="badge bg-secondary">${currentCandidate.name}</span></h4></li>
    <li class="list-group-item"><h4>Age: <span class="badge bg-secondary">${currentCandidate.age}</span></h4></li>
    <li class="list-group-item"><h4>City: <span class="badge bg-secondary">${currentCandidate.city}</span></h4></li>
    <li class="list-group-item"><h4>Language: <span class="badge bg-secondary">${currentCandidate.language}</span></h4></li>
    <li class="list-group-item"> <h4>Framework: <span class="badge bg-secondary">${currentCandidate.framework}</span></h4></li>
  </ul>
  </div></div>`
}

