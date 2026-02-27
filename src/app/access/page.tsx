'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const DOWNLOADS = {
  arm64: {
    url: 'https://github.com/kruppt/scribify-releases/releases/download/v2.6.0/Scribify-2.6.0-arm64.dmg',
    label: 'Apple Silicon (M1/M2/M3/M4)',
    filename: 'Scribify-2.6.0-arm64.dmg',
    size: '~95 MB',
  },
  intel: {
    url: 'https://github.com/kruppt/scribify-releases/releases/download/v2.6.0/Scribify-2.6.0.dmg',
    label: 'Intel',
    filename: 'Scribify-2.6.0.dmg',
    size: '~102 MB',
  },
}

function detectArch(): 'arm64' | 'intel' | null {
  if (typeof navigator === 'undefined') return null
  const ua = navigator.userAgent.toLowerCase()
  if (ua.includes('arm64') || ua.includes('aarch64')) return 'arm64'
  // Modern Apple Silicon Macs may not expose arm64 in UA,
  // but navigator.platform or userAgentData can help
  if ('userAgentData' in navigator) {
    return null // Can't determine synchronously, default to showing both
  }
  if (ua.includes('mac')) return null // Can't determine, show both
  return null
}

export default function DownloadPage() {
  const [detectedArch, setDetectedArch] = useState<'arm64' | 'intel' | null>(null)
  const [authorized, setAuthorized] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const sessionId = params.get('session_id')
    const token = params.get('token')

    // Allow: valid Stripe session after purchase, or tester token
    const validPurchase = sessionId && sessionId.startsWith('cs_')
    const validTester = token === 'scb-xk9p2m4t'

    if (!validPurchase && !validTester) {
      router.replace('/')
      return
    }
    setAuthorized(true)
    setDetectedArch(detectArch())
  }, [])

  const recommended = detectedArch ? DOWNLOADS[detectedArch] : null
  const other = detectedArch === 'arm64' ? DOWNLOADS.intel : detectedArch === 'intel' ? DOWNLOADS.arm64 : null

  if (!authorized) return null

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 via-primary-100 to-primary-200">
      <div className="container-width section-padding">
        <div className="max-w-2xl mx-auto text-center">
          {/* Thank you header */}
          <div className="mb-12 pt-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✓</span>
            </div>
            <h1 className="text-fluid-3xl lg:text-fluid-4xl font-bold mb-4 text-dark-900">
              Thank You for Your Purchase!
            </h1>
            <p className="text-fluid-lg text-dark-700">
              Download Scribify for your Mac below.
            </p>
          </div>

          {/* Download cards */}
          <div className="space-y-4 mb-12">
            {recommended ? (
              <>
                {/* Recommended download */}
                <a
                  href={recommended.url}
                  className="block bg-white rounded-2xl p-8 shadow-lg border-2 border-accent-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <span className="inline-block px-3 py-1 bg-accent-100 text-accent-800 text-xs font-bold rounded-full mb-2">
                        RECOMMENDED FOR YOUR MAC
                      </span>
                      <h3 className="text-xl font-bold text-dark-900">{recommended.label}</h3>
                      <p className="text-dark-600 text-sm">{recommended.filename} ({recommended.size})</p>
                    </div>
                    <span className="text-3xl">⬇️</span>
                  </div>
                </a>

                {/* Other architecture */}
                {other && (
                  <a
                    href={other.url}
                    className="block bg-white/70 rounded-2xl p-6 shadow border border-neutral-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <h3 className="text-lg font-medium text-dark-700">{other.label}</h3>
                        <p className="text-dark-500 text-sm">{other.filename} ({other.size})</p>
                      </div>
                      <span className="text-xl text-dark-400">⬇️</span>
                    </div>
                  </a>
                )}
              </>
            ) : (
              <>
                {/* Show both when can't detect */}
                <a
                  href={DOWNLOADS.arm64.url}
                  className="block bg-white rounded-2xl p-8 shadow-lg border-2 border-accent-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <span className="inline-block px-3 py-1 bg-accent-100 text-accent-800 text-xs font-bold rounded-full mb-2">
                        MOST MACS (2020+)
                      </span>
                      <h3 className="text-xl font-bold text-dark-900">{DOWNLOADS.arm64.label}</h3>
                      <p className="text-dark-600 text-sm">{DOWNLOADS.arm64.filename} ({DOWNLOADS.arm64.size})</p>
                    </div>
                    <span className="text-3xl">⬇️</span>
                  </div>
                </a>

                <a
                  href={DOWNLOADS.intel.url}
                  className="block bg-white/70 rounded-2xl p-6 shadow border border-neutral-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <span className="inline-block px-3 py-1 bg-neutral-100 text-dark-600 text-xs font-bold rounded-full mb-2">
                        OLDER MACS (PRE-2020)
                      </span>
                      <h3 className="text-lg font-medium text-dark-700">{DOWNLOADS.intel.label}</h3>
                      <p className="text-dark-500 text-sm">{DOWNLOADS.intel.filename} ({DOWNLOADS.intel.size})</p>
                    </div>
                    <span className="text-xl text-dark-400">⬇️</span>
                  </div>
                </a>
              </>
            )}
          </div>

          {/* PDF Resources */}
          <div className="bg-white rounded-2xl p-6 shadow text-left mb-8">
            <h2 className="text-xl font-bold text-dark-900 mb-4">Resources</h2>
            <div className="space-y-3">
              <a
                href="https://github.com/kruppt/scribify-releases/releases/download/v2.6.0/Scribify_User_Guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 hover:border-primary-400 hover:bg-primary-50 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📄</span>
                  <div>
                    <p className="font-medium text-dark-800">User Guide</p>
                    <p className="text-dark-500 text-xs">Complete setup and usage instructions</p>
                  </div>
                </div>
                <span className="text-primary-600 text-sm font-medium">Download PDF</span>
              </a>
              <a
                href="https://github.com/kruppt/scribify-releases/releases/download/v2.6.0/Scribify_Sample_Summaries.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 hover:border-primary-400 hover:bg-primary-50 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  <div>
                    <p className="font-medium text-dark-800">Sample Summaries</p>
                    <p className="text-dark-500 text-xs">See what Scribify&apos;s output looks like</p>
                  </div>
                </div>
                <span className="text-primary-600 text-sm font-medium">Download PDF</span>
              </a>
            </div>
          </div>

          {/* Setup instructions */}
          <div className="bg-white rounded-2xl p-8 shadow text-left mb-8">
            <h2 className="text-xl font-bold text-dark-900 mb-6">Installation Guide</h2>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                <div>
                  <p className="font-medium text-dark-800">Open the downloaded DMG file</p>
                  <p className="text-dark-600 text-sm">Find the .dmg file in your Downloads folder and double-click it. A new window will open showing the Scribify app icon and an Applications folder shortcut.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                <div>
                  <p className="font-medium text-dark-800">Drag Scribify to Applications</p>
                  <p className="text-dark-600 text-sm">Drag the Scribify icon onto the Applications folder in the installer window. This copies the app to your Mac.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                <div>
                  <p className="font-medium text-dark-800">Launch Scribify</p>
                  <p className="text-dark-600 text-sm">Open Scribify from your Applications folder, Launchpad, or use Spotlight (Cmd + Space, type &quot;Scribify&quot;).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold text-sm">4</span>
                <div>
                  <p className="font-medium text-dark-800">Start transcribing</p>
                  <p className="text-dark-600 text-sm">Drag an audio file into Scribify or click the &quot;+&quot; button to select one. Choose a summary template and let the AI do the rest.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* OpenAI API Setup */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-left mb-8">
            <h3 className="font-bold text-dark-800 mb-3 flex items-center gap-2">
              <span className="text-lg">&#x1F511;</span>
              Setting Up Your OpenAI API Key
            </h3>
            <p className="text-dark-700 text-sm mb-4">
              Scribify uses OpenAI&apos;s Whisper API for transcription and GPT-4 for summaries. You&apos;ll need your own OpenAI API key to use the app.
            </p>
            <div className="bg-white rounded-lg p-4 text-sm text-dark-700 space-y-3">
              <p><strong>How to get your API key:</strong></p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Go to <a href="https://platform.openai.com/signup" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">platform.openai.com</a> and create an account (or sign in)</li>
                <li>Navigate to <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">API Keys</a> in your dashboard</li>
                <li>Click <strong>&quot;Create new secret key&quot;</strong> and copy it</li>
                <li>Open Scribify, go to <strong>Settings</strong>, and paste your API key</li>
              </ol>
              <div className="bg-blue-50 rounded-lg p-3 mt-3">
                <p className="font-medium text-dark-800 mb-1">About API costs:</p>
                <ul className="space-y-1 text-dark-600">
                  <li>&#x2022; OpenAI charges based on usage (pay-as-you-go)</li>
                  <li>&#x2022; Whisper transcription costs ~$0.006 per minute of audio</li>
                  <li>&#x2022; A typical 1-hour recording costs about $0.36 to transcribe</li>
                  <li>&#x2022; New OpenAI accounts include free credits to get started</li>
                  <li>&#x2022; You can set spending limits in your <a href="https://platform.openai.com/settings/organization/limits" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">OpenAI dashboard</a></li>
                </ul>
              </div>
              <p className="text-dark-500 mt-2">Your API key is stored securely in your Mac&apos;s Keychain and never leaves your device.</p>
            </div>
          </div>

          {/* Gatekeeper / troubleshooting */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-left mb-8">
            <h3 className="font-bold text-dark-800 mb-3 flex items-center gap-2">
              <span className="text-lg">&#9888;&#65039;</span>
              First Launch: macOS Security Prompt
            </h3>
            <p className="text-dark-700 text-sm mb-3">
              When you first open Scribify, macOS may show a security warning because the app was downloaded from the internet. This is normal for apps outside the App Store.
            </p>
            <div className="bg-white rounded-lg p-4 text-sm text-dark-700 space-y-2">
              <p><strong>If you see &quot;Scribify can&apos;t be opened&quot;:</strong></p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Right-click (or Control-click) on Scribify in Applications</li>
                <li>Select <strong>&quot;Open&quot;</strong> from the menu</li>
                <li>Click <strong>&quot;Open&quot;</strong> in the dialog that appears</li>
              </ol>
              <p className="text-dark-500 mt-2">You only need to do this once. After that, Scribify will open normally. The app is signed and notarized by Apple for your security.</p>
            </div>
          </div>

          {/* Quick tips */}
          <div className="bg-white rounded-2xl p-6 shadow text-left mb-12">
            <h3 className="font-bold text-dark-900 mb-4">Quick Tips</h3>
            <ul className="space-y-3 text-sm text-dark-700">
              <li className="flex gap-3">
                <span className="text-accent-500 font-bold">&#x2022;</span>
                <span><strong>Supported formats:</strong> MP3, WAV, M4A, FLAC, OGG, and more</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-500 font-bold">&#x2022;</span>
                <span><strong>Templates:</strong> Choose from 15 built-in templates or create your own for meetings, lectures, interviews, etc.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-500 font-bold">&#x2022;</span>
                <span><strong>Export:</strong> Copy to clipboard, or export to Notion, OneNote, Evernote, and more</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-500 font-bold">&#x2022;</span>
                <span><strong>Privacy:</strong> All transcription happens locally on your Mac — your audio never leaves your device</span>
              </li>
            </ul>
          </div>

          {/* AI Disclaimer */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 text-left mb-8">
            <h3 className="font-bold text-dark-800 mb-2 flex items-center gap-2">
              <span>&#x26A0;&#xFE0F;</span>
              AI Disclaimer
            </h3>
            <p className="text-dark-600 text-sm leading-relaxed">
              Scribify uses AI to generate transcriptions and summaries. While we strive for accuracy, AI-generated content may contain errors, omissions, or inaccuracies. Always review and validate the output before using it for important decisions, professional work, or sharing with others.
            </p>
          </div>

          {/* Which version + support */}
          <div className="text-sm text-dark-500 pb-12">
            <p>Not sure which version to download? If your Mac was made in 2020 or later, choose <strong>Apple Silicon</strong>. To check: Apple menu &gt; About This Mac &gt; look for &quot;Chip&quot; (Apple Silicon) or &quot;Processor&quot; (Intel).</p>
            <p className="mt-3">Need help? Contact us at <a href="mailto:support@scribifyforall.com" className="text-primary-600 hover:underline">support@scribifyforall.com</a></p>
          </div>
        </div>
      </div>
    </main>
  )
}
