import img from './WhatsApp Image 2021-10-21 at 17.51.24.jpeg'

function Main() {
  return (
    <div className="Main">
        <div>
            <img src={img} className="img"/>
            <h1 className='Main-heading'>Syed Arsalan Khan</h1>
            <h3 className='Main-Subheading'>Frontend Developer</h3>
            <p className='Main-small'>arsalansyed.website</p>
        </div>
        <div class='btn-div'>
            <button className='email-btn'><a href="mailto:as4310291@gmail.com">Email</a></button>
            <button className='linkdeln-btn'><a href='https://www.linkedin.com/in/syed-arsalan-khan-625480199/'>Linkedln</a></button>
        </div>
        <div className='content'>
        <h2 className='headA'>About</h2>
        <p>I am a frontend developer with a particular 
            interest in making things simple and automating 
            daily tasks. I try to keep up with security and 
            am always looking for new things to learn.
        </p>
        <h2 className='headI'>Interests</h2>
        <p>Playing sports and Video Games, internet fanatic, 
            Problem solving, Movies and TV shows.
        </p>
        </div>
    </div>
  )
}

export default Main