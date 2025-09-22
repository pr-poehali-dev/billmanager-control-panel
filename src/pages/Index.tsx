import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [expandedItems, setExpandedItems] = useState<string[]>(['client'])

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const sidebarItems = [
    {
      id: 'client',
      label: 'Клиент',
      icon: 'User',
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
      subitems: [
        { id: 'vps', label: 'VPS серверы' },
        { id: 'dedicated', label: 'Выделенные серверы' },
        { id: 'domains', label: 'Домены' },
        { id: 'ssl', label: 'SSL сертификаты' },
        { id: 'backup', label: 'Резервное копирование' }
      ]
    },
    {
      id: 'finance',
      label: 'Финансы',
      icon: 'DollarSign',
      subitems: [
        { id: 'balance', label: 'Баланс' },
        { id: 'invoices', label: 'Счета' },
        { id: 'transactions', label: 'Транзакции' },
        { id: 'autopay', label: 'Автоплатежи' }
      ]
    },
    {
      id: 'support',
      label: 'Поддержка',
      icon: 'Headphones',
      subitems: [
        { id: 'tickets', label: 'Тикеты' },
        { id: 'knowledge', label: 'База знаний' },
        { id: 'contacts', label: 'Контакты' }
      ]
    },
    {
      id: 'tools',
      label: 'Инструменты',
      icon: 'Settings',
      subitems: [
        { id: 'monitoring', label: 'Мониторинг' },
        { id: 'backups', label: 'Резервные копии' },
        { id: 'dns', label: 'DNS управление' }
      ]
    },
    {
      id: 'security',
      label: 'Безопасность',
      icon: 'Shield',
      subitems: [
        { id: 'firewall', label: 'Файрвол' },
        { id: 'access', label: 'Управление доступом' },
        { id: 'logs', label: 'Логи безопасности' }
      ]
    }
  ]

  const servers = [
    { id: 1, name: 'VPS-001', status: 'online', cpu: 85, ram: 60, disk: 45, ip: '192.168.1.10' },
    { id: 2, name: 'VPS-002', status: 'offline', cpu: 0, ram: 0, disk: 70, ip: '192.168.1.11' },
    { id: 3, name: 'VPS-003', status: 'online', cpu: 45, ram: 80, disk: 30, ip: '192.168.1.12' }
  ]

  const transactions = [
    { id: 'TX001', date: '2025-09-22', type: 'payment', amount: 1500, description: 'Пополнение баланса' },
    { id: 'TX002', date: '2025-09-21', type: 'charge', amount: -500, description: 'Списание за VPS' },
    { id: 'TX003', date: '2025-09-20', type: 'payment', amount: 2000, description: 'Оплата счета' }
  ]

  const tickets = [
    { id: 'T001', subject: 'Проблема с подключением', status: 'open', priority: 'high', created: '2025-09-22' },
    { id: 'T002', subject: 'Запрос на увеличение ресурсов', status: 'in_progress', priority: 'medium', created: '2025-09-21' },
    { id: 'T003', subject: 'Вопрос по биллингу', status: 'closed', priority: 'low', created: '2025-09-20' }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-6">
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
              
              <div className="absolute bottom-4 right-4 flex space-x-1">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="w-1 h-1 bg-vds-primary rounded-full opacity-60"></div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Активные серверы</p>
                      <p className="text-2xl font-bold">2</p>
                    </div>
                    <Icon name="Server" size={24} className="text-green-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Текущий баланс</p>
                      <p className="text-2xl font-bold">0.00 ₽</p>
                    </div>
                    <Icon name="Wallet" size={24} className="text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Открытые тикеты</p>
                      <p className="text-2xl font-bold">1</p>
                    </div>
                    <Icon name="MessageCircle" size={24} className="text-orange-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Домены</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                    <Icon name="Globe" size={24} className="text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Server Status */}
            <Card>
              <CardHeader>
                <CardTitle>Состояние серверов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {servers.map(server => (
                    <div key={server.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${server.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                          <span className="font-semibold">{server.name}</span>
                          <Badge variant={server.status === 'online' ? 'default' : 'destructive'}>
                            {server.status === 'online' ? 'Онлайн' : 'Офлайн'}
                          </Badge>
                        </div>
                        <span className="text-sm text-gray-600">{server.ip}</span>
                      </div>
                      {server.status === 'online' && (
                        <div className="grid grid-cols-3 gap-4 mt-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>CPU</span>
                              <span>{server.cpu}%</span>
                            </div>
                            <Progress value={server.cpu} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>RAM</span>
                              <span>{server.ram}%</span>
                            </div>
                            <Progress value={server.ram} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Диск</span>
                              <span>{server.disk}%</span>
                            </div>
                            <Progress value={server.disk} className="h-2" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 'vps':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-800">VPS Серверы</h1>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-vds-primary hover:bg-green-600 text-white">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Заказать VPS
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Заказ нового VPS</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label>Конфигурация</Label>
                      <div className="grid grid-cols-3 gap-4 mt-2">
                        <Card className="p-4 cursor-pointer hover:bg-gray-50">
                          <div className="text-center">
                            <h4 className="font-semibold">Базовый</h4>
                            <p className="text-sm text-gray-600">1 CPU, 1GB RAM</p>
                            <p className="font-bold">500₽/мес</p>
                          </div>
                        </Card>
                        <Card className="p-4 cursor-pointer hover:bg-gray-50 border-blue-500">
                          <div className="text-center">
                            <h4 className="font-semibold">Стандарт</h4>
                            <p className="text-sm text-gray-600">2 CPU, 4GB RAM</p>
                            <p className="font-bold">1000₽/мес</p>
                          </div>
                        </Card>
                        <Card className="p-4 cursor-pointer hover:bg-gray-50">
                          <div className="text-center">
                            <h4 className="font-semibold">Премиум</h4>
                            <p className="text-sm text-gray-600">4 CPU, 8GB RAM</p>
                            <p className="font-bold">2000₽/мес</p>
                          </div>
                        </Card>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="os">Операционная система</Label>
                      <select className="w-full mt-1 p-2 border rounded">
                        <option>Ubuntu 22.04 LTS</option>
                        <option>CentOS 8</option>
                        <option>Debian 11</option>
                        <option>Windows Server 2022</option>
                      </select>
                    </div>
                    <Button className="w-full bg-vds-primary hover:bg-green-600 text-white">
                      Заказать за 1000₽/мес
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-4">
              {servers.map(server => (
                <Card key={server.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-4 h-4 rounded-full ${server.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <div>
                          <h3 className="font-semibold text-lg">{server.name}</h3>
                          <p className="text-gray-600">{server.ip}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Power" size={16} className="mr-2" />
                          {server.status === 'online' ? 'Выключить' : 'Включить'}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="RotateCcw" size={16} className="mr-2" />
                          Перезагрузить
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Settings" size={16} className="mr-2" />
                          Настройки
                        </Button>
                      </div>
                    </div>
                    
                    {server.status === 'online' && (
                      <div className="grid grid-cols-3 gap-6 mt-6">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Загрузка CPU</span>
                            <span>{server.cpu}%</span>
                          </div>
                          <Progress value={server.cpu} className="h-3" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Использование RAM</span>
                            <span>{server.ram}%</span>
                          </div>
                          <Progress value={server.ram} className="h-3" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Занято диска</span>
                            <span>{server.disk}%</span>
                          </div>
                          <Progress value={server.disk} className="h-3" />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case 'balance':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-800">Финансы</h1>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-vds-primary hover:bg-green-600 text-white">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Пополнить баланс
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Пополнение баланса</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="amount">Сумма пополнения</Label>
                      <Input id="amount" placeholder="1000" className="mt-1" />
                    </div>
                    <div>
                      <Label>Способ оплаты</Label>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <Card className="p-4 cursor-pointer hover:bg-gray-50 border-blue-500">
                          <div className="flex items-center space-x-3">
                            <Icon name="CreditCard" size={24} />
                            <span>Банковская карта</span>
                          </div>
                        </Card>
                        <Card className="p-4 cursor-pointer hover:bg-gray-50">
                          <div className="flex items-center space-x-3">
                            <Icon name="Smartphone" size={24} />
                            <span>СБП</span>
                          </div>
                        </Card>
                      </div>
                    </div>
                    <Button className="w-full bg-vds-primary hover:bg-green-600 text-white">
                      Пополнить на 1000₽
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Текущий баланс</h3>
                    <p className="text-3xl font-bold text-green-600">0.00 ₽</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Расходы за месяц</h3>
                    <p className="text-3xl font-bold text-red-600">1,500 ₽</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Следующее списание</h3>
                    <p className="text-lg font-semibold">25.09.2025</p>
                    <p className="text-sm text-gray-600">500 ₽</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>История транзакций</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Дата</TableHead>
                      <TableHead>Тип</TableHead>
                      <TableHead>Сумма</TableHead>
                      <TableHead>Описание</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map(tx => (
                      <TableRow key={tx.id}>
                        <TableCell className="font-mono">{tx.id}</TableCell>
                        <TableCell>{tx.date}</TableCell>
                        <TableCell>
                          <Badge variant={tx.type === 'payment' ? 'default' : 'destructive'}>
                            {tx.type === 'payment' ? 'Пополнение' : 'Списание'}
                          </Badge>
                        </TableCell>
                        <TableCell className={tx.amount > 0 ? 'text-green-600' : 'text-red-600'}>
                          {tx.amount > 0 ? '+' : ''}{tx.amount} ₽
                        </TableCell>
                        <TableCell>{tx.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )

      case 'tickets':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-800">Поддержка</h1>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-vds-primary hover:bg-green-600 text-white">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Создать тикет
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Новый запрос в поддержку</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="subject">Тема</Label>
                      <Input id="subject" placeholder="Опишите проблему кратко" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="priority">Приоритет</Label>
                      <select className="w-full mt-1 p-2 border rounded">
                        <option value="low">Низкий</option>
                        <option value="medium">Средний</option>
                        <option value="high">Высокий</option>
                        <option value="critical">Критический</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message">Сообщение</Label>
                      <textarea
                        id="message"
                        className="w-full mt-1 p-2 border rounded h-32"
                        placeholder="Подробно опишите проблему..."
                      />
                    </div>
                    <Button className="w-full bg-vds-primary hover:bg-green-600 text-white">
                      Отправить запрос
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Мои запросы</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Тема</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Приоритет</TableHead>
                      <TableHead>Создан</TableHead>
                      <TableHead>Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tickets.map(ticket => (
                      <TableRow key={ticket.id}>
                        <TableCell className="font-mono">{ticket.id}</TableCell>
                        <TableCell>{ticket.subject}</TableCell>
                        <TableCell>
                          <Badge variant={
                            ticket.status === 'open' ? 'destructive' :
                            ticket.status === 'in_progress' ? 'default' : 'secondary'
                          }>
                            {ticket.status === 'open' ? 'Открыт' :
                             ticket.status === 'in_progress' ? 'В работе' : 'Закрыт'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            ticket.priority === 'high' ? 'destructive' :
                            ticket.priority === 'medium' ? 'default' : 'secondary'
                          }>
                            {ticket.priority === 'high' ? 'Высокий' :
                             ticket.priority === 'medium' ? 'Средний' : 'Низкий'}
                          </Badge>
                        </TableCell>
                        <TableCell>{ticket.created}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Открыть
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return (
          <div className="text-center py-12">
            <Icon name="Settings" size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Раздел в разработке</h3>
            <p className="text-gray-600">Этот раздел скоро станет доступен</p>
          </div>
        )
    }
  }

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
          <span className="text-vds-primary">VDS Panel</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span>Баланс:</span>
            <span className="font-bold">0.00 ₽</span>
            <Button variant="link" className="text-vds-primary p-0 h-auto" onClick={() => setActiveSection('balance')}>
              пополнить
            </Button>
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
                <div 
                  className="flex items-center justify-between p-2 hover:bg-vds-dark rounded cursor-pointer"
                  onClick={() => toggleExpanded(item.id)}
                >
                  <div className="flex items-center space-x-3">
                    <Icon name={item.icon as any} size={16} />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  {item.subitems.length > 0 && (
                    <Icon name={expandedItems.includes(item.id) ? "ChevronDown" : "ChevronRight"} size={12} />
                  )}
                </div>
                
                {expandedItems.includes(item.id) && item.subitems.length > 0 && (
                  <div className="ml-6 mt-1">
                    {item.subitems.map((subitem) => (
                      <div 
                        key={subitem.id}
                        className={`p-2 text-sm cursor-pointer rounded ${
                          activeSection === subitem.id ? 'bg-vds-primary text-black' : 'text-gray-300 hover:text-white'
                        }`}
                        onClick={() => setActiveSection(subitem.id)}
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
          {renderContent()}
        </main>
      </div>
    </div>
  )
}