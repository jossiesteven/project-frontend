console.log("Loading JavaScript...");

function saveBook(){
        
    let nameBook=document.getElementById("name");
    let authorBook=document.getElementById("author");
    let isbnBook=document.getElementById("isbn");
    let editionBook=document.getElementById("edition");

    let book = {
        name: nameBook.value,
        author: authorBook.value,
        isbn: isbnBook.value,
        edition: editionBook.value
    }

    console.log(book);

    let url = "http://localhost:8000/api/book";
    
    let params={
        method: "POST",
        headers:{ 
            "Content-Type":"application/json"
    },
    body: JSON.stringify(book)
    }

    fetch(url,params).then(response=> {

        console.log(response);
        console.log(response.json());

        if(response.status == 201){
            alert("Creación Exitosa Libro !!");
        }else{
            alert("Error en la creación de Libro !!");
        }
    
    });
    //alert("Creación Libro");
    return true;
}

function getBook(){

    let url = "http://localhost:8000/api/books";
    let params = {
        method: "GET",
        headers:{ 
            "Content-Type": "application/json"
            },   
    }

    fetch(url,params).then((response)=>{
        console.log(response);    
        console.log(response.json());
    });

    return true;
}





    let url = "https://api.agify.io?name=meelad";
    let params = {
        method: "GET",
        headers:{ 
            "Content-Type": "application/json"
            },   
    }

    fetch(url,params).then((response)=>{
        console.log(response);    
        console.log(response.json());
    });

   
