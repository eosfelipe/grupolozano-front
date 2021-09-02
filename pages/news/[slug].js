export default function ReportPage() {
  return <div>report 1</div>
}

export async function getStaticPaths() {
  const reports = [
    { id: 1, slug: 'gdt' },
    { id: 2, slug: 'gdt-2' },
    { id: 3, slug: 'gdt-3' }
  ]

  const paths = reports.map(report => ({
    params: { slug: report.slug }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  console.log(params)
  return {
    props: {}
  }
}
