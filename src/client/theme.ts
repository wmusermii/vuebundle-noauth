// src/client/theme.ts — tambahkan favicon_url & login_image_url
import { reactive } from 'vue'

export type ThemeValues = Record<string, string | number | undefined>

export const theme = reactive({ logo_url: '', favicon_url: '', login_image_url: '' })

const COLOR_VARS: Record<string, string> = {
  primary_color: '--primary',
  primary_text_color: '--primary-ink',
  accent_color: '--accent',
  background_color: '--canvas',
  surface_color: '--surface',
  text_color: '--text',
  text_muted_color: '--text-2',
  border_color: '--line',
  danger_color: '--danger',
}

const HEX = /^#[0-9a-fA-F]{6}$/

function setVar(name: string, value: string | null) {
  const st = document.documentElement.style
  if (value) st.setProperty(name, value)
  else st.removeProperty(name)
}

function setFavicon(url: string) {
  if (!url) return
  let link = document.querySelector<HTMLLinkElement>('link[rel~="icon"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }
  link.removeAttribute('type')
  link.href = url
}

export function applyTheme(t: ThemeValues) {
  for (const [key, cssVar] of Object.entries(COLOR_VARS)) {
    const v = t[key]
    setVar(cssVar, typeof v === 'string' && HEX.test(v) ? v : null)
  }
  const r = t.border_radius === undefined || t.border_radius === '' ? NaN : Number(t.border_radius)
  setVar('--radius', Number.isInteger(r) && r >= 0 && r <= 24 ? `${r}px` : null)

  theme.logo_url = String(t.logo_url ?? '')
  theme.favicon_url = String(t.favicon_url ?? '')
  theme.login_image_url = String(t.login_image_url ?? '')
  setFavicon(theme.favicon_url)
}

export async function loadTheme() {
  try {
    const res = await fetch('/api/public/theme', { cache: 'no-store', signal: AbortSignal.timeout(2500) })
    if (res.ok) applyTheme(await res.json())
  } catch {
    /* gagal = pakai default style.css */
  }
}