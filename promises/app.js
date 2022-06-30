// function downloadAsset(){
//     console.log('downloading...')
//     //3sec time to download the file
//     setTimeout(()=>{
//         console.log('file is downloaded')
//     }, 3000);

//     console.log('email send')
// }


//promise example
let hasFileDownloaded = false;
// let downloadAsset = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     if(hasFileDownloaded == true)
//     resolve('File Download Success');
//     else
//     reject('File Download Failed')
//     }, 3000)
// });

// downloadAsset.then((message)=>{
//     console.log('Email send, ', message)
// }).catch((error)=>{
//     console.log('Email send, ',error)
// });


// function DownloadFile() {
//     return new Promise((resolve, reject) => {
//         console.log('downloading...')
//         setTimeout(() => {
//             if (hasFileDownloaded == true)
//                 resolve('File Download Success');
//             else
//                 reject('File Download Failed')
//         }, 3000)
//     })
// }

// DownloadFile().then((message)=>{
//         console.log('Email send, ', message)
//     }).catch((error)=>{
//         console.log('Email send, ',error)
//     });





function fetchQuote(){
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let totalQuotes = data.length;
    let randomQuote = Math.floor(Math.random()*totalQuotes);
    document.getElementById('quote').innerHTML = data[randomQuote].text;

    let authors = [];
    for(let i =randomQuote;  i<=randomQuote+5; i++ ){
        let author = data[i].author;
        if(author != null)
        authors.push(author)
    }
    
    authors.map((author)=>{
        let authorsContainer = document.getElementById('authorsContainer')
        
        let authorsDiv = document.createElement('div');
        authorsDiv.classList.add('authorsChip');
        authorsDiv.innerHTML = author;
        authorsContainer.appendChild(authorsDiv);
        
    })
  });
}

fetchQuote()