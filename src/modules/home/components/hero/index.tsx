import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (

    <div >
      <div className="relative isolate overflow-hidden  ">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 -z-10 h-full w-full  object-cover"
        />
        <div className="mx-auto backdrop-blur-[2px] bg-black/40 py-32 sm:py-48 lg:py-56 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white font-semibold ring-1 ring-green-600 ">
              Find your best home appliances products.{' '}
              <LocalizedClientLink href="/store" className="font-semibold text-green-400">
                <span aria-hidden="true" className="absolute inset-0" />
                Visit Store <span aria-hidden="true">&rarr;</span>
              </LocalizedClientLink>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Elevate Your Home with Premium Products
            </h1>
            <p className="mt-6 max-w-2xl text-center mx-auto text-lg leading-8 text-gray-200">
              Transform your living space with our carefully selected range of home products. From stylish decor to innovative kitchen gadgets, each item is designed to enhance comfort and functionality. Elevate your home today with quality you can trust!
            </p>

          </div>
        </div>

      </div>
    </div>

  )



}

export default Hero
