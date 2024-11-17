import React from 'react'

const AboutBanner = () => {
  return (
    <>
    <div className='shadow'>
      <div className="flex mx-auto items-center gap-[95px] mt-[150px] ml-[170px] text-start  py-8  ">
        <div className='text-webcolor font-semibold text-[50px] w-[750px]  '><h3>About Skillbridge</h3></div>

        <div className='text-[18px] text-gray-500  w-[730px] '><p >Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.</p></div>
      </div>
      </div>

      <div className=' ml-[170px] mt-[120px] py-20'>
      <h1 className='text-[50px] text-gray-700 '>Achievements</h1>
      <p className='text-gray-600 text-[18px]'>Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements</p>
      </div>
      </>

  )
}

export default AboutBanner
