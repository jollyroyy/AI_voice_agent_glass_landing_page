import './App.css';
import { NavBar } from '@/components/ui/navbar-with-dropdowns';
import { HeroSection } from '@/components/ui/hero-section-with-smooth-bg-shader';
import { AnomalousMatterHero } from '@/components/ui/anomalous-matter-hero';
import { Target, Phone, Building2, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { VoiceAIAgent } from "./components/ui/VoiceAIAgent";
const navItems = [
	{
		name: 'Solutions',
		icon: Target,
		dropdown: [
			{ name: 'Customer Support Automation', url: '#solutions' },
			{ name: 'Lead Qualification & Follow-Up', url: '#solutions' },
			{ name: 'Appointment Scheduling', url: '#solutions' },
			{ name: 'Voice Surveys & Feedback', url: '#solutions' },
		],
	},
	{
		name: 'Industries',
		icon: Building2,
		dropdown: [
			{ name: 'Real Estate', url: '#industries' },
			{ name: 'Healthcare & Dental Clinics', url: '#industries' },
			{ name: 'EdTech & Education', url: '#industries' },
			{ name: 'Travel & Tourism', url: '#industries' },
			{ name: 'E-commerce', url: '#industries' },
			{ name: 'Customer Support Centers', url: '#industries' },
		],
	},
	{ name: 'About', url: '#about', icon: Users },
	{ name: 'Contact', url: '#contact', icon: Phone },
];

function App() {
	return (
		<main className="text-gray-100 bg-[#0a0a0f]">
			<NavBar items={navItems} />

			<VoiceAIAgent />

			<HeroSection
				title="AI Voice Agents that Drive Growth"
				highlightText="for Modern Businesses"
				description="Transform every call into a customer. VoiceShine automates engagement, lead generation, and retention — your always-on, human-sounding voice growth engine."
				buttonText="Try the Voice Agent Now"
				colors={[
					'#4a9eff',
					'#7ec8f5',
					'#a8d5ff',
					'#e3f2ff',
					'#5ab9ea',
					'#c5e7ff',
				]}
				distortion={1.2}
				speed={0.6}
				className="min-h-screen"
			/>

			<AnomalousMatterHero title="" subtitle="" description="" />

			<section id="solutions" className="relative py-32 px-8">
				<div className="max-w-6xl mx-auto text-center">
					<motion.h2
						className="text-5xl font-bold text-black mb-10"
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.6 }}
					>
						Solutions
					</motion.h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
						{[
							{
								title: 'Customer Support Automation',
								desc: 'Resolve queries instantly with human-like AI voice support that never sleeps.',
							},
							{
								title: 'Lead Qualification & Follow-Up',
								desc: 'Engage leads within seconds, qualify them, and drive conversions effortlessly.',
							},
							{
								title: 'Appointment Scheduling',
								desc: 'Automate calendar bookings and reminders without human intervention.',
							},
							{
								title: 'Voice Surveys & Feedback',
								desc: 'Collect real insights through conversational surveys that sound human.',
							},
						].map((card, i) => (
							<motion.div
								key={i}
								className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/40 hover:bg-white/90 transition shadow-lg hover:shadow-2xl"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ delay: i * 0.1 }}
							>
								<h3 className="text-xl font-semibold text-black mb-3">
									{card.title}
								</h3>
								<p className="text-gray-800 text-sm leading-relaxed">
									{card.desc}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section
				id="industries"
				className="relative py-32 px-8 bg-[#0a0a0f]"
			>
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-5xl font-bold text-cyan-400 mb-12">
						Industries We Serve
					</h2>
					<div className="grid md:grid-cols-3 gap-10">
						{[
							{
								title: 'Real Estate',
								desc: 'Qualify property leads, book viewings, and follow up automatically with natural voice interactions.',
							},
							{
								title: 'Healthcare & Dental Clinics',
								desc: 'Automate patient communication, appointment booking, and follow-ups for seamless service.',
							},
							{
								title: 'EdTech & Education',
								desc: 'Assist student onboarding, enrollment, and helpdesk queries instantly through conversational AI.',
							},
							{
								title: 'Travel & Tourism',
								desc: 'Manage multilingual bookings, trip changes, and customer inquiries across time zones.',
							},
							{
								title: 'E-commerce',
								desc: 'Handle product inquiries, order tracking, and voice-based recommendations instantly.',
							},
							{
								title: 'Customer Support Centers',
								desc: 'Deploy scalable AI voice agents that reduce wait times and improve CSAT scores.',
							},
						].map((industry, i) => (
							<motion.div
								key={i}
								className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ delay: i * 0.1 }}
							>
								<h3 className="text-xl font-semibold text-white mb-3">
									{industry.title}
								</h3>
								<p className="text-gray-400 text-sm leading-relaxed">
									{industry.desc}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<motion.section
				id="about"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.6 }}
				className="relative py-32 px-6 md:px-12 lg:px-20 text-center bg-transparent backdrop-blur-xl"
			>
				<div className="max-w-6xl mx-auto">
					<h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(0,255,255,0.3)] mb-10">
						About VoiceShine
					</h2>
					<p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-16">
						VoiceShine helps modern businesses scale human-like customer
						interactions with intelligent AI voice agents. Every conversation is
						powered by empathy, context, and clarity — designed to engage
						customers, shorten response times, and turn routine communication into
						measurable business growth.
					</p>
					<div className="grid md:grid-cols-3 gap-8 text-left">
						<div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.05)]">
							<h3 className="text-xl font-semibold text-cyan-400 mb-3">
								Conversational Intelligence
							</h3>
							<p className="text-gray-400">
								Our AI voice agents replicate human tonality and emotional depth —
								delivering engaging conversations that feel authentic and build trust
								with every interaction.
							</p>
						</div>
						<div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.05)]">
							<h3 className="text-xl font-semibold text-cyan-400 mb-3">
								Growth-Driven Design
							</h3>
							<p className="text-gray-400">
								VoiceShine isn’t just about automation — it’s about acceleration. We
								create AI systems that increase retention, amplify brand loyalty, and
								drive predictable ROI.
							</p>
						</div>
						<div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.05)]">
							<h3 className="text-xl font-semibold text-cyan-400 mb-3">
								Effortless Integration
							</h3>
							<p className="text-gray-400">
								Integrate seamlessly with your existing CRM, calendar, or customer
								systems. Deploy instantly without complex technical setup — your
								growth engine starts from day one.
							</p>
						</div>
					</div>
					<div className="mt-20">
						<a
							href="#contact"
							className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-lg shadow-[0_0_25px_rgba(0,255,255,0.3)] hover:shadow-[0_0_35px_rgba(0,255,255,0.5)] hover:scale-105 transition-transform duration-300"
						>
							Discover How VoiceShine Can Accelerate Your Growth
						</a>
					</div>
				</div>
			</motion.section>

			<section id="contact" className="py-32 px-8 text-center bg-[#0a0a0f]">
				<h2 className="text-5xl font-bold text-cyan-400 mb-10">Contact Us</h2>
				<p className="text-gray-400 mb-8">
					Ready to elevate your customer experience with intelligent voice
					automation?
				</p>
				<form className="max-w-xl mx-auto space-y-4">
					<input
						type="text"
						placeholder="Your Name"
						className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white"
					/>
					<input
						type="email"
						placeholder="Your Email"
						className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white"
					/>
					<textarea
						placeholder="Your Message"
						rows={4}
						className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white"
					></textarea>
					<button
						type="submit"
						className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold rounded-full hover:scale-105 transition"
					>
						Send Message
					</button>
				</form>
			</section>

			<footer className="text-center py-8 text-gray-500 border-t border-white/10 bg-[#0a0a0f]">
				© 2025 VoiceShine. All rights reserved.
			</footer>
		</main>
	);
}

export default App;
