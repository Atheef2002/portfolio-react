import AboutImg from '../IMG/About.png';


export default function Contect() {

    const config = {
        email: 'br.atheef2002.a@gmail.com',
        phone: '+94 719352001'
    }


    return <section id='contact' className='flex flex-col hero-section-bg px-5 py-32 About-title'>
        <div className='flex flex-col items-center font-hero-font'>
            <h1 className='text-4xl mb-5 font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
    </section>
}