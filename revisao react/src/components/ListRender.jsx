import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["yasmin", "lua", "lais", "belle"]);

    const [users] = useState([
        { id: 1, name: "yasmin", age: 27 }
        { id: 2, name: "lua", age: 21 }
        { id: 3, name: "lais", age: 22 }
        { id: 4, name: "belle", age: 20 }
    ])

    return (
        <div>
            <ul>
                {list.map((item, i) => {
                    <li key={i}>{item}</li>
                })}
            </ul>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age} anos
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListRender;