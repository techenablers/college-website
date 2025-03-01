import React from 'react'
import NoticeBoard from './NoticeBoard'
import QuickLink from './QuickLink'
import ImportantDates from './ImportantDates'
import "../../../src/styles/information.css"

function Information() {
  return (
    <div className='d-flex justify-content-center align-items-center information-content'>
        <div>
            <NoticeBoard/>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <span><QuickLink/></span>
            <span><ImportantDates/></span>

        </div>
    </div>
  )
}

export default Information