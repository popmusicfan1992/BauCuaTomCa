import React, { Component } from 'react';
import './UserProfile.css';
import Swal from 'sweetalert2';
export default class UserProfile extends Component {
    state = {
        values: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            passWord: '',
            passWordConfirm: '',
        },
        errors: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            passWord: '',
            passWordConfirm: '',
        }


    };
    HandleChange = (event) => {
        let { name, value, type } = event.target;

        let newValues = { ...this.state.values, [ name ]: value };
        let newErrors = { ...this.state.errors };
        if (value.trim() === '') {
            newErrors[ name ] = name + ' is required !';
        } else {
            newErrors[ name ] = '';
        }
        if (type === 'email') {
            const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(value)) {
                newErrors[ name ] = 'email is invalid!';
            } else {
                newErrors[ name ] = '';
            }
        }
        if (name === 'passWordConfirm') {
            if (value != newValues[ 'passWord' ]) {
                newErrors[ name ] = name + ' is invalid';
            } else {
                newErrors[ name ] = '';
            }
        }


        this.setState({
            values: newValues,
            errors: newErrors
        });
        // this.setState({
        //     [ name ]: value
        // }, () => {
        //     console.log(this.state);
        // });
    };
    handleSubmit = (event) => {
        //Cản trình duyệt submit reload lại trang
        event.preventDefault();
        let { values, errors } = this.state;
        let valid = true;
        let profileContent = '';
        for (let key in values) {
            if (values[ key ] === '') {
                valid = false;
            }
            profileContent += `
                <p class='text-left'> <b>${key}: </b> ${values[ key ]}</p>
            `;
        }

        for (let key in errors) {
            if (errors[ key ] !== '') {
                valid = false;
            }
        }
        if (!valid) {
            Swal.fire({
                title: 'Your Profile Errors!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
        Swal.fire({
            title: 'Your Profile!',
            html: profileContent,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };
    render() {
        return (
            <div className='container-fluid' style={{ backgroundColor: '#EEEEEE', display: 'flex', justifyContent: 'center' }}>
                <form className='w-50 bg-white p-5 m-5'>
                    <h1 className='text-center mt-0 mb-4'>User Profile</h1>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className="group">
                                    <input type="text" value={this.state.values.firstName} required name='firstName' onChange={this.HandleChange} />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>First Name</label>
                                    <span className='text text-danger'>{this.state.errors.firstName}</span>
                                </div>

                            </div>
                            <div className='col-6'>
                                <div className="group">
                                    <input type="text" value={this.state.values.lastName} required name='lastName' onChange={this.HandleChange} />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>Last Name</label>
                                    <span className='text text-danger'>{this.state.errors.lastName}</span>
                                </div>

                            </div>

                        </div>
                        <div className='col-12 px-0'>
                            <div className="group">
                                <input type="text" value={this.state.values.userName} required name='userName' onChange={this.HandleChange} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>userName</label>
                                <span className='text text-danger'>{this.state.errors.userName}</span>
                            </div>

                        </div>
                        <div className='col-12 px-0'>
                            <div className="group">
                                <input type="email" value={this.state.values.email} required name='email' onChange={this.HandleChange} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Email</label>
                                <span className='text text-danger'>{this.state.errors.email}</span>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className="group">
                                    <input type="password" value={this.state.values.passWord} required name='passWord' onChange={this.HandleChange} />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>Password</label>
                                    <span className='text text-danger'>{this.state.errors.passWord}</span>
                                </div>

                            </div>
                            <div className='col-6'>
                                <div className="group">
                                    <input type="password" value={this.state.values.passWordConfirm} required name='passWordConfirm' onChange={this.HandleChange} />
                                    <span className="highlight" />
                                    <span className="bar" />
                                    <label>Password Confirm</label>
                                    <span className='text text-danger'>{this.state.errors.passWordConfirm}</span>
                                </div>

                            </div>
                            <div className='col-12'>
                                <button onClick={this.handleSubmit} className='btn text-white bg-dark w-100' style={{ fontSize: 25 }}>Submit</button>

                            </div>

                        </div>
                    </div>



                </form>
            </div>

        );
    }
}
