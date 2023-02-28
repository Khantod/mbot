import React from 'react'
import macbook from "./assets/macbook.png";

export default function Card() {
    const produkUnggulan = [
        {
            id : 1,
            namaProduk : "Macbook Pro M1 256GB",
            harga : "Rp.19.000.000",
            img : "https://blogger.googleusercontent.com/img/a/AVvXsEhfnC8e4DSILkLQ2MO0i7OJXHwo2kjQuTTm8vQrnGFap2X0GhI9r6x1bjC4jFNGxt_-nIN_IiO0ExKibbI0vic34JDSEurjFL_hZfXva_vY8IP_YN4vhCNTDVoJa32zkms3_PJb37wACE-Z_Oqto1juv7OUSwIVvQ47OcuoT0czEuDnUJE22Ex9oU8w7A"
        },
        {
            id : 2,
            namaProduk : "Macbook Pro M2 256GB",
            harga : "Rp.28.000.000",
            img: "https://blogger.googleusercontent.com/img/a/AVvXsEi-gBpzrNwai73e3uoJaqMfZmQyP5saNp9VzPlx9-nGdDbr2gJfq8LRPztt62zA1nnHgFSnnAquO6MG0YwoAUuKwcE5UyKKPxKKiqjJHDucc6LoVNpE0HzbBsGMFfm9BjMoS7cAK3Q2iZnQ-Xs_SHed60PzQi_XCjBl-c74xGgqfjQ1BcShXlqDUweBog"
        },
        {
            id : 3,
            namaProduk : "iPhone 14 Pro Max",
            harga : "Rp.16.000.000",
            img : "https://blogger.googleusercontent.com/img/a/AVvXsEiGmz-KP1UO3Zk1f0dTq1PErI9D6VI3ZTgWmhY7I-8ulXwhuEDeduDAPg2D2KIpBAUwuBkMthm5mTHESyoauJdi5WJWBVnJGvub0itgAThRKfV0ga1NA2FgLE5_p6edQJTLJUV4SRvdSp2Jeg_nRxinHIcrVyga_eUXnJxZgC75MXTQu1x-cSTCAuyihg"
        },
        {
            id : 4,
            namaProduk : "iMac 24-inch M1 512GB",
            harga : "Rp.34.000.000",
            img : "https://blogger.googleusercontent.com/img/a/AVvXsEjm4nISL2uzOex91uKtoVS2uSqas7Zh7KuViCi_BobiGJxTHqqDyVkSADc5Iccayt1Fzz5kyeC-mfcrL0s77GfM2AbsDnWj32aIWlStCHSVqCfBdQADfoqQ2H4Kx1VpLvfg_T90wb9mwHHlRJAkpRr2Mh6H3LqDmk8Dt9W4XCWF30JuRN2Zmav79D896g"
        }
    ]
  return (
    <>
    <div className="w-screen flex justify-center mt-12">
    <span className='w-1/3 border-b-2 border-black'></span>
    <div className="px-12">
      <p className='text-lg'>Best Product</p>
    </div>
    <span className='w-1/3 border-b-2 border-black'></span>
    </div>
    <div className="w-screen">
      <div className="flex flex-row w-screen justify-center">
        {produkUnggulan.map((produkUnggulan) => (
          <div className="flex flex-col items-start bg-white p-4 rounded-[20px] shadow-lg mx-4 my-8">
          <img src={produkUnggulan.img} alt="" className="h-48 w-48 object-contain mb-4" />
          <div className="text-left">
            <h2 className="text-md font-thin">{produkUnggulan.namaProduk}</h2>
            <p className="text-gray-500">{produkUnggulan.deskripsi}</p>
            <p className="text-md font-thin mt-2">{produkUnggulan.harga}</p>
          </div>
          <button className="bg-blue-800 text-white px-4 py-2 rounded-full mt-4 text-thin text-sm">BUY NOW</button>
        </div>
        
        ))}
      </div>
    </div>
</>
  )
}
