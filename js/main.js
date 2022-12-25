// When Search bar button is pushed
let searchBarButton = document.getElementById("submitButton");

// listening to button clicked
searchBarButton.addEventListener("click", buttonClicked);

const mainSection = document.getElementById("mainSection");
mainSection.style.display = "none";

// Function that will run when button is clicked
function buttonClicked() {
    // Value of Search Bar
    let searchBarValue = document.getElementById("searchInput").value;

    try {
        fetch(`https://api.github.com/users/${searchBarValue}`)
            .then(response => response.json())
            .then(data => getInformation(data))
    } catch (error) {
        console.log(error);
    };
}


function getInformation(user) {
    // The Users Name
    let mainHeader = document.getElementById("userName");
    mainHeader.innerHTML = `<h2>${user.name}</h2>`;

    // The Users Bio
    let userBio = document.getElementById("userBio");
    userBio.innerHTML = `<p>${user.bio}</p>`;

    // Reach Me Section
    let reachMeContainer = `
    <div>
      <a href="${user.blog}" >
       <p> -- Reach Me -- </p>
      </a>
    </div>
    `;
    let userReachMe = document.getElementById("reachMeContainer");
    userReachMe.innerHTML = reachMeContainer;

    // Image Section
    let userImageSection = document.getElementById("imageSection");
    userImageSection.innerHTML = `<img src="${user.avatar_url}" id="userImage" alt="${user.name}">`

    // Followers and Following Section
    let followers = `
             <p><strong>Followers:</strong> <span>${user.followers}</span></p>
             <p><strong>Following:</strong> <span>${user.following}</span></p>
        `;
    let followersSection = document.getElementById("followerSection");
    followersSection.innerHTML = followers;

    //Information Section
    let information = `
        <p><strong>Username:</strong> <span>heyGilly</span></p>
        <p><strong>Location:</strong> <span>San Antonio</span></p>
        <p><strong>Public Repositories:</strong> <span>14</span></p>
        <a href="${user.html_url}" id="gitHubAnchor"><p>Click for GitHub Profile</p></a>
    `;
    let informationSection = document.getElementById("userInformation");
    informationSection.innerHTML = information;

    // unHide the main Section
    const showMainSection = document.getElementById("mainSection");
    showMainSection.style.display = "block";
}
