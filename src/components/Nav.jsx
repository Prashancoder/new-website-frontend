import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { IoMdPerson } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiSplitCross } from "react-icons/gi";

import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../redux/userSlice';
function Nav() {
  let [showHam,setShowHam] = useState(false)
  let [showPro,setShowPro] = useState(false)
  let [openMenu,setOpenMenu] = useState(null)
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let {userData} = useSelector(state=>state.user)

  const navigationItems = [
    { label: 'Home', link: '/' },
    {
      label: 'Courses',
      submenu: [
        {
          label: 'Permanent Makeup',
          submenu: [
            { label: "Master's in Permanent Eyebrows", link: '/courses/permanent-makeup/masters-eyebrows' },
            { label: 'Master class in Scalp Micropigmentation', link: '/courses/permanent-makeup/master-scalp' },
            { label: 'PG Diploma in Permanent Make up', link: '/courses/permanent-makeup/pg-diploma' },
            { label: 'Certificate Course in Lip Micropigmentation', link: '/courses/permanent-makeup/cert-lip' },
            { label: 'Certificate in Brows and Lash Lift', link: '/courses/permanent-makeup/cert-brows-lash' },
            { label: 'Certificate in Scalp Micropigmentation', link: '/courses/permanent-makeup/cert-scalp' },
            { label: 'Certificate course in Laser Hair Reduction', link: '/courses/permanent-makeup/cert-laser-hair' },
            { label: 'Certificate Course Skin Technicial', link: '/courses/permanent-makeup/cert-skin-tech' },
          ]
        },
        {
          label: 'Cosmetology',
          submenu: [
            { label: 'Master Class in Chemical Peels', link: '/courses/cosmetology/master-chemical-peels' },
            { label: 'Diploma in Advanced Cosmetology', link: '/courses/cosmetology/diploma-advanced' },
            { label: 'Certificate in Professional Cosmetology', link: '/courses/cosmetology/cert-professional' },
            { label: 'Certificate Course in Medicated Hydrafacial', link: '/courses/cosmetology/cert-hydrafacial' },
            { label: 'Certificate Courses in Chemical Peels', link: '/courses/cosmetology/cert-chemical-peels' }
          ]
        },
        {
          label: 'Facial Aesthetics',
          submenu: [
            { label: 'Masters in Facial Aesthetics', link: '/courses/facial-aesthetics/masters' },
            { label: 'Master Class In Lipolytic Injections', link: '/courses/facial-aesthetics/master-lipolytic' },
            { label: 'Master Class in Nose correction', link: '/courses/facial-aesthetics/master-nose' },
            { label: 'Master Class In Acne Scar Treatment', link: '/courses/facial-aesthetics/master-acne' },
            { label: 'Masters Class in Plasma Pen', link: '/courses/facial-aesthetics/master-plasma' },
            { label: 'Master class in Under eye rejuvenation', link: '/courses/facial-aesthetics/master-undereye' },
            { label: 'Master class in Lip Fillers', link: '/courses/facial-aesthetics/master-fillers' },
            { label: 'PG Diploma in Facial Aesthetics', link: '/courses/facial-aesthetics/pg-diploma' },
            { label: 'Certificate Course in Lipolytic Injections', link: '/courses/facial-aesthetics/cert-lipolytic' }
          ]
        },
        {
          label: 'Fellowship Courses',
          submenu: [
            { label: 'Fellowship in Permanent Make up and Cosmetology', link: '/courses/fellowship/permanent-cosmetology' },
            { label: 'Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology', link: '/courses/fellowship/facial-permanent-cosmetology' },
            { label: 'Fellowship in Facial Aesthetics', link: '/courses/fellowship/facial-aesthetics' },
            { label: 'Fellowship in Permanent Make up & Cosmetology, Medical Micropigmentation , Plasma Pen', link: '/courses/fellowship/permanent-micropigmentation' },
            { label: 'Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology, Medical Micropigmentation , Plasma Pen', link: '/courses/fellowship/facial-permanent-micropigmentation' }
          ]
        }
      ]
    },
    {
      label: 'Services',
      submenu: [
        {
          label: 'Permanent Makeup',
          submenu: [
            { label: 'Microblading', link: '/services/permanent-makeup/microblading' },
            { label: 'Ombre Brows', link: '/services/permanent-makeup/ombre-brows' },
            { label: 'Powder Brows', link: '/services/permanent-makeup/powder-brows' },
            { label: 'Combination Brows', link: '/services/permanent-makeup/combination-brows' },
            { label: 'Permanent Lip Color', link: '/services/permanent-makeup/lip-color' },
            { label: 'Permanent Beauty Spot', link: '/services/permanent-makeup/beauty-spot' },
            { label: 'Eye Lash Lift', link: '/services/permanent-makeup/lash-lift' },
            { label: 'Eyebrows Lamination', link: '/services/permanent-makeup/eyebrows-lamination' },
            { label: 'Scalp Micro Pigmentation', link: '/services/permanent-makeup/scalp-micropigmentation' },
            { label: 'Stretch Mark Camouflage', link: '/services/permanent-makeup/stretch-mark-camouflage' },
            { label: 'Vitiligo Camouflage', link: '/services/permanent-makeup/vitiligo-camouflage' }
          ]
        },
        {
          label: 'Cosmetology',
          submenu: [
            { label: 'Vampire Facial', link: '/services/cosmetology/vampire-facial' },
            { label: 'Mesotherapy', link: '/services/cosmetology/mesotherapy' },
            { label: 'PRP for Hair', link: '/services/cosmetology/prp-hair' },
            { label: 'HydraFacial', link: '/services/cosmetology/hydrafacial' },
            { label: 'Dermaplaning', link: '/services/cosmetology/dermaplaning' },
            { label: 'Medicated Facial', link: '/services/cosmetology/medicated-facial' },
            { label: 'Laser Hair Reduction', link: '/services/cosmetology/laser-hair-reduction' },
            { label: 'Wellness Drips', link: '/services/cosmetology/wellness-drips' }
          ]
        },
        {
          label: 'Facial Aesthetics',
          submenu: [
            { label: 'Botox', link: '/services/facial-aesthetics/botox' },
            { label: 'Face Lift', link: '/services/facial-aesthetics/face-lift' },
            { label: 'Thread Lift', link: '/services/facial-aesthetics/thread-lift' },
            { label: 'Nose Fillers', link: '/services/facial-aesthetics/nose-fillers' },
            { label: 'Chin & Jawline Augmentation', link: '/services/facial-aesthetics/chin-jawline' },
            { label: 'Lip Fillers', link: '/services/facial-aesthetics/lip-fillers' },
            { label: 'Chemical Peels', link: '/services/facial-aesthetics/chemical-peels' },
            { label: 'Acne Scar Treatment', link: '/services/facial-aesthetics/acne-scar' },
            { label: 'Vitamin Drips', link: '/services/facial-aesthetics/vitamin-drips' },
            { label: 'PDRN', link: '/services/facial-aesthetics/pdrn' },
            { label: 'Profhilo', link: '/services/facial-aesthetics/profhilo' },
            { label: 'Hyperhidrosis', link: '/services/facial-aesthetics/hyperhidrosis' },
            { label: 'Polynucleotides', link: '/services/facial-aesthetics/polynucleotides' },
            { label: 'Exosomes', link: '/services/facial-aesthetics/exosomes' },
            { label: 'Neck Rejuvenation', link: '/services/facial-aesthetics/neck-rejuvenation' },
            { label: 'Hands Rejuvenation', link: '/services/facial-aesthetics/hands-rejuvenation' }
          ]
        },
        {
          label: 'Dentistry',
          submenu: [
            { label: 'Veneers Dentures', link: '/services/dentistry/veneers-dentures' },
            { label: 'Smile Designing', link: '/services/dentistry/smile-designing' },
            { label: 'Invisalign', link: '/services/dentistry/invisalign' },
            { label: 'Extractions', link: '/services/dentistry/extractions' },
            { label: 'Gum Surgeries', link: '/services/dentistry/gum-surgeries' },
            { label: 'Orthodontics', link: '/services/dentistry/orthodontics' },
            { label: 'Teeth Whitening', link: '/services/dentistry/teeth-whitening' },
            { label: 'Dental Implants', link: '/services/dentistry/dental-implants' },
            { label: 'Crown & Bridges', link: '/services/dentistry/crown-bridges' },
            { label: 'Gum Depigmentation', link: '/services/dentistry/gum-depigmentation' },
            { label: 'Root Canal Treatment', link: '/services/dentistry/root-canal' },
            { label: 'Tooth Colored Fillings', link: '/services/dentistry/tooth-colored-fillings' },
            { label: 'Oral Cancer Screening', link: '/services/dentistry/oral-cancer' }
          ]
        }
      ]
    },
    {
      label: 'Media',
      submenu: [
        { label: 'Gallery', link: '/media/gallery' }
      ]
    },
    {
      label: 'Our Clinics',
      submenu: [
        { label: 'Amritsar', link: '/clinics/amritsar' },
        { label: 'Gurgaon', link: '/clinics/gurgaon' },
        { label: 'Jammu', link: '/clinics/jammu' }
      ]
    },
    {
      label: 'Shop',
      submenu: [
        { label: 'Permanent Makeup', link: '/shop/permanent-makeup' },
        { label: 'Cosmetology', link: '/shop/cosmetology' },
        { label: 'Facial Aesthetics', link: '/shop/facial-aesthetics' }
      ]
    },
    { label: 'Academy', link: '/academy' },
    { label: 'Contact Us', link: '/contact' }
  ]

  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout" , {withCredentials:true})
      console.log(result.data)
     await dispatch(setUserData(null))
      toast.success("LogOut Successfully")
    } catch (error) {
      console.log(error.response.data.message)
    }
  }
  return (
    <div>
    <div className='w-[100%] h-[80px] fixed top-0 px-[20px] py-[10px] flex items-center justify-between bg-[#00000047]  z-10'>
     <div className='lg:w-[20%] w-[40%] lg:pl-[50px] '>
        <img src={logo} className=' w-[250px]  rounded-[5px]  border-white cursor-pointer' onClick={()=>navigate("/")} alt="" />
      
     </div>
     
    <div className='w-[60%] lg:flex items-center justify-center gap-4 hidden'>
        {navigationItems.map((item, idx) => (
          <div
            key={idx}
            className='relative text-white'
            onMouseEnter={() => setOpenMenu(idx)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span
              className='px-[12px] py-[8px] rounded-[8px] hover:bg-black/60 cursor-pointer'
              onClick={() => item.link && navigate(item.link)}
            >
              {item.label}
            </span>
            {item.submenu && openMenu === idx && (
              <div className='absolute top-[110%] left-0 bg-white text-black rounded-md shadow-lg p-3 grid grid-cols-1 gap-2 min-w-[260px] z-20'>
                {item.submenu.map((sub, sIdx) => (
                  <div key={sIdx} className='group relative'>
                    <div
                      className='px-3 py-2 rounded hover:bg-black hover:text-white cursor-pointer'
                      onClick={() => sub.link && navigate(sub.link)}
                    >
                      {sub.label}
                    </div>
                    {sub.submenu && (
                      <div className='absolute top-0 left-[100%] ml-2 bg-white text-black rounded-md shadow-lg p-3 grid grid-cols-1 gap-2 min-w-[260px] hidden group-hover:grid'>
                        {sub.submenu.map((leaf, lIdx) => (
                          <div
                            key={lIdx}
                            className='px-3 py-2 rounded hover:bg-black hover:text-white cursor-pointer'
                            onClick={() => leaf.link && navigate(leaf.link)}
                          >
                            {leaf.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        
        {!userData ? <IoMdPerson className='w-[50px] h-[50px] fill-white cursor-pointer border-[2px] border-[#fdfbfb] bg-[#000000d5] rounded-full p-[10px]'onClick={()=>setShowPro(prev=>!prev)}/>:

        
        
       <div className='w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black  border-white cursor-pointer' onClick={()=>setShowPro(prev=>!prev)}>
         {userData.photoUrl ? <img src={userData.photoUrl} className='w-[100%] h-[100%] rounded-full object-cover' alt="" />
         :
         <div className='w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black  border-white cursor-pointer' >{userData?.name.slice(0,1).toUpperCase()}</div>}
          </div>}
           {userData?.role == "educator" ? <div className='px-[20px] py-[10px] border-2 lg:border-white border-black lg:text-white bg-[black] text-black rounded-[10px] text-[18px] font-light flex gap-2 cursor-pointer' onClick={()=>navigate("/dashboard")}>Dashboard</div>
           :""}
        {!userData && <span className='px-[20px] py-[10px] border-2 border-white text-white rounded-[10px] text-[18px] font-light cursor-pointer bg-[#000000d5] ' onClick={()=>navigate("/login")}>Login</span>}
        {userData && <span className='px-[20px] py-[10px] bg-white text-black rounded-[10px] shadow-sm shadow-black text-[18px] cursor-pointer' onClick={handleLogout}>LogOut</span>}
       

     </div>
     {showPro && <div className=' absolute top-[110%] right-[15%] flex items-center flex-col justify-center gap-2 text-[16px] rounded-md bg-[white] px-[15px] py-[10px] border-[2px]  border-black hover:border-white hover:text-white cursor-pointer hover:bg-black  ' >
      <span className='bg-[black] text-white  px-[30px] py-[10px] rounded-2xl hover:bg-gray-600' onClick={()=>navigate("/profile")}>My Profile</span>
      <span className='bg-[black] text-white hover:bg-gray-600  px-[25px] py-[10px] rounded-2xl' onClick={()=>navigate("/enrolledcourses")}>My Courses</span>
       </div>}
     <GiHamburgerMenu className='w-[30px] h-[30px] lg:hidden fill-white cursor-pointer ' onClick={()=>setShowHam(prev=>!prev)}/>
      
     
    </div>
    <div className={`fixed  top-0 w-[100vw] h-[100vh] bg-[#000000d6] flex items-center justify-center flex-col gap-5 z-10 ${showHam?"translate-x-[0%] transition duration-600  ease-in-out" :"translate-x-[-100%] transition duration-600  ease-in-out"}`}>
     <GiSplitCross  className='w-[35px] h-[35px] fill-white absolute top-5 right-[4%]' onClick={()=>setShowHam(prev=>!prev)}/>
      {!userData ? <IoMdPerson className='w-[50px] h-[50px] fill-white cursor-pointer border-[2px] border-[#fdfbfb7a] bg-[#000000d5] rounded-full p-[10px]'/>:
      <div className='w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black  border-white cursor-pointer' onClick={()=>setShowPro(prev=>!prev)}>
         {userData.photoUrl ? <img src={userData.photoUrl} className='w-[100%] h-[100%] rounded-full object-cover ' alt="" />
         :
         <div className='w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black  border-white cursor-pointer' >{userData?.name.slice(0,1).toUpperCase()}</div>}</div>
      }
      
      {/* Mobile navigation list */}
      <div className='w-[90%] max-h-[55vh] overflow-y-auto'>
        {navigationItems.map((item, idx) => (
          <div key={idx} className='text-white w-full'>
            <div
              className='px-4 py-3 border border-white/20 rounded-md mb-2 bg-black/40 cursor-pointer'
              onClick={() => item.link && navigate(item.link)}
            >
              {item.label}
            </div>
            {item.submenu && (
              <div className='pl-3'>
                {item.submenu.map((sub, sIdx) => (
                  <div key={sIdx} className='mb-1'>
                    <div
                      className='px-3 py-2 rounded bg-black/30 border border-white/10 cursor-pointer'
                      onClick={() => sub.link && navigate(sub.link)}
                    >
                      {sub.label}
                    </div>
                    {sub.submenu && (
                      <div className='pl-3 mt-1'>
                        {sub.submenu.map((leaf, lIdx) => (
                          <div
                            key={lIdx}
                            className='px-3 py-2 rounded hover:bg-white hover:text-black cursor-pointer'
                            onClick={() => navigate(leaf.link)}
                          >
                            {leaf.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <span className='flex items-center justify-center gap-2  text-white border-[2px] border-[#fdfbfb7a] bg-[#000000d5] rounded-lg px-[65px] py-[20px] text-[18px] ' onClick={()=>navigate("/profile")}>My Profile </span>
      <span className='flex items-center justify-center gap-2  text-white border-[2px] border-[#fdfbfb7a] bg-[#000000d5] rounded-lg px-[65px] py-[20px] text-[18px] ' onClick={()=>navigate("/enrolledcourses")}>My Courses </span>
      
      {userData?.role == "educator" ? <div className='flex items-center justify-center gap-2 text-[18px] text-white border-[2px] border-[#fdfbfb7a] bg-[#000000d5] rounded-lg px-[60px] py-[20px]' onClick={()=>navigate("/dashboard")}>Dashboard</div>
           :""}
      {!userData ?<span className='flex items-center justify-center gap-2 text-[18px] text-white border-[2px] border-[#fdfbfb7a] bg-[#000000d5] rounded-lg px-[80px] py-[20px]' onClick={()=>navigate("/login")}>Login</span>:
      <span className='flex items-center justify-center gap-2 text-[18px] text-white border-[2px] border-[#fdfbfb7a] bg-[#000000d5] rounded-lg px-[75px] py-[20px]' onClick={handleLogout}>LogOut</span>}
    

    </div>
   </div>
      
  )
}

export default Nav