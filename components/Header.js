import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export default function Header() {
  return (
    <header className="bg-black text-white px-4 py-4 flex justify-between">
      <h1 className="text-xl font-bold">Zapdex</h1>
      <WalletMultiButton />
    </header>
  )
}
