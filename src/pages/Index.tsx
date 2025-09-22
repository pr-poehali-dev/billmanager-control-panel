import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [activeSection, setActiveSection] = useState('dashboard')

  const sidebarItems = [
    {
      id: 'client',
      label: 'Клиент',
      icon: 'User',
      expanded: true,
      subitems: [
        { id: 'profile', label: 'Профиль клиента' },
        { id: 'payments', label: 'Платежчики' },
        { id: 'contacts', label: 'Контакты доменов' },
        { id: 'referral', label: 'Реферальная программа' },
        { id: 'cart', label: 'Корзина' },
        { id: 'orders', label: 'Заказы' },
        { id: 'payment-methods', label: 'Способы оплаты' },
        { id: 'discounts', label: 'Скидки' },
        { id: 'user-settings', label: 'Настройки пользователя' },
      ]
    },
    {
      id: 'products',
      label: 'Товары',
      icon: 'Package',
      expanded: false,
      subitems: []
    },
    {
      id: 'finance',
      label: 'Финансы',
      icon: 'DollarSign',
      expanded: false,
      subitems: []
    },
    {
      id: 'support',
      label: 'Поддержка',
      icon: 'Headphones',
      expanded: false,
      subitems: []
    },
    {
      id: 'tools',
      label: 'Инструменты',
      icon: 'Settings',
      expanded: false,
      subitems: []
    },
    {
      id: 'security',
      label: 'Безопасность',
      icon: 'Shield',
      expanded: false,
      subitems: []
    },
    {
      id: 'help',
      label: 'Справка',
      icon: 'HelpCircle',
      expanded: false,
      subitems: []
    }
  ]

  const quickActions = [
    { label: 'Заказать услугу', icon: 'ShoppingCart', color: 'blue' },
    { label: 'Пополнить баланс', icon: 'CreditCard', color: 'green' },
    { label: 'Использовать сертификат', icon: 'Award', color: 'orange' },
    { label: 'Задать вопрос', icon: 'MessageCircle', color: 'blue' },
    { label: 'Настройки пользователя', icon: 'Settings', color: 'gray' },
    { label: 'Справка', icon: 'HelpCircle', color: 'orange' }
  ]

  const accountInfo = [
    { label: 'Код клиента', value: '389819' },
    { label: 'Дата регистрации', value: '2015-01-16' },
    { label: 'Проверенный телефон', value: '7 9043675687' },
    { label: 'Провайдер', value: 'FirstVDS' },
    { label: 'Код лицевого счета', value: '308105' },
    { label: 'Баланс', value: '0.00 р.' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="bg-vds-dark text-white px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Icon name="ArrowLeft" size={16} />
            <Icon name="ArrowRight" size={16} />
            <Icon name="RotateCcw" size={16} />
            <Icon name="Home" size={16} />
            <Icon name="Star" size={16} />
            <Icon name="Bookmark" size={16} />
            <Icon name="Search" size={16} />
          </div>
          <span className="text-vds-primary">Главная</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span>Баланс:</span>
            <span className="font-bold">0.00 р.</span>
            <Button variant="link" className="text-vds-primary p-0 h-auto">пополнить</Button>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="ShoppingCart" size={16} />
            <Badge className="bg-red-500 text-white text-xs">1</Badge>
          </div>
          <div className="text-sm">skylink67rus@me.com</div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-vds-sidebar min-h-screen text-white">
          <nav className="p-4">
            {sidebarItems.map((item) => (
              <div key={item.id} className="mb-2">
                <div className="flex items-center justify-between p-2 hover:bg-vds-dark rounded cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon name={item.icon as any} size={16} />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  {item.subitems.length > 0 && (
                    <Icon name={item.expanded ? "ChevronDown" : "ChevronRight"} size={12} />
                  )}
                </div>
                
                {item.expanded && item.subitems.length > 0 && (
                  <div className="ml-6 mt-1">
                    {item.subitems.map((subitem) => (
                      <div 
                        key={subitem.id}
                        className="p-2 text-sm text-gray-300 hover:text-white cursor-pointer"
                      >
                        {subitem.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="absolute bottom-4 left-4 text-xs text-gray-400">
            ISPsystem © 2004-2025
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <h1 className="text-2xl font-bold text-gray-800">Главная</h1>
              <Icon name="Search" size={20} className="text-gray-400" />
              <Icon name="Settings" size={20} className="text-gray-400" />
            </div>
            
            <p className="text-gray-600 mb-6">Акции, специальные предложения, новости</p>

            {/* Promo Banner */}
            <div className="bg-gradient-to-r from-vds-dark to-vds-sidebar rounded-lg p-6 mb-8 text-white relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Месяц<br />ispmanager 6 lite<br />в подарок!</h2>
                  <Button className="bg-vds-primary hover:bg-green-600 text-black font-semibold px-6">
                    Подробнее
                  </Button>
                </div>
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                  <div className="w-32 h-32 opacity-20">
                    <Icon name="Monitor" size={128} />
                  </div>
                </div>
              </div>
              
              {/* Green dots pattern */}
              <div className="absolute bottom-4 right-4 flex space-x-1">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="w-1 h-1 bg-vds-primary rounded-full opacity-60"></div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Быстрый доступ</h3>
              <div className="grid grid-cols-6 gap-4">
                {quickActions.map((action, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center 
                        ${action.color === 'blue' ? 'bg-vds-blue/10' :
                          action.color === 'green' ? 'bg-vds-primary/10' :
                          action.color === 'orange' ? 'bg-vds-orange/10' :
                          'bg-gray-100'}`}>
                        <Icon 
                          name={action.icon as any} 
                          size={24} 
                          className={
                            action.color === 'blue' ? 'text-vds-blue' :
                            action.color === 'green' ? 'text-vds-primary' :
                            action.color === 'orange' ? 'text-vds-orange' :
                            'text-gray-600'
                          } 
                        />
                      </div>
                      <p className="text-sm text-gray-700">{action.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Info Sections */}
            <div className="grid grid-cols-2 gap-6">
              {/* Account Info */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Информация об аккаунте</CardTitle>
                  <Icon name="RotateCcw" size={16} className="text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {accountInfo.map((info, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">{info.label}</span>
                        <span className="font-medium">{info.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Products/Services */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Товары/Услуги</CardTitle>
                  <Icon name="RotateCcw" size={16} className="text-gray-400" />
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <div className="w-24 h-24 mb-4 opacity-30">
                    <Icon name="FolderOpen" size={96} />
                  </div>
                  <h4 className="font-semibold mb-2">Данных пока нет</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Они станут доступны, когда появится больше информации
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Support Requests */}
            <div className="mt-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Запросы</CardTitle>
                  <Icon name="RotateCcw" size={16} className="text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="border border-gray-200 rounded">
                    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 font-medium text-sm">
                      <div>Тема</div>
                      <div>Статус</div>
                    </div>
                    <div className="p-4 border-t">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>FirstVDS : Мы сохранили вашу корзину</div>
                        <div className="text-orange-600">Ожидает вашего ответа</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-x-4">
                    <Button variant="link" className="text-vds-primary p-0">Все запросы</Button>
                    <Button variant="link" className="text-vds-primary p-0">Задать вопрос</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Active Services */}
            <div className="mt-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Действующие услуги</CardTitle>
                  <Icon name="RotateCcw" size={16} className="text-gray-400" />
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <div className="w-24 h-24 mb-4 opacity-30">
                    <Icon name="FolderOpen" size={96} />
                  </div>
                  <h4 className="font-semibold mb-2">Данных пока нет</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Они станут доступны, когда появится больше информации
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}