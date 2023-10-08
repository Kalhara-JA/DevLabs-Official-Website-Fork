import Image from "next/image"
import Button from "../common/Button"

export default function Services() {

    function ServiceElement ({items}){
        return(
            <div className="flex flex-wrap ">
                {items.map((item)=>(
                <div className="flex flex-row  sm:w-1/2 w-full h-[115px] lg:h-[180px] lg:px-[20px] px-[10px] sm:py-[10px] py-[5px] ">
                <div className="flex items-center justify-center bg-gray-100 w-full rounded-2xl ">
                    <div className="w-1/3 lg:px-8 px-6">
                       <div className="lg:w-[100px] w-[50px] lg:h-[100px] h-[50px] relative"> 
                       <Image key={item.id} alt = "Service icon" src ={item.path} layout="fill" objectFit="contain"/></div>
                    </div>
                    <div key={item.id} className="flex align-left w-2/3 text-sm sm:text-base lg:text-xl font-medium ">{item.title}</div>
                </div>
                
                </div>

                ))}
            </div>
            
            
        )
    }
    const ListofServices = [
        {
            id:1,title:"Software Engineering Solutions",path:"/Images/services/Icon1.png"
        },
        {
            id:2,title:"Data Science, AI and ML Service",path:"/Images/services/Icon1.png"
        },
        {
            id:3,title:"IoT and IoB",path:"/Images/services/Icon1.png"
        },
        {
            id:4,title:"Data Science, AI and ML Service",path:"/Images/services/Icon1.png"
        },
    ]

    return (
      <div className="lg:mx-[100px] sm:mx-[50px] mx-[10px] flex flex-col rounded-t-[60px] bg-white">
        <div className="mt-[70px] lg:mx-[70px] sm:mx-[50px] mx-[30px]">
            <h1 className="lg:text-[40px] sm:text-[32px] text-[17px] font-semibold">Our services and expertise</h1>
            <p className="lg:font-[20px] sm:text-[16px] text-[12px] text-gray-500">Offering a broad set of capabilities under one roof makes us a versatile partner to meet all your digital ambitions.</p>
        </div>
        <div className="lg:mx-[70px] sm:mx-[50px] mx-[20px] sm:my-[50px] my-[15px]">
            <div >
                <ServiceElement items={ListofServices}/>
            </div>
        </div>
        <div className="flex items-center justify-center pt-2">
            <Button iconName="" color="orange" link="See more"/>
        </div>
        
      </div>
    )
  }
  

