import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ""
    }

    componentDidMount() {
        this.queryParamsParser();
    }

    componentDidUpdate() {
        this.queryParamsParser();
    }

    queryParamsParser() {
        const query = new URLSearchParams(this.props.location.search);
        //console.log(query);
        for (let param of query.entries()) {
            //console.log(param);
            if (this.state.courseTitle !== param[1]) {
                this.setState({
                    courseTitle: param[1]
                });
            }
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                {/* {console.log(this.props.location.search)} */}
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;