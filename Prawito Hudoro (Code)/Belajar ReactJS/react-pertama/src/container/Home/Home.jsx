import React, { Component } from 'react';
import BlogPost from '../BlogPost/BlogPost';
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
import LifeCycleComp from '../LifeCycleComponent/LifeCycleCom';
// import Product from '../Product/Product';

class Home extends Component {
    state = {
        showComponent: true
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             showComponent: false
    //         })
    //     }, 15000)
    // }

    render() {
        return (
            <div>
                {/* <p>Youtube Component</p>
                belajar props

                <hr/>
                <YoutubeComp time="7.12" name="Learn React JS Beginner" desc="100x Ditonton. 2 Hari yang lalu"/>
                <YoutubeComp time="8.12" name="Learn React JS Medium" desc="300k Ditonton. 4 Hari yang lalu"/>
                <YoutubeComp time="20.00" name="Learn React JS Expert" desc="900k Ditonton. 6 Hari yang lalu"/>
                <YoutubeComp time="09.00" name="Learn Html" desc="1k Ditonton. 10 menit yang lalu"/>
                <YoutubeComp name="Learn CSS" /> */}

                {/* <p>Counter</p>
                belajar state

                <hr />
                <Product /> */}

                {/* <p>LifeCycle Component</p>
                <hr />
                {
                    this.state.showComponent ? 
                    <LifeCycleComp /> : null
                } */}

                <p>Blog Post</p>
                <hr />
                <BlogPost />
            </div>
        )
    }
}


export default Home