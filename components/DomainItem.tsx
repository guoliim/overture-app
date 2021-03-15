import Image from 'next/image'

interface ItemProps {
    domain: string
    count: string
}

const Item = () => {
    return (
        <div>
            <div className="h-0.25 bg-itemLine w-full" />
            <div className="my-3 flex justify-between items-center">
                <div className="mr-2 text-base text-normal-text flex items-center">
                    <Image src="/../public/microsoft-line.svg" alt="apple" width={16} height={16} />
                    <span className="ml-2"> vscode-sync.trafficmanager.net </span>
                </div>
                <div className="text-base text-normal-text">
                    <span>2,262</span>
                </div>
            </div>
        </div>
    )
}

export default Item
