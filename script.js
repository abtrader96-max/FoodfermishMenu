// script.js

// 🚨 IMPORTANT: Replace this with your actual MongoDB Atlas App Services Client App ID
const APP_ID = 'application-0-ngogldp'; 

const app = new Realm.App({ id: APP_ID });

async function fetchDataAndDisplay() {
    const dataList = document.getElementById('data-list');
    dataList.innerHTML = ''; 

    try {
        // 1. Securely log in as an anonymous user 
        const user = await app.logIn(Realm.Credentials.anonymous());
        
        // 2. Call the serverless function you created in Atlas App Services
        // Replace 'getPublicData' with the name of your Atlas function
        const data = await user.functions.Fun();
        dataList.innerHTML = 'count = '+data.length;
        /*
        if (data.length === 0) {
            dataList.innerHTML = '<li>No data found.</li>';
        } else {
            // 3. Display the fetched data
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `Document ID: ${item._id.toString()}, Field: ${item.price || 'N/A'}`;
                dataList.appendChild(li);
            });
        }*/
        
    } catch (error) {
        console.error('Failed to fetch data securely:', error);
        alert(error);
        //dataList.innerHTML = `<li>Error loading data. Check the console and ensure your Atlas App Services are configured correctly.</li>`;
    }
}

document.addEventListener('DOMContentLoaded', fetchDataAndDisplay);
