import Image from "next/image";
import Navigation from "./components/Navigation";
import EmailForm from "./components/EmailForm";
import WorkflowSection from "./components/WorkflowSection";

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-900" aria-labelledby="hero-heading">
          <div className="container mx-auto">
            {/* Top Notification Bar */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-700 border border-gray-600/80">
                <span className="inline-flex items-center justify-center px-2 py-1 mr-3 text-xs font-medium text-white rounded-full" style={{ backgroundColor: '#9739de' }}>
                  NEW
                </span>
                <span className="text-sm text-gray-300">
                  Join our first 100 founding members.
                  <a href="#waitlist" className="text-white hover:text-gray-300 font-medium ml-1">
                    Get 50% off forever →
                  </a>
                </span>
              </div>
            </div>

            {/* Main Hero Content */}
            <div className="text-center max-w-4xl mx-auto">
              <h2 id="hero-heading" className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Your Notion is Now Your Blog.
              </h2>
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                The headless engine for writers and developers who live in Notion. Hoyst turns your database into a blazing-fast, SEO-powered blog with a workflow so seamless, you'll forget it's there.
              </p>

              {/* CTA Section */}
              <div className="mb-12">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <EmailForm isHero={true} />
                </div>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Notion Native</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>SEO Optimized</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lightning Fast</span>
                </div>
              </div>
            </div>

            {/* Product Demo */}
            <div className="mt-20">
              <div className="relative">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full max-w-7xl mx-auto rounded-xl shadow-2xl border border-gray-700"
                  poster="/hero-poster.jpg"
                  aria-label="Demo video showing Hoyst workflow from Notion to published blog"
                >
                  <source src="/hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-8 md:py-24 bg-white" aria-labelledby="problem-heading">
          <div className="container mx-auto">
            <header className="text-center mb-10 md:mb-20">
              <h2 id="problem-heading" className="text-4xl font-bold text-gray-900 mb-6">
                Stop Fighting Your Tools. Start Creating.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your ideas live in Notion. Your published posts live somewhere else. The constant context-switching is killing your creative flow.
              </p>
            </header>

            <div className="grid lg:grid-cols-3 gap-8">
              <article className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-6">
                  {/* Problem */}
                  <div className="pb-6 border-b border-gray-100">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-700">The Disconnected Workflow</h3>
                    </div>
                    <p className="text-gray-600">Jumping between Notion for writing, WordPress for publishing, and your code editor for tweaks.</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">A Single Source of Truth</h3>
                    </div>
                    <p className="text-gray-600">Write, manage, and publish your entire blog from one place: your Notion database.</p>
                  </div>
                </div>
              </article>

              <article className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-6">
                  {/* Problem */}
                  <div className="pb-6 border-b border-gray-100">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-700">Scattered Conversations</h3>
                    </div>
                    <p className="text-gray-600">Managing reader comments on your blog, and post ideas back in Notion.</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Unified Engagement</h3>
                    </div>
                    <p className="text-gray-600">Reader comments sync directly to your Notion page. Manage all feedback where your content lives.</p>
                  </div>
                </div>
              </article>

              <article className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-6">
                  {/* Problem */}
                  <div className="pb-6 border-b border-gray-100">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-700">Generic & Slow</h3>
                    </div>
                    <p className="text-gray-600">Using platforms that make your blog look like everyone else's and load at a crawl.</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Uniquely Yours & Blazing-Fast</h3>
                    </div>
                    <p className="text-gray-600">A blog that reflects your brand and keeps readers engaged with incredible speed.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <WorkflowSection />

        {/* Design Section */}
        <section id="theme-editor" className="py-8 md:py-24" aria-labelledby="design-heading">
          <div className="container mx-auto border border-gray-200 rounded-lg py-12 bg-gray-100">
            {/* Header Content */}
            <div className="text-center mb-16">
              <h2 id="design-heading" className="text-4xl font-bold text-gray-900 mb-6">
                Go Beyond Templates. Define Your Brand.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Stop settling for a blog that whispers "I was made with a template". Our Shopify-like Visual Editor gives you the keys to the kingdom. Fine-tune every detail—from global color palettes and typography to layout spacing and code block styles. Build a truly custom, professional blog that stands out, without ever wrestling with CSS.
              </p>
            </div>

            {/* Video Demo */}
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full rounded-xl shadow-xs"
                  poster="/editor-poster.jpg"
                  aria-label="Demo video showing Hoyst visual editor interface for blog customization"
                >
                  <source src="/editor.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-8 md:py-24" aria-labelledby="features-heading">
          <div className="container mx-auto">
            <header className="text-center mb-10 md:mb-20">
              <h2 id="features-heading" className="text-4xl font-bold text-gray-900 mb-6">
                Powerful by Default. Designed for Writers.
              </h2>
            </header>

            {/* Features Grid - Dynamic Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Writing Workflow Card - Large */}
              <article className="flex lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col flex-1">
                  <div className="flex-shrink-0 flex items-center gap-2 text-gray-700">
                    <svg fill="currentColor" role="img" width="2rem" height="2rem" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 4.5c0 .28.22.5.5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5Zm12.88 6.78.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.09.35a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.22 2.22 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0ZM8 4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm6-.5a3 3 0 1 1 0 6H6a2 2 0 1 0 0 4h5.1a1.4 1.4 0 0 0-.01 1H6a3 3 0 1 1 0-6h8a2 2 0 1 0 0-4H9.5a.5.5 0 0 1 0-1H14Z" fill="currentColor"></path></svg>
                    <h3 className="text-lg font-[550]">Closed-loop Workflow</h3>
                  </div>
                  <div className="flex-1 mt-4">

                    <p className="text-gray-600">
                      Published URLs and statuses automatically sync back to your Notion database. Your CMS is truly complete.
                    </p>
                    <div className="flex flex-col text-black font-medium gap-1 mt-8">
                      <div className="flex items-center">
                        <span className="mr-2">✓</span>
                        <span>URL write-back</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">✓</span>
                        <span>Comment sync</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 hidden md:flex"></div>
              </article>

              {/* Custom Domain Card - Medium */}
              <article className="md:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <svg aria-label="ApprovalsAppRegular" fill="currentColor" role="img" width="1.75rem" height="1.75rem" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.85 1.15a.5.5 0 1 0-.7.7L10.29 3H9.5a7.5 7.5 0 1 0 7.5 7.5.5.5 0 0 0-1 0A6.5 6.5 0 1 1 9.5 4h.8L9.14 5.15a.5.5 0 1 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2Zm3.5 5.99c.2.2.2.5.01.7l-3.85 4a.5.5 0 0 1-.72 0l-1.65-1.7a.5.5 0 0 1 .72-.7l1.29 1.34 3.49-3.63c.2-.2.5-.2.7-.01Z" fill="currentColor"></path></svg>
                  <h4 className="text-lg font-[550]">Automated SEO Engine</h4>
                </div>
                <p className="text-gray-600">We handle sitemaps, meta tags, structured data, and image ALT tags to maximize your rankings.</p>
              </article>

              {/* Search Card - Medium */}
              <article className="md:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4 text-gray-700">
                  <svg aria-label="ImageGlobeRegular" fill="currentColor" role="img" width="2rem" height="2rem" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.55 2.15A8.9 8.9 0 0 0 4.01 5h2.98a8.9 8.9 0 0 0-.54-2.85 2.93 2.93 0 0 0-.53-.91C5.73 1.04 5.59 1 5.5 1c-.1 0-.23.05-.42.24-.18.19-.36.5-.53.91Zm-.72-.83A9.92 9.92 0 0 0 3 5H1.03a4.5 4.5 0 0 1 2.8-3.68Zm3.34 0A9.92 9.92 0 0 1 7.99 5h1.98a4.5 4.5 0 0 0-2.8-3.68ZM9.97 6H8a9.92 9.92 0 0 1-.82 3.68A4.5 4.5 0 0 0 9.97 6ZM5.5 10c.1 0 .23-.05.42-.24.18-.19.36-.5.53-.91.3-.73.5-1.72.54-2.85H4.01a8.9 8.9 0 0 0 .54 2.85c.17.42.35.72.53.91.19.2.33.24.42.24Zm-1.67-.32A4.5 4.5 0 0 1 1.03 6H3a9.92 9.92 0 0 0 .82 3.68ZM14 4h-3.2c-.1-.35-.24-.68-.4-1H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3.6c.32.16.65.3 1 .4V14c0 .37.1.72.28 1.02l4.67-4.59a1.5 1.5 0 0 1 2.1 0l4.67 4.59c.18-.3.28-.65.28-1.02V6a2 2 0 0 0-2-2Zm0 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM6 16h8a2 2 0 0 0 1.01-.27l-4.66-4.58a.5.5 0 0 0-.7 0l-4.66 4.58A2 2 0 0 0 6 16Z" fill="currentColor"></path></svg>
                  <h4 className="text-lg font-[550]">Optimized Image Delivery</h4>
                </div>
                <p className="text-gray-600">Your Notion images are synced to our global CDN, converted to WebP, and served blazing-fast.</p>
              </article>


              {/* Tags Card - Medium */}
              <article className="md:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4 text-gray-700">
                  <svg aria-label="ShieldGlobeRegular" fill="currentColor" role="img" width="2rem" height="2rem" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.08a.5.5 0 0 0-.56 0 15.05 15.05 0 0 1-6.3 2.43A.5.5 0 0 0 3 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 0 0 .36 0C14.69 16.23 17 13.39 17 9.5V5a.5.5 0 0 0-.43-.5 15.05 15.05 0 0 1-6.3-2.42ZM4 5.43a15.97 15.97 0 0 0 5.6-2.08l.4-.25.4.25A15.97 15.97 0 0 0 16 5.43V9.5c0 3.4-1.97 5.86-6 7.46-4.03-1.6-6-4.07-6-7.46V5.43Zm8.96 5.07h-.98c-.04.79-.2 1.5-.45 2.08a3 3 0 0 0 1.43-2.08Zm0-1a3 3 0 0 0-1.43-2.08c.24.57.4 1.3.45 2.08h.98Zm-1.98 0a5.13 5.13 0 0 0-.46-1.88 1.72 1.72 0 0 0-.39-.54.43.43 0 0 0-.12-.08.03.03 0 0 0-.02 0h-.01a.43.43 0 0 0-.11.08c-.11.09-.25.26-.39.54-.23.46-.4 1.11-.46 1.88h1.96Zm-1.96 1c.05.77.23 1.42.46 1.88.14.28.28.45.39.54a.42.42 0 0 0 .12.08.03.03 0 0 0 .02 0h.01c.02-.01.06-.03.11-.08.11-.09.25-.26.39-.54.23-.46.4-1.11.46-1.88H9.02Zm-1 0h-.98a3 3 0 0 0 1.43 2.08c-.24-.57-.4-1.3-.45-2.08Zm0-1c.04-.79.2-1.5.45-2.08A3 3 0 0 0 7.04 9.5h.98ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="currentColor"></path></svg>
                  <h4 className="font-[550] text-lg">Custom Domains with SSL</h4>
                </div>
                <p className="text-gray-600">Easily connect your own domain. We provision and renew your SSL certificate automatically.</p>
              </article>

              {/* RSS Feed Card - Medium */}
              <article className="md:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4 text-gray-700">
                  <svg aria-label="ChatMultipleCheckmarkRegular" fill="currentColor" role="img" width="2rem" height="2rem" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.35 6.65c.2.2.2.5 0 .7L8.1 10.6a.5.5 0 0 1-.7 0L5.65 8.85a.5.5 0 1 1 .7-.7l1.4 1.4 2.9-2.9c.2-.2.5-.2.7 0ZM2.04 8.5a6.5 6.5 0 1 1 3.72 5.88l-2.49.7a1 1 0 0 1-1.2-1.33l.8-2.08a6.47 6.47 0 0 1-.83-3.17ZM8.54 3a5.5 5.5 0 0 0-4.7 8.37l.13.2L3 14.12l2.86-.8.18.09A5.5 5.5 0 1 0 8.54 3ZM6.57 15.74a6.49 6.49 0 0 0 7.71 1.64l2.49.7a1 1 0 0 0 1.2-1.33l-.8-2.08a6.47 6.47 0 0 0-1.37-8.04c.15.56.23 1.15.24 1.76a5.47 5.47 0 0 1 .16 5.98l-.13.2.97 2.54-2.86-.8-.18.09a5.47 5.47 0 0 1-5.67-.4 7.5 7.5 0 0 1-1.76-.26Z" fill="currentColor"></path></svg>
                  <h4 className="text-lg font-[550]">Native Comment Sync</h4>
                </div>
                <p className="text-gray-600">Reader comments appear directly on your Notion page, keeping all conversations unified.</p>
              </article>
              <article className="md:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4 text-gray-700">
                  <svg aria-label="RssRegular" fill="currentColor" role="img" width="2rem" height="2rem" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2.5 0a.5.5 0 0 0 0 1 6.5 6.5 0 0 1 6.5 6.5.5.5 0 0 0 1 0A7.5 7.5 0 0 0 6.5 6ZM6 9.5c0-.28.22-.5.5-.5a4.5 4.5 0 0 1 4.5 4.5.5.5 0 0 1-1 0A3.5 3.5 0 0 0 6.5 10a.5.5 0 0 1-.5-.5ZM7 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor"></path></svg>
                  <h4 className="font-lg font-[550]">Built-in RSS Feed</h4>
                </div>
                <p className="text-gray-600">A classic RSS feed is automatically generated, allowing your most loyal readers to subscribe.</p>
              </article>
              <article className="md:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4 text-gray-700">
                  <svg aria-label="JavascriptRegular" fill="currentColor" role="img" width="2rem" height="2rem" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 9.5c0-.83.67-1.5 1.5-1.5h1.5a.5.5 0 0 1 0 1H13a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h.5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5H12a.5.5 0 0 1 0-1h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H13a1.5 1.5 0 0 1-1.5-1.5v-1Zm-.5-1a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h1c.83 0 1.5-.67 1.5-1.5v-5ZM3 6v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3Zm3-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z" fill="currentColor"></path></svg>
                  <h4 className="text-lg font-[550]">Scripts & Integrations</h4>
                </div>
                <p className="text-gray-600">Inject any third-party script for analytics, newsletters, or chats. Your blog, your tools.</p>
              </article>

            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="waitlist" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center bg-gray-100 rounded-lg border border-gray-200">
            <h2 id="cta-heading" className="text-4xl font-bold mb-6">
              Be First in Line. Become a Founding Member.
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-xl text-gray-500">
                We're looking for our first 100 bloggers to shape the future of Notion-based publishing. Join the waitlist today and lock in:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex justify-center space-x-3">
                  <span className="text-black" aria-hidden="true">✓</span>
                  <span>Priority Early Access before the public.</span>
                </div>
                <div className="flex justify-center space-x-3">
                  <span className="text-black" aria-hidden="true">✓</span>
                  <span>A permanent <span className="font-bold bg-yellow-300 text-black px-2 py-1">50% discount</span> on any plan. Forever.</span>
                </div>
                <div className="flex justify-center space-x-3">
                  <span className="text-black" aria-hidden="true">✓</span>
                  <span>A direct line to the founder to influence the roadmap.</span>
                </div>
              </div>
            </div>

            <EmailForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8">
        <div className="container mx-auto border-t border-gray-100 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600">
              © Hoyst 2025
            </div>
            <nav className="flex space-x-6 text-sm text-gray-600" aria-label="Footer navigation">
              <a href="#" className="hover:text-gray-900">Follow us on Twitter</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
