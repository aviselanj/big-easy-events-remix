"use client"
// App.tsx
import React from "react";
import Calendar from "./Calendar";

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>My Calendar</h1>
            <Calendar />
        </div>
    );
};

export default App;
