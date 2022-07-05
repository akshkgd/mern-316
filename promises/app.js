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
  let authorsContainer = document.getElementById('authorsContainer');
  authorsContainer.innerHTML = ''
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
        
        
        let authorsDiv = document.createElement('div');
        authorsDiv.classList.add('authorsChip');
        authorsDiv.innerHTML = author;
        authorsDiv.addEventListener('click', showQutes);
        authorsContainer.appendChild(authorsDiv);
        
    })
  });
}
fetchQuote()

function fetchRandomAuthors(){
  
}

function showQutes(event){
  let requestedAuthor =  event.target.innerHTML;
  
  //author list

  let authorsContainer = document.getElementById('authorsContainer');
  authorsContainer.innerHTML = '';
  // document.getElementById('quote').innerHTML = '';
  document.getElementById('newQuoteBtn').style.display = 'none';

  //FETCHING THE QUOTES
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let totalQuotes = data.length;
    let randomQuote = Math.floor(Math.random()*totalQuotes);
    

    
    //genrating new authors list
    for(let i =randomQuote;  i<=randomQuote+5; i++ ){
        let author = data[i].author;
        if(author != null){
        let authorsDiv = document.createElement('div');
        authorsDiv.classList.add('authorsChip');
        authorsDiv.innerHTML = author;
        authorsDiv.addEventListener('click', showQutes);
        authorsContainer.appendChild(authorsDiv);
        }
      }
      console.log('filter started')
      let requestedQuotes = data.filter((quote)=>{
        
         return quote.author === requestedAuthor;
          
          
      })
      console.log('filter end')
      

      //empty the quotes container
      let quotesContainer = document.getElementById('quotesContainer');
      quotesContainer.innerHTML = '';

      //render requested quotes
      requestedQuotes.map((quote)=>{
        let requestedQuotesDiv = document.createElement('div');
        requestedQuotesDiv.classList.add('qcard');
        let requestedQuotesPara = document.createElement('p');
        requestedQuotesPara.innerHTML  = quote.text;
        quotesContainer.appendChild(requestedQuotesDiv);
        requestedQuotesDiv.appendChild(requestedQuotesPara);

      })
  });

  //author list ends

}