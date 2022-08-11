let getBooks = async ()=>{

    try {

        let response = await fetch('https://www.anapioficeandfire.com/api/books');
    let data = await response.json();
    data.forEach((book,index) => {
        

        document.getElementById("container").innerHTML += `

        <div class="col">
        <div class="card m-2">
            <div class="card-body">
                <h5 class="card-title">Name of book: ${book.name}</h5>
                <p class="card-text">isbn: ${book.isbn}</p>
                <p class="card-text">author: ${book.authors[0]}</p>
                <p class="card-text">pages: ${book.numberOfPages}</p>
                <p class="card-text">released: ${book.released}</p>
                <p class="card-text">Characters:
                <ul id='ulist ${index}'>
        
                </ul>
                
                </p>
            </div>
        </div>
    </div>
        
        `



        for(let i=0;i<5;i++)
        {
            var characters = (book.characters[i]).toString();
            try {
                fetch(`${characters}`)
            .then(response => response.json())
            .then(data => {
                if(data.name !== ""){document.getElementById(`ulist ${index}`).innerHTML+=`<li>${data.name}</li>`;}
                else{document.getElementById(`ulist ${index}`).innerHTML+=`<li>Character not available</li>`;}
                
            })
            
            } catch (error) {
                console.log(error.message)
                
            }
            
        }
        
    });





        
    } catch (error) {
        console.log(error)
        
    }

    

}
