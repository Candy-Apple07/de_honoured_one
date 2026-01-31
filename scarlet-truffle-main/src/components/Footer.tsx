const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h3 className="mb-2 font-serif text-2xl font-medium text-primary">Scarlet Truffle</h3>
          <p className="text-sm text-muted-foreground">Fine Dining Experience</p>
        </div>

        <div className="mb-8 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-12">
          <div className="text-center">
            <p className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">Location</p>
            <p className="text-foreground">123 Gourmet Street, Culinary District</p>
          </div>
          <div className="text-center">
            <p className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">Hours</p>
            <p className="text-foreground">Tue - Sun: 5:00 PM - 11:00 PM</p>
          </div>
          <div className="text-center">
            <p className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">Reservations</p>
            <p className="text-foreground">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="text-center">
          <p className="mb-2 text-sm text-foreground">
            Owner: <span className="font-medium">Shreyas Rongde</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Scarlet Truffle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
