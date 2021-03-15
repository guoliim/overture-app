import Image from 'next/image'

const Item = () => {
    return (
        <div>
            <div className="h-0.25 bg-itemLine w-full" />
            <div className="mb-3 flex flex-col">
                <div className="flex justify-between items-center mt-3 mb-1.5">
                    <div className="text-base text-normal-text">
                        <span>223.112.105.132</span>
                    </div>
                    <div className="text-base text-normal-text">
                        <span>2,262</span>
                    </div>
                </div>
                <div className="mr-2 text-base text-normal-text">
                    <div className="text-xs mr-4 flex items-center">
                        <Image src="/../public/signal-wifi-3-line.svg" alt="apple" width={13} height={13} />
                        <span className="ml-1"> China Mobile communications corporation </span>
                    </div>
                    <div className="text-xs flex items-center">
                        <Image src="/../public/map-pin-line.svg" alt="apple" width={13} height={13} />
                        <span className="ml-1"> Suzhou,China </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
