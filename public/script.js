document.getElementById('description-form').addEventListener('submit', async (event) => {
    event.preventDefault()

    const input = document.getElementById('description-input').value 
    const result = document.getElementById('result')
    result.innerHTML = ''

    try {
        const response = await fetch('/grammar-correction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify({ prompt: input})
        })

        if (response.ok) {
            const data = await response.json()
            const text = document.createElement('p')
            text.textContent = data
            result.appendChild(text)
        }
    } catch (error) {
        console.log(error)
    }
})