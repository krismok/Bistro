import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { insertReservationSchema, type InsertReservation, timeSlots } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import Select from "react-select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ReservationForm() {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedSlots, setSelectedSlots] = useState([]);

  const form = useForm<InsertReservation>({
    resolver: zodResolver(insertReservationSchema),
    defaultValues: {
      pax: 2,
      name: "",
      email: "",
      phone: "",
    },
  });

  // const { data: availableSlots = [] } = useQuery({
  //   queryKey: ["/api/reservations/available-slots", selectedDate?.toISOString()],
  //   enabled: !!selectedDate,
  // });

  const generateTimeSlots = () => {
    const slots = [];
    let hour = 9;
    let minute = 0;
  
    while (hour < 19 || (hour === 19 && minute === 0)) {
      const time = `${hour}:${minute === 0 ? "00" : "30"} ${hour < 12 ? "AM" : "PM"}`;
      slots.push({ value: time, label: time });
  
      // Increment by 30 minutes
      if (minute === 0) {
        minute = 30;
      } else {
        minute = 0;
        hour++;
      }
    }
    return slots;
  };

  function TimeSlotSelector({ selectedSlots, setSelectedSlots }) {
    const timeSlots = generateTimeSlots();
  
    return (
      <Select
        options={timeSlots}
        isMulti
        value={selectedSlots}
        onChange={setSelectedSlots}
        placeholder="Select time slots..."
        className="w-full"
      />
    );
  }

  const mutation = useMutation({
    mutationFn: (data: InsertReservation) =>
      apiRequest("POST", "/api/reservations", data),
    onSuccess: () => {
      toast({
        title: "Reservation confirmed",
        description: "We look forward to seeing you!",
      });
      form.reset();
      setSelectedDate(undefined);
    },
  });

  const onSubmit = (data: InsertReservation) => {
    if (!selectedDate) return;
    mutation.mutate({
      ...data,
      date: selectedDate,
    });
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Make a Reservation</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <FormLabel>Select Date</FormLabel>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date()}
                className="rounded-md border"
              />
            </div>

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time</FormLabel>
                  <Select
                    //disabled={!selectedDate || availableSlots.length === 0}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                    </FormControl>
                    <TimeSlotSelector selectedSlots={selectedSlots} setSelectedSlots={setSelectedSlots} />
                    {/* <SelectContent>
                      {availableSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent> */}
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Guests</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(parseInt(value))}
                    value={field.value?.toString()}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "guest" : "guests"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={mutation.isPending}
            >
              Make Reservation
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
