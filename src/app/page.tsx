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
                <span className="inline-flex items-center justify-center px-2 py-1 mr-3 text-xs font-medium text-white rounded-full" style={{backgroundColor: '#9739de'}}>
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
        <section className="py-24 bg-white" aria-labelledby="problem-heading">
          <div className="container mx-auto">
            <header className="text-center mb-20">
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
        <section id="theme-editor" className="py-24 bg-gray-50" aria-labelledby="design-heading">
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
        <section id="features" className="py-24" aria-labelledby="features-heading">
          <div className="container mx-auto">
            <header className="text-center mb-20">
              <h2 id="features-heading" className="text-4xl font-bold text-gray-900 mb-6">
                Powerful by Default. Designed for Writers.
              </h2>
            </header>

            {/* Features Grid - Dynamic Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Writing Workflow Card - Large */}
              <article className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">The Ultimate Writing Workflow</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Your Notion database is your CMS. With URL write-back and comment sync, your entire blogging process—from first draft to reader feedback—lives in one place.
                    </p>
                    <div className="flex items-center text-sm text-black font-medium">
                      <span className="mr-2">✓</span>
                      <span>URL write-back</span>
                      <span className="mx-3">•</span>
                      <span className="mr-2">✓</span>
                      <span>Comment sync</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Custom Domain Card - Medium */}
              <article className="md:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Custom Domain</h4>
                </div>
                <p className="text-sm text-gray-600">Brand your blog with your own custom domain or use any feather.blog subdomains.</p>
              </article>

              {/* Search Card - Medium */}
              <article className="md:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Search</h4>
                </div>
                <p className="text-sm text-gray-600">Quickly search and find any article you want with just a keyboard.</p>
              </article>

              {/* Performance Card - Large */}
              <article className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance That Keeps Readers Reading</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Your Notion images are automatically synced to our global CDN and served at light speed. We guarantee top-tier Core Web Vitals, so your readers never leave because of a slow page.
                    </p>
                    <div className="flex items-center text-sm text-black font-medium">
                      <span className="mr-2">✓</span>
                      <span>Global CDN</span>
                      <span className="mx-3">•</span>
                      <span className="mr-2">✓</span>
                      <span>Core Web Vitals</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Tags Card - Medium */}
              <article className="md:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Tags</h4>
                </div>
                <p className="text-sm text-gray-600">Categorize your articles and make it easy for your readers to find similar content.</p>
              </article>

              {/* RSS Feed Card - Medium */}
              <article className="md:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">RSS Feed</h4>
                </div>
                <p className="text-sm text-gray-600">Readers can always get notified when you publish a new article.</p>
              </article>

              {/* SEO Engine Card - Large */}
              <article className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">An SEO Engine, Built-in</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Rank higher, effortlessly. We automatically handle technical SEO: generating sitemaps, optimizing meta and canonical tags, and adding structured data for rich snippets. You write, we'll handle the robots.
                    </p>
                    <div className="flex items-center text-sm text-black font-medium">
                      <span className="mr-2">✓</span>
                      <span>Auto sitemaps</span>
                      <span className="mx-3">•</span>
                      <span className="mr-2">✓</span>
                      <span>Rich snippets</span>
                      <span className="mx-3">•</span>
                      <span className="mr-2">✓</span>
                      <span>Meta optimization</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Lightning Fast Card - Medium */}
              <article className="md:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Lightning Fast</h4>
                </div>
                <p className="text-sm text-gray-600">Every blog is optimized to the maximum for load speeds. Search engines will love your blog.</p>
              </article>

              {/* Sitemap Card - Medium */}
              <article className="md:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Sitemap</h4>
                </div>
                <p className="text-sm text-gray-600">Automatic sitemap to make it easy for search engines to index all the links your blog has.</p>
              </article>

              {/* Related Posts Card - Medium */}
              <article className="md:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Related Posts</h4>
                </div>
                <p className="text-sm text-gray-600">Make it easy for your readers to explore and read other related articles at the end of every article.</p>
              </article>

              {/* Full Control Card - Large */}
              <article className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Control for Power Bloggers</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Connect your own domain, inject custom scripts for analytics or newsletter forms (like ConvertKit), and trust our developer-first architecture. Your blog, your rules.
                    </p>
                    <div className="flex items-center text-sm text-black font-medium">
                      <span className="mr-2">✓</span>
                      <span>Custom domain</span>
                      <span className="mx-3">•</span>
                      <span className="mr-2">✓</span>
                      <span>Custom scripts</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Multiple Authors Card - Medium */}
              <article className="md:col-span-1 bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Multiple Authors</h4>
                </div>
                <p className="text-sm text-gray-600">Make it easy for your readers to explore articles of individual authors with a separate dedicated page for each author in your blog.</p>
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
      <footer className="py-8 bg-gray-50">
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
