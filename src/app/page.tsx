import { Button } from "@/components/ui/button"


function chaipage() {
  return (
    <main className="h-full flex justify-center items-center flex-col">
        <div>Chai page</div>
        <button className="px-4 py-2 bg-blue-800 rounded my-5 hover:bg-blue-500">Submit</button>
        <Button>Shadcn button</Button>
        <Button>Submit</Button>
    </main>
  )
}

export default chaipage