import React from 'react';
import FindAdopt from '../FindAdopt/FindAdopt';
import HowAdoptionWorks from '../HowAdoptionWorks/HowAdoptionWorks';
import SuccessStories from '../SuccessStories/SuccessStories';
import GetFurFriends from '../GetFurFriends/GetFurFriends';
import Footer from '../Footer/Footer';
import './Home.scss'

class Home extends React.Component {
    render() {
        return (
            <div>
                <main className="main">
                    <div className="main__text-box">
                        <h1 className="main__text">
                            Share your life, Change a life, Adopt a life
                        </h1>
                    </div>
                </main>
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