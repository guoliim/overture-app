import Card from './Card'
import Item from './DomainItem'

const ResolvedDomain = () => {
    return (
        <Card type="md" className="pt-4 px-5 sxl:w-134.5 h-full">
            <div className="mb-2">
                <span className="block text-normal-text text-xl">Resolved Domains</span>
                <span className="block text-normal-text text-sm">
                    Domains that resolved without being blocked by any setting or because they were manually allowed.
                </span>
            </div>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </Card>
    )
}

export default ResolvedDomain
