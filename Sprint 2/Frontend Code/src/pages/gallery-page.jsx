import { Image } from 'antd';

function GalleryPage() {
  return (
    <div>
      <div className={'text-center my-20'}>
        <h1 className={'font-wonderful-branding text-8xl'}>Gallery</h1>
      </div>
      <div className={'grid gap-2 grid-cols-3 flex items-center'}>
        <Image.PreviewGroup>
          <Image width={500} src={'media/biking_2.jpg'}/>
          <Image width={500} src={'media/biking_1.jpg'}/>
          <Image width={500} src={'media/biking_4.jpg'}/>
          <Image width={500} src={'media/diving_1.jpg'}/>
          <Image width={500} src={'media/diving_2.jpg'}/>
          <Image width={500} src={'media/diving_3.jpg'}/>
          <Image width={500} src={'media/travel_2.jpg'}/>
          <Image width={500} src={'media/travel_3.jpg'}/>
          <Image width={500} src={'media/travel_4.jpg'}/>
        </Image.PreviewGroup>
      </div>
    </div>
  );
}

export default GalleryPage;
