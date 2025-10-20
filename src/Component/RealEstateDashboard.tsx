import { useState } from "react";
import "./RealEstateDashboard.css";
import {
  Home,
  TrendingUp,
  CheckSquare,
  Map,
  BarChart3,
  Moon,
  Sun,
  Bell,
  Users,
  Plus,
  X,
  Calendar,
  DollarSign,
  Eye,
  ChevronRight,
  Sparkles,
  Trophy,
  Mic,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  status: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  views: number;
  image: string;
  aiValue: number;
  trend: string;
}

interface Task {
  id: number;
  text: string;
  priority: "low" | "medium" | "high";
  completed: boolean;
  due: string;
}

interface Notification {
  id: number;
  text: string;
  time: string;
  read: boolean;
}

interface LeaderboardAgent {
  name: string;
  sales: number;
  badge: string;
  avatar: string;
}

interface SalesData {
  month: string;
  sales: number;
  revenue: number;
}

interface MarketData {
  name: string;
  value: number;
  [key: string]: string | number;
}

const RealEstateDashboard = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<
    "dashboard" | "properties" | "tasks" | "analytics" | "team"
  >("dashboard");
  const [properties] = useState<Property[]>([
    {
      id: 1,
      title: "Luxury Villa in Kileleshwa",
      price: 45000000,
      location: "Kileleshwa, Nairobi",
      status: "available",
      bedrooms: 4,
      bathrooms: 3,
      area: 350,
      views: 234,
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop",
      aiValue: 47500000,
      trend: "+5.5%",
    },
    {
      id: 2,
      title: "Modern Apartment in Westlands",
      price: 18000000,
      location: "Westlands, Nairobi",
      status: "pending",
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      views: 189,
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      aiValue: 18500000,
      trend: "+2.8%",
    },
    {
      id: 3,
      title: "Penthouse in Lavington",
      price: 85000000,
      location: "Lavington, Nairobi",
      status: "available",
      bedrooms: 5,
      bathrooms: 4,
      area: 450,
      views: 312,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      aiValue: 89000000,
      trend: "+4.7%",
    },
    {
      id: 4,
      title: "Garden Estate Home",
      price: 32000000,
      location: "Karen, Nairobi",
      status: "sold",
      bedrooms: 4,
      bathrooms: 3,
      area: 280,
      views: 456,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      aiValue: 32000000,
      trend: "0%",
    },
  ]);

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      text: "Call client at 3 PM",
      priority: "high",
      completed: false,
      due: "Today",
    },
    {
      id: 2,
      text: "Follow up with leads from open house",
      priority: "medium",
      completed: false,
      due: "Tomorrow",
    },
    {
      id: 3,
      text: "Update property photos",
      priority: "low",
      completed: false,
      due: "This week",
    },
    {
      id: 4,
      text: "Schedule property viewing",
      priority: "high",
      completed: true,
      due: "Today",
    },
  ]);

  const [notifications] = useState<Notification[]>([
    {
      id: 1,
      text: "Agent John added a new property in Lavington",
      time: "2 min ago",
      read: false,
    },
    {
      id: 2,
      text: "Client inquiry for Kileleshwa villa",
      time: "15 min ago",
      read: false,
    },
    {
      id: 3,
      text: "Price drop alert: Westlands area",
      time: "1 hour ago",
      read: true,
    },
  ]);

  const [showAIPanel, setShowAIPanel] = useState<boolean>(false);
  const [aiInput, setAiInput] = useState<string>("");
  const [aiResponse, setAiResponse] = useState<string>("");
  const [showNotifications, setShowNotifications] = useState<boolean>(false);

  const salesData: SalesData[] = [
    { month: "Jan", sales: 12, revenue: 45 },
    { month: "Feb", sales: 19, revenue: 68 },
    { month: "Mar", sales: 15, revenue: 52 },
    { month: "Apr", sales: 25, revenue: 89 },
    { month: "May", sales: 22, revenue: 78 },
    { month: "Jun", sales: 30, revenue: 105 },
  ];

  const marketData: MarketData[] = [
    { name: "Westlands", value: 35 },
    { name: "Kileleshwa", value: 25 },
    { name: "Lavington", value: 20 },
    { name: "Karen", value: 20 },
  ];

  const COLORS: string[] = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"];

  const leaderboard: LeaderboardAgent[] = [
    { name: "Sarah Johnson", sales: 18, badge: "Top Seller", avatar: "SJ" },
    { name: "Mike Chen", sales: 15, badge: "Fast Responder", avatar: "MC" },
    { name: "Emma Wilson", sales: 12, badge: "Rising Star", avatar: "EW" },
  ];

  const toggleTask = (id: number): void => {
    setTasks(
      tasks.map((task: Task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAISubmit = () => {
    setAiResponse(
      "Based on current market trends in Nairobi, I recommend pricing the Kileleshwa property at KES 47.5M. The area has seen a 5.5% increase in demand over the past 30 days. Properties with 4+ bedrooms are particularly sought after. Would you like me to generate a compelling property description?"
    );
    setAiInput("");
  };

  return (
    <div
      className={`dashboard-container ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      {/* Header */}
      <header className={`header ${darkMode ? "dark-mode" : ""}`}>
        <div className="header-content">
          <div className="logo-container">
            <div className="logo-icon">
              <Home />
            </div>
            <div className="logo-text">
              <h1>Elite Estates</h1>
              <p>AI-Powered Dashboard</p>
            </div>
          </div>

          <div className="header-actions">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="icon-button"
            >
              <Bell />
              {notifications.filter((n) => !n.read).length > 0 && (
                <span className="notification-badge"></span>
              )}
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="icon-button"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>

            <div className="user-profile">
              <div className="user-avatar">JD</div>
              <div className="user-info">
                <p>John Doe</p>
                <span>Senior Agent</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="navigation">
          {[
            { id: "dashboard", icon: Home, label: "Dashboard" },
            { id: "properties", icon: Map, label: "Properties" },
            { id: "tasks", icon: CheckSquare, label: "Tasks" },
            { id: "analytics", icon: BarChart3, label: "Analytics" },
            { id: "team", icon: Users, label: "Team" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() =>
                setActiveView(
                  item.id as
                    | "dashboard"
                    | "properties"
                    | "tasks"
                    | "analytics"
                    | "team"
                )
              }
              className={`nav-button ${activeView === item.id ? "active" : ""}`}
            >
              <item.icon />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </header>

      {/* Notifications Dropdown */}
      {showNotifications && (
        <div className="notifications-dropdown">
          <div className="notifications-header">
            <h3>Notifications</h3>
            <button onClick={() => setShowNotifications(false)}>
              <X />
            </button>
          </div>
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`notification-item ${notif.read ? "read" : "unread"}`}
            >
              <p>{notif.text}</p>
              <span>{notif.time}</span>
            </div>
          ))}
        </div>
      )}

      <div className="main-content">
        {/* Dashboard View */}
        {activeView === "dashboard" && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="kpi-grid">
              {[
                {
                  label: "Total Listings",
                  value: "127",
                  icon: Home,
                  color: "blue",
                  change: "+12%",
                },
                {
                  label: "Sold This Month",
                  value: "30",
                  icon: TrendingUp,
                  color: "green",
                  change: "+8%",
                },
                {
                  label: "Revenue",
                  value: "105M KES",
                  icon: DollarSign,
                  color: "purple",
                  change: "+15%",
                },
                {
                  label: "Active Leads",
                  value: "48",
                  icon: Eye,
                  color: "pink",
                  change: "+5%",
                },
              ].map((kpi, i) => (
                <div key={i} className="kpi-card">
                  <div className="kpi-header">
                    <kpi.icon
                      style={{ color: `var(--${kpi.color}-600, #2563eb)` }}
                    />
                    <span className="kpi-change">{kpi.change}</span>
                  </div>
                  <p className="kpi-value">{kpi.value}</p>
                  <p className="kpi-label">{kpi.label}</p>
                </div>
              ))}
            </div>

            {/* AI Insights Card */}
            <div className="ai-insights-card">
              <div className="ai-insights-header">
                <Sparkles />
                <h3>AI Market Insights</h3>
              </div>
              <p>
                Westlands area showing 40% increase in demand this week.
                Recommend adjusting prices by +3% for properties over 150M. Top
                performing property: Luxury Villa in Kileleshwa with 234 views.
              </p>
              <button
                onClick={() => setShowAIPanel(true)}
                className="ai-insights-button"
              >
                Open AI Assistant
              </button>
            </div>

            {/* Charts */}
            <div className="charts-grid">
              <div className="chart-card">
                <h3>Sales Performance</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#3b82f6"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="chart-card">
                <h3>Market Distribution</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={marketData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(props: any) => props.name || ""}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {marketData.map((_entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                {[
                  {
                    action: "New listing added",
                    detail: "Penthouse in Lavington",
                    time: "5 min ago",
                  },
                  {
                    action: "Property sold",
                    detail: "Garden Estate Home - 32M KES",
                    time: "2 hours ago",
                  },
                  {
                    action: "Price updated",
                    detail: "Westlands Apartment adjusted to 18M",
                    time: "4 hours ago",
                  },
                ].map((activity, i) => (
                  <div key={i} className="activity-item">
                    <div className="activity-details">
                      <p>{activity.action}</p>
                      <span>{activity.detail}</span>
                    </div>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Properties View */}
        {activeView === "properties" && (
          <div className="Width">
            <div className="properties-header">
              <h2>Property Listings</h2>
              <button className="add-button">
                <Plus />
                Add Property
              </button>
            </div>

            <div className="properties-grid">
              {properties.map((property) => (
                <div key={property.id} className="property-card">
                  <div className="property-image-container">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="property-image"
                    />
                    <span className={`property-status ${property.status}`}>
                      {property.status.toUpperCase()}
                    </span>
                    <div className="property-views">
                      <Eye />
                      <span>{property.views}</span>
                    </div>
                  </div>

                  <div className="property-details">
                    <h3 className="property-title">{property.title}</h3>
                    <p className="property-location">{property.location}</p>

                    <div className="property-pricing">
                      <div>
                        <p className="property-price">
                          {(property.price / 1000000).toFixed(1)}M KES
                        </p>
                        <p className="property-ai-value">
                          AI Value: {(property.aiValue / 1000000).toFixed(1)}M
                        </p>
                      </div>
                      <div
                        className={`property-trend ${
                          property.trend.includes("+") ? "positive" : "neutral"
                        }`}
                      >
                        <TrendingUp />
                        <span>{property.trend}</span>
                      </div>
                    </div>

                    <div className="property-specs">
                      <span>{property.bedrooms} beds</span>
                      <span>{property.bathrooms} baths</span>
                      <span>{property.area}m²</span>
                    </div>

                    <button className="property-button">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tasks View */}
        {activeView === "tasks" && (
          <div className="Width">
            <div className="properties-header">
              <h2>Smart Task Manager</h2>
              <button className="add-button">
                <Plus />
                Add Task
              </button>
            </div>

            <div className="ai-suggested-tasks">
              <h3>
                <Sparkles />
                AI Suggested Tasks
              </h3>
              <div className="space-y-2">
                <div className="suggested-task-item">
                  <span>Follow up with leads from last week's open house</span>
                  <button>Add</button>
                </div>
              </div>
            </div>

            <div className="task-list">
              {tasks.map((task) => (
                <div key={task.id} className="task-item">
                  <div className="task-content">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`task-checkbox ${
                        task.completed ? "completed" : ""
                      }`}
                    >
                      {task.completed && <CheckSquare />}
                    </button>
                    <div className="task-details">
                      <p
                        className={`task-text ${
                          task.completed ? "completed" : ""
                        }`}
                      >
                        {task.text}
                      </p>
                      <div className="task-meta">
                        <span className={`task-priority ${task.priority}`}>
                          {task.priority}
                        </span>
                        <span className="task-due">
                          <Calendar />
                          {task.due}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team View */}
        {activeView === "team" && (
          <div className="Width">
            <h2>Team Leaderboard</h2>
            <div className="leaderboard-list">
              {leaderboard.map((agent, i) => (
                <div key={i} className="leaderboard-item">
                  <div className="leaderboard-agent">
                    <div className="agent-avatar-container">
                      <div className="agent-avatar">{agent.avatar}</div>
                      {i === 0 && <Trophy className="agent-trophy" />}
                    </div>
                    <div className="agent-info">
                      <p>{agent.name}</p>
                      <span className="agent-badge">{agent.badge}</span>
                    </div>
                  </div>
                  <div className="agent-stats">
                    <p className="agent-sales">{agent.sales}</p>
                    <p className="agent-stats-label">sales</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* AI Assistant Panel */}
      {showAIPanel && (
        <div className="ai-panel-overlay">
          <div className="ai-panel">
            <div className="ai-panel-header">
              <div className="ai-panel-title">
                <Sparkles />
                <h3>AI Assistant</h3>
              </div>
              <button onClick={() => setShowAIPanel(false)}>
                <X />
              </button>
            </div>

            <div className="ai-panel-content">
              <div className="ai-quick-actions">
                <button className="ai-quick-action blue">
                  <p>Generate Property Description</p>
                </button>
                <button className="ai-quick-action purple">
                  <p>Market Trend Analysis</p>
                </button>
                <button className="ai-quick-action pink">
                  <p>Compose Client Email</p>
                </button>
                <button className="ai-quick-action green">
                  <p>Price Recommendation</p>
                </button>
              </div>

              {aiResponse && (
                <div className="ai-response">
                  <p>{aiResponse}</p>
                </div>
              )}

              <div className="ai-input-container">
                <input
                  type="text"
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  placeholder="Ask AI anything about your properties..."
                  className="ai-input"
                />
                <button onClick={handleAISubmit} className="ai-submit-button">
                  Ask
                </button>
                <button className="ai-voice-button">
                  <Mic />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button onClick={() => setShowAIPanel(true)} className="fab">
        <Sparkles />
      </button>
    </div>
  );
};

export default RealEstateDashboard;
