window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionAPIUrl = 'https://getresumeecounter.azurewebsites.net/api/GetResumeCounter?code=jy5h9WAdXQbOFXntOJEev5wIdf1krJTAu_ndbtCYoPWKAzFuHxeDEw==';
const localFunctionAPI = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionAPIUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}