export default function Home() {
  let names = [
    { firstName: "James", lastName: "Campbell" },
    { firstName: "Emma", lastName: "Capparelli" },
    { firstName: "Owen", lastName: "Chait" },
    { firstName: "Christian", lastName: "Coscia" },
    { firstName: "Leo", lastName: "Coviello" },
    { firstName: "Sarah", lastName: "Gleeson" },
    { firstName: "Avery", lastName: "Ha" },
    { firstName: "Ethan", lastName: "Hinic" },
    { firstName: "Victoria", lastName: "Izzo" },
    { firstName: "Megan", lastName: "Kim" },
    { firstName: "Rebekah", lastName: "Knuth" },
    { firstName: "Maclean", lastName: "Lama" },
    { firstName: "Joseph", lastName: "Laposky" },
    { firstName: "Ethan", lastName: "Lee" },
    { firstName: "Lucas", lastName: "Lee" },
    { firstName: "Caden", lastName: "Masonis" },
    { firstName: "Kenna", lastName: "Mauriello" },
    { firstName: "Rachel", lastName: "Mei" },
    { firstName: "Arav", lastName: "Misra" },
    { firstName: "Julie", lastName: "Piazza" },
    { firstName: "Rohit", lastName: "Rajesh" },
    { firstName: "William", lastName: "Sottosanti" },
    { firstName: "Anthony", lastName: "Tranquilli" },
    { firstName: "Lev", lastName: "Villanueva" },
    { firstName: "Caden", lastName: "Wong" },
  ];
  names.sort((a, b) => a.firstName.localeCompare(b.firstName));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {names.map((name, index) => (
        <div key={index}>
          {name.firstName} {name.lastName}
        </div>
      ))} 
    </main>
  )
}
