export function Mission() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary text-balance">Our Mission</h2>
            <p className="text-lg leading-relaxed text-foreground/90">
              Hoya Taxa is a student volunteer organization that promotes financial literacy and assists lower-income
              D.C. families with their taxes. Each year, members are trained and certified by the IRS as volunteer tax
              preparers and serve at local clinics through partnerships with Community Tax Aid D.C. and the Center for
              Social Justice.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img
              src="/students-helping-community-members-with-paperwork.jpg"
              alt="Students volunteering at community event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
