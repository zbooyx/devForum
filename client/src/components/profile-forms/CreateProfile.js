import React, {useState, Fragment} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getCurrentProfile} from "../../actions/profile";


const CreateProfile = props => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram,
    } = formData;

    return (
        <Fragment>
            <h1 className="large text-primary">Create Your Profile</h1>
            <p className="lead ">
                <i className="fas fa-user"> </i> Let's get some information to make your profile stand out
            </p>
            <small className="d-block pb-3">* = required field</small>
            <form
                // action="add-experience.html"
                className="form">
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="* Profile handle"
                           name="handle"
                           required/>
                    <small className="form-text text-muted">A unique handle for your profile URL. Your full name,
                        company
                        name, nickname, etc (This CAN'T be changed later)</small>
                </div>
                <div className="form-group">
                    <select className="form-control form-control-lg" name="status">
                        <option value="0">* Select Professional Status</option>
                        <option value="Developer">Developer</option>
                        <option value="Junior Developer">Junior Developer</option>
                        <option value="Senior Developer">Senior Developer</option>
                        <option value="Manager">Manager</option>
                        <option value="Student or Learning">Student or Learning</option>
                        <option value="Instructor">Instructor or Teacher</option>
                        <option value="Intern">Intern</option>
                        <option value="Other">Other</option>
                    </select>
                    <small className="form-text text-muted">Give us an idea of where you are at in your career</small>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Company" name="company"/>
                    <small className="form-text text-muted">Could be your own company or one you work for</small>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Website" name="website"/>
                    <small className="form-text text-muted">Could be your own or a company website</small>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Location" name="location"/>
                    <small className="form-text text-muted">City & state suggested (eg. Boston, MA)</small>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Skills" name="skills"/>
                    <small className="form-text text-muted">Please use comma separated values (eg.
                        HTML,CSS,JavaScript,PHP)</small>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Github Username"
                           name="githubusername"/>
                    <small className="form-text text-muted">If you want your latest repos and a Github link, include
                        your
                        username</small>
                </div>
                <div className="form-group">
                    <textarea className="form-control form-control-lg" placeholder="A short bio of yourself"
                              name="bio"/>
                    <small className="form-text text-muted">Tell us a little about yourself</small>
                </div>

                <div className="mb-3">
                    <button type="button" className="btn btn-light">Add Social Network Links</button>
                    <span className="text-muted">Optional</span>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fab fa-twitter"/>
                </span>
                    </div>
                    <input type="text" className="form-control form-control-lg" placeholder="Twitter Profile URL"
                           name="twitter"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fab fa-facebook"/>
                </span>
                    </div>
                    <input type="text" className="form-control form-control-lg" placeholder="Facebook Page URL"
                           name="facebook"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fab fa-linkedin"/>
                </span>
                    </div>
                    <input type="text" className="form-control form-control-lg" placeholder="Linkedin Profile URL"
                           name="linkedin"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fab fa-youtube"/>
                </span>
                    </div>
                    <input type="text" className="form-control form-control-lg" placeholder="YouTube Channel URL"
                           name="youtube"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fab fa-instagram"/>
                </span>
                    </div>
                    <input type="text" className="form-control form-control-lg" placeholder="Instagram Page URL"
                           name="instagram"/>
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4"/>
            </form>
        </Fragment>
    )

}

CreateProfile.propTypes = {}


export default CreateProfile;
