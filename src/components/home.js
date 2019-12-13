import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/userAction';
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            user:null
        }
    }
    componentDidMount() {
        this.props.fetchUsers()
    }
    render() {
        console.log(this.props.users.users)
        return (
            <div className='container' >
                <br />
                <br />
                <h1 style={{ width: "100%", margin: "0 auto", textAlign: "center" }} >USERS</h1>
                <br />
                <br />
                <div className='row' >
                    {this.props.users.users && this.props.users.users.map((user) => {
                        return (
                            <div className='col-sm col-md-4' key={user.id} >

                                <div class="card text-center mb-4 " onClick={()=>console.log('helo')}  data-toggle="modal" data-target="#exampleModal">
                                    <div class="card-header">
                                        {user.name}
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">{user.email}</h5>
                                        <p class="card-text">{user.address.city}</p>
                                        <p>{user.phone}</p>
                                        <a href="hildegard.org" >{user.website}</a>
                                        <p>{user.company.name}</p>
                                    </div>
                                    <div class="card-footer text-muted">

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Update User</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <di>
                                    
                                </di>
                             </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    users: state.users
})
export default connect(mapStateToProps, { fetchUsers })(Home);

