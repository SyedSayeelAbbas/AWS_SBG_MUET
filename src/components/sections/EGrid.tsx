import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarX, RotateCcw } from "lucide-react";

import Container from "../layout/Container";
import EventCard from "../cards/EventCard";
import {
  allEvents,
  eventCategories,
  tenures,
  type EventCategory,
  type TenureId,
} from "../../constants/events.constants";

const currentTenure =
  tenures.find((t) => t.isCurrent)?.id ?? tenures[0].id;

/* tenures is already ordered current → previous → founding (left to right) */
const timelineTenures = tenures;
const nodeCount = timelineTenures.length;
/* Center of the first/last column, used to align the track under the nodes */
const trackInset = `${50 / nodeCount}%`;

export default function EventsGrid() {
  const [tenure, setTenure] = useState<TenureId>(currentTenure);
  const [category, setCategory] = useState<EventCategory>("All");

  const tenureCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    tenures.forEach((t) => {
      counts[t.id] = allEvents.filter((e) => e.tenure === t.id).length;
    });
    return counts;
  }, []);

  const activeTenure = useMemo(
    () => tenures.find((t) => t.id === tenure) ?? tenures[0],
    [tenure]
  );

  const activeIndex = timelineTenures.findIndex((t) => t.id === tenure);
  /*
   * Timeline reads founding (right, index n-1) → current (left, index 0).
   * Completeness is anchored at the current tenure: activeIndex 0 → full (1),
   * activeIndex n-1 (founding) → empty (0). The fill itself is drawn with
   * origin-right so it visually grows leftward from the founding end.
   */
  const progressScale =
    nodeCount > 1 ? 1 - activeIndex / (nodeCount - 1) : 1;

  const filteredEvents = useMemo(() => {
    return allEvents.filter((event) => {
      const matchesTenure = event.tenure === tenure;
      const matchesCategory = category === "All" || event.category === category;
      return matchesTenure && matchesCategory;
    });
  }, [tenure, category]);

  const resetFilters = () => {
    setCategory("All");
    setTenure(currentTenure);
  };

  return (
    <section className="section">
      <Container>
        {/* ================================================= */}
        {/* Tenure timeline */}
        {/* ================================================= */}
        <div className="mb-10 sm:mb-16">
          <div className="mx-auto max-w-5xl">
            <div className="relative pb-4 pt-3 sm:pb-6 sm:pt-4">
              {/* Base track — endpoints aligned to the center of the first/last node */}
              <div
                className="absolute top-7 h-1 rounded-full bg-brand-100 sm:top-9 md:top-11"
                style={{ left: trackInset, right: trackInset }}
              />

              {/* Filled progress track — anchored right (founding), fills left toward current */}
              <motion.div
                className="absolute top-7 h-1 origin-right rounded-full bg-gradient-to-r from-brand-500 to-brand-600 sm:top-9 md:top-11"
                style={{ left: trackInset, right: trackInset }}
                initial={false}
                animate={{ scaleX: progressScale }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
              />

              {/* Nodes */}
              <div className="relative grid" style={{ gridTemplateColumns: `repeat(${nodeCount}, minmax(0, 1fr))` }}>
                {timelineTenures.map((item) => {
                  const isActive = tenure === item.id;
                  const count = tenureCounts[item.id] ?? 0;
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setTenure(item.id)}
                      aria-pressed={isActive}
                      className="group flex flex-col items-center gap-2 px-1 sm:gap-3 md:gap-4"
                    >
                      {/* Node dot */}
                      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center sm:h-11 sm:w-11 md:h-14 md:w-14">
                        {isActive && (
                          <motion.span
                            layoutId="timeline-ring"
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="absolute inset-0 rounded-full bg-brand-700 shadow-xl shadow-brand-600/30"
                          />
                        )}

                        {!isActive && (
                          <span className="absolute inset-0 rounded-full border-2 border-brand-200 bg-white transition-colors duration-200 group-hover:border-brand-400" />
                        )}

                        {item.isCurrent && !isActive && (
                          <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
                          </span>
                        )}

                        <Icon
                          size={16}
                          className={`relative h-4 w-4 transition-colors duration-200 sm:h-[18px] sm:w-[18px] md:h-[22px] md:w-[22px] ${
                            isActive ? "text-white" : "text-brand-400 group-hover:text-brand-700"
                          }`}
                        />
                      </span>

                      {/* Label */}
                      <div className="text-center">
                        <p
                          className={`text-[11px] font-bold leading-tight transition-colors duration-200 sm:text-sm md:text-base ${
                            isActive ? "text-brand-700" : "text-heading/70 group-hover:text-brand-700"
                          }`}
                        >
                          {item.label}
                        </p>
                        <p className="mt-0.5 hidden text-xs text-heading/40 sm:mt-1 sm:block md:text-sm">
                          {count} {count === 1 ? "event" : "events"}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Active tenure summary card */}
        <div className="mb-10 flex justify-center sm:mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTenure.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="
                flex
                w-full
                max-w-xl
                items-center
                gap-3
                rounded-2xl
                border
                border-brand-100
                bg-brand-50/50
                px-5
                py-4
                text-center
                sm:w-auto
                sm:max-w-none
                sm:gap-5
                sm:px-8
                sm:py-5
                sm:text-left
              "
            >
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-700 shadow-sm sm:flex">
                <activeTenure.icon size={22} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-heading sm:text-base">
                  {activeTenure.label} — {activeTenure.sub}
                  {activeTenure.isCurrent && (
                    <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      Live
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-xs text-heading/50 sm:text-sm">
                  {tenureCounts[activeTenure.id] ?? 0}{" "}
                  {(tenureCounts[activeTenure.id] ?? 0) === 1 ? "event" : "events"}{" "}
                  hosted during this term
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================================================= */}
        {/* Category filter */}
        {/* ================================================= */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:mb-8 sm:gap-3">
          {eventCategories.map((item) => {
            const isActive = category === item;

            return (
              <button
                key={item}
                onClick={() => setCategory(item)}
                aria-pressed={isActive}
                className={`
                  relative
                  rounded-full
                  border
                  px-3.5
                  py-2
                  text-xs
                  font-semibold
                  transition-colors
                  duration-300
                  sm:px-5
                  sm:py-2.5
                  sm:text-sm
                  ${
                    isActive
                      ? "border-brand-600 text-white"
                      : "border-brand-100 bg-white text-heading hover:border-brand-300 hover:bg-brand-50"
                  }
                `}
              >
                {isActive && (
                  <motion.span
                    layoutId="category-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    className="absolute inset-0 rounded-full bg-brand-700 shadow-lg"
                  />
                )}
                <span className="relative">{item}</span>
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <p className="mb-6 text-center text-xs text-muted sm:mb-8 sm:text-sm">
          Showing{" "}
          <span className="font-semibold text-heading">
            {filteredEvents.length}
          </span>{" "}
          {filteredEvents.length === 1 ? "event" : "events"}
          {category !== "All" && (
            <>
              {" "}
              in <span className="font-semibold text-brand-700">{category}</span>
            </>
          )}
        </p>

        {/* ================================================= */}
        {/* Grid */}
        {/* ================================================= */}
        {filteredEvents.length > 0 ? (
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <EventCard
                    title={event.title}
                    image={event.image}
                    images={event.images}
                    date={event.date}
                    location={event.location}
                    description={event.description}
                    status={event.status}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center rounded-[24px] border border-dashed border-brand-200 bg-brand-50/40 px-6 py-16 text-center sm:rounded-[30px] sm:py-24"
          >
            <CalendarX size={36} className="text-brand-400 sm:hidden" />
            <CalendarX size={40} className="hidden text-brand-400 sm:block" />

            <p className="mt-4 text-base font-semibold text-heading sm:text-lg">
              No events match these filters
            </p>

            <p className="mt-2 text-sm text-muted sm:text-base">
              Try a different tenure or category.
            </p>

            <button
              onClick={resetFilters}
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-brand-200
                bg-white
                px-5
                py-2.5
                text-sm
                font-semibold
                text-brand-700
                transition-colors
                duration-200
                hover:border-brand-300
                hover:bg-brand-50
              "
            >
              <RotateCcw size={15} />
              Reset Filters
            </button>
          </motion.div>
        )}
      </Container>
    </section>
  );
}