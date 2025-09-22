import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', label: 'Дашборд', icon: 'LayoutDashboard' },
    { id: 'clients', label: 'Клиенты', icon: 'Users' },
    { id: 'invoices', label: 'Счета', icon: 'FileText' },
    { id: 'payments', label: 'Платежи', icon: 'CreditCard' },
    { id: 'services', label: 'Услуги', icon: 'Package' },
    { id: 'reports', label: 'Отчеты', icon: 'BarChart3' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
    { id: 'notifications', label: 'Уведомления', icon: 'Bell' },
  ]

  const stats = [
    { title: 'Активные клиенты', value: '1,247', change: '+12%', icon: 'Users' },
    { title: 'Доходы за месяц', value: '₽2,847,560', change: '+8.5%', icon: 'TrendingUp' },
    { title: 'Открытые счета', value: '89', change: '-2%', icon: 'FileText' },
    { title: 'Автоплатежи', value: '456', change: '+24%', icon: 'Repeat' },
  ]

  const recentInvoices = [
    { id: 'INV-001', client: 'ООО "ТехКом"', amount: '₽125,000', status: 'paid', date: '22.09.2025' },
    { id: 'INV-002', client: 'ИП Петров А.Н.', amount: '₽45,200', status: 'pending', date: '21.09.2025' },
    { id: 'INV-003', client: 'АО "МедиаГруп"', amount: '₽89,750', status: 'overdue', date: '19.09.2025' },
    { id: 'INV-004', client: 'ООО "Строй+"', amount: '₽203,100', status: 'paid', date: '18.09.2025' },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Оплачен</Badge>
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Ожидает</Badge>
      case 'overdue':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Просрочен</Badge>
      default:
        return <Badge>Неизвестно</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-billmanager-lightgray">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-billmanager-darkgray">BILLMANAGER</h1>
            <Badge className="bg-billmanager-blue text-white hover:bg-billmanager-blue">Professional</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="Bell" size={16} />
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="User" size={16} />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-billmanager-blue text-white'
                        : 'text-billmanager-darkgray hover:bg-gray-100'
                    }`}
                  >
                    <Icon name={item.icon as any} size={20} />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="dashboard" className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-billmanager-darkgray mb-6">Дашборд</h2>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <Card key={index} className="animate-fade-in border-0 shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                            <p className="text-2xl font-bold text-billmanager-darkgray">{stat.value}</p>
                            <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                              {stat.change} за месяц
                            </p>
                          </div>
                          <div className="p-3 bg-billmanager-blue/10 rounded-full">
                            <Icon name={stat.icon as any} size={24} className="text-billmanager-blue" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {/* Revenue Chart */}
                  <Card className="border-0 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-billmanager-darkgray">Доходы за год</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 bg-gradient-to-r from-billmanager-blue to-blue-400 rounded-lg flex items-end justify-between p-4 space-x-2">
                        {Array.from({ length: 12 }, (_, i) => (
                          <div
                            key={i}
                            className="bg-white/30 rounded-t"
                            style={{ height: `${Math.random() * 80 + 20}%`, width: '100%' }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-4 text-sm text-muted-foreground">
                        <span>Янв</span>
                        <span>Июн</span>
                        <span>Дек</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Payment Methods */}
                  <Card className="border-0 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-billmanager-darkgray">Способы оплаты</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-billmanager-blue rounded-full"></div>
                            <span>Банковские карты</span>
                          </div>
                          <span className="font-semibold">67%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span>Банковский перевод</span>
                          </div>
                          <span className="font-semibold">23%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                            <span>Электронные кошельки</span>
                          </div>
                          <span className="font-semibold">10%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Invoices */}
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-billmanager-darkgray">Последние счета</CardTitle>
                      <Button variant="outline" size="sm">
                        Все счета
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentInvoices.map((invoice) => (
                        <div key={invoice.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="p-2 bg-billmanager-blue/10 rounded-lg">
                              <Icon name="FileText" size={20} className="text-billmanager-blue" />
                            </div>
                            <div>
                              <p className="font-semibold text-billmanager-darkgray">{invoice.id}</p>
                              <p className="text-sm text-muted-foreground">{invoice.client}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="font-semibold text-billmanager-darkgray">{invoice.amount}</span>
                            {getStatusBadge(invoice.status)}
                            <span className="text-sm text-muted-foreground">{invoice.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Other tabs content - placeholder */}
            {menuItems.slice(1).map((item) => (
              <TabsContent key={item.id} value={item.id}>
                <div className="text-center py-12">
                  <Icon name={item.icon as any} size={64} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-2xl font-bold text-billmanager-darkgray mb-2">{item.label}</h3>
                  <p className="text-muted-foreground">Раздел находится в разработке</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </main>
      </div>
    </div>
  )
}