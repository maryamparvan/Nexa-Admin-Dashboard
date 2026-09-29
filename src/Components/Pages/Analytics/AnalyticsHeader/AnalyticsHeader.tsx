import './AnalyticsHeader.css';

type Props = {
    Revenue: number;
    orders: number;
    avgOrder: string;
    customers: number;
    priceFilter: string;
    setPriceFilter: (value: string) => void;
};

const AnalyticsHeader = (({Revenue, orders,avgOrder, customers, priceFilter, setPriceFilter} : Props)=>{
    return(
        <div className="headoption">
            <div className='headhead'>
                <h3> Business performance overview</h3>
                <select className="selectUser" onChange={(e) => setPriceFilter(e.target.value)} value={priceFilter}>
                    <option value="all">All Orders</option>
                    <option value="Under$100">Under $100</option>
                    <option value="$100-$500">$100 - $500</option>
                    <option value="$500-$1000">$500 - $1000</option>
                    <option value="over$1000">Over $1000</option>
                </select>
            </div>
            <div className='divcards'>
                <div className="headOrderStats">
                    <div>
                        <h4>Revenue </h4>
                        <h3>${Revenue}</h3>
                    </div>
                    
                </div>
                <div className="headOrderStats">
                    <div>
                        <h4>Orders</h4>
                        <h3>{orders}</h3>
                    </div>
                    
                </div>
                <div className="headOrderStats">
                    <div>
                        <h4>Avg Order</h4>
                        <h3>${avgOrder}</h3>
                    </div>
                    
                </div>
                <div className="headOrderStats">
                    <div>
                        <h4>Customers</h4>
                        <h3>{customers}</h3>
                    </div>
                    
                </div>
            </div>
        </div>
    )
})

export default AnalyticsHeader;