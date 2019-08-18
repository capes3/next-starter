import React from 'react'
import css from './footer.css'

class Footer extends React.Component {
    render () {
      return <div className={css.footer}>
        <div>
          logo
        </div>
        <div>
          menu
        </div>
        <div>
          social
        </div>
      </div>
    }
  }

  export default Footer