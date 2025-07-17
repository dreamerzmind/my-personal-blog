import { useState } from "react";
type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}


// const Button = ({
//     children,
//     onclick,
//     variant = 'primary',
//     disabled = false,
//     type = 'button',
//     className = '',

// })

// const variants = {
//     primary: "primary"
//     secondary:"secondary"
//     danger:
// }
// pred defined button style with option to pass addtional style
// className={`border border-solid ${prop?.className}`} // ${prop?.className is string interpolation using back ticks, use javascript variable inside strin value


export default function Button(prop: ButtonProps) {



    return (
        <button
            onClick={prop?.onClick}
            type={prop?.type}
            disabled={prop?.disabled}
            className={`border border-solid ${prop?.className}`}
        >
            {prop?.children}
        </button>
    );

}