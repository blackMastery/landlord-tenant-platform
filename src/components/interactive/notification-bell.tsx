"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Bell, X } from "lucide-react";

type Notification = {
  label: string;
  detail: string;
  time: string;
};

export function NotificationBell({
  notifications,
}: {
  notifications: Notification[];
}) {
  const [open, setOpen] = useState(false);
  const [readIds, setReadIds] = useState<Set<number>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const unread = notifications.filter((_, i) => !readIds.has(i)).length;

  function markAllRead() {
    setReadIds(new Set(notifications.map((_, i) => i)));
  }

  function markRead(i: number) {
    setReadIds((prev) => new Set([...prev, i]));
  }

  return (
    <>
      {/* Bell button */}
      <button
        onClick={() => setOpen(true)}
        className="relative flex items-center justify-center h-9 w-9 rounded-full border border-border/70 bg-white/80 hover:bg-white transition-colors"
        aria-label="Open notifications"
      >
        <Bell className="h-4 w-4" />
        {unread > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
            {unread}
          </span>
        )}
      </button>

      {mounted && createPortal(
        <>
          {/* Backdrop */}
          {open && (
            <div
              className="fixed inset-0 z-40 bg-black/20"
              onClick={() => setOpen(false)}
            />
          )}

          {/* Drawer */}
          <div
            className={`fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b px-4 py-4">
              <div>
                <h2 className="font-semibold">Notifications</h2>
                {unread > 0 && (
                  <p className="text-xs text-muted-foreground">{unread} unread</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                {unread > 0 && (
                  <button
                    onClick={markAllRead}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Mark all read
                  </button>
                )}
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 hover:bg-slate-50 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="divide-y overflow-y-auto h-[calc(100%-65px)]">
              {notifications.map((n, i) => {
                const isRead = readIds.has(i);
                return (
                  <button
                    key={i}
                    onClick={() => markRead(i)}
                    className={`w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors ${
                      isRead ? "opacity-60" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium flex items-center gap-1.5">
                          {!isRead && (
                            <span className="inline-block h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                          )}
                          {n.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">{n.detail}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">
                        {n.time}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}
