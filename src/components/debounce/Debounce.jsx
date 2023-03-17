import React from 'react'

const Debounce = (fn, delay) => {
    console.log("entrando");
    let timer;
    return (...args) => {
        const self = this;
        console.log("clto")
        clearTimeout(timer);
        timer = setTimeout(() => {
            console.log("dentro")
            fn.apply(self, args);
        }, delay)
        console.log("saliendo")
    }
}

export default Debounce