import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='container'>
      <form>
        <div className="mb-3">
          <label htmlFOR="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" onChange={onchange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFOR="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" onChange={onchange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        {/* <div className="mb-3">
    <label htmlFOR="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={onchange} />
  </div>
  <div className="mb-3">
    <label htmlFOR="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" onChange={onchange} />
  </div> */}
        <div className="mb-3">
          <label htmlFOR="text" className="form-label">Message</label>
          <input type="text" className="form-control" id="Message" onChange={onchange} />
        </div>

        <button type="submit" className="btn btn-dark">Submit</button>
      </form>    </div>
      <h3 align="center" className='hiii'>Connect with me:</h3>
      <div align="center" className='acc'>
        <a href="https://twitter.com/heyajaysingh" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="heyajaysingh" height="50" width="60" className='tw'/></a>
        <a href="https://linkedin.com/in/ajay-singh-654117223" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ajay-singh-654117223" height="30" width="40" className='lin'/></a>
        <a href="https://instagram.com/heyajaysingh" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="heyajaysingh" height="50" width="60" className='inst'/></a>
        <a href="https://www.hackerrank.com/heyajaysingh" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="heyajaysingh" height="50" width="60" className='hack'/></a>
        <a href="https://codeforces.com/profile/heyajaysingh" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codeforces.svg" alt="heyajaysingh" height="50" width="60" className='cf'/></a>
        <a href="mailto:ajaysingh07032003@gmail.com" target="blank"><img align="center" src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gmail.max-1100x1100.png" alt="heyajaysingh" height="50" width="60" className='cf'/></a>
        <a href="https://github.com/ajaysinghpanwar2002" target="blank"><img align="center" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="heyajaysingh" height="50" width="60" className='cfg'/></a>
      </div>
      </>
  )
}

export default Contact