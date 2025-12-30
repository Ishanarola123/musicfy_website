import React, { useState, useEffect } from 'react';
import { Music, Shield, Download, Zap, Heart, Headphones, Github, Play, ChevronRight, Star, Lock, Code, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Music,
      title: 'Your Music Library',
      description: 'Access all your local music files in one beautiful interface. Browse by songs, albums, artists, and playlists.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant playback with no lag. Optimized performance ensures smooth experience even with large libraries.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Zero data collection. Your music stays on your device. No tracking, no analytics, no compromises.'
    },
    {
      icon: Headphones,
      title: 'Rich Playback',
      description: 'Advanced equalizer, gapless playback, and support for all major audio formats including FLAC.'
    },
    {
      icon: Heart,
      title: 'Smart Features',
      description: 'Track your listening history, discover your most played songs, and get intelligent music suggestions.'
    },
    {
      icon: Code,
      title: 'Open Source',
      description: 'Built on RetroMusicPlayer. Fully transparent, community-driven, and licensed under GPL-3.0.'
    }
  ];

  const screenshots = [
    {
      url: 'https://customer-assets.emergentagent.com/job_f7570fce-5749-4c63-b425-ea9050dc8d5a/artifacts/xvnyexs0_1.png',
      alt: 'Musicfy Music Player Home'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_f7570fce-5749-4c63-b425-ea9050dc8d5a/artifacts/9cvnkxww_2.png',
      alt: 'Music Library Interface'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_f7570fce-5749-4c63-b425-ea9050dc8d5a/artifacts/3veg8jsh_3.png',
      alt: 'Album Browser'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_f7570fce-5749-4c63-b425-ea9050dc8d5a/artifacts/vvgmhksr_4.png',
      alt: 'Songs Library'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <div className="header-content">
          <div className="logo-section">
            <img 
              src="https://customer-assets.emergentagent.com/job_f7570fce-5749-4c63-b425-ea9050dc8d5a/artifacts/l6k65qqj_ic_launcher-playstore.png" 
              alt="Musicfy Logo" 
              className="logo-img"
            />
            <span className="logo-text">Musicfy</span>
          </div>
          <nav className="nav-menu">
            <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
            <button onClick={() => scrollToSection('privacy')} className="nav-link">Privacy</button>
            <button onClick={() => scrollToSection('download')} className="nav-link">Download</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Music.
              <br />
              <span className="gradient-text">Your Freedom.</span>
            </h1>
            <p className="hero-description">
              Experience the ultimate free music player that respects your privacy. 
              Play your entire music library offline with zero data collection.
            </p>
            <div className="hero-buttons">
              <Button className="cta-button cta-primary">
                <Download className="btn-icon" />
                Download Now
              </Button>
              <Button className="cta-button cta-secondary">
                <Github className="btn-icon" />
                View on GitHub
              </Button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <Star className="stat-icon" />
                <div className="stat-content">
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Free & Open Source</div>
                </div>
              </div>
              <div className="stat-item">
                <Lock className="stat-icon" />
                <div className="stat-content">
                  <div className="stat-value">Zero</div>
                  <div className="stat-label">Data Collection</div>
                </div>
              </div>
              <div className="stat-item">
                <Users className="stat-icon" />
                <div className="stat-content">
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Local Playback</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="phone-mockup">
              <img 
                src="https://customer-assets.emergentagent.com/job_f7570fce-5749-4c63-b425-ea9050dc8d5a/artifacts/xvnyexs0_1.png" 
                alt="Musicfy App Screenshot" 
                className="mockup-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">Everything you need in a music player, nothing you don't</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card">
              <CardContent className="feature-content">
                <div className="feature-icon-wrapper">
                  <feature.icon className="feature-icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="screenshots-section">
        <div className="section-header">
          <h2 className="section-title">Beautiful Interface</h2>
          <p className="section-subtitle">A music player designed for music lovers</p>
        </div>
        <div className="screenshots-grid">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="screenshot-card">
              <img src={screenshot.url} alt={screenshot.alt} className="screenshot-img" />
            </div>
          ))}
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="privacy-section">
        <div className="privacy-content">
          <div className="privacy-text">
            <div className="privacy-badge">
              <Shield className="badge-icon" />
              <span>Privacy First</span>
            </div>
            <h2 className="privacy-title">Your Music Stays Yours</h2>
            <p className="privacy-description">
              Unlike streaming services that track your every move, Musicfy operates entirely on your device. 
              No accounts, no cloud storage, no data collection. Period.
            </p>
            <ul className="privacy-list">
              <li className="privacy-item">
                <div className="check-icon"></div>
                <span>No personally identifiable information collected</span>
              </li>
              <li className="privacy-item">
                <div className="check-icon"></div>
                <span>All processing happens locally on your device</span>
              </li>
              <li className="privacy-item">
                <div className="check-icon"></div>
                <span>No tracking of listening habits or preferences</span>
              </li>
              <li className="privacy-item">
                <div className="check-icon"></div>
                <span>Open source code you can verify yourself</span>
              </li>
            </ul>
            <a href="https://privacy-policy-muscify-n9le.vercel.app/" target="_blank" rel="noopener noreferrer" className="privacy-link">
              Read Full Privacy Policy
              <ChevronRight className="link-arrow" />
            </a>
          </div>
          <div className="privacy-visual">
            <div className="privacy-card">
              <Lock className="visual-icon" />
              <h3 className="visual-title">100% Local</h3>
              <p className="visual-text">Everything stays on your device</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download-section">
        <div className="download-content">
          <Play className="download-icon" />
          <h2 className="download-title">Ready to Experience Music Freedom?</h2>
          <p className="download-description">
            Download Musicfy now and take control of your music library
          </p>
          <div className="download-buttons">
            <Button className="download-btn download-primary">
              <Download className="btn-icon" />
              Download from Google Play
            </Button>
            <Button className="download-btn download-github">
              <Github className="btn-icon" />
              Get from GitHub
            </Button>
          </div>
          <p className="download-note">Free • Open Source • No Ads • GPL-3.0 Licensed</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_f7570fce-5749-4c63-b425-ea9050dc8d5a/artifacts/l6k65qqj_ic_launcher-playstore.png" 
                alt="Musicfy" 
                className="footer-logo-img"
              />
              <span className="footer-logo-text">Musicfy</span>
            </div>
            <p className="footer-tagline">Your music, your freedom</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Product</h4>
            <a href="#features" className="footer-link">Features</a>
            <a href="#privacy" className="footer-link">Privacy</a>
            <a href="#download" className="footer-link">Download</a>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <a href="https://privacy-policy-muscify-n9le.vercel.app/" target="_blank" rel="noopener noreferrer" className="footer-link">Privacy Policy</a>
            <a href="https://github.com/publicappsrepo/musicfy_android.git" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href="https://github.com/RetroMusicPlayer/RetroMusicPlayer" target="_blank" rel="noopener noreferrer" className="footer-link">RetroMusicPlayer</a>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Open Source</h4>
            <p className="footer-text">Built with RetroMusicPlayer</p>
            <p className="footer-text">Licensed under GPL-3.0</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 Musicfy. Free and Open Source Software.</p>
        </div>
      </footer>
    </div>
  );
};