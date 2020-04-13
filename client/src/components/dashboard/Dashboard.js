import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {getCurrentProfile} from "../../actions/profile";
import auth from "../../reducers/auth";
import profile from "../../reducers/profile";

const Dashboard = ({getCurrentProfile, auth, profile}) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);
    return (
        <div>
            Dashboard
        </div>
    )
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapToStateProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);
