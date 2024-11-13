import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()
  const menuItems = [
    { title: 'Beranda', path: '/' },
    { title: 'Stok', path: '/stok' },
    { title: 'Laporan', path: '/laporan' },
    { title: 'Jadwal', path: '/jadwal' },
    { title: 'Pengaturan', path: '/pengaturan' },
  ]

  return (
    <aside className="w-50 bg-[#F4EDE7] border-r border-[#000000] min-h-screen">
      <div className="p-4 mt-5">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-2 text-sm rounded-md transition-colors
                ${location.pathname === item.path 
                  ? 'bg-[#E6DDD5] text-[#5c4842] font-medium' 
                  : 'text-[#5c4842] hover:bg-[#E6DDD5]'}`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <div className="mt-8">
          <img
            src="/2.png"
            alt="House Illustration"
            className="w-60 h-auto mx-auto -ml-7"
          />
           
        </div>
      </div>
      
    </aside>
  )
}

export default Sidebar