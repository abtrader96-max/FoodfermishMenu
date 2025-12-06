// script.js (Your file hosted on GitHub Pages)

// 🚨 1. PASTE YOUR CONNECTION DETAILS HERE:
const SUPABASE_URL = 'https://jbhrditswngtnocsnyhj.supabase.co'; // e.g., 'https://xxxx.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiaHJkaXRzd25ndG5vY3NueWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwMDMwMzgsImV4cCI6MjA4MDU3OTAzOH0.TQBG6PRldFh280By-o8o8kuyyPoAu9n4pXpfC6i3ZUg'; // This key is safe to expose

// 2. Initialize the Supabase Client
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 3. Function to Fetch and Display Data
async function fetchData() {
    alert('test');
    const dataList = document.getElementById('data-list');
    dataList.innerHTML = 'Fetching........'; // Clear loading message

    try {
        // Query the 'public_items' table
        let { data: Menu, error } = await supabase
            .from('Menu')
            .select('*'); // Select all columns

        if (error) throw error;

        // Check for empty data
        if (!public_items || public_items.length === 0) {
            dataList.innerHTML = '<li>No items found in the database.</li>';
            return;
        }

        // Display the data
        public_items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} (Value: ${item.price})`;
            dataList.appendChild(li);
        });

    } catch (error) {
        alert(error);
        console.error("Supabase Fetch Error:", error);
        dataList.innerHTML = `<li>Error loading data: ${error.message}</li>`;
    }
}

// 4. Run the function when the page loads
document.addEventListener('DOMContentLoaded', fetchData);
