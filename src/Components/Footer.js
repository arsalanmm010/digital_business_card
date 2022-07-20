import twitter from './twitter.png';
import fb from './fb.png';
import ig from './ig.jpg'
import github from './github.png'

function Footer() {
  return (
    <div>
      <p className="footer">
        <span className='spn'><a href='none'><img src={twitter}/></a></span>
        <span className='spn'><a href='none'><img src={fb}/></a></span>
        <span className='spn'><a href='none'><img src={ig}/></a></span>
        <span className='spn'><a href='https://github.com/arsalanmm010'><img src={github}/></a></span>
      </p>
    </div>
  )
}

export default Footer