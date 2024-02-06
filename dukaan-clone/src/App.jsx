import './App.css';
import { RevenueCard } from './components/RevenueCard';
import { TopBar } from './components/TopBar';
import { FilterArea } from './components/FilterArea';
import { FilterTable } from './components/FilterTable';
import { TransTable } from './components/TransTable';
import { SideBar } from './components/SideBar';

function App() {
  return (
    <div>
      <div>
        <SideBar></SideBar>
      </div>
      <div>
        <TopBar></TopBar>
      </div>
      <div>
        <FilterArea></FilterArea>
      </div>
      <div className='ml-56 grid grid-cols-3 md:grid-cols-9'>
        <div className='col-span-3 pr-3'><RevenueCard title = 'Next Payout' amount='2,312' orders='23' backgroundColor='bg-blue-500' textColor='text-white' hoverColor='bg-blue-900' iconColor='white'>
          </RevenueCard></div>
        <div className='col-span-3 pr-3'><RevenueCard title = 'Amount Pending' amount='92,312' orders='13' backgroundColor='bg-white' textColor='text-black' hoverColor='bg-gray-300' iconColor='black'></RevenueCard></div>
        <div className='col-span-3'><RevenueCard title = 'Amount Processed' amount='23,92,312' orders='5' backgroundColor='bg-white' textColor='text-black' hoverColor='bg-gray-300' iconColor='black'></RevenueCard></div>
      </div>
      <div>
        <FilterTable></FilterTable>
      </div>
      <div className='ml-56'>
        <TransTable orderId='291209' status='Succesful' transId='TRX123456' refund_date='Today, 8:45 PM' amount='1125'></TransTable>
        <TransTable orderId='947201' status='Pending' transId='TRX874123' refund_date='Today, 9:30 PM' amount='1643'></TransTable>
        <TransTable orderId='582190' status='Succesful' transId='TRX456789' refund_date='Tomorrow, 10:15 AM' amount='1200'></TransTable>
        <TransTable orderId='303912' status='Succesful' transId='TRX321654' refund_date='Today, 11:00 PM' amount='1432'></TransTable>
        <TransTable orderId='489123' status='Succesful' transId='TRX987654' refund_date='Tomorrow, 7:45 AM' amount='900'></TransTable>
        <TransTable orderId='210987' status='Pending' transId='TRX123987' refund_date='Today, 5:30 PM' amount='1100'></TransTable>
        <TransTable orderId='876543' status='Pending' transId='TRX654321' refund_date='Tomorrow, 8:00 AM' amount='1300'></TransTable>
        <TransTable orderId='654321' status='Pending' transId='TRX789123' refund_date='Today, 6:45 PM' amount='1500'></TransTable>
        <TransTable orderId='123456' status='Succesful' transId='TRX456123' refund_date='Tomorrow, 9:20 AM' amount='1700'></TransTable>
        <TransTable orderId='789012' status='Pending' transId='TRX321789' refund_date='Today, 4:50 PM' amount='875'></TransTable>
      </div>
    </div>
  )
}

export default App
