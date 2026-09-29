import './OrderStats.css'
import { LuPackageOpen } from "react-icons/lu";
import { TbMoneybag } from "react-icons/tb";
import { FaCalculator } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

type prop = {
    totalId :number
    Revenue: number,
    AvgOrder:string, 
    Pending: number
}

const OrderStats = (({totalId, Revenue,AvgOrder, Pending}:prop ) =>{
    return(
        <div>
            <h2> Manage and view all registered users </h2>
            <div className="boxshead">
                <div className="headOrderStats">
                    <div>
                        <h4>Total Order </h4>
                        <h3>{totalId}</h3>
                    </div>
                    <LuPackageOpen />
                </div>
                <div className="headOrderStats">
                    <div>
                        <h4>Revenue</h4>
                        <h3>${Revenue}</h3>
                    </div>
                    <TbMoneybag />
                </div>
                <div className="headOrderStats">
                    <div>
                        <h4>Avg Order</h4>
                        <h3>${AvgOrder}</h3>
                    </div>
                    <FaCalculator/>
                </div>
                <div className="headOrderStats">
                    <div>
                        <h4>Pending</h4>
                        <h3>{Pending}</h3>
                    </div>
                    <FiClock/>
                </div>
            </div>
        </div>
    )
})

export default OrderStats;