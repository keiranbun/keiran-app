import { useEffect, useRef, useState } from "react";
import timerIcon from "../../assets/icons/timer.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { convertMinutesToSeconds } from "@/util/time";

const sendNotification = () => {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("Times up!", {
      body: "The timer has finished",
      icon: timerIcon,
      tag: "timer",
      requireInteraction: true,
    });
  }
};

const Timer = () => {
  const [minute, setMinute] = useState(30);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const [countdownStarted, setCountdownStarted] = useState(false);
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [countdownPause, setCountdownPause] = useState(false);

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 720);

  // Mirrors timeRemaining so the interval callback can decide when to finish without reaching into state
  const remainingRef = useRef(0);

  // Derived from timeRemaining, so the display can never drift out of sync.
  const displayMinute = Math.floor(timeRemaining / 60);
  const displaySecond = timeRemaining % 60;

  const startCountdown = () => {
    const totalSeconds = convertMinutesToSeconds(minute);

    remainingRef.current = totalSeconds;
    setTimeRemaining(totalSeconds);
    setCountdownFinished(false);
    setCountdownStarted(true);
  };

  const resetCountdown = () => {
    remainingRef.current = 0;
    setCountdownStarted(false);
    setCountdownFinished(false);
    setCountdownPause(false);
    setTimeRemaining(0);
    setMinute(30);
  };

  const pauseCountdown = () => {
    setCountdownPause((prev) => !prev);
  };

  const addMinutes = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (!countdownStarted) {
      const addTime = event.shiftKey ? 1 : 5;
      setMinute((prev) => prev + addTime);
    }
  };

  const removeMinutes = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (!countdownStarted) {
      const removeTime = event.shiftKey ? 1 : 5;
      if (minute - removeTime >= 1) setMinute((prev) => prev - removeTime);
    }
  };

  useEffect(() => {
    if (!countdownStarted || countdownPause || countdownFinished) return;

    const countdownInterval = setInterval(() => {
      const next = Math.max(remainingRef.current - 1, 0);

      remainingRef.current = next;
      setTimeRemaining(next);

      if (next === 0) {
        clearInterval(countdownInterval);
        setCountdownStarted(false);
        setCountdownFinished(true);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [countdownStarted, countdownPause, countdownFinished]);

  useEffect(() => {
    if (countdownFinished) sendNotification();
  }, [countdownFinished]);

  useEffect(() => {
    const checkMobileDevice = () => {
      setIsMobile(window.innerWidth < 720);
    };

    window.addEventListener("resize", checkMobileDevice);
    return () => {
      window.removeEventListener("resize", checkMobileDevice);
    };
  }, []);

  useEffect(() => {
    if ("Notification" in window && Notification.permission == "default") {
      Notification.requestPermission();
    }
  }, []);

  return (
    <div
      className={"flex justify-center items-center flex-col dark:text-white"}
    >
      <div>
        <button
          className={
            "flex items-center justify-center rounded-sm p-2 leading-none hover:cursor-pointer text-3xl hover:text-primary"
          }
          onClick={addMinutes}
        >
          +
        </button>
      </div>
      <div className={"text-4xl"}>
        {countdownFinished
          ? "Finished"
          : countdownStarted
            ? `${displayMinute} : ${displaySecond.toString().padStart(2, "0")}`
            : `${minute} min`}
      </div>
      <div>
        <button
          className={
            "flex items-center justify-center rounded-sm p-2 leading-none hover:cursor-pointer text-3xl hover:text-primary"
          }
          onClick={removeMinutes}
        >
          -
        </button>
      </div>
      <div className={"flex gap-10 pt-10"}>
        {countdownStarted ? (
          <button
            className={
              "flex items-center justify-center border rounded-sm p-3 leading-none hover:cursor-pointer"
            }
            onClick={pauseCountdown}
          >
            {countdownPause ? "RESUME" : "PAUSE"}
          </button>
        ) : (
          <button
            className={
              "flex items-center justify-center border rounded-sm p-3 leading-none hover:cursor-pointer hover:border-primary"
            }
            onClick={startCountdown}
          >
            START
          </button>
        )}

        <button
          className={
            "flex items-center justify-center border rounded-sm p-3 leading-none hover:cursor-pointer hover:border-primary"
          }
          onClick={resetCountdown}
        >
          RESET
        </button>
      </div>
      {!isMobile && (
        <div className="pt-5">
          <Accordion type="single" className="w-80" collapsible>
            <AccordionItem value="help-accordion">
              <AccordionTrigger className="hover:underline">
                Additional Information
              </AccordionTrigger>
              <AccordionContent className="flex flex-col text-balance gap-1 h-full">
                <div>
                  <strong>Keyboard Shortcuts</strong>
                </div>
                <div>
                  • <span className="text-primary">[Shift + Click]</span>:
                  Add/Minus one minute
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default Timer;
