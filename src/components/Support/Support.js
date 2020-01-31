import React from 'react';
import './Support.scss';

const Support = () => {
    return (
        <div>
            <main className="support">
                <div className="support__text-box">
                    <h1 className="support__text-main">SUPPORT</h1>
                    <h3 className="support__text-sub">Our mission to save and enhance lives can only be fulfilled with the help of a compassionate community. Join and support our cause today!</h3>
                </div>
            </main>
            <div className="info">
                 {/* first row */}
                <div className="info__row">
                    <div className="info__col">
                        <img src="/image/support-pagev2-adam-griffith-408788-unsplash.png" alt="support animal" className="info__img"></img>
                    </div>
                    <div className="info__col">
                        <p>Our shelter is a wonderful place to find your next pet! Save the lives of shelter animals by giving one (or more) a home. Our animals need you! <br></br>Browse our listings for a chance to meet your new best friend. Each one of them is eager for that first ride to a new home.</p>
                        <button className="btn btn--purple">adopt</button>
                    </div>
                </div>
                {/* second row */}
                <div className="info__row">
                    <div className="info__col">
                        <p>Your contributions saves lives by allowing us to provide speciality veterinary care to sick and injured shelter pets, in addition to many other services.<br></br>Donate now and paint a better future for pets and families.</p>
                        <button className="btn btn--purple">donate</button>
                    </div>
                    <div className="info__col">
                        <img src="image/support-pagev2-cat-35354041920.png" alt="support animal" className="info__img"></img>
                    </div>
                </div>
                {/* third row */}
                <div className="info__row">
                    <div className="info__col">
                    <img src="image/support-pagev2-adorable-animal-blurred-background-289252.png" alt="support animal" className="info__img"></img>
                    </div>
                    <div className="info__col">
                        <p>Whether it's feeding, walking, or playing, we can always use an extra set of hands. Make a shelter pet's days brighter! Sign up to enrich your life and the lives of homeless pets.<br></br>Volunteer with us! Learn how you can support our programs through volunteering.</p>
                        <button className="btn btn--purple">volunteer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;