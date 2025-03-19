    import React from 'react'

function ImportantDates() {

    const notice = [
        {
            info:"Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value ",
            
        },
        {
            info:"Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value ",
            
        },
        {
            info:"Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value ",
            
        },
        {
            info:"Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value ",
            
        },
        {
            info:"Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value ",
            
        },
        {
            info:"Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value ",
            
        },
       ]

  return (
    <div style={{ height:'400PX', backgroundColor:'#ffffff',overflowY:'auto', borderRadius: "5px", padding: "25px",scrollbarWidth: "thin"}} >
    <div className='d-flex justify-content-between align-items-center'>
        <h4>Important Dates</h4>
        <p>See All</p>
    </div>
    <hr/>
    {notice.map((val,indx)=>(
        <>
        <div key={indx} className='d-flex justify-content-center align-items-center'>
         
            <p>{val.info}</p>
            
        </div>
        <hr/>   
        </>
    ))}
</div>
  )
}

export default ImportantDates
