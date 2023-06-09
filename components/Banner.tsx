import Image from "next/image"

export default function Banner() {
    return (
        <div className="mx-16">
                    <h2 className='head_text mt-10'> Unleash Your Creative Brilliance </h2>
                    <Image src='/assets/images/bathtub.webp' width={1000} height={1000} alt='bathtub emoji' />

        </div>
    )
}
