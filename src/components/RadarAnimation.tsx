export const RadarAnimation = () => {
  return (
    <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] aspect-square mx-auto">
      {/* Outer ambient glow */}
      <div className="absolute -inset-6 rounded-full bg-primary/3 blur-3xl" />

      {/* Main radar container */}
      <div
        className="relative w-full h-full rounded-full overflow-hidden border border-primary/10"
        style={{ background: '#0a0e12' }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            backgroundPosition: 'center center',
          }}
        />

        {/* Concentric circles */}
        <div className="absolute inset-[15%] rounded-full border border-primary/8" />
        <div className="absolute inset-[30%] rounded-full border border-primary/10" />
        <div className="absolute inset-[45%] rounded-full border border-primary/8" />
        <div className="absolute inset-[60%] rounded-full border border-primary/6" />

        {/* Cross lines */}
        <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-y-px" />
        <div className="absolute left-1/2 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent -translate-x-px" />

        {/* Sweep beam - pure CSS rotation */}
        <div className="absolute inset-0 radar-sweep pointer-events-none" />

        {/* Main sweep line - pure CSS rotation */}
        <div className="absolute inset-0 radar-line pointer-events-none" />

        {/* Dollar signs with CSS animation delays */}
        <div className="radar-dollar" style={{ left: '64%', top: '36%', animationDelay: '0.625s' }}>$</div>
        <div className="radar-dollar" style={{ left: '26%', top: '63%', animationDelay: '1.667s' }}>$</div>
        <div className="radar-dollar" style={{ left: '32%', top: '50%', animationDelay: '2.5s' }}>$</div>
        <div className="radar-dollar" style={{ left: '22%', top: '72%', animationDelay: '3.333s' }}>$</div>
        <div className="radar-dollar" style={{ left: '58%', top: '70%', animationDelay: '4.306s' }}>$</div>

        {/* Center pulsating point - CSS only */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-primary radar-center-pulse"
            style={{
              boxShadow: '0 0 8px hsl(var(--primary)), 0 0 16px hsl(var(--primary) / 0.4)',
            }}
          />
        </div>
      </div>
    </div>
  );
};
