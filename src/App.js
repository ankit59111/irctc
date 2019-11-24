import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div id="logo"></div>
            <header>
                <nav>
                    <ul>
                        <li><img src="https://img.icons8.com/android/24/000000/search.png" alt='search_icon'/></li>
                        <li><img src="https://img.icons8.com/ios/25/000000/ticket.png" alt='booked'/></li>
                        <li><img src="https://img.icons8.com/material-outlined/24/000000/user--v1.png" alt='profile'/>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className='main'>
                <div className="search_bar">
                    <form>
                        <label>Search
                            <img src="https://img.icons8.com/metro/24/000000/data-in-both-directions.png"/>
                        </label>
                        <input type='text' placeholder="From"/>
                        <input type='text' placeholder="To"/>

                    </form>
                </div>
              <div className='search_button'>
              <button>Search</button>
              </div>
            </div>
        </div>
    );
}

export default App;
