import dynamic from 'next/dynamic'

// Dynamically load Jupiter’s widget
const JupiterSwap = dynamic(() => import('@jup-ag/react-hook').then(m => m.SwapWidget), {
  ssr: false
})

export default function SwapInterface() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <JupiterSwap />
    </div>
  )
}
