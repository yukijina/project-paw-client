import React from 'react';
import NavBar from './NavBar';
import FindAdopt from './FindAdopt';
import HowAdoptionWorks from './HowAdoptionWorks';
import SuccessStories from './SuccessStories';
import GetFurFriends from './GetFurFriends';
import Footer from './Footer';

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <img src="/image/jamie-street-562280-unsplash.png" alt="dog"></img>
                <FindAdopt />
                <HowAdoptionWorks />
                <SuccessStories />
                <GetFurFriends />
                <Footer />
            </div>
        )
    }
}

export default Home;