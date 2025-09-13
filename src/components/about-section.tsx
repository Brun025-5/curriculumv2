import Image from 'next/image'
import ProfileImage from '@/assets/images/Me.png'


export const AboutSection = () => {
    return (
        <section id="about" className="w-full flex items-center justify-center h-fit py-20 text-center bg-gray-200 dark:bg-gray-900">
            <div className="flex flex-col lg:flex-row lg:space-x-10 items-center justify-between" >
                <div className='flex w-80 lg:w-md items-center justify-center'>
                    <Image src={ProfileImage} alt="Me" className='rounded-full' />
                </div>
                <div>
                    <h2 className="text-5xl font-bold">About me</h2>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non ipsam saepe, autem, nesciunt neque veniam doloremque iste aperiam quibusdam dolor quasi quidem iusto sapiente vitae optio repudiandae sed amet!
                    </p>
                </div>
            </div>
        </section>
    );
};