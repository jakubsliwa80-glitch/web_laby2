(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const cw4 = document.getElementById('cw4')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {

        array.forEach(post => {
          const postDiv = document.createElement('div');
          postDiv.innerHTML = `
          <h2>Post #${post.id} Użytkownika ${post.userId} - ${post.title}</h2>
          <p>${post.body}</p>
        `;
          answer.appendChild(postDiv);


        });

      })
  })

  cw2.addEventListener("click", async function() {

    answer.innerHTML = 'Loading...';

    await new Promise(resolve => setTimeout(resolve, 1000));

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {

        answer.innerHTML = '';

        array.forEach(post => {
          const postDiv = document.createElement('div');
          postDiv.innerHTML = `
        <h2>Post #${post.id} Użytkownika ${post.userId} - ${post.title}</h2>
        <p>${post.body}</p>
      `;
          answer.appendChild(postDiv);


        });

      })
  })

  cw3.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(post => {

        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
        <h2>Post #${post.id} Użytkownika ${post.userId} - ${post.title}</h2>
        <p>${post.body}</p>
      `;
        answer.appendChild(postDiv);

      })
  })

  cw4.addEventListener("click", function() {

    answer.innerHTML = 'Processing...';
    setTimeout(1000);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'przykladowy tytul',
        body: 'przykladowe body',
        userId: 4444,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    })
      .then(response => response.json())
      .then(post => {

        answer.innerHTML = '';

        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
        <h2>Dodano nowy post o id #${post.id} - ${post.title}</h2>
        <p>${post.body}</p>
      `;
        answer.appendChild(postDiv);

      })
  })

})();
