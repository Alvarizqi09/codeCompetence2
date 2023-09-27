import './About.css'
const About = () => {
  return (
    <div className="About w-full h-screen grid place-items-center">
        <div className="w-1/2 bg-neutral-300 p-12 shadow-md rounded-md">
            <h1 className="text-4xl font-semibold mb-6 text-f85370">
                About Us
            </h1>
            <p className="text-gray-700 text-lg leading-7 mb-8 text-justify">
                Eventify merupakan platform yang bergerak pada bidang ticketing dan promosi event yang di khususkan untuk menjual ticket konser secara online,sehingga dapat memudahkan para pengguna baik yang hendak membeli tiket konser maupun bagi penyelenggara yang hendak mempromosikan serta menjualkan tiket event nya.
            </p>
        </div>
    </div>
  )
}

export default About