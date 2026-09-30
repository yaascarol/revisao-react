import React from "react";

const ConditionalRender = () => {
    const x = true;
    const name = "yasmin";

    return (
        <div>
            <h3>Isso será exibido?</h3>

            {/* o paragrafo so sera renderizado quando x for true*/}

            {x && <p>Se x for true sim!</p>}
            <h3>render ternario:</h3>
            {name === "belle" ? (
                <div>
                    <p>o nome é belle</p>
                </div>
            ) : (
                <div>
                    <p>nome não encontrado!</p>
                </div>
            )}
        </div>
    );
};

export default ConditionalRender;