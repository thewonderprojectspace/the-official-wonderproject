// The Wonder Project — authentication bridge
// Add your own Supabase values below. The publishable key is designed for browser use.
export const WONDER_AUTH_CONFIG = {
  supabaseUrl: "https://rdryqjmstqmjdgjlnbys.supabase.co",
  supabasePublishableKey: "sb_publishable_x0bvvf8NpNlfZswMXeOv8A_8eGr2Xo0",
  dashboardPage: "my-universe.html",
  signInPage: "sign-in.html"
};

const GUEST_KEY = "wonder-project-guest-profile-v1";
let clientPromise;

export function authIsConfigured() {
  return /^https:\/\/.+\.supabase\.co$/i.test(WONDER_AUTH_CONFIG.supabaseUrl) &&
    !WONDER_AUTH_CONFIG.supabasePublishableKey.startsWith("PASTE_");
}

export async function getSupabase() {
  if (!authIsConfigured()) throw new Error("Secure accounts have not been connected yet.");
  if (!clientPromise) {
    clientPromise = import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm")
      .then(({ createClient }) => createClient(
        WONDER_AUTH_CONFIG.supabaseUrl,
        WONDER_AUTH_CONFIG.supabasePublishableKey,
        { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }
      ));
  }
  return clientPromise;
}

export function saveGuestProfile(profile) {
  const safe = { alias: profile.alias, avatar: profile.avatar, kind: "guest", createdAt: new Date().toISOString() };
  localStorage.setItem(GUEST_KEY, JSON.stringify(safe));
  return safe;
}

export function getGuestProfile() {
  try { return JSON.parse(localStorage.getItem(GUEST_KEY) || "null"); }
  catch { return null; }
}

export function clearGuestProfile() { localStorage.removeItem(GUEST_KEY); }

export async function createAccount({ email, password, alias, avatar }) {
  const supabase = await getSupabase();
  return supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: new URL(WONDER_AUTH_CONFIG.dashboardPage, location.href).href,
      data: { wonder_alias: alias, wonder_avatar: avatar }
    }
  });
}

export async function signInWithPassword({ email, password }) {
  const supabase = await getSupabase();
  return supabase.auth.signInWithPassword({ email, password });
}

export async function sendMagicLink({ email, alias, avatar }) {
  const supabase = await getSupabase();
  return supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: new URL(WONDER_AUTH_CONFIG.dashboardPage, location.href).href,
      data: { wonder_alias: alias, wonder_avatar: avatar }
    }
  });
}

export async function getPermanentSession() {
  if (!authIsConfigured()) return null;
  const supabase = await getSupabase();
  const { data } = await supabase.auth.getSession();
  return data.session || null;
}

export async function signOut() {
  if (authIsConfigured()) {
    const supabase = await getSupabase();
    await supabase.auth.signOut();
  }
  clearGuestProfile();
}
