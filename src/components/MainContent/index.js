import './index.css'

const MainContent =()=>{
    return (
        <div className='main-content-head-con'>
        <div className="main-content-con">
            <div className="main-content-fir-con">
                <p className='hello'>Hello!</p>
                <h2>I'm Venkatesh</h2>
                <h3>
                    Learning Web Development in Nxtwave
                </h3>
                <div className="main-content-btn-con">
                    <button className='btn cv' type="button">Download Cv</button>
                    <button className='btn touch' type="button">Get In Touch</button>
                </div>
            </div>
            <div className="main-content-sec-con">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" 
                    className='img-con'
                alt="person"/>
            </div>
        </div>
        </div>
    )
}

export default MainContent