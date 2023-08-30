import { useState } from 'react';
    function App() {
        const [name, setName] = useState("umar");
            const [value, setValue] = useState("")
                console.log(name)
                    return (
                        <div className="App">
                            <h2>{value}</h2>
                                <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
                                    <button onClick={() => setValue("")}></button>
                                </div>
                              );
                            }