function ContactPage() {
  return (
    <div>
      <div className={'text-center my-32'}>
        <h1 className={'font-wonderful-branding text-8xl'}>Contact</h1>
      </div>
      <div className={'grid grid-cols-2 gap-10 text-center mb-14'}>
        <div>
          <span className={'font-wonderful-branding text-4xl mb-14'}>Mobile Number</span>
          <div className={'font-nixie-one text-3xl'}>
            <div className={'mb-2'}>
              <a href="tel:(+63) 969 120 6142">(+63) 969 120 6142</a>
            </div>
            <div>
              <a href="tel:(+63) 915 355 8373">(+63) 915 355 8373</a>
            </div>
          </div>
        </div>
        <div>
          <span className={'font-wonderful-branding text-4xl mb-14'}>Email</span>
          <div className={'font-nixie-one text-3xl'}>
            <a href="mailto:ezra.hupp@gmail.com">ezra.hupp@gmail.com</a>
          </div>
        </div>
      </div>
      <div className={'text-center'}>
        <div>
          <span className={'font-wonderful-branding text-4xl mb-14'}>Instagram/Twitter</span>
          <div className={'font-nixie-one text-3xl'}>
            @ezrahupp
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage