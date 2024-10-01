import React, {useEffect, useState} from 'react';
import Form from "../../components/form/index.jsx";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import {db} from "../../firebase/index.js";
import Loader from "../../components/loader/index.jsx";
import Post from "../../components/post/index.jsx";

const Main = ({user}) => {

    const [tweets, setTweets] = useState()

    useEffect(() => {

        const ref = collection(db, "tweets")

        const q = query(ref, orderBy("createAt", "desc"))

        const unsub = onSnapshot(q, (snapshot) => {
            let temp = [];

            snapshot.docs.forEach((doc) => {

                temp.push({...doc.data(), id: doc.id})

            })

            setTweets(temp)
        })

        return () => {
            unsub()
        }
    }, []);

    return (
        <main className='main border border-zinc-500'>
            <header className='border-b border-zinc-500 p-4 font-bold'>
                Anasayfa
            </header>

            <Form user={user}/>

            {
                !tweets
                    ? (<div className='my-20 w-full grid place-items-center scale-150'><Loader/></div>)
                    : (tweets?.map((tweet) => (
                            <Post key={tweet.id} tweet={tweet}/>))

                    )
            }

        </main>
    );
};

export default Main;
