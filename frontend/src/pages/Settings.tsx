
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const [email, setEmail] = useState("user@example.com");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [marketAlerts, setMarketAlerts] = useState(true);
  const [portfolioAlerts, setPortfolioAlerts] = useState(true);
  const [newsAlerts, setNewsAlerts] = useState(false);
  
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      </div>
      
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account">
          <div className="grid gap-6 max-w-3xl">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Manage your account information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>Customize your trading preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="currency">Default Currency</Label>
                  <div className="w-[180px]">
                    <select className="w-full p-2 rounded-md bg-background border border-input">
                      <option>USD ($)</option>
                      <option>EUR (€)</option>
                      <option>GBP (£)</option>
                      <option>JPY (¥)</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="timezone">Time Zone</Label>
                  <div className="w-[180px]">
                    <select className="w-full p-2 rounded-md bg-background border border-input">
                      <option>Eastern Time (ET)</option>
                      <option>Pacific Time (PT)</option>
                      <option>Greenwich Mean Time (GMT)</option>
                      <option>Central European Time (CET)</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Trading Hours Notification</Label>
                    <p className="text-sm text-muted-foreground">Get notified when markets open and close</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Preferences</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications">
          <div className="max-w-3xl">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch 
                    checked={emailNotifications} 
                    onCheckedChange={setEmailNotifications} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive push notifications in your browser</p>
                  </div>
                  <Switch 
                    checked={pushNotifications} 
                    onCheckedChange={setPushNotifications} 
                  />
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-base font-medium mb-4">Notification Types</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Market Alerts</Label>
                        <p className="text-sm text-muted-foreground">Major market movements and events</p>
                      </div>
                      <Switch 
                        checked={marketAlerts} 
                        onCheckedChange={setMarketAlerts}
                        disabled={!emailNotifications && !pushNotifications}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Portfolio Alerts</Label>
                        <p className="text-sm text-muted-foreground">Significant changes in your portfolio</p>
                      </div>
                      <Switch 
                        checked={portfolioAlerts} 
                        onCheckedChange={setPortfolioAlerts}
                        disabled={!emailNotifications && !pushNotifications}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>News Alerts</Label>
                        <p className="text-sm text-muted-foreground">Breaking news that may impact your investments</p>
                      </div>
                      <Switch 
                        checked={newsAlerts} 
                        onCheckedChange={setNewsAlerts}
                        disabled={!emailNotifications && !pushNotifications}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Notification Settings</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="appearance">
          <div className="max-w-3xl">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize the look and feel of the application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base">Theme</Label>
                    <p className="text-sm text-muted-foreground">Switch between light and dark mode</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Light</span>
                    <Switch 
                      checked={theme === "dark"}
                      onCheckedChange={toggleTheme}
                    />
                    <span className="text-sm">Dark</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base">Chart Style</Label>
                    <p className="text-sm text-muted-foreground">Choose your preferred chart appearance</p>
                  </div>
                  <div className="w-[180px]">
                    <select className="w-full p-2 rounded-md bg-background border border-input">
                      <option>Modern</option>
                      <option>Classic</option>
                      <option>Minimal</option>
                      <option>Candlestick</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base">Compact Mode</Label>
                    <p className="text-sm text-muted-foreground">Reduce spacing for more content</p>
                  </div>
                  <Switch defaultChecked={false} />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Appearance</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="subscription">
          <div className="max-w-3xl">
            <Card className="glass-card mb-6">
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>You are currently on the Premium plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-primary/10 p-4 rounded-md mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Premium</h3>
                    <span className="text-lg font-bold">$29/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Next billing date: October 15, 2023</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Change Plan</Button>
                    <Button variant="destructive" size="sm">Cancel Subscription</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-3">Date</th>
                        <th className="text-left p-3">Description</th>
                        <th className="text-right p-3">Amount</th>
                        <th className="text-right p-3">Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { date: "Sept 15, 2023", description: "Premium Plan - Monthly", amount: "$29.00" },
                        { date: "Aug 15, 2023", description: "Premium Plan - Monthly", amount: "$29.00" },
                        { date: "July 15, 2023", description: "Premium Plan - Monthly", amount: "$29.00" }
                      ].map((item, i) => (
                        <tr key={i} className="border-b border-white/5">
                          <td className="p-3">{item.date}</td>
                          <td className="p-3">{item.description}</td>
                          <td className="p-3 text-right">{item.amount}</td>
                          <td className="p-3 text-right">
                            <Button variant="link" className="p-0 h-auto">Download</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="security">
          <div className="max-w-3xl">
            <Card className="glass-card mb-6">
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Update Password</Button>
              </CardFooter>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>Add an extra layer of security to your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base">Enable 2FA</Label>
                    <p className="text-sm text-muted-foreground">Require a verification code when you log in</p>
                  </div>
                  <Switch defaultChecked={false} />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base">Login Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive email alerts for new logins</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Security Settings</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
