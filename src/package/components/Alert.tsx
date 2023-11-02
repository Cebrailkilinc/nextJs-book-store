"use client"
import React, { useEffect, useState } from 'react'

const Alert = () => {

    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (showAlert) {
            const timeout = setTimeout(() => {
                setShowAlert(false);
            }, 5000);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [showAlert]);
    return (
        <div>
            {
                showAlert &&
                <div
                    className="absolute right-5 top-20 rounded-sm bg-red-500 bg-opacity-40 px-6 py-5 text-sm text-danger-700"
                    role="alert">
                    A simple danger alert—check it out!
                </div>
            }
        </div>
    )
}

export default Alert