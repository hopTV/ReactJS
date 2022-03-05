import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
   
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000' }
        ]
    }
    addNewJob = (job) => {

        // console.log('>>> check job', job)
        this.setState ({
            arrJobs: [job, ...this.state.arrJobs]
        })
    }

    deleteJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item =>item.id !== job.id)
        this.setState({
            arrJobs: currenJobs
        })
    }
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent 
                    addNewJob = {this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob = {this.deleteJob}
                />


            </>
        )
    }
}
export default MyComponent;