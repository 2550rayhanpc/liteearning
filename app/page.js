// ধীরগতির ও স্মুথ লাইভ নাম্বার কাউন্টার কম্পোনেন্ট
function Counter({ targetNumber, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 3500; // সময় বাড়িয়ে ৩.৫ সেকেন্ড করা হয়েছে (Slow করার জন্য)
      const increment = targetNumber / (duration / 20); // প্রতি ২০ms এ কতটুকু বাড়বে

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isInView, targetNumber]);

  return (
    <span ref={ref}>
      {prefix}{toBanglaDigit(count)}{suffix}
    </span>
  );
}
