import React from "react";

const ConditionalRender = () => {
    const x = true;

    return (
        <div>
            <h3>Isso será exibido?</h3>

            {/* o paragrafo so sera renderizado quando x for true*/}

            {x && <p>Se x for true sim!</p>}
        </div>
    );
};

export default ConditionalRender;