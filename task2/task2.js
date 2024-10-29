const url = "https://api.github.com/users/harsh-verma24"

fetch(url)
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log("Username:", data.login); 
    console.log("Bio:",data.bio);
    console.log("Repositories",data.repos_url);
    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });