const Card = ({ type, children }: { type: 'sm' | 'md'; children: JSX.Element }) => (
    <div
        className={`${((type) => {
            if (type === 'sm') {
                return 'rounded-md'
            }

            if (type === 'md') {
                return 'rounded-sl'
            }
        })(type)} bg-white`}
    >
        {children}
    </div>
)

export default Card
