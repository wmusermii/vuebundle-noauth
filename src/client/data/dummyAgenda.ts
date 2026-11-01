export interface AgendaItem {
  id: string
  title: string
  date: string
  location: string
}

export const dummyAgenda: AgendaItem[] = [
  { id: 'a1', title: 'Fintech Talk: Keamanan Transaksi Digital', date: '05 Nov 2026', location: 'Jakarta' },
  { id: 'a2', title: 'Workshop Integrasi API Pembayaran', date: '14 Nov 2026', location: 'Online' },
  { id: 'a3', title: 'Forum Anggota Kuartal IV', date: '26 Nov 2026', location: 'Jakarta' },
]
