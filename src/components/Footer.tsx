const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="font-display text-2xl font-bold mb-2">MAKARIIV Kitchen</h3>
        <p className="text-background/60 font-body text-sm">
          Small chops, big vibes, zero wahala ✌️
        </p>
        <p className="mt-6 text-background/40 text-xs font-body">
          © {new Date().getFullYear()} Klassy Delight Enterprise. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
