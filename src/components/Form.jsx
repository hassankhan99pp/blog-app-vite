import React from 'react'

function Form({headerText,buttonText,btnClass}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header">
              <h3>{headerText}</h3>
            </div>
            <div className="card-body">
                <form>
                    <input className='form-control my-2' type="text" placeholder='Enter Your Title' />
                    <textarea className='form-control my-2' name="" id="" placeholder='Enter Your Description'></textarea>
                    <input className='form-control my-2' type="text"  placeholder='Enter Your Author'/>
                    <input className={'btn '+btnClass} type="submit" value={buttonText} />

                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form