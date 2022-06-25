
const Background = () => {
    return (
        <>
        <div className="background">
            <div className="experience">
                <img className="headshot" id="experience-headshot" src="../images/grad.png" alt="grad pic"/>
                <p>In 2019 I graduated from the University of Kentucky with a Bachelor's of Arts in Political Science and a minor in Criminology</p>
            </div>
            <div className="experience">
                <img className="headshot" id="experience-headshot" src="../images/police.jpeg" alt="police pic"/>
                <p>In 2020 I graduated from the Lexington Police Academy ranked top in my class. I went on to work in law enforcement until 2022</p>
            </div>
        </div>
        <div className="general-assembly">
            <img src="../images/ga-cert.png" alt="ga certificate"/>
            <p>In June of 2022 I completed a 12 week Software Engineering Immersive program at General Assembly</p>
        </div>
        </>
    )
}

export default Background