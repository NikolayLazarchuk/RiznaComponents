import myFoto from '../../images/2.jpg'
import './style.css'
export const FirstComponent = () => (
  <div>
    <h1 style={{ color: 'red' }}>{'Hello World!'}</h1>
    <p className={'text'}>{'I did it!'}</p>
    <img src={myFoto} alt={'myFoto'} />
  </div>
)
