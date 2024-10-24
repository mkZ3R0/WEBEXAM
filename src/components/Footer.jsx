import React from 'react';

const Footer = () => 
{
    return (
        <footer className="bg-gray-900">
            <div className="gap-10 text-center pt-2
             text-gray-400 text-sm my-10 items-center">
                <span>© {new Date().getFullYear()} Muhammad Mukees Khan BSCS22021. All rights reserved.</span>
                <br></br>
                <span>Terms . Privacy Policy</span>
            </div>
        </footer>
    );
}

export default Footer;