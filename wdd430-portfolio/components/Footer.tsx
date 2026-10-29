async function getCurrentYear() {
  'use cache'
  return new Date().getFullYear()
}

export default async function Footer() {
  const year = await getCurrentYear()
  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto text-center">
        <p>Copyright &copy; {year} | Monday Ogedengbe | All rights reserved</p>
      </div>
    </footer>
  )
}