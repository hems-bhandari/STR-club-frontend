import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div className='contact-block' >
		 <a name="contact"></a>
					<div className='container' >
						<div className='row' >
							<div className='row-container' >
							
								<div className='section-header text-center' >
									<h2 className='animate text-over-block' >Contact Form</h2>
									{/* divider */}
									<div className='divider-draft center' ></div>
									{/* divider */}
									<p>
										For further queries, use the form below!
									</p>
								</div>
							
							</div>
						</div>
						
						<div className='row' >
							<div className='row-container' >
								
								<form id='contact-form' className='contact-form' action="https://formspree.io/f/#" method="POST" data-toggle='validator' >
			
									<div className='row' >
										
										<div className='col-md-6' >
											
											<div className='form-group' >
												<input type='text' className='form-control' placeholder='Name' required name="name"></input>
												
												<div className='help-block with-errors' ></div>
											</div>
										
										</div>
										
										<div className='col-md-6' >
											<div className='form-group' >
												<input type='email' className='form-control' placeholder='Email' required name="email"></input>
							
											</div>
										</div>
										
									</div>
									
									
									<div className='form-group' >
										<textarea rows='5' className='form-control' placeholder='Message' required name="message"></textarea>
										<div className='help-block with-errors' ></div>
									</div>
									
									<div className='form-group text-center' >
                                        <input type="submit" value="Submit" id='btn'/>
									</div>
									
									
								</form>
							</div>
						</div>

						
					</div>
				</div>
  )
}
export default Contact;