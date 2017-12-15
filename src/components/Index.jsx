/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export default class Index extends React.Component {
  componentDidMount() {
    // if no data is present, need to reset user auth
    if(_.isEmpty(this.props.auth)) {
      console.log('No auth data found!')
    }
    else {
      console.log('Auth data: '+this.props.auth)
    }
  }

  render() {
    // if(_.isEmpty(this.props.employees)) {
    //   return <div className="container loader">Loading...</div>;
    // }
    return (
      <div className='container home'>
        <ul className="cards center">
            <li className="card card-inline" key={1}>
                <img className="card-img-top card-image" src='http://via.placeholder.com/100x100' />
                <div className="card-block">
                <h4 className="card-title">Not Logged In</h4>
                <p className="card-text">Need to Log In First</p>
                </div>
            </li>
        </ul>
      </div>
    );
  }
}
