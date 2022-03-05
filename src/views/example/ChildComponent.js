import React from 'react';
class ChildComponent extends React.Component {
    //key:value
    // state = {
    //     firstName: '',
    //     lastName: ''
    // }
    
    //re-render

    state = {
        showJobs: false
    }
    handleClick = () => {
        this.setState ({
            showJobs: !this.state.showJobs
        })
    }

    handleDeleteJob = (job) => {
        console.log('>>> xóa ', job)
        this.props.deleteJob(job)
    }

    render() {
        // console.log('>>> check props: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;
        //key:value

        let { arrJobs } = this.props;
        let { showJobs } = this.state;

        return (
            <>
                {showJobs === false ?
                <div>
                    <button 
                        onClick={() => this.handleClick()}>show
                    </button>
                </div>
                :
                <>
                    <div className="job-lists">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}$ 
                                    <></> <span onClick={() => this.handleDeleteJob(item)}>x</span>
                                </div>
                            )
                        })

                    }

                    </div>
                    <div>
                        <button 
                            onClick={() => this.handleClick()}>
                            hide
                        </button>
                    </div>
                </>
               
                }
            </>
        )

    }
}

// dùng function component - hooks

// const ChildComponent = (props) => {
//     let {arrJobs} = props;
//     return (
//         <>
//             <div className='job-list'>
//                 {
//                     arrJobs.map((item,index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title}-{item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;