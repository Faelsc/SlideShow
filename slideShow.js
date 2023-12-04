'use strict';

const images = [
    { 'id': '1', 'url':'./img/peakyblinders.jpg' },
    { 'id': '2', 'url':'./img/theoffice.jpg' },
    { 'id': '3', 'url':'./img/strangerthings.jpg' },
    { 'id': '4', 'url':'./img/theboys.jpg' },
    { 'id': '5', 'url':'./img/dark.jpeg' },
    { 'id': '6', 'url':'./img/simpsons.jpg' },
]

const container = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'>
            </div>
        `
    })
}

loadImages( images, container );