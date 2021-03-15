import Header from '../components/Header'
import Menu from '../components/Menu'
import Metrics from '../components/Metrics'
import Chart from '../components/Chart'
import BMetrics from '../components/Metrics-B'
import ResolvedDomain from '../components/ResolvedDomain'
import IP from '../components/IP'

const Home = () => (
    <div className="mt-4 mb-24">
        <Header />
        <Menu />
        <Metrics />
        <Chart />
        <BMetrics />
        <div className="flex justify-between">
            <ResolvedDomain />
            <IP />
        </div>
    </div>
)

export default Home
