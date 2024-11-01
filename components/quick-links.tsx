const links = [
  {
    title: "BrewKit",
    href: "https://github.com/harrybaines/brewkit",
    description: "Startup boilerplate template"
  },
  {
    title: "Neovim config",
    href: "https://github.com/harrybaines/kickstart.nvim",
    description: "My Neovim configuration"
  },
];

export default function QuickLinks() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-mono font-bold tracking-tight">
        <span className="text-emerald-500">~/</span>
        Links
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 border border-zinc-800 hover:border-emerald-500/50 transition-all hover:bg-[#232323]"
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-medium group-hover:text-emerald-500 transition-colors">{link.title}</h3>
              <span className="text-xs text-zinc-500">↗</span>
            </div>
            <p className="text-zinc-400 text-sm">{link.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}