import React, { Component } from 'react'
import Link from 'next/link'

class Footer extends Component {

    render() {
        return (
            <footer>
               <div className="wrapper flex">
                    <div className="flex-half left">Inthanin Guild Camp</div>
                    <div className="flex-half right"><iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Finthaninguidecamp%2F&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width="450" height="80"style={{border:'none', overflow: 'hidden', scrolling: 'no', frameborder: 0,  allowTransparency: 'true'}}></iframe></div>
               </div>
            </footer>
        )
    }
}


export default Footer
