const Card = ({ type, className, children }: { type: 'sm' | 'md'; className?: string; children: JSX.Element }) => (
    <div
        className={`${((type) => {
            if (type === 'sm') {
                return 'rounded-md'
            }

            if (type === 'md') {
                return 'rounded-sl'
            }
        })(type)} bg-white ${className}`}
    >
        {children}
    </div>
)

export default Card
