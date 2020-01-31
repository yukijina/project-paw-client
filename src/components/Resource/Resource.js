import React from 'react';
import './Resource.scss';

const Resource = () => {
    return (
        <div>
            <main className="resource">
                <div className="resource__text-box">
                    <h1 className="resource__text-main">RESOURCES</h1>
                    <h3 className="resource__text-sub">Basic information and links to more information are offered as a way to help those looking for assistance to help their companions.</h3>
                </div>
            </main>
           
            <div className="info">
                 {/* first row */}
                <div className="info__row">
                    <div className="info__col">
                        <div className="info__col-wrapper">
                            <img src="/image/resources-pagv2-oleg-ivanov-1152051-unsplash.png" alt="play with cat" className="info__col-img"></img>
                            <h2 className="info__col-text">why adopt?
                            </h2>
                        </div>
                    </div> 
                    <div className="info__col">
                        <div className="info__col-wrapper">
                            <img src="/image/resources-pagv2-cat-35354041920.png" alt="adorable cat" className="info__col-img"></img>
                            <h2 className="info__col-text">animal ordinances
                            </h2>
                        </div>
                    </div>           
                </div>
                {/* Second row */}
                <div className="info__row">
                    <div className="info__col">
                        <div className="info__col-wrapper">
                            <img src="/image/resources-pagv2-dan-wayman-1298943-unsplash.png" alt="adorable cat" className="info__col-img"></img>
                            <h2 className="info__col-text">animal care
                            </h2>
                        </div>
                    </div> 
                    <div className="info__col">
                        <div className="info__col-wrapper">
                            <img src="/image/resources-pagv2-jamie-street-499878-unsplash.png" alt="dog carrying a branch" className="info__col-img"></img>
                            <h2 className="info__col-text">behavior problems
                            </h2>
                        </div>
                    </div>           
                </div>
                {/* Third row */}
                <div className="info__row">
                    <div className="info__col">
                        <div className="info__col-wrapper">
                            <img src="/image/resources-pagv2-matt-nelson-259365-unsplash.png" alt="dog yarning" className="info__col-img"></img>
                            <h2 className="info__col-text">pet training
                            </h2>
                        </div>
                    </div> 
                    <div className="info__col">
                        <div className="info__col-wrapper">
                            <img src="/image/resources-pagv2-animal-daylight-dog-1498925.png" alt="playing with a dog" className="info__col-img"></img>
                            <h2 className="info__col-text">license a pet
                            </h2>
                        </div>
                    </div>           
                </div>
            </div>
        </div>
    )
}

export default Resource;