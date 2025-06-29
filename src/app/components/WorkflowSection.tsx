'use client'

import { useState } from 'react'

interface Step {
  id: number
  title: string
  description: string
  content: React.ReactNode
}

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(1)

  const steps: Step[] = [
    {
      id: 1,
      title: "Connect Your Notion",
      description: "Securely link your workspace with a simple one-time setup that takes less than a minute.",
      content: (
        // Notion Integration Setup
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Notion Integration Setup</h4>
            <div className="text-xs text-gray-500">hoyst.io</div>
          </div>

          <div className="space-y-6">
            {/* Step 1: Webhook */}
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 -mt-1">1</div>
              <div className="flex-1">
                <h5 className="text-sm font-medium text-gray-900 mb-2">Configure Webhook URL</h5>
                <div className="bg-gray-50 rounded py-2 mb-2">
                  <div className="text-xs text-gray-500 mb-1">Webhook URL</div>
                  <div className="text-xs font-mono text-gray-700">https://platform.hoyst.site/webhook/abc123</div>
                </div>
              </div>
            </div>

            {/* Step 2: Token */}
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 -mt-0.5">2</div>
              <div className="flex-1">
                <h5 className="text-sm font-medium text-gray-900 mb-2">Verification Token</h5>
                <div className="bg-gray-50 rounded py-2">
                  <div className="text-xs font-mono text-gray-700">secret_FLfWIVfgXgD6gAfP2BYbHI5M...</div>
                </div>
              </div>
            </div>

            {/* Step 3: Template */}
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 -mt-0.5">3</div>
              <div className="flex-1">
                <h5 className="text-sm font-medium text-gray-900 mb-2">Copy Database Template</h5>
                <button className="text-white px-3 py-1.5 rounded text-xs font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: '#9739de' }}>
                  Copy Template
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-3 py-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs font-medium text-green-700">Setup Complete</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Write in Notion",
      description: "Stay in your flow state. Draft, edit, and perfect articles in the Notion editor you already love.",
      content: (
        // Notion Editor
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Notion Page Editor</h4>
            <div className="text-xs text-gray-500">notion.so</div>
          </div>

          {/* Page Content */}
          <div className="space-y-4">
            {/* Page Title */}
            <div className="space-y-3">
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <div className="text-lg font-semibold text-gray-900 bg-gray-50 rounded p-3">
                How to Build Amazing Notion Blogs
              </div>
              <div className="text-sm text-gray-500 px-3">Add a description...</div>
            </div>

            {/* Content Blocks */}
            <div className="space-y-3 px-3">
              {/* Heading */}
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">H1</span>
                </div>
                <div className="text-sm font-medium text-gray-700">Introduction</div>
              </div>

              {/* Text content */}
              <div className="space-y-2 ml-6">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                <div className="flex items-center">
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  <div className="w-0.5 h-4 bg-black ml-1 animate-pulse"></div>
                </div>
              </div>

              {/* Image placeholder */}
              <div className="ml-6 h-12 bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <div className="inline-flex items-center space-x-2 bg-gray-50 rounded-full px-3 py-1">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gray-700">Writing in progress</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Just. Click. Publish.",
      description: "One click transforms your draft into a live blog post. The URL automatically appears back in your Notion table.",
      content: (
        // Database with Publishing
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Posts Database</h4>
            <div className="text-xs text-gray-500">notion.so</div>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 pb-3 border-b border-gray-200 text-xs font-medium text-gray-500">
            <div>Title</div>
            <div>Status</div>
            <div>Publish</div>
            <div>URL</div>
          </div>

          {/* Table Rows */}
          <div className="space-y-3 mt-3">
            <div className="grid grid-cols-4 gap-4 items-center text-sm">
              <div className="font-medium text-gray-900">My First Post</div>
              <div>
                <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-green-100 text-green-700">
                  Published
                </span>
              </div>
              <div className="text-gray-400">—</div>
              <div className="text-xs text-gray-700 font-mono">yourblog.com/first-post</div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-center text-sm bg-gray-50 rounded-lg p-2 -mx-2">
              <div className="font-medium text-gray-900">Amazing Article</div>
              <div>
                <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-200 text-gray-700">
                  Ready
                </span>
              </div>
              <div>
                <button className="text-white px-3 py-1 rounded text-xs font-medium animate-pulse" style={{ backgroundColor: '#9739de' }}>
                  Publish
                </button>
              </div>
              <div className="text-xs text-gray-400 font-mono">Generating...</div>
            </div>

            <div className="grid grid-cols-4 gap-4 items-center text-sm">
              <div className="font-medium text-gray-900">Draft Article</div>
              <div>
                <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700">
                  Draft
                </span>
              </div>
              <div className="text-gray-400">—</div>
              <div className="text-gray-400">—</div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-3 py-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-green-700">Live sync with Notion</span>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="workflow" className="py-24 bg-gray-50" aria-labelledby="workflow-heading">
      <div className="container mx-auto">
        {/* Main Card */}
        <div className="bg-white overflow-hidden rounded-lg border border-gray-200">
          <div className="lg:grid lg:grid-cols-2 lg:gap-0">
            {/* Left Content */}
            <div className="px-8 py-12 lg:px-12 lg:py-16">
              <div className="space-y-8">
                <header>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Workflow</div>
                  </div>
                  <h2 id="workflow-heading" className="text-4xl font-bold text-gray-900 mb-6">
                    The Magic is the Workflow.
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Turn your Notion database into a powerful content management system. Write, manage, and publish your entire blog from the place where your ideas already live.
                  </p>
                </header>

                {/* Interactive Steps */}
                <div className="space-y-6">
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className={`cursor-pointer border  rounded-lg p-4  ${activeStep === step.id
                          ? 'border-gray-200 bg-gray-100'
                          : 'hover:bg-gray-50 border-transparent'
                        }`}
                      onClick={() => setActiveStep(step.id)}
                    >
                      <div className="flex space-x-4">
                        <div className="flex-shrink-0">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeStep === step.id
                              ? 'bg-black text-white'
                              : 'bg-gray-200 text-gray-600'
                            }`}>
                            <span className="text-sm font-medium">{step.id}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-lg font-semibold mb-2 ${activeStep === step.id
                              ? 'text-gray-900'
                              : 'text-gray-700'
                            }`}>
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual - Dynamic Content */}
            <div className="bg-gray-100 px-8 py-12 lg:px-12 lg:py-16">
              <div className="space-y-8">
                {/* Dynamic Content Based on Active Step */}
                <div key={activeStep} className="animate-in fade-in duration-200">
                  {steps.find(step => step.id === activeStep)?.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 