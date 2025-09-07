import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Globe, 
  Linkedin, 
  Facebook, 
  Github, 
  Instagram, 
  Twitter,
  Youtube,
  ExternalLink,
  ArrowLeft
} from 'lucide-react';
import { mockLinks } from '../utils/mockData';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

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
    website: 'from-blue-400 to-blue-600',
    linkedin: 'from-blue-500 to-blue-700',
    facebook: 'from-blue-600 to-blue-800',
    github: 'from-gray-600 to-gray-800',
    instagram: 'from-pink-400 to-pink-600',
    twitter: 'from-cyan-400 to-cyan-600',
    youtube: 'from-red-500 to-red-700',
    custom: 'from-purple-400 to-purple-600'
  };

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            onClick={() => navigate('/')}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
            Public Profile
          </Badge>
        </div>

        {/* Profile Content */}
        <div className="max-w-2xl mx-auto">
          <Card className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8">
            {/* Profile Header */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-yellow-400/50 shadow-lg">
                <img 
                  src="https://customer-assets.emergentagent.com/job_glass-social-card/artifacts/e6nl7rwe_DevWK_logo_metallic.gif"
                  alt="DevWK Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Welbennys Kennedy</h1>
              <p className="text-yellow-300 text-lg font-semibold mb-2">Software Engineer</p>
              <p className="text-gray-300">Full Stack Developer | Tech Enthusiast</p>
            </div>

            {/* Links Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {mockLinks.map((link) => {
                const IconComponent = platformIcons[link.platform] || ExternalLink;
                const colorClass = platformColors[link.platform] || platformColors.custom;

                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.url)}
                    className="group p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-white text-sm">
                          {link.customName || link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
                        </p>
                        <p className="text-xs text-gray-400 truncate">{link.url}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="text-center mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Connect with me through the platforms above
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
