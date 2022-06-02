function AboutMePage() {
  return (
    <div>
      <div className={'text-center my-20'}>
        <h1 className={'font-wonderful-branding text-8xl'}>About Me</h1>
      </div>
      <div className={'grid grid-cols-2 grid-row gap-12'}>
        <div className={''}>
          <img src="../media/about-me-picture.png" alt=""/>
        </div>
        <div className={''}>
          <p className={'text-3xl font-nixie-one'}>
            <span className={'font-black font-wonderful-branding text-5xl'}>James Ezra</span> is a college student
            who loves nature and adventure in all forms. His two favorite pastimes reflect this –
            biking and freediving. Whenever he bikes, he makes sure to explore new places,
            especially those less populated. He’s documented his rides along mountains, rivers, and
            roads alike. He also freedives to admire the beauty underneath – which he believes the
            people should also see.
          </p>
          <br/>
          <p className={'text-3xl font-nixie-one'}>
            He photographs his adventures for two reasons: to share to everyone the beauty,
            excitement and life that he feels and witnesses during his adventures, and to remind
            everyone that this beauty needs to be maintained.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMePage