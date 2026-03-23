import { useState } from "react";
import { Save, User, Bell, Shield, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card";
import { storage } from "../lib/storage";

export function Settings() {
  const [profile, setProfile] = useState(() => storage.get("user_profile", {
    firstName: "Ahmed",
    lastName: "Mohamed",
    email: "ahmed@example.com",
    title: "Frontend Developer"
  }));

  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: false
  });

  const handleSaveProfile = () => {
    storage.set("user_profile", profile);
    toast.success("Profile updated successfully!");
    // Simulate API delay
    const btn = document.getElementById("save-btn");
    if (btn) {
      const originalText = btn.innerText;
      btn.innerText = "Saved!";
      setTimeout(() => btn.innerText = originalText, 2000);
    }
  };

  const clearData = () => {
    if (window.confirm("Are you sure? This will reset your Roadmap and Assessment progress.")) {
      localStorage.removeItem("roadmap_progress");
      localStorage.removeItem("assessment_step");
      localStorage.removeItem("assessment_data");
      localStorage.removeItem("user_profile");
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8 pb-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <div className="grid gap-8">
        {/* Profile Section */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              <CardTitle>Profile Information</CardTitle>
            </div>
            <CardDescription>Update your personal details and public profile.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name</label>
                <Input 
                  value={profile.firstName} 
                  onChange={(e) => setProfile({...profile, firstName: e.target.value})} 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name</label>
                <Input 
                  value={profile.lastName} 
                  onChange={(e) => setProfile({...profile, lastName: e.target.value})} 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <Input 
                value={profile.email} 
                onChange={(e) => setProfile({...profile, email: e.target.value})} 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Job Title</label>
              <Input 
                value={profile.title} 
                onChange={(e) => setProfile({...profile, title: e.target.value})} 
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button id="save-btn" onClick={handleSaveProfile}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </CardFooter>
        </Card>

        {/* Notifications Section */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              <CardTitle>Notifications</CardTitle>
            </div>
            <CardDescription>Configure how you receive alerts.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Email Notifications</label>
                <p className="text-xs text-muted-foreground">Receive updates about your course progress.</p>
              </div>
              <div className="flex items-center h-6">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  checked={notifications.email}
                  onChange={(e) => setNotifications({...notifications, email: e.target.checked})}
                />
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Push Notifications</label>
                <p className="text-xs text-muted-foreground">Receive real-time alerts on your device.</p>
              </div>
              <div className="flex items-center h-6">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  checked={notifications.push}
                  onChange={(e) => setNotifications({...notifications, push: e.target.checked})}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-destructive/20">
          <CardHeader>
            <div className="flex items-center gap-2 text-destructive">
              <Shield className="h-5 w-5" />
              <CardTitle>Danger Zone</CardTitle>
            </div>
            <CardDescription>Irreversible actions requiring caution.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Resetting data will clear all your saved roadmap progress, assessment results, and local settings. This cannot be undone.
            </p>
            <Button variant="outline" className="text-destructive hover:bg-destructive/10 hover:text-destructive border-destructive/30" onClick={clearData}>
              <Trash2 className="mr-2 h-4 w-4" />
              Reset All Data
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
