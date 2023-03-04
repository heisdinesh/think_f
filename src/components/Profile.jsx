import React from 'react'
import avatar from "../dev_data/avatar.png"

const Profile = () => {
  return (
    <div  className=" min-h-screen bg-slate-900 justify-center">
      <div className='profile-pic flex items-center  justify-center transform transition duration-500 hover:scale-110'>
                <img src={avatar} alt="avatar" className="w-32 h-32 rounded-md border-zinc-200" />
                </div>
        <h2 className='hello flex items-center justify-center text-4xl text-slate-300 font-semibold  mb-20'>Hey, User!</h2>
    </div>
  )
}

export default Profile
