import './App.css';
import { NavBar } from '@/components/ui/navbar-with-dropdowns';
import { HeroSection } from '@/components/ui/hero-section-with-smooth-bg-shader';
import DisplayCards from '@/components/ui/display-cards';
import { Target, Phone, Building2, Users, Zap, Clock, TrendingUp, HeadphonesIcon, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
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
	{ name: 'Book a Call', url: '#contact', icon: Calendar, isCTA: true },
];

function App() {
	return (
		<main className="text-gray-100 bg-[#0a0a0f]">
			<NavBar items={navItems} />

			<HeroSection
				title="AI Voice Agents that Drive Growth"
				highlightText="for Modern Businesses"
				description="Transform every call into a customer. VoiceShine automates engagement, lead generation, and retention — your always-on, human-sounding voice growth engine."
				buttonText="Get Started Free"
				onButtonClick={() => {
					document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
				}}
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
				titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
			>
				<DisplayCards
					cards={[
						{
							icon: <Zap className="size-5 text-amber-900" />,
							title: "Instant Response",
							description: "Answer every call in under 2 seconds with human-like AI that never sleeps",
							titleClassName: "text-amber-900 font-extrabold",
							className:
								"[grid-area:stack] hover:!-translate-y-40 hover:!scale-150",
						},
						{
							icon: <TrendingUp className="size-5 text-amber-900" />,
							title: "3x More Leads",
							description: "Convert prospects faster with intelligent follow-ups and qualification",
							titleClassName: "text-amber-900 font-extrabold",
							className:
								"[grid-area:stack] translate-x-16 translate-y-10 hover:!-translate-y-40 hover:!scale-150",
						},
						{
							icon: <Clock className="size-5 text-amber-900" />,
							title: "24/7 Availability",
							description: "Never miss a call or opportunity, even outside business hours",
							titleClassName: "text-amber-900 font-extrabold",
							className:
								"[grid-area:stack] translate-x-32 translate-y-20 hover:!-translate-y-20 hover:!scale-125",
						},
						{
							icon: <HeadphonesIcon className="size-5 text-amber-900" />,
							title: "Human-Like Voice",
							description: "Natural conversations that build trust and drive engagement",
							titleClassName: "text-amber-900 font-extrabold",
							className:
								"[grid-area:stack] translate-x-48 translate-y-32 hover:!-translate-y-20 hover:!scale-125",
						},
					]}
				/>
			</HeroSection>

			<section id="robot-animation" className="py-24 px-6 bg-gradient-to-b from-[#16213e] to-[#0f3460] flex items-center justify-center min-h-[700px]">
			<div className="container mx-auto max-w-7xl flex items-center justify-center">
				<div className="w-full max-w-5xl">
					<img
						src="/robot 3d object.gif"
						alt="AI Voice Agent Robot Animation"
						className="w-full h-auto"
						style={{ display: 'block', maxWidth: '100%' }}
					/>
				</div>
			</div>
		</section>

			<section id="solutions" className="relative py-16 px-8">
				<div className="max-w-6xl mx-auto text-center">
					<motion.h2
						className="text-5xl font-display font-bold text-black mb-8"
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.6 }}
					>
						Solutions
					</motion.h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
								className="p-8 rounded-xl bg-gradient-to-br from-[#f5f0e8] to-[#ebe4d8] border border-[#d4c4a8] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ delay: i * 0.1 }}
							>
								<h3 className="text-lg font-sans font-bold text-gray-900 mb-3 text-left">
									{card.title}
								</h3>
								<p className="text-gray-700 text-sm leading-relaxed font-sans text-left">
									{card.desc}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section
				id="industries"
				className="relative py-16 px-8 bg-transparent"
			>
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-5xl font-display font-bold text-black mb-8">
						Industries We Serve
					</h2>
					<div className="grid md:grid-cols-3 gap-6">
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
								className="p-8 bg-gradient-to-br from-[#f5f0e8] to-[#ebe4d8] border border-[#d4c4a8] rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ delay: i * 0.1 }}
							>
								<h3 className="text-lg font-sans font-bold text-gray-900 mb-3 text-left">
									{industry.title}
								</h3>
								<p className="text-sm leading-relaxed font-sans text-gray-700 text-left">
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
				className="relative py-16 px-6 md:px-12 lg:px-20 text-center bg-transparent backdrop-blur-xl"
			>
				<div className="max-w-6xl mx-auto">
					<h2 className="text-5xl font-display font-bold text-black mb-8">
						About VoiceShine
					</h2>
					<p className="text-lg md:text-xl font-sans leading-relaxed max-w-4xl mx-auto mb-16 text-black">
						VoiceShine empowers modern businesses to scale authentic, human-like customer conversations
						with intelligent AI voice agents. Each interaction is guided by empathy, clarity, and context —
						engineered to convert interest into engagement and engagement into growth.
					</p>
					<div className="grid md:grid-cols-3 gap-8 text-left">
						<div className="bg-gradient-to-br from-[#f5f0e8] to-[#ebe4d8] border border-[#d4c4a8] rounded-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg">
							<h3 className="text-lg font-sans font-bold text-gray-900 mb-3 text-left">Human-Centric AI</h3>
							<p className="font-sans text-gray-700 text-sm leading-relaxed text-left">
								VoiceShine blends emotional intelligence with natural speech synthesis —
								making every voice interaction sound empathetic and brand-aligned.
							</p>
						</div>
						<div className="bg-gradient-to-br from-[#f5f0e8] to-[#ebe4d8] border border-[#d4c4a8] rounded-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg">
							<h3 className="text-lg font-sans font-bold text-gray-900 mb-3 text-left">Built for Growth</h3>
							<p className="font-sans text-gray-700 text-sm leading-relaxed text-left">
								Designed not just to automate, but to accelerate — shortening sales cycles,
								boosting loyalty, and creating predictable ROI from every conversation.
							</p>
						</div>
						<div className="bg-gradient-to-br from-[#f5f0e8] to-[#ebe4d8] border border-[#d4c4a8] rounded-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg">
							<h3 className="text-lg font-sans font-bold text-gray-900 mb-3 text-left">Effortless Integration</h3>
							<p className="font-sans text-gray-700 text-sm leading-relaxed text-left">
								Plug VoiceShine into CRMs, booking tools, or analytics systems with zero friction.
								Implementation takes minutes — results show instantly.
							</p>
						</div>
					</div>
					<div className="mt-20">
						<a
							href="#contact"
							className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-600 hover:scale-105 transition-all duration-300"
						>
							Discover How VoiceShine Accelerates Growth
						</a>
					</div>
				</div>
			</motion.section>

			<section id="contact" className="py-16 px-8 text-center bg-[#0a0a0f]">
				<h2 className="text-5xl font-display font-bold text-cyan-400 mb-10">Contact Us</h2>
				<p className="font-sans mb-8" style={{color: '#C9D6E0'}}>
					Ready to elevate your customer experience with intelligent voice
					automation?
				</p>
				<form
					className="max-w-xl mx-auto space-y-4"
					onSubmit={(e) => {
						e.preventDefault();
						alert('Thank you for your interest! We will contact you soon.');
					}}
				>
					<input
						type="text"
						placeholder="Your Name"
						required
						className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-400"
					/>
					<input
						type="email"
						placeholder="Your Email"
						required
						className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-400"
					/>
					<textarea
						placeholder="Your Message"
						rows={4}
						required
						className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-400"
					></textarea>
					<button
						type="submit"
						className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-600 hover:scale-105 transition-all duration-300"
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
