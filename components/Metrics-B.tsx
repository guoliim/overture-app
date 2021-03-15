import Card from './Card'

const Metrics = () => (
    <div className="flex justify-between mt-8 mb-6">
        <Card type="md" className="flex w-87.5 h-28.5 justify-center items-center">
            <div>
                <span className="block text-2base leading-little-tight text-normal-text text-center">67,574</span>
                <span className="block text-sm leading-normal text-normal-text text-center">queries</span>
            </div>
        </Card>
        <Card type="md" className="flex w-87.5 h-28.5 justify-center items-center">
            <div>
                <span className="block text-2base leading-little-tight text-normal-text text-center">67,574</span>
                <span className="block text-sm leading-normal text-normal-text text-center">primary queries</span>
            </div>
        </Card>
        <Card type="md" className="flex w-87.5 h-28.5 justify-center items-center">
            <div>
                <span className="block text-2base leading-little-tight text-normal-text text-center">67,574</span>
                <span className="block text-sm leading-normal text-normal-text text-center">alternative queries</span>
            </div>
        </Card>
    </div>
)

export default Metrics
