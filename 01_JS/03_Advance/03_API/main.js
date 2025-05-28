// fetch API in JS:
    // The fetch API provides an interface for fetching (sending/receiving) resouces
    // It uses request and response objects
    // The fetch() method is used to fetch a resource(data)
    // API = Application Programming Interface
    // {
    //     // By async await
    //     const URL = "https://potterapi-fedeperin.vercel.app/en/spells";
    //     const Spell = document.querySelector('#spell');
    //     const btn = document.querySelector('#btn');
    //     const getSpells = async () => {
    //         console.log("getting Data....");
    //         let response = await fetch(URL);
    //         let i = 53;
    //         console.log(response); // JSON format
    //         console.log(response.status);
    //         let data = await response.json()
    //         console.log(data);
    //         Spell.innerText = `Spell: ${data[i].spell}(Use: ${data[i].use})`;
    //     };
    //     btn.addEventListener("click", getSpells);
    //     // Understanding terms:
    //         {
    //             // Ajax is Asynchronous JS & XML
    //             // JSON is JS Object Notation
    //             // json() method: returns a second promise that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS object)
    //             // Ajaj: Asynchronous Javascript And JSON. But we still call it AJAX for sound harmony
    //             // 1. response(JSON) ==>> 2. JS object
    //         }
    // }
    // {
    //     // By promise chain:
    //     const Spell = document.querySelector('#spell');
    //     const URL = "https://potterapi-fedeperin.vercel.app/en/spells";
    //     const btn = document.querySelector('#btn');
    //     let i = 39;
    //     function getSpell() {
    //         fetch(URL).then((res)=>{
    //             return res.json();
    //         }).then((data)=>{
    //             console.log(data);
    //             Spell.innerText = `Spell: ${data[i].spell}(Use: ${data[i].use})`;
    //         });
    //     };
    //     btn.addEventListener("click", getSpell);
    // }
// Requests and Response:
    // HTTP verbs, Response Status Code
    // HTTP response headers also contain details about the responses, such as content type, HTTP status code etc.