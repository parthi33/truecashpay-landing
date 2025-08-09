import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Smartphone, Wallet, CreditCard, Store, TrendingUp, Headphones, Download } from "lucide-react";

function Button({ children, variant = "solid", className = "", ...props }) {
  const base = "px-4 py-2 text-sm font-medium rounded-2xl transition hover:opacity-90 inline-flex items-center justify-center gap-2";
  const solid = "bg-gradient-to-r from-indigo-600 to-purple-600 text-white";
  const outline = "border border-slate-300 hover:bg-slate-50";
  const secondary = "bg-white text-slate-900";
  const map = { solid, outline, secondary };
  return (
    <button className={`${base} ${map[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-2xl border border-slate-200 bg-white ${className}`}>{children}</div>;
}
function CardHeader({ children }) { return <div className="px-5 pt-5">{children}</div>; }
function CardTitle({ children, className = "" }) { return <div className={`text-lg font-semibold ${className}`}>{children}</div>; }
function CardContent({ children, className = "" }) { return <div className={`px-5 pb-5 text-slate-600 ${className}`}>{children}</div>; }

function Badge({ children, className = "" }) {
  return <span className={`inline-block text-xs px-2.5 py-1 rounded-full border border-slate-200 bg-white ${className}`}>{children}</span>;
}

export default function TrueCashPayLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 grid place-items-center text-white font-bold">T</div>
            <div>
              <div className="text-lg font-bold">True Cash Pay</div>
              <div className="text-xs text-slate-500">by TruesoftTech</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-80">Features</a>
            <a href="#security" className="hover:opacity-80">Security</a>
            <a href="#pricing" className="hover:opacity-80">Pricing</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-2xl">Login</Button>
            <Button className="rounded-2xl">Get App</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-slate-50" />
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="mb-4">BBPS • AEPS • Recharges</Badge>
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-extrabold leading-tight">
              India’s Smart Wallet for <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Bills & Money</span>
            </motion.h1>
            <p className="mt-4 text-slate-600 text-lg">
              Add money, pay any bill, recharge mobile/DTH, and transfer instantly — all inside a secure UPI-ready wallet.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="rounded-2xl"><Download className="h-4 w-4"/> Download APK</Button>
              <Button variant="outline" className="rounded-2xl">View on Play Store</Button>
            </div>
            <div className="mt-4 text-xs text-slate-500">* Submit KYC to unlock full limits.</div>
          </div>
          <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.7, delay:0.1}} className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-indigo-200/40 to-purple-200/40 blur-2xl rounded-[2rem]"/>
            <div className="relative mx-auto max-w-sm p-2 rounded-[2rem] bg-white shadow-xl">
              <div className="aspect-[9/19] rounded-[2rem] border border-slate-200 overflow-hidden">
                <div className="h-10 bg-slate-900"/>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Wallet Balance</div>
                    <Wallet className="h-4 w-4"/>
                  </div>
                  <div className="text-3xl font-bold">₹ 12,450.75</div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <Button className="rounded-xl">Add Money</Button>
                    <Button variant="outline" className="rounded-xl">Send</Button>
                    <Button variant="outline" className="rounded-xl">Scan</Button>
                  </div>
                  <div className="pt-2 text-xs text-slate-500">Recent</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between"><span>Mobile Recharge</span><span>-₹239</span></div>
                    <div className="flex items-center justify-between"><span>AEPS Cashout</span><span>-₹2,000</span></div>
                    <div className="flex items-center justify-between"><span>UPI from Anitha</span><span>+₹750</span></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">Everything you need in one place</h2>
          <p className="text-center text-slate-600 mt-2">Fast, secure and compliant payments for everyday India.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Card><CardHeader><CardTitle className="flex items-center gap-2"><Wallet className="h-5 w-5"/> Wallet & UPI</CardTitle></CardHeader><CardContent>Instant add money via Razorpay, send/receive using UPI/QR, track spends and statements.</CardContent></Card>
            <Card><CardHeader><CardTitle className="flex items-center gap-2"><CreditCard className="h-5 w-5"/> BBPS Bills</CardTitle></CardHeader><CardContent>Electricity, water, gas, FASTag, broadband — 20,000+ billers via NPCI BBPS.</CardContent></Card>
            <Card><CardHeader><CardTitle className="flex items-center gap-2"><Smartphone className="h-5 w-5"/> Recharges</CardTitle></CardHeader><CardContent>Mobile & DTH recharges with instant confirmations and offers.</CardContent></Card>
            <Card><CardHeader><CardTitle className="flex items-center gap-2"><Store className="h-5 w-5"/> AEPS</CardTitle></CardHeader><CardContent>Aadhaar Enabled Payment System for cash-in/out and balance enquiry at partner outlets.</CardContent></Card>
            <Card><CardHeader><CardTitle className="flex items-center gap-2"><TrendingUp className="h-5 w-5"/> Offers & Rewards</CardTitle></CardHeader><CardContent>Refer & earn, scratch cards, and seasonal cashback campaigns.</CardContent></Card>
            <Card><CardHeader><CardTitle className="flex items-center gap-2"><Headphones className="h-5 w-5"/> 24×7 Support</CardTitle></CardHeader><CardContent>In-app chat & WhatsApp support with dedicated escalation SLAs.</CardContent></Card>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Bank-grade Security</h2>
            <p className="mt-3 text-slate-600">Data encryption in transit & at rest, device binding, MPIN, and fraud monitoring. PCI-DSS aligned flows with RBI/NPCI compliant integrations.</p>
            <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
              <li>Two-factor login with OTP + MPIN</li>
              <li>Secure payment gateway (Razorpay/PayU)</li>
              <li>Dispute & chargeback handling</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border bg-gradient-to-br from-slate-50 to-white">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6"/>
              <div className="font-semibold">Compliance Snapshot</div>
            </div>
            <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
              <div className="p-4 rounded-xl border bg-white">
                <div className="text-xs text-slate-500">KYC</div>
                <div className="font-semibold">Full & Min-KYC</div>
              </div>
              <div className="p-4 rounded-xl border bg-white">
                <div className="text-xs text-slate-500">PCI</div>
                <div className="font-semibold">Aligned</div>
              </div>
              <div className="p-4 rounded-xl border bg-white">
                <div className="text-xs text-slate-500">RBI/NPCI</div>
                <div className="font-semibold">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">Simple & Transparent Pricing</h2>
          <p className="text-center text-slate-600 mt-2">No hidden charges. GST invoices available.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Card><CardHeader><CardTitle>Starter</CardTitle></CardHeader><CardContent><div className="text-3xl font-extrabold">Free</div><ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5"><li>Basic wallet</li><li>Mobile/DTH recharge</li><li>Standard support</li></ul><Button className="mt-6 w-full">Create Account</Button></CardContent></Card>
            <Card className="border-2 border-indigo-600"><CardHeader><CardTitle>Pro</CardTitle></CardHeader><CardContent><div className="text-3xl font-extrabold">₹99<span className="text-base font-medium text-slate-500">/mo</span></div><ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5"><li>Full BBPS access</li><li>Higher wallet limits</li><li>Priority support</li></ul><Button className="mt-6 w-full">Upgrade</Button></CardContent></Card>
            <Card><CardHeader><CardTitle>Agent</CardTitle></CardHeader><CardContent><div className="text-3xl font-extrabold">₹199<span className="text-base font-medium text-slate-500">/mo</span></div><ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5"><li>AEPS cash-in/out</li><li>Agent commission & dashboard</li><li>Dedicated manager</li></ul><Button className="mt-6 w-full">Become Agent</Button></CardContent></Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">Frequently Asked Questions</h2>
          <div className="mt-8 divide-y divide-slate-200">
            <details className="py-4"><summary className="cursor-pointer font-medium">Is KYC mandatory?</summary><div className="pt-2 text-slate-600">Yes. Min-KYC to get started; Full-KYC unlocks higher limits and AEPS.</div></details>
            <details className="py-4"><summary className="cursor-pointer font-medium">Which billers are supported?</summary><div className="pt-2 text-slate-600">We support 20,000+ BBPS billers including electricity, gas, water, broadband, FASTag and more.</div></details>
            <details className="py-4"><summary className="cursor-pointer font-medium">How fast are transfers?</summary><div className="pt-2 text-slate-600">Most payments are instant. In rare cases it may take a few minutes due to bank networks.</div></details>
            <details className="py-4"><summary className="cursor-pointer font-medium">How can I contact support?</summary><div className="pt-2 text-slate-600">Use in-app chat, or WhatsApp us at +91-XXXXXXXXXX.</div></details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold">Ready to experience seamless payments?</h3>
            <p className="text-white/90 mt-1">Download the app and get ₹50 welcome bonus on your first add-money.*</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" className="rounded-2xl">Download APK</Button>
            <Button className="rounded-2xl">Play Store</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-slate-900 text-slate-200">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-bold">True Cash Pay</div>
            <p className="text-slate-400 mt-2">A TruesoftTech product. © {new Date().getFullYear()}</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Company</div>
            <ul className="space-y-1 text-slate-400 text-sm">
              <li><a href="#!">About</a></li>
              <li><a href="#!">Careers</a></li>
              <li><a href="#!">Press</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Legal</div>
            <ul className="space-y-1 text-slate-400 text-sm">
              <li><a href="#!">Terms</a></li>
              <li><a href="#!">Privacy</a></li>
              <li><a href="#!">KYC/AML</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Contact</div>
            <ul className="space-y-1 text-slate-400 text-sm">
              <li>Email: support@truesofttech.in</li>
              <li>Phone: +91-99446 01070</li>
              <li>HQ: Tamil Nadu, India</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
