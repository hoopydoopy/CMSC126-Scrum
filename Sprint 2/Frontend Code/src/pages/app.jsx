import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()

  const handleOnClick = (filter) => () => {
    navigate(`blogs?filter=${filter}`)
  }

  return (
    <div>
      <div
        className={'bg-cover bg-center  flex justify-center items-center flex-column rounded-lg'}
        style={{ backgroundImage: 'url("../media/travel_4.jpg")', height: 520 }}>
        <div>
          <div
            className={'font-wonderful-branding text-8xl text-white mb-20 text-center text-stone-50'}>
            The
          </div>
          <div className={'font-wonderful-branding text-8xl text-white text-stone-50'}>
            Wanderer
          </div>
        </div>
      </div>
      <div className={'grid grid-cols-3 gap-5 mt-10'}>
        <div
          onClick={handleOnClick('biking')}
          style={{ backgroundImage: 'url("../media/biking_3.jpg")' }}
          className="flex justify-center items-center w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 bg-cover bg-center cursor-pointer">
          <span className={'font-wonderful-branding text-white text-5xl'}>Biking</span>
        </div>
        <div
          onClick={handleOnClick('travel')}
          style={{ backgroundImage: 'url("../media/travel_3.jpg")' }}
          className="flex justify-center items-center w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 bg-cover bg-center cursor-pointer">
          <span className={'font-wonderful-branding text-white text-5xl'}>Travel</span>
        </div>
        <div
          onClick={handleOnClick('diving')}
          style={{ backgroundImage: 'url("../media/diving_2.jpg")' }}
          className="flex justify-center items-center w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 bg-cover bg-center cursor-pointer">
          <span className={'font-wonderful-branding text-white text-5xl'}>Diving</span>
        </div>
      </div>
    </div>
  );
}

export default App;
