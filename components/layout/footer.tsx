export async function Footer() {
  return (
    <footer className="pt-20">
      <div className="container relative text-center  mx-auto py-16 px-6 sm:px-8 lg:px-10">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Harry Baines. All rights reserved.
        </p>
      </div>
    </footer >
  )
}