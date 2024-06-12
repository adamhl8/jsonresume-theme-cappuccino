import { resume } from "../../index.js";

function ResumeHeader() {
  return (
    <header className="resume-header clearfix">
      <div className="profile-header pull-left">
        <h1>{resume.basics?.name}</h1>
        <h2 className="secondary bold">{resume.basics?.label}</h2>
      </div>
      <div className="profile-pic pull-right">
        {resume.basics?.image && <img src={resume.basics.image} alt="profile-pic" />}
      </div>
    </header>
  );
}

export default ResumeHeader;
