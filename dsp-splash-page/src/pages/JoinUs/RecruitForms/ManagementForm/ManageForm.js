import React, { Component } from "react";
import "./manageform.css";

class ManageForm extends Component {
    state = {};

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div className="center">
                <iframe title="contact" id="joinUs" src="https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUOVNRNUxYOEM1TUEzQ0JYNjAxRkhGUVRYMCQlQCN0PWcu&embed=true" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
            </div>
        );
    };

};

export default ManageForm;