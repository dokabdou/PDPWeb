document.addEventListener('DOMContentLoaded', function () {
    fetchData();
});

function fetchData() {
    fetch('http://your-website.com/api/data')
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById('data-container');
            data.forEach(item => {
                const dataItem = document.createElement('div');
                dataItem.classList.add('data-item');

                const dataText = document.createElement('p');
                dataText.classList.add('data-text');
                dataText.textContent = item;

                dataItem.appendChild(dataText);
                dataContainer.appendChild(dataItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}
