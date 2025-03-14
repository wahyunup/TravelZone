import { useState, useEffect } from "react";

export default function PaymentCountdown() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 menit dalam detik

  useEffect(() => {
    if (timeLeft <= 0) return; // Hentikan jika waktu habis

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Bersihkan interval saat unmount
  }, [timeLeft]);

  // Konversi ke menit dan detik
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center gap-2">
      <p className="text-[12px]">Waktu Pembayaran Tersisa :</p>
      {timeLeft > 0 ? (
        <h1 >
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </h1>
      ) : (
        <h1 className="">
          Waktu pembayaran habis!
        </h1>
      )}
    </div>
  );
}