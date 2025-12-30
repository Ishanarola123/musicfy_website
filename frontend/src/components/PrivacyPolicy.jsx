import React, { useEffect } from 'react';
import { Shield, Lock, Music, Check, Github, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useNavigate } from 'react-router-dom';

export const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const permissions = [
    {
      icon: Music,
      title: 'Audio Files Access',
      permission: 'READ_MEDIA_AUDIO',
      description: 'Allows Musicfy to access and play audio files stored on your device. This is the core permission that lets you enjoy your music library.'
    },
    {
      icon: Music,
      title: 'Video Files Access',
      permission: 'READ_MEDIA_VIDEO',
      description: 'Enables the app to access video files for displaying thumbnails, album artwork, background visuals, or supporting video playback features.'
    }
  ];

  const privacyFeatures = [
    'No personally identifiable information collected',
    'No tracking of your listening habits or preferences',
    'No data stored on external servers',
    'All music files and settings remain on your device',
    'No analytics or usage statistics collected'
  ];

  const usagePoints = [
    'All permissions are used locally on your device',
    'No data is transmitted to external servers',
    'Permissions are only used for their stated purposes',
    'You maintain full control over your music and data',
    'No tracking, no analytics, no data collection'
  ];

  return (
    <div className="privacy-policy-page">
      {/* Header */}
      <header className="privacy-header">
        <div className="privacy-header-content">
          <div className="privacy-logo-section" onClick={() => navigate('/')}>
            <img 
              src="https://customer-assets.emergentagent.com/job_f7570fce-5749-4c63-b425-ea9050dc8d5a/artifacts/l6k65qqj_ic_launcher-playstore.png" 
              alt="Musicfy Logo" 
              className="privacy-logo-img"
            />
            <span className="privacy-logo-text">Musicfy</span>
          </div>
          <button onClick={() => navigate('/')} className="back-home-btn">
            Back to Home
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-hero-content">
          <div className="privacy-hero-icon">
            <Shield className="hero-shield-icon" />
          </div>
          <h1 className="privacy-hero-title">
            Your Music, <span className="gradient-text">Your Privacy</span>
          </h1>
          <p className="privacy-hero-subtitle">
            Musicfy is built with your privacy as a top priority. We don't collect, store, or share any personally identifiable information. All your music stays on your device, and all processing happens locally.
          </p>
          <div className="privacy-hero-badge">
            <Lock className="badge-lock-icon" />
            <span>Last updated: August 2025</span>
          </div>
        </div>
      </section>

      {/* Information Collection Section */}
      <section className="privacy-section">
        <div className="privacy-container">
          <div className="section-header-center">
            <h2 className="privacy-section-title">Information We Collect</h2>
            <p className="privacy-section-subtitle">Simple answer: Nothing.</p>
          </div>

          <Card className="privacy-info-card">
            <CardContent className="info-card-content">
              <div className="info-grid">
                {privacyFeatures.map((feature, index) => (
                  <div key={index} className="info-item">
                    <Check className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="info-highlight">
                <p className="highlight-text">
                  Every permission we request is used solely to provide music playback features. Nothing more, nothing less.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Permissions Section */}
      <section className="privacy-section permissions-section">
        <div className="privacy-container">
          <div className="section-header-center">
            <h2 className="privacy-section-title">Permissions We Need</h2>
            <p className="privacy-section-subtitle">
              Musicfy requires several permissions to deliver a seamless music experience. Here's a detailed breakdown of each permission and why we need it:
            </p>
          </div>

          <div className="permissions-grid">
            {permissions.map((perm, index) => (
              <Card key={index} className="permission-card">
                <CardContent className="permission-content">
                  <div className="permission-icon-wrapper">
                    <perm.icon className="permission-icon" />
                  </div>
                  <h3 className="permission-title">{perm.title}</h3>
                  <div className="permission-badge">{perm.permission}</div>
                  <p className="permission-description">{perm.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="permissions-categories">
            <h3 className="category-title">Additional Permissions for Enhanced Experience</h3>
            
            <div className="category-group">
              <h4 className="category-heading">
                <Music className="category-icon" />
                Audio & Media Access
              </h4>
              <ul className="category-list">
                <li><strong>Storage Access (READ/WRITE_EXTERNAL_STORAGE):</strong> For older Android versions, this allows reading and managing your local music files for playback and playlist management.</li>
                <li><strong>Audio Settings (MODIFY_AUDIO_SETTINGS):</strong> Lets Musicfy adjust audio output settings for optimal playback quality, including equalizer and volume controls.</li>
              </ul>
            </div>

            <div className="category-group">
              <h4 className="category-heading">
                <Lock className="category-icon" />
                Playback & Control
              </h4>
              <ul className="category-list">
                <li><strong>Notifications (POST_NOTIFICATIONS):</strong> Shows playback controls in your notification area so you can easily play, pause, skip tracks, and see what's currently playing.</li>
                <li><strong>Settings Management (WRITE_SETTINGS):</strong> Saves your personalized preferences like volume levels, equalizer settings, and playback options for a customized experience.</li>
                <li><strong>Alarms & Timers (SCHEDULE_EXACT_ALARM):</strong> Enables scheduling features like sleep timers, playback reminders, or alarm-based music playback.</li>
                <li><strong>Background Playback (FOREGROUND_SERVICE):</strong> Essential for continuous music playback when you switch apps or lock your screen. Ensures uninterrupted listening experience.</li>
              </ul>
            </div>

            <div className="category-group">
              <h4 className="category-heading">
                <Shield className="category-icon" />
                Connectivity
              </h4>
              <ul className="category-list">
                <li><strong>Bluetooth Connection (BLUETOOTH / BLUETOOTH_CONNECT):</strong> Connects to Bluetooth audio devices like wireless headphones, speakers, and car audio systems for wireless music enjoyment.</li>
                <li><strong>Internet Access (INTERNET / ACCESS_NETWORK_STATE):</strong> Required for streaming music from online sources and accessing internet-based content. Checks network availability for streaming features.</li>
                <li><strong>Wake Lock (WAKE_LOCK):</strong> Prevents your device from sleeping during active playback to ensure smooth, uninterrupted music streaming without gaps or stutters.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Permissions */}
      <section className="privacy-section usage-section">
        <div className="privacy-container">
          <div className="section-header-center">
            <h2 className="privacy-section-title">How We Use Permissions</h2>
            <p className="privacy-section-subtitle">Every permission serves a specific purpose for music playback:</p>
          </div>

          <div className="usage-grid">
            {usagePoints.map((point, index) => (
              <div key={index} className="usage-card">
                <div className="usage-number">{index + 1}</div>
                <p className="usage-text">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="privacy-section sharing-section">
        <div className="privacy-container">
          <Card className="sharing-card">
            <CardContent className="sharing-content">
              <Lock className="sharing-icon" />
              <h2 className="sharing-title">Data Sharing</h2>
              <p className="sharing-subtitle">We don't share any data because we don't collect any data.</p>
              <ul className="sharing-list">
                <li><Check className="sharing-check" /> No personal information is shared with third parties</li>
                <li><Check className="sharing-check" /> No listening habits or preferences are tracked or sold</li>
                <li><Check className="sharing-check" /> No user data is transmitted anywhere</li>
                <li><Check className="sharing-check" /> Your music library stays private on your device</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Section */}
      <section className="privacy-section security-section">
        <div className="privacy-container">
          <div className="security-content">
            <div className="security-text">
              <h2 className="security-title">Security</h2>
              <p className="security-description">
                Since Musicfy doesn't collect, store, or transmit any personal data, there's no risk of data breaches from our end. The app operates entirely on your device:
              </p>
              <ul className="security-list">
                <li><Shield className="security-icon-small" /> All processing happens locally on your device</li>
                <li><Shield className="security-icon-small" /> Your music files never leave your device</li>
                <li><Shield className="security-icon-small" /> No user accounts or cloud storage required</li>
                <li><Shield className="security-icon-small" /> Your device security = Your music privacy</li>
              </ul>
            </div>
            <div className="security-visual">
              <div className="security-badge">
                <Shield className="security-badge-icon" />
                <h3 className="security-badge-title">100% Secure</h3>
                <p className="security-badge-text">Local-only processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="privacy-section changes-section">
        <div className="privacy-container">
          <div className="changes-content">
            <h2 className="changes-title">Changes to This Policy</h2>
            <p className="changes-description">
              We may update this Privacy Policy occasionally to reflect app improvements or legal requirements. When changes are made:
            </p>
            <div className="changes-grid">
              <div className="change-item">
                <div className="change-icon">1</div>
                <p>The "Effective Date" at the top will be updated</p>
              </div>
              <div className="change-item">
                <div className="change-icon">2</div>
                <p>Notifications will be posted within the app</p>
              </div>
              <div className="change-item">
                <div className="change-icon">3</div>
                <p>Major changes will be highlighted in the app</p>
              </div>
              <div className="change-item">
                <div className="change-icon">4</div>
                <p>We recommend checking this page periodically</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="privacy-section opensource-section">
        <div className="privacy-container">
          <div className="opensource-header">
            <h2 className="opensource-title">Open Source & Attribution</h2>
            <p className="opensource-subtitle">
              <strong>Musicfy</strong> is based on <strong>RetroMusicPlayer</strong>, a free and open-source music player that respects user freedom and privacy.
            </p>
          </div>

          <div className="opensource-links">
            <a 
              href="https://github.com/RetroMusicPlayer/RetroMusicPlayer" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="opensource-link"
            >
              <Github className="link-icon" />
              <div className="link-content">
                <div className="link-title">Original Project</div>
                <div className="link-subtitle">RetroMusicPlayer on GitHub</div>
              </div>
              <ExternalLink className="link-arrow" />
            </a>

            <a 
              href="https://github.com/publicappsrepo/musicfy_android.git" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="opensource-link"
            >
              <Github className="link-icon" />
              <div className="link-content">
                <div className="link-title">Musicfy Source Code</div>
                <div className="link-subtitle">View on GitHub</div>
              </div>
              <ExternalLink className="link-arrow" />
            </a>

            <a 
              href="https://www.gnu.org/licenses/gpl-3.0.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="opensource-link"
            >
              <Lock className="link-icon" />
              <div className="link-content">
                <div className="link-title">GPL-3.0 License</div>
                <div className="link-subtitle">Read Full License</div>
              </div>
              <ExternalLink className="link-arrow" />
            </a>
          </div>

          <Card className="foss-card">
            <CardContent className="foss-content">
              <h3 className="foss-title">Free and Open Source Software (FOSS)</h3>
              <p className="foss-description">
                This app is licensed under the <strong>GNU General Public License v3.0 (GPL-3.0)</strong>.
              </p>
              <div className="freedoms-grid">
                <div className="freedom-item">
                  <Check className="freedom-icon" />
                  <div>
                    <div className="freedom-title">Use Freely</div>
                    <div className="freedom-text">Use this software for any purpose, personal or commercial</div>
                  </div>
                </div>
                <div className="freedom-item">
                  <Check className="freedom-icon" />
                  <div>
                    <div className="freedom-title">Study & Learn</div>
                    <div className="freedom-text">Study how the app works and modify the source code</div>
                  </div>
                </div>
                <div className="freedom-item">
                  <Check className="freedom-icon" />
                  <div>
                    <div className="freedom-title">Share Freely</div>
                    <div className="freedom-text">Share and distribute copies with others</div>
                  </div>
                </div>
                <div className="freedom-item">
                  <Check className="freedom-icon" />
                  <div>
                    <div className="freedom-title">Contribute</div>
                    <div className="freedom-text">Distribute your modifications and improvements</div>
                  </div>
                </div>
              </div>
              <p className="foss-footer">
                Musicfy respects user freedom and complies with open source licensing requirements. We believe in transparency, community contribution, and software that users can trust and verify.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="privacy-footer">
        <div className="privacy-footer-content">
          <div className="footer-top">
            <div className="footer-logo-section">
              <img 
                src="https://customer-assets.emergentagent.com/job_f7570fce-5749-4c63-b425-ea9050dc8d5a/artifacts/l6k65qqj_ic_launcher-playstore.png" 
                alt="Musicfy" 
                className="footer-logo-img"
              />
              <span className="footer-logo-text">Musicfy</span>
            </div>
            <p className="footer-tagline">Your music, your freedom, your privacy</p>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">© 2025 Musicfy. Free and Open Source Software.</p>
            <button onClick={() => navigate('/')} className="footer-link-btn">Back to Home</button>
          </div>
        </div>
      </footer>
    </div>
  );
};