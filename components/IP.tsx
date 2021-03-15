import Card from './Card'
import Item from './IPItem'

const IP = () => {
    return (
        <Card type="md" className="pt-4 px-5 sxl:w-134.5 h-full">
            <div className="mb-2">
                <span className="block text-normal-text text-xl">IPs</span>
                <span className="block text-normal-text text-sm mt-2 mb-4">IP addresses making the queries.</span>
            </div>
            <Item />
            <Item />
            <Item />
            <Item />
        </Card>
    )
}

export default IP
