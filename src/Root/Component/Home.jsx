import React, { Suspense } from 'react';
import Hero from '../HomePage/Hero';
import Stats from '../HomePage/Stats';
import YourFriends from '../HomePage/YourFriends';
const fetchDataFromApi = () => {
    return fetch('/public/friends.json')
        .then((res) => res.json())
}
const getData = fetchDataFromApi()

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />
            <Suspense fallback={<span>loading....</span>}>
                <YourFriends getData={getData} />
            </Suspense>
        </>
    );
};

export default Home;