import Link from 'next/link';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {

  const menuItems = [
    { id: "account", label: "Account Information" },
    { id: "orders", label: "Order Details" },
    { id: "address", label: "Delivery Address" },
    { id: "wishlist", label: "Wishlist" },
    { id: "logout", label: "Logout" },
  ];

  return (
    <>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="space-y-3">
                {menuItems.map((item) => {
                  return (
                    <>
                      <div>
                        <Link
                          className='py-5'
                          key={item.id}
                          href={`/profile/${item.id}`}
                        >
                          {item.label}
                        </Link>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
