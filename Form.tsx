import React, { useEffect } from 'react';

const Form = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://widgets.in8.nopaperforms.com/emwgts.js";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="rounded overflow-hidden">
            <div className="npf_wgts w-[500px] rounded" data-height="600px" data-w="f3162f9d0da45b80ccb6342d22a3c1cb" />
        </div>
    );
};

export default Form;
