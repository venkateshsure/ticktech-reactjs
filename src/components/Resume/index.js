import { RxResume } from "react-icons/rx";

import './index.css'

const Resume =()=>{
    return (
        <div className="resume-main-head-con">
            <div className="resume-head-con">
                <div className="resume-con">
                    <p className="resume">My Resume: </p>
                    <a href="https://drive.google.com/file/d/1KbauYKpQOMoJ2vGYgFJn5bul9g7xL1Jf/view" rel="noreferrer" target="_blank"><RxResume className="resume-icon"/></a>
                </div>
            </div>
        </div>
    )
}

export default Resume