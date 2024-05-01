import { check_url_validaty } from 'src/client/js/check_url.js'

//Variables 

const polarity = document.getElementById('polarity');
const subjectivity = document.getElementById("subjectivity");
const text = document.getElementById("text");
const api_key = 'f6237f0834c7f08c79815db730ff3b96'
const url_value = document.getElementById('url').value;

url_value.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if (Client.check_url_validaty(url_value)) {
        fetchData().then

            (async (url) => {
                await fetch('/post', {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        text: text,
                        polarity: polarity,
                        subjectivity: subjectivity
                    })
                })
            }).then

        // Function to update UI

            sendResponse('/post', { url: url_value })

            .then(function (res) {
                polarity.innerHTML = `Polarity: ${res.polarity}`;
                subjectivity.innerHTML = `Subjectivity: ${res.subjectivity}`;
                text.innerHTML = `Text: ${res.text}`;
            })
    }
    else {
        alert('Check if url is valid, then try again');
    }
}

//function to fetch data
const fetchData = async () => {
    const fetch_api = await fetch(`${fetch_url}key=${api_key}&url=${api}&lang=en`);
    const response = await fetch_api.json();
    return response;
}

// Export the handleSubmit function
export { handleSubmit };

