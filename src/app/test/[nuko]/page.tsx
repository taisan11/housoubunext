export default function Page({ params }: { params: { nuko: string } }) {
    return <div>My Post: {params.nuko}</div>
  }