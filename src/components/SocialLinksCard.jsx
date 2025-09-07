import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { 
  Globe, 
  Linkedin, 
  Facebook, 
  Github, 
  Instagram, 
  Twitter,
  Youtube,
  Plus,
  Edit3,
  Trash2,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { mockLinks } from '../utils/mockData';

const SocialLinksCard = () => {
  const [links, setLinks] = useState(mockLinks);
  const [isEditing, setIsEditing] = useState(false);
  const [newLink, setNewLink] = useState({ platform: '', url: '', customName: '' });
  const [copied, setCopied] = useState(false);

  const platformIcons = {
    website: Globe,
    linkedin: Linkedin,
    facebook: Facebook,
    github: Github,
    instagram: Instagram,
    twitter: Twitter,
    youtube: Youtube,
    custom: ExternalLink
  };

  const platformColors = {
    website: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
    linkedin: 'bg-blue-600/20 text-blue-300 border-blue-500/30',
    facebook: 'bg-blue-700/20 text-blue-300 border-blue-600/30',
    github: 'bg-gray-600/20 text-gray-300 border-gray-500/30',
    instagram: 'bg-pink-500/20 text-pink-300 border-pink-400/30',
    twitter: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30',
    youtube: 'bg-red-500/20 text-red-300 border-red-400/30',
    custom: 'bg-purple-500/20 text-purple-300 border-purple-400/30'
  };

  const addLink = () => {
    if (newLink.url && newLink.platform) {
      const linkId = Date.now().toString();
      setLinks([...links, { ...newLink, id: linkId }]);
      setNewLink({ platform: '', url: '', customName: '' });
    }
  };

  const removeLink = (id) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const copyProfileUrl = () => {
    const profileUrl = `${window.location.origin}/profile`;
    navigator.clipboard.writeText(profileUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* Background with code pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8fHwxNzU3MjM3ODAzfDA&ixlib=rb-4.1.0&q=85')`
        }}
      />

      {/* Animated code overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="code-animation">
          <span className="text-green-400">const</span> <span className="text-blue-400">developer</span> = {'{'}<br />
          &nbsp;&nbsp;<span className="text-yellow-400">name</span>: <span className="text-red-400">'Professional'</span>,<br />
          &nbsp;&nbsp;<span className="text-yellow-400">skills</span>: [<span className="text-red-400">'React'</span>, <span className="text-red-400">'Node.js'</span>],<br />
          &nbsp;&nbsp;<span className="text-yellow-400">social</span>: <span className="text-purple-400">links</span><br />
          {'}'};
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md">
          {/* Main Glass Card */}
          <Card className="snake-border backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 space-y-6">
            {/* Profile Section */}
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-yellow-400/50 shadow-lg">
                <img 
                  src="https://customer-assets.emergentagent.com/job_glass-social-card/artifacts/e6nl7rwe_DevWK_logo_metallic.gif"
                  alt="DevWK Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Welbennys Kennedy</h2>
                <p className="text-yellow-300 text-lg font-semibold mb-2">Software Engineer</p>
                <p className="text-gray-300 text-sm">Connect with me through these platforms</p>
              </div>
            </div>

            {/* Links Section */}
            <div className="space-y-3">
              {links.map((link) => {
                const IconComponent = platformIcons[link.platform] || ExternalLink;
                const colorClass = platformColors[link.platform] || platformColors.custom;

                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.url)}
                    className={`w-full p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:bg-white/20 ${colorClass} group`}
                  >
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5" />
                      <div className="flex-1 text-left">
                        <p className="font-medium text-sm">
                          {link.customName || link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
                        </p>
                        <p className="text-xs opacity-70 truncate">{link.url}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Add New Link Section */}
            {isEditing && (
              <div className="space-y-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="space-y-3">
                  <div>
                    <Label className="text-white text-sm">Platform</Label>
                    <select 
                      className="w-full mt-1 p-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm"
                      value={newLink.platform}
                      onChange={(e) => setNewLink({...newLink, platform: e.target.value})}
                    >
                      <option value="">Select a platform</option>
                      <option value="website">Website</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="github">GitHub</option>
                      <option value="instagram">Instagram</option>
                      <option value="facebook">Facebook</option>
                      <option value="twitter">Twitter</option>
                      <option value="youtube">YouTube</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>

                  <div>
                    <Label className="text-white text-sm">URL</Label>
                    <Input 
                      className="mt-1 bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="https://example.com"
                      value={newLink.url}
                      onChange={(e) => setNewLink({...newLink, url: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label className="text-white text-sm">Custom Name (optional)</Label>
                    <Input 
                      className="mt-1 bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="My Portfolio"
                      value={newLink.customName}
                      onChange={(e) => setNewLink({...newLink, customName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    onClick={addLink}
                    className="flex-1 bg-yellow-500/80 hover:bg-yellow-600/80 text-white border-0"
                  >
                    Add Link
                  </Button>
                  <Button 
                    onClick={() => setIsEditing(false)}
                    className="px-4 bg-white/10 hover:bg-white/20 text-white border-white/20"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
           { /* <div className="space-y-3">
              <Button 
                onClick={() => setIsEditing(!isEditing)}
                className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
              >
                <Plus className="w-4 h-4 mr-2" />
                {isEditing ? 'Cancel' : 'Add Link'}
              </Button>

              <Button 
                onClick={copyProfileUrl}
                className="w-full bg-gradient-to-r from-yellow-500/80 to-orange-500/80 hover:from-yellow-600/80 hover:to-orange-600/80 text-white border-0"
              >
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? 'Link Copied!' : 'Copy Profile Link'}
              </Button>
            </div>*/ }

            {/* Footer */}
            <div className="text-center pt-4 border-t border-white/10">
              <p className="text-gray-400 text-xs">
                Developed by WK
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SocialLinksCard;
