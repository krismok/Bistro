import { ReservationForm } from "@/components/reservation/ReservationForm";

export default function Reservation() {
  return (
    <main className="container mx-auto max-w-6xl px-4 md:px-8 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Make a Reservation</h1>
      <ReservationForm />
    </main>
  );
}
