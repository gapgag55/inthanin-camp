import React, { Component } from 'react'
import Link from 'next/link'

class Footer extends Component {

    render() {
        return (
            <footer>
               <div className="wrapper flex">
                    <div className="flex-half left">Inthanin Guild Camp</div>
                    <div className="flex-half right"><Link href="https://www.facebook.com/Inthanin-Guide-Camp-267430787042458/"><a target="_blank">Fanpage</a></Link></div>
               </div>
            </footer>
        )
    }
}


export default Footer
