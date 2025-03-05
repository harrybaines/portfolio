export async function Footer() {
  return (
    <footer className="mt-auto py-20">
      <div className="container mx-auto max-w-5xl py-8 px-6 sm:px-8 lg:px-10 text-center">
        <p className="text-sm text-muted-foreground">
          👨🏻‍💻 Handcrafted by Harry, {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}