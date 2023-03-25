import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

    const initialArt = {
        src: '',
        caption: '',
    };

    // let posts = [];

    const [art, setArt] = useState(initialArt);

    function getFirstArt() {
        axios.get('http://localhost:3001/firstArt')
            .then(res => {
                console.log(res);
                const newArt = {
                    src: res.data.image,
                    caption: res.data.captions
                }
                setArt(newArt);
            })
            .catch(err => {
                console.log(err)
            })
    }

    // function getArt() {
    //     axios.get('http://localhost:3001/')
    //         .then(res => {
    //             console.log(res.data);
    //             posts = [res.data];
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    // function editArt

    function postArt(newArt) {
        axios.post('http://localhost:3001/', newArt)
            .then(res => {
                console.log(res)
                setArt(initialArt)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getFirstArt();
    }, [])

    const handleCaptionSelect = (event) => {
        const cap = event.target.value;
        setArt({
            ...art,
            caption: cap
        });
        // console.log(cap);
        // console.log(art);
    };

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setArt({
            ...art,
            src: url
        });
    };

    const onSubmit = evt => {
        if(art.caption && art.src) {
            const newA = {
                image: art.src,
                captions: art.caption
            }
            postArt(newA);
            setArt(newA);
        }
        evt.preventDefault();
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Drop A Photo</h1>
            </header>
            <div className="Photo-Section">
                <div className="Photo-here">
                    <h2>Hoorah Marines</h2>
                    {art.src && <img src={art.src} />}
                    <p>{art.caption}</p>
                </div>
                <div className="Photo-form">
                    <h2>Drop photo here</h2>
                    <form onSubmit={onSubmit}>
                        <input
                            type='file'
                            id='photoFile'
                            name='photoFile'
                            onChange={handleFileSelect}
                            // value={art.src}
                        />
                        <input
                            type='text'
                            name='captionText'
                            onChange={handleCaptionSelect}
                            value={art.caption}
                        />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App