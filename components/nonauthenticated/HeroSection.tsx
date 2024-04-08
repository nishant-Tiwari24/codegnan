'use client'
import 'reactjs-popup/dist/index.css'
import Link from 'next/link'
import AOS from 'aos'
import { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import { SpotLight } from '@react-three/drei'
import Placement from './Placement'
import Navbar from './Navbar'
import CopilotFeature from './CopilotFeature'
import { InfiniteMovingCards } from './Toolkit/MovingCards'
import { AnimatedTooltip } from './Toolkit/Toolkit'



const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
 

const testimonials = [
  {
    quote:
      ' It stands out as a unique application, promoting community engagement and collaborative activities, encompassing both problem-solving and problem creation',
    name: 'ByteRoot',
    title: 'A coding application',
  },
  {
    quote:
      "Byteroot is an application inspired by the concept of the vegetable beetroot, where each individual's contributions contribute to the growth of the community. It stands out as a unique platform, promoting community engagement and collaborative activities in problem-solving and algorithm creation. The platform ensures the validity of posted questions through a stringent validation process, offering users a reliable space to code, problem-solve, and access solutions.",
    name: 'ByteRoot',
    title: 'A coding application',
  },
  {
    quote:
      'Institutions can use the application for conducting discussions, giving assignments to students, and providing an arena for student group assignments/projects and group discussion centers. We plan to implement topic-based segregation of problems to enhance user experience and facilitate better problem-solving.',
    name: 'ByteRoot',
    title: 'A coding application',
  },
  {
    quote:
      'It aims to create a collaborative environment for coders worldwide, where they can share knowledge, solve coding challenges, and engage in discussions, fostering a sense of community and mutual support. By offering a platform for problem-solving, code creation, and discussion, Byteroots encourages innovation and creativity among its users. It serves as a space where new ideas can be explored, tested, and refined, leading to the development of innovative solutions and projects.',
    name: 'ByteRoot',
    title: 'A coding application',
  },
  {
    quote:
      'Byteroots aims to create a collaborative environment for coders worldwide, where they can come together to share knowledge, solve coding challenges, and engage in discussions, fostering a sense of community and mutual support.By offering a platform for problem-solving, code creation, and discussion, Byteroots encourages innovation and creativity among its users. It serves as a space where new ideas can be explored, tested, and refined, leading to the development of innovative solutions and projects.',
    name: 'ByteRoot',
    title: 'A coding application',
  },
]


export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [links, setLinks] = useState([
    'https://timmousk.com/blog/fatal-not-a-git-repository/#:~:text=The%20fatal%3A%20not%20a%20git%20repository%20error%20happens%20because%20you,t%20initialize%20the%20Git%20repository.',
    'https://www.google.com',
    'https://www.google.com',
    'https://www.google.com',
    'https://www.google.com',
    'https://www.google.com',
    'https://www.google.com',
    'https://www.google.com',
  ])
  const [isDisabled, setIsDisabled] = useState(false)
  const [banner, setBanner] = useState('')
  const [images, setImages] = useState([])
  const getdata = async () => {
    let p = await fetch(`/api/getdata`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    let data = await p.json()
    setImages(data.images)
    setBanner(data.banner)
    setLinks(data.links)
  }

  useEffect(() => {
    getdata()
    AOS.init({
      once: true,
      duration: 1000,
      disable: () => {
        return window.innerWidth < 991
      },
    })
    setTimeout(() => {
      setIsDisabled(true)
    }, 3000)
  }, [])
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log('dfsd')

    // Handle form submission logic here
    let res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
    res = await res.json()
    console.log(res)

    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
    // Close the popup
    setIsDisabled(false)
  }

  return (
    <div style={{ width: '100%', overflowX: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}> {/* Add inline styles */}
    <Navbar/>
    <div>
        <link
          href="https://assets.website-files.com/6233f2ac51d2013d6dca2856/css/findtrend.webflow.4490a49f5.css"
          rel="stylesheet"
          type="text/css"
        />
        
        <div className="section home-aection w-section">
          <div className="container w-full">
            
            <div className="cropper">
              <div
                data-aos="fade-up"
                data-aos-delay={200}
                className="txt-xxl txt-white mb-24"
              >
                Online & Classroom
              </div>
              <h1
                data-aos="fade-up"
                data-aos-delay={200}
                className="txt-xxl txt-white mb-24 w-full"
              >
                IT Training Institute (India)
              </h1>
            </div>
            <div
              data-w-id="6645770f-942c-1d19-48c6-cd313d729072"
              className="cropper"
            >
              <p
                data-aos="fade-up"
                data-aos-delay={200}
                data-w-id="af807e5b-dfea-56ca-852f-7ef63e5c63d7"
                className="txt-m txt-grey mb-40"
              >
                Codegnan offers finishing schools for students who wants to
                start and grow their tech career.
                <br />
                Become job-ready with our expert trainer led online and
                classroom IT certification courses.
              </p>
            </div>
            <Link
              data-aos="fade-up"
              data-aos-delay={250}
              href="#"
              className="btn btn-green w-inline-block"
            >
              <p className="btn-txt">Get Started </p>
              <img
                src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/623409f51c563d60d18c9ac1_Fire.svg"
                loading="lazy"
                alt=""
                className="image"
              />
            </Link>
            <div className="all-research-wrapper">
              <div className="cropper">
                <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/62340cf39091535ced42b188_All_research_start_from_here.svg"
                  loading="lazy"
                  data-aos-delay={250}
                  data-aos="fade-up"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay={300}
                className="arrow-svg w-embed"
              >
                <svg
                  width={42}
                  height={38}
                  viewBox="0 0 42 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_992_20705)">
                    <path
                      d="M40.9307 10.422C41.3809 12.0722 40.6585 13.3427 39.8412 14.4267C38.6841 15.9196 37.3547 17.3047 35.9302 18.5034C29.2234 23.8535 21.4756 25.8576 13.0024 24.9813C10.849 24.7508 8.69294 24.2083 6.30372 23.7458C6.77419 25.9732 8.56532 27.6426 9.17649 29.9155C8.16251 29.8466 7.70488 29.1796 7.31064 28.6369C5.70197 26.4041 4.1085 24.1243 2.57714 21.8128C1.85075 20.6957 1.95461 20.055 3.07246 19.4832C5.38545 18.2609 7.84556 17.8645 10.3907 18.3255C10.4845 18.3559 10.5796 18.5423 10.7532 18.806C9.58358 20.6579 7.15623 19.3531 5.65571 20.7866C8.6484 22.5857 11.9261 23.0246 15.2013 23.1515C18.6323 23.2769 22.0139 23.0751 25.2953 22.0627C28.5145 21.082 31.37 19.4648 34.1607 17.5673C36.9832 15.7319 39.1617 13.3248 40.9307 10.422Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_992_20705">
                      <rect
                        width="28.3944"
                        height="34.4457"
                        fill="white"
                        transform="translate(41.5176 10.6121) rotate(107.943)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="tab-wrapper z-30">
            <div
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-offset={0}
              className="tab twitt"
            >
              <div
                data-w-id="14a6065f-5ff5-9028-965f-8def937328b0"
                className="tab-content-wrapper twitter"
              >
                <p className="tab-txt text-xs">Google - Rated 4.8/5</p>
                <div className="tab-close-wrapper">
                  <div
                    data-w-id="11dc8b06-b2fe-862f-853e-4bf6213d1b2d"
                    className="close-tab w-embed"
                  >
                    <svg
                      width={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="2.64056"
                        height="19.8042"
                        rx="0.66129"
                        transform="matrix(0.707101 -0.707112 0.707101 0.707112 0.193359 2.47028)"
                        fill="white"
                      />
                      <rect
                        width="2.64056"
                        height="19.8042"
                        rx="0.66129"
                        transform="matrix(-0.707101 -0.707112 -0.707101 0.707112 16.0645 2.47034)"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-offset={0}
              className="tab pin"
            >
              <div
                data-w-id="d0124c01-28a2-7b50-68dc-555917fbaf3b"
                className="tab-content-wrapper pin"
              >
                {/* <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6234180d5018d4796ee836ad_pinterest.svg"
                  loading="lazy"
                  alt=""
                  className="tab-icon"
                /> */}
                <p className="tab-txt">Trustpilot - Rated 4.8/5</p>
                <div className="tab-close-wrapper">
                  <div
                    data-w-id="d0124c01-28a2-7b50-68dc-555917fbaf40"
                    className="close-tab w-embed"
                  >
                    <svg
                      width={17}
                      height={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="2.64056"
                        height="19.8042"
                        rx="0.66129"
                        transform="matrix(0.707101 -0.707112 0.707101 0.707112 0.193359 2.47028)"
                        fill="white"
                      />
                      <rect
                        width="2.64056"
                        height="19.8042"
                        rx="0.66129"
                        transform="matrix(-0.707101 -0.707112 -0.707101 0.707112 16.0645 2.47034)"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-offset={0}
              className="tab fb"
            >
              <div
                data-w-id="b928b045-b023-2fb5-c1f1-50f4be5f108b"
                className="tab-content-wrapper fb"
              >
                {/* <img
                  src="https://assets.website-files.com/6233f2ac51d2013d6dca2856/6234180ddc6c8b5632cda88a_fb.svg"
                  loading="lazy"
                  alt=""
                  className="tab-icon"
                /> */}
                <p className="tab-txt">Just Dial - Rated 4.7/5</p>
                <div className="tab-close-wrapper">
                  <div
                    data-w-id="b928b045-b023-2fb5-c1f1-50f4be5f1090"
                    className="close-tab w-embed"
                  >
                    <svg
                      width={17}
                      height={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="2.64056"
                        height="19.8042"
                        rx="0.66129"
                        transform="matrix(0.707101 -0.707112 0.707101 0.707112 0.193359 2.47028)"
                        fill="white"
                      />
                      <rect
                        width="2.64056"
                        height="19.8042"
                        rx="0.66129"
                        transform="matrix(-0.707101 -0.707112 -0.707101 0.707112 16.0645 2.47034)"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay={500}
                data-aos-offset={0}
                className="tab dribb"
              >
                <div
                  data-w-id="74d68148-1477-5f19-e0e0-c1fd77416855"
                  className="tab-content-wrapper dribb"
                >
                  <p className="tab-txt">Elon Musk- Search</p>
                  <div className="tab-close-wrapper">
                    <div
                      data-w-id="74d68148-1477-5f19-e0e0-c1fd7741685a"
                      className="close-tab w-embed"
                    >
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="2.64056"
                          height="19.8042"
                          rx="0.66129"
                          transform="matrix(0.707101 -0.707112 0.707101 0.707112 0.193359 2.47028)"
                          fill="white"
                        />
                        <rect
                          width="2.64056"
                          height="19.8042"
                          rx="0.66129"
                          transform="matrix(-0.707101 -0.707112 -0.707101 0.707112 16.0645 2.47034)"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

            <div
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-offset={0}
              className="tab dribb"
            ></div>
          </div>
        </div>
      </div>
      <CopilotFeature 
                data-aos="fade-up"
                data-aos-delay={300}/>
      <CopilotFeature 
                data-aos="fade-up"
                data-aos-delay={250}/>
      <Placement/>
      <InfiniteMovingCards 
                data-aos="fade-up"
                data-aos-delay={350}
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <div className="flex flex-row items-center justify-center mt-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
    </div>
  )
}